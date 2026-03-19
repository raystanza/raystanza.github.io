---
layout: post
title: "Building `oxide-randomx`: An Education in Performance Skepticism"
date: 2026-03-18 09:15:00 -04:00

description: >
  A technical reflection on building `oxide-randomx`, a clean-room RandomX implementation in Rust: why the real work was not just interpreter and JIT correctness, but building enough measurement discipline to reject seductive optimizations that failed cross-host scrutiny.

canonical_url: "https://raystanza.uk/posts/oxide-randomx-performance"

categories:
  - rust
  - systems

tags:
  - randomx
  - rust
  - jit
  - benchmarking
  - profiling
  - performance engineering
  - systems programming
  - clean-room implementation
  - microarchitecture
  - monero
  - optimization
  - amd
  - intel

image: "/assets/images/articles/oxide-randomx-perf-og.png"
image_alt: "Illustration of a Rust crab analyzing RandomX performance with charts and CPU benchmarks"
image_caption: "Developing oxide-randomx: benchmarking, profiling, and optimizing a clean-room RandomX implementation in Rust"

og_type: "article"
og_title: "Building `oxide-randomx`: An Education in Performance Skepticism"
og_description: >
  Correctness was only the beginning. The real lesson of `oxide-randomx` was learning how to measure, reject, and quarantine optimizations that looked good locally but failed under broader evidence.

robots: "index, follow"

twitter:
  card: "summary_large_image"
  creator: "@raystanza"
---
*Implementing RandomX in Rust was the easy part to describe. Learning when **not** to trust a performance win was the real education.*

---

When I started `oxide-randomx`, I thought I understood the shape of the project.

It would be a clean-room RandomX implementation in Rust. First, get the algorithm right. Then get it fast. Then integrate it into OxideMiner and move on.

That mental model was incomplete.

The repository tells a different story. The first day, January 7th, 2026, already compressed what looks like a normal project’s first month into a few commits: repository scaffolding, an MVP implementation, an x86_64 JIT, and conformance/JIT execution tests all landed immediately. By `2026-01-10`, benchmarking and instrumentation had already shown up. By `2026-01-12`, provenance tracking and a structured performance harness were part of the project. By mid-March, the repo was not merely “an implementation” anymore. It had become a laboratory notebook with source code attached.

That is the real subject of this article.

This is not a status update. The GitHub discussions are the right place for that. This is an attempt to describe what `oxide-randomx` has actually taught me so far, as a technical education project disguised as a mining component.

**Who is this for?:** people who enjoy systems work, performance archaeology, and the unpleasant gap between “faster on my machine” and “safe to ship.”

**acknowledging my bias:** I like optimization work, but this repo has made me much less sentimental about it.

---

## TL;DR

* `oxide-randomx` started as a clean-room Rust implementation of RandomX, but quickly turned into a repo about evidence quality.
* Correctness was necessary, but it was not the hardest lesson. The harder lesson was learning that many plausible optimizations should remain feature-gated, parked, or rejected.
* The most valuable output of the project may not be a single faster code path. It may be the measurement/control plane: perf harnesses, provenance, regression tooling, capture scripts, policy memos, and integration guidance.
* The strongest educational theme in the repo is restraint. In performance work, the grown-up move is often not “ship the clever thing,” but “prove why the clever thing does not yet deserve promotion.”

---

## The Project I Thought I Was Building

At the start, the job looked fairly crisp:

1. implement RandomX correctly without using upstream source code,
2. provide interpreter and JIT paths,
3. validate behavior with oracle/conformance tests,
4. then squeeze out throughput.

That description is still true, but it hides the awkward part: RandomX is designed to be hostile to simplistic performance narratives. It combines integer work, floating-point work, scratchpad traffic, dataset access, and generated micro-program behavior in ways that make “obvious” speedups suspicious by default.

You can see the repo discovering this in real time.

Early on, there is a very understandable engineering instinct: get the implementation complete, then attack the hot path. That produced immediate work on JIT compilation, fast-register mapping, scratchpad I/O, minimal-copy decode, dataset-base masking, huge pages, prefetch controls, and a queue of targeted micro-optimizations.

But once the project had enough instrumentation, a more uncomfortable pattern emerged:

many optimizations were real, but only in a narrow sense.

They were real on one host, in one mode, or in one stage. They were not always real enough, broad enough, or stable enough to be promoted into a parent-facing default.

That distinction ended up mattering more than the optimization ideas themselves.

---

## The Repo Became a Measurement System

