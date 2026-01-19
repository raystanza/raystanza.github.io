---
layout: post
title: "Installing NodeJS on Linux using NVM"
date: 2024-01-25 07:00:00 -05:00

description: >
  Explore a step-by-step tutorial for installing, switching, and optimizing Node.js environments across multiple projects.

canonical_url: "https://raystanza.uk/posts/installing-nodejs-using-nvm/"

categories:
  - tutorials
  - nodejs
  - nvm

tags:
  - node.js
  - nvm
  - linux
  - version management
  - programming
  - tutorial

image: "/assets/images/articles/installing-nodejs-on-linux-using-nvm-og.png"
image_alt: "Terminal showing nvm install, nvm use, and node -v commands with the NVM logo and Linux penguin"
image_caption: "Using NVM to install and manage Node.js versions on Linux"

og_type: "article"
og_title: "Mastering Node.js Deployment: A NVM Installation Guide for Linux"
og_description: >
  Explore a step-by-step tutorial for installing, switching, and optimizing Node.js environments across multiple projects.

robots: "index, follow"

twitter:
  card: "summary_large_image"
  creator: "@raystanza"
---
Node.js, a runtime environment for executing JavaScript code server-side, is an essential tool in modern web development. In this tutorial, we'll focus on installing Node.js on a Linux system using Node Version Manager (NVM). NVM is a handy tool that allows you to install multiple versions of Node.js and switch between them with ease.

## Why NVM?

Before diving into the installation process, let's understand why NVM is a preferred choice for many developers:

1. **Multiple Node Versions**: NVM allows you to install and manage multiple versions of Node.js. This is particularly useful when working on different projects that require different Node versions.

2. **Easy Switching**: Switching between Node versions is a breeze with NVM. This flexibility is crucial for testing and development.

3. **No Sudo Required**: NVM installs Node.js in your home directory, eliminating the need for administrator privileges.

## Prerequisites

- A Linux-based operating system
- Basic knowledge of the Linux command line
- Access to a terminal

## Step 1: Installing NVM

1. **Open your terminal**.

2. **Download and install NVM** by running the following command. This command fetches the install script from NVM's GitHub repository and runs it:

   ```bash
   curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
   ```

3. **Activate NVM** without restarting the terminal:

   ```bash
   source ~/.bashrc
   ```

   Note: If you're using a shell other than bash, replace `.bashrc` with your shell's respective configuration file, like `.zshrc` for Zsh.

## Step 2: Installing Node.js

1. **List all available Node.js versions**:

   ```bash
   nvm list-remote
   ```

2. **Install a specific Node.js version**. For example, to install Node.js version 16.14.0, use:

   ```bash
   nvm install 16.14.0
   ```

   Alternatively, you can install the latest version with:

   ```bash
   nvm install node
   ```

3. **Verify the installation** by checking the Node.js version:

   ```bash
   node -v
   ```

## Step 3: Managing Node Versions

- **Switch between installed Node versions**. For instance, to switch to version 14.17.0:

  ```bash
  nvm use 14.17.0
  ```

- **List all installed Node versions**:

  ```bash
  nvm ls
  ```

- **Set a default Node version**:

  ```bash
  nvm alias default 16.14.0
  ```

## Troubleshooting

- If you encounter issues, ensure that NVM's installation script executed correctly and that your shell's configuration file (like `.bashrc` or `.zshrc`) was updated.

- If commands like `nvm` or `node` are not recognized, reopen your terminal or re-source your configuration file.

## In The End

NVM offers a straightforward and flexible way to manage Node.js installations. It's particularly beneficial for developers working across multiple projects requiring different Node versions. With NVM, you can easily install, switch, and manage multiple Node.js versions on your Linux system, making your development process smoother and more efficient. Remember, staying updated with Node.js versions is crucial for security and access to the latest features, and NVM makes this task hassle-free.
