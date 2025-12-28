---
layout: project
title: 'OxideMiner'
date: 2025-12-27 07:00:00 -04:00

description: >
  A Rust-native RandomX CPU miner for Monero that prioritizes auditable
  performance, safe defaults, and operational visibility.

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
  - prometheus
  - plugins

image: '/assets/images/projects/oxideminer/oxideminer-og.png'
image_alt: 'OxideMiner logo over a dark dashboard background'
image_caption: 'OxideMiner focuses on transparent mining and practical ops ergonomics.'

og_type: 'article'
og_title: 'OxideMiner - Rust RandomX CPU Miner'
og_description: 'Monero RandomX CPU miner with auto-tuning, TLS stratum connectivity, dashboard themes, and built-in metrics.'

robots: 'index, follow'

twitter:
  card: 'summary_large_image'
  creator: '@realcaptgeech'
---

**OxideMiner** is a Rust-native RandomX CPU miner for Monero (XMR) with a bias toward things I care about as an operator: predictable behavior, clear logs, and enough observability that you do not have to guess what it is doing at 3 AM.

[Visit OxideMiner Site →](https://oxideminer.com)

## Version 0.3.7 (Released December 26th 2025)

[Download the latest release →](https://github.com/raystanza/OxideMiner/releases)

The workspace is split into two crates:

- `oxide-core` contains the mining engine, RandomX integration, system introspection, and the stratum client.
- `oxide-miner` is the CLI binary that wires config, orchestration, the HTTP API, and the embedded dashboard together.

[View the repository →](https://github.com/raystanza/OxideMiner)

---

## Highlights

- **Rust-first mining loop**: The hot path is Rust, with tightly scoped `unsafe` where it is unavoidable (RandomX bindings and a few platform specific system calls).
- **Auto-tuning at startup**: OxideMiner inspects physical cores, cache topology, available memory, and (on Linux) NUMA nodes to choose sensible defaults for threads and batch size.
- **TLS and proxy hardened pool connectivity**: `--tls` uses rustls with optional custom CA files and optional SHA-256 certificate pinning. Pool traffic can be routed through a SOCKS5 proxy.
- **Built-in observability**: Optional HTTP server exposes `/metrics` (plain text), `/api/stats` (JSON), and the dashboard UI.
- **Theme plugins for the dashboard**: Additional themes can be dropped into `plugins/themes/<id>/` and loaded at runtime without rebuilding the miner.
- **Transparent dev fee**: A fixed 1% developer fee is always enabled and is tracked independently in both share counters and metrics.

---

## Quick start

1. Download a release artifact for your platform from GitHub Releases.
2. Copy `config.toml.example` to `config.toml` next to the binary.
3. Edit `config.toml` to fill in at least your wallet and pool (and optionally enable the dashboard)
4. Run the miner:

```bash
./oxide-miner
```

By default the HTTP server binds to `127.0.0.1`. If you need it reachable on your LAN, add `--api-bind 0.0.0.0` and put it behind a firewall or reverse proxy.

If you just want to sanity check performance without touching a pool, run a fixed 20 second benchmark:

```bash
./oxide-miner --benchmark
```

## Build from source

If you prefer compiling locally, install the Rust toolchain and build the workspace.

- Rust toolchain [rustup](https://rustup.rs/) (stable channel). The workspace targets _Rust 2021 edition_.

### Standard release build (portable)

```bash
cargo build --release
./ox-build/target/release/oxide-miner --help
```

This produces a **portable, optimized binary** suitable for running on a wide range of CPUs.
OxideMiner performs **runtime CPU feature detection** (AES, AVX2, etc.) at startup and automatically selects the fastest available RandomX execution path for the host system.

This is the recommended option if you plan to:

- distribute the binary to multiple machines
- run on older CPUs or virtualized environments
- prioritize compatibility over absolute peak performance

### High-performance build (still portable)

```bash
cargo build --profile maxperf
./ox-build/target/maxperf/oxide-miner --help
```

The `maxperf` profile enables more aggressive compiler settings (fat LTO, single codegen unit, stripped symbols) while **remaining portable across CPUs**.

This typically yields modest performance improvements over `--release` without sacrificing compatibility.

### Host-optimized build (maximum performance)

```bash
RUSTFLAGS="-C target-cpu=native" cargo build --profile maxperf
```

This produces a **host-tuned binary** optimized specifically for the CPU on the build machine.
LLVM is allowed to fully specialize instruction selection and scheduling based on the host’s exact microarchitecture.

This usually delivers the **highest possible hash rate**, but the resulting binary:

- may not run on other machines
- is not suitable for redistribution

**Recommendation:**

- Use `--release` for general use and published artifacts
- Use `--profile maxperf` for improved performance with broad compatibility
- Use `--profile maxperf` with `target-cpu=native` when building for a single, known system and maximum performance is the goal

---

## Configuration and key flags

OxideMiner supports a simple `config.toml` and merges it with CLI args. Runtime flags win over file settings. The sample file in the repo is a good starting point: `config.toml.example`.

Flags:

| Flag                      | Purpose                                                                                    |
| ------------------------- | ------------------------------------------------------------------------------------------ |
| `-o, --url <HOST:PORT>`   | Mining pool endpoint (required unless `--benchmark`).                                      |
| `-u, --user <ADDRESS>`    | Primary Monero wallet or subaddress.                                                       |
| `-p, --pass <STRING>`     | Pool password/rig identifier (default `x`).                                                |
| `-t, --threads <N>`       | Override auto-selected worker threads.                                                     |
| `--batch-size <N>`        | Manual hashes per batch (default auto recommendation).                                     |
| `--no-yield`              | Disable cooperative yields between batches (less friendly to shared hosts).                |
| `--affinity`              | Pin worker threads to CPU cores.                                                           |
| `--huge-pages`            | Request large pages for RandomX dataset (requires OS support).                             |
| `--proxy <URL>`           | Route stratum traffic via SOCKS5 proxy. Format: `socks5://[user:pass@]host:port`.          |
| `--tls`                   | Enable TLS for the stratum connection.                                                     |
| `--tls-ca-cert <PATH>`    | Add a custom CA certificate (PEM/DER) when TLS is enabled.                                 |
| `--tls-cert-sha256 <HEX>` | Pin the pool certificate by SHA-256 fingerprint.                                           |
| `--api-port <PORT>`       | Expose the dashboard/API on the given port (paired with `--api-bind`).                     |
| `--api-bind <ADDR>`       | Address to bind the HTTP API/dashboard (default `127.0.0.1`, only used with `--api-port`). |
| `--dashboard-dir <DIR>`   | Serve dashboard assets from disk instead of embedded versions.                             |
| `--debug`                 | Increase log verbosity and tee output to rotating files in `./logs/`.                      |
| `--config <PATH>`         | Load defaults from a TOML file (defaults to `./config.toml`).                              |
| `--benchmark`             | Run the RandomX benchmark and exit (no pool connection).                                   |

---

## Dashboard, themes, and metrics

When `--api-port` is set, the miner serves:

- `/` for the embedded dashboard (HTML, CSS, JS, and images are compiled into the binary)
- `/metrics` for scrape-friendly counters and gauges (hashes, hashrate, shares, TLS state, plus build metadata)
- `/api/stats` for a JSON summary (hashrate, totals, uptime, build info, and effective config)
- `/plugins/themes` for a small theme management page

Theme plugins live under `plugins/themes/` and are discovered automatically from either the current working directory or next to the executable. If you want to author your own theme, start with `docs/themes.md`.

If you run with `--dashboard-dir`, OxideMiner serves your files instead of the embedded dashboard. The theme plugin system is designed to augment the bundled UI and will not replace a custom dashboard.

---

## Secure downloads

Releases include SHA-256 checksum files and detached signatures. The repository also includes the public signing key at `release-subkey-ci-public-20251012.asc`.

On Linux:

```bash
sha256sum -c <archive>.sha256
gpg --verify <archive>.sha256.asc <archive>.sha256
```

Only run the miner when both checksum and signature verification succeed.

---

## Responsible usage

- Mine only on systems you own or administer with explicit consent.
- RandomX will run CPUs hot. Watch thermals and power, and validate stability before long runs.
- Keep wallet addresses and pool credentials private.
- On shared machines, leave yields enabled and size `--threads` so you do not starve other workloads.

---

### Project Author

Created by **@raystanza**.

_Last updated on {{ "now" | date: "%Y-%m-%d" }}._