One of the clearest lessons is that benchmarking was not bolted on after the “real” engineering. It became the engineering.

Within days, the repository had:

* a benchmark tool,
* structured perf harnesses,
* git provenance in outputs,
* smoke tests,
* performance comparison tooling,
* feature-gated instrumentation,
* cross-host capture scripts,
* and, eventually, dedicated tools for visualization and full-feature benchmark capture.

By the time `ROADMAPv8` was written on March 8th, the repo’s measurement corpus was already described as:

* `775` CSV artifacts
* `67` JSON artifacts
* `39` Markdown decision memos
* `72` TXT provenance/status artifacts
* `128` log artifacts

That is not a vanity metric. It is a statement about how the project’s center of gravity shifted.

The codebase now contains not just algorithms, but a chain of custody for claims.

That matters because performance work is unusually vulnerable to self-deception. If a benchmark result cannot be tied to a specific SHA, host class, runtime configuration, feature set, and capture method, it is often better treated as an anecdote than as evidence.

`oxide-randomx` learned that lesson early enough to encode it into the repo itself.

The newest expression of that mindset is the `full_features_benchmark` tooling. It does not merely run one benchmark. It captures host provenance, baseline matrices, ABBA A/B runs, superscalar isolated suites, pair summaries, machine-readable indexes, and overview markdown. That is exactly the kind of tooling you build when the project stops asking “can this be faster?” and starts asking “what would count as sufficient evidence to let other code depend on this?”

---

## Cross-Host Performance Is Where Optimism Goes to Die

If I had to compress the educational value of this repo into one sentence, it would be this:

**local wins are cheap; portable wins are expensive.**

The project’s recent authority docs make that painfully clear.

The current cross-host baseline authority, refreshed on March 11th, spans AMD `23/8`, AMD `23/113`, Intel `6/45`, and Intel `6/58`. The supported ordering remained stable across that measured set:

1. baseline `jit-fastregs`
2. conservative JIT
3. interpreter

That sounds tidy until you read the fine print.

On some hosts the uplift is decisive. On some, it is modest. On Intel `6/58`, Light-mode `jit-fastregs` was effectively a near-tie over conservative JIT. On other experiments, a feature that looked promising on AMD could be mixed or hostile on Intel. A prototype could show clear isolated gains and still fail the bar for promotion because it damaged a supported Fast path somewhere else.

This is why I’ve become skeptical of performance narratives that skip host coverage. Microarchitectural variation is not a footnote here; it is the main plot.

The repo contains multiple examples of this:

* `simd-blockio` remained experimental and CPU-conditional rather than graduating into policy.
* the static prefetch family mapping survived only as an operational default, not as a measured local optimum.
* `threaded-interp` was parked rather than romanticized.
* even attractive Light-mode ideas had to answer for Fast-mode consequences.

The educational payoff is that the repository now encodes a much sharper difference between:

* “I can make this benchmark look better,” and
* “I can defend this as a supported default for an upstream consumer.”

Those are not remotely the same thing.

---

## The Most Honest Work in the Repo Is Negative Work

A surprising amount of serious engineering consists of writing down why a tempting idea should *not* become policy.

This repo is full of that kind of honesty.

Consider the superscalar acceleration prototype. On paper, it is exactly the kind of result an optimizer wants to see. The isolated cache-item synthesis measurements were strong. Clean hosts showed real Light-mode upside. Correctness parity held. This is the sort of thing that can make a project feel like it is finally about to round a corner.

And then the decision memo did the mature thing.

It parked the prototype.

Why? Because the clean Intel `6/58` results included a Fast conservative JIT regression of `-25.201%`, which is far outside any reasonable “close enough” tolerance. That one number is educational. It says the project is no longer being run by excitement over local speedups. It is being run by promotion criteria.

The same pattern shows up in the finish-path probe work. The repo had already identified `finish_light_cache_item_ns` as the dominant remaining Light-mode finish substage on the main authority hosts, accounting for roughly `96-97%` of finish time in the measured rows. That is exactly the kind of bottleneck you would want to attack. A narrow candidate was tried. The resulting memo rejected it, because the direct microbench regressed and the supported Fast `jit-fastregs` guardrail moved the wrong way by `-3.878%`.

Again: the important thing is not just that a candidate lost.

The important thing is that the repository had enough structure to notice, document, and revert it without hand-waving.

This is one of the least glamorous and most transferable lessons from the project. Real performance engineering is not a list of wins. It is a filtering system for bad wins.

---

## Correctness Was Table Stakes, Not the End of the Story

