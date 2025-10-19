---
layout: project
title: "OxideMiner"
date: 2025-10-18 07:00:00 -04:00

description: >
  A next-generation RandomX CPU miner engineered in Rust for transparent, high-performance Monero mining.

categories:
  - projects
  - rust
  - cryptocurrency
  - randomx
  - devops

tags:
  - monero
  - randomx
  - cpu-mining
  - rust
  - tls
  - observability
  - dashboard

image: "assets/images/projects/oxideminer/oxideminer-og.png"
image_alt: "OxideMiner logo over a dark dashboard background"
image_caption: "OxideMiner pairs Rust performance with an auditable mining stack."

og_type: "article"
og_title: "OxideMiner - High-Performance RandomX CPU Miner"
og_description: "Rust-first Monero miner with auto-tuning, TLS stratum connectivity, embedded dashboard, and Prometheus metrics."

robots: "index, follow"

twitter:
  card: "summary_large_image"
  creator: "@realcaptgeech"
---
**OxideMiner** is a modern, Rust-native RandomX CPU miner that balances maximum hashrate with operational transparency.
Its workspace is split into clean crates—`oxide-core` for the mining engine and `oxide-miner` for orchestration—keeping every byte auditable and reproducible.

[View the repository →](https://github.com/raystanza/OxideMiner)

[Download the latest release →](https://github.com/raystanza/OxideMiner/releases)

---

## Highlights

- **Rust-first architecture** – Implements the RandomX hot loop in safe Rust with Tokio-driven orchestration for predictable, high-throughput CPU mining.
- **Auto-tuned intelligence** – Detects CPU topology, cache sizes, and NUMA layout at startup to choose optimal thread counts and batch sizes.
- **TLS-ready stratum client** – Securely connects to pools with optional certificate pinning, custom CA bundles, and SOCKS5 proxy support.
- **Embedded observability** – Ships with a Prometheus-compatible `/metrics` endpoint, structured logs, and an optional HTTP dashboard.
- **Honest dev fee** – A fixed, transparent 1% developer fee logged in both metrics and the dashboard—no hidden miners or opaque binaries.

---

## Quick start

1. **Download** the appropriate binary from the GitHub Releases page for your platform.
2. **Copy** `config.toml.example` to `config.toml` and add your pool URL, wallet address, and optional password.
3. **Run** the miner with defaults to let auto-tuning pick the best settings:

```bash
./oxide-miner \
  --url pool.supportxmr.com:5555 \
  --user <YOUR_MONERO_WALLET> \
  --pass rig001 \
  --api-port 8080
```

The startup log summarizes CPU tuning, dataset initialization, stratum connectivity, and dashboard availability.

> Prefer building from source? Install the Rust toolchain, clone the repo, and run `cargo build --release` followed by `cargo run -p oxide-miner -- --help` while iterating.

---

## Secure downloads

OxideMiner publishes signed artifacts for every release. Always verify before running:

1. **Checksums** – Use `sha256sum -c <archive>.sha256` on Linux or `Get-FileHash` on Windows to confirm integrity.
2. **Signatures** – Import the published release-signing key and run `gpg --verify` against the archive and checksum signature files.

Matching hashes and trusted signatures ensure the binary you run matches the open-source build.

---

## Configuration options

Launch `oxide-miner --help` to explore all CLI flags. Common controls include:

| Flag | Purpose |
| --- | --- |
| `--url <HOST:PORT>` | Target pool endpoint unless benchmarking. |
| `--user <ADDRESS>` | Primary Monero wallet or subaddress. |
| `--threads <N>` | Override auto-selected worker thread count. |
| `--batch-size <N>` | Manual hashes per batch instead of the recommended value. |
| `--huge-pages` | Request 2 MiB pages for the RandomX dataset. |
| `--affinity` | Pin worker threads to CPU cores to reduce scheduler jitter. |
| `--tls`, `--tls-ca-cert`, `--tls-cert-sha256` | Enable TLS and enforce certificate validation policies. |
| `--proxy <URL>` | Route stratum traffic through a SOCKS5 proxy. |
| `--api-port <PORT>` | Serve the embedded dashboard and JSON stats locally. |
| `--benchmark` | Run the RandomX benchmark loop without connecting to a pool. |

CLI flags layer over `config.toml`, so runtime arguments always win.

---

## Operating the miner

- **Benchmarking** – `--benchmark` executes the real mining loop for 20 seconds, honoring tuning overrides and reporting hashes per second.
- **Dashboard & API** – When `--api-port` is set, the embedded UI and JSON stats live at `/`, `/api/stats`, and `/metrics` on `127.0.0.1:<PORT>`.
- **Prometheus metrics** – Counters include `oxide_hashes_total`, `oxide_hashrate`, share acceptance/rejection totals, TLS state, and build metadata for Grafana dashboards.
- **Huge pages & affinity** – Opt into large pages and CPU pinning to give RandomX stable memory latency; helper scripts under `scripts/` assist with OS tuning.
- **Resilient connectivity** – TLS, proxy routing, and deterministic developer-fee scheduling ensure predictable pool sessions.

---

## Responsible usage

- Mine only on hardware you own or manage with explicit consent.
- Monitor thermals, power draw, and system stability during 100% CPU workloads.
- Keep wallet credentials secure and rotate pool passwords if exposed.
- Be considerate on shared hosts: allow cooperative yielding and size thread counts responsibly.
- Review local regulations before deploying persistent mining rigs.

---

### Project Author

Created by **@raystanza**, OxideMiner blends Rust craftsmanship with principled, verifiable mining operations.

*Last updated on {{ "now" | date: "%Y-%m-%d" }}.*