Because `oxide-randomx` is a clean-room implementation, correctness had to be treated as a first-class concern from the start.

That shows up in several layers:

* oracle vectors,
* conformance cases,
* interpreter/JIT differential checks,
* fast-mode and dataset-backed validation,
* exact checksum parity for superscalar experiments,
* and guard tests around JIT behavior.

This part is important because optimization work often tries to borrow credibility from a correct baseline implementation, as if “we had a correct version once” is enough.

It is not.

Every nontrivial optimization in a project like this needs a credible path back to a reference behavior. The repo reflects that repeatedly. Even when experimental work was added, it was usually accompanied by a scalar fallback, an opt-in feature gate, or a harness specifically designed to compare the new path against a known-good path under deterministic workload conditions.

The superscalar work is a particularly good example of engineering maturity here. The prototype did not erase the scalar path. It kept the scalar path intact, added differential measurement, and preserved a way to compare “active” and “scalar” behavior under the same build. That is not just helpful for debugging. It is a sign that the project understands experimental performance code as suspect until repeatedly exonerated.

That posture is healthy.

---

## Tooling Is Part of the Product

One of the subtler changes in the repository is that the deliverable stopped being “a library that hashes correctly and quickly.”

The deliverable increasingly looks like this instead:

* a library with interpreter, conservative JIT, and fast-regs JIT paths,
* operationally meaningful runtime knobs,
* emitted telemetry for pages, prefetch, and JIT activation,
* CI regression comparisons,
* integration guidance for OxideMiner,
* and capture tooling that makes cross-host claims reviewable.

That shift matters because upstream consumers do not just need fast code. They need stable defaults, explicit caveats, fallback paths, and a way to understand whether requested runtime behavior actually happened.

Large pages are a good example. The repo’s later work treats huge pages less as a magical throughput trick and more as a control-plane semantics problem: request bits, outcome telemetry, 1GB success versus fallback behavior, and clear parent-facing guidance. That is the mindset of a component becoming productizable.

The same is true of the prefetch calibration work. The point was not to crown a universal perfect distance table from limited hosts. The point was to separate repo-wide defaults from host-local optional tuning and make that separation explicit in API and docs.

That is a much better result than pretending one machine’s optimum is wisdom.

---

## The Git History Reads Like a Curriculum

Stepping back, the commit history is unusually readable as an educational sequence.

From January 7th to March 18th, 2026, the repo accumulated `155` commits. Across that span, Git reports roughly `292,069` insertions and `6,194` deletions. A large share of that textual mass is not executable logic but evidence: perf artifacts, memos, summaries, and capture outputs. That is not bloat in the usual sense. It is the visible cost of trying to make claims you can revisit later.

Very roughly, the phases look like this:

* **Early January:** implementation, JIT, conformance, baseline benchmarking.
* **Mid January to February:** increasingly aggressive optimization attempts and better instrumentation.
* **Late February to early March:** cross-host evidence gathering, feature triage, policy memos, and regression tooling.
* **Mid March:** productization of the measurement pipeline itself through full-feature capture, integration harnessing, and more authoritative host summaries.

If someone asked me what the repo is “about,” I would not answer merely “RandomX in Rust.”

I would answer:

it is about learning how to turn a fast cryptographic runtime into an auditable performance program.

---

## What `oxide-randomx` Has Actually Taught Me

The main lesson is not that optimization is hard. Everyone says that. The useful lesson is narrower.

Optimization becomes intellectually honest only when you can survive contact with contrary evidence.

That means:

* keeping reference paths alive,
* demanding deterministic harnesses,
* capturing provenance,
* checking more than one host class,
* separating “experimental” from “supported,”
* and writing down negative results with the same seriousness as positive ones.

`oxide-randomx` has repeatedly rewarded that mindset.

The project now has a supported path that is defensible precisely because so many adjacent ideas were measured, constrained, parked, or rejected. Baseline `jit-fastregs` remains the best-supported top-throughput choice on the measured host set. Conservative JIT remains the supported fallback. The interpreter remains the reference path. That stable hierarchy is not disappointing. It is a sign that the repo has learned how to distinguish durable wins from entertaining ones.

And that, more than any single benchmark number, feels like the real progress.

If there is a broader engineering moral here, it is this:

When a repo matures, speed stops being just a property of code. It becomes a property of process. A project gets faster in a trustworthy way only when it also gets better at saying “no” to itself.

`oxide-randomx` has been an education in that kind of skepticism, and I suspect that is the part of the work that will outlast any individual optimization pass.
