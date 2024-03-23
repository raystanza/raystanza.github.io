---
layout: post
title: Installing NPM
date: 2024-03-20
categories: ["tutorials", "npm"]
---
## How to Install npm Using NVM: A Comprehensive Guide

npm, standing for Node Package Manager, is an essential tool for JavaScript developers. It allows for the management of project dependencies, sharing of packages, and much more. Since npm is distributed with Node.js, installing Node.js is a prerequisite for using npm. However, managing multiple Node.js versions on a single machine can be cumbersome. That's where Node Version Manager (NVM) comes in handy. This guide will focus on installing npm using NVM, offering a flexible way to manage your Node.js versions and, by extension, npm versions.

## Understanding npm and NVM

npm is not only a package manager but also a powerful tool for managing project dependencies, publishing packages, and more. NVM, on the other hand, is a script-based tool that enables you to install and manage multiple Node.js versions. With NVM, you can switch between Node.js versions as needed, making it ideal for testing applications across different versions or managing projects that require specific Node.js versions.

## Prerequisites

- A computer running Windows, macOS, or Linux.
- Basic familiarity with command-line or terminal operations.

**Note:** This guide will focus on using NVM to install Node.js, which automatically includes npm.

## Step 1: Installing NVM

### Windows

For Windows, there's a dedicated version of NVM known as NVM for Windows. Follow these steps:

1. **Download NVM for Windows:**
   - Visit the [NVM for Windows GitHub page](https://github.com/coreybutler/nvm-windows/releases) and download the latest installer (nvm-setup.zip).

2. **Install NVM for Windows:**
   - Extract and run the installer from the zip file. Follow the prompts to complete the installation.

### macOS and Linux

The installation process for macOS and Linux is similar and involves running a curl or wget command. Open your terminal and execute one of the following commands:

- Using curl:
  
  ```bash
  curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
  ```

- Using wget:

  ```bash
  wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
  ```

After installation, close and reopen your terminal to start using NVM.

## Step 2: Installing Node.js (and npm)

With NVM installed, you can now install any version of Node.js (which includes npm). Here's how:

1. **Open Your Terminal or Command Prompt:**

2. **Install the Latest Version of Node.js:**
   - Run the following command to install the latest Node.js version:

     ```bash
     nvm install node
     ```

3. **Install a Specific Version of Node.js:**
   - If you need a specific version, use:

     ```bash
     nvm install <version>
     ```

   - For example, to install Node.js version 14.17.0, you would use:

     ```bash
     nvm install 14.17.0
     ```

4. **Switching Between Installed Node.js Versions:**
   - To switch to a different version of Node.js, use:

     ```bash
     nvm use <version>
     ```

   - Ensure to replace `<version>` with the version number you wish to switch to.

5. **Verify the Installation:**
   - Confirm that Node.js and npm are installed by checking their versions:

     ```bash
     node -v
     npm -v
     ```

   - These commands should return the versions of Node.js and npm installed on your system.

## Step 3: Using npm

With npm installed, you can begin managing your JavaScript project dependencies. Here are some basic npm commands to get started:

- **Initializing a New Project:**

  ```bash
  npm init
  ```

- **Installing a Package:**

  ```bash
  npm install <package-name>
  ```

- **Installing a Package Globally:**

  ```bash
  npm install -g <package-name>
  ```

## Conclusion

By using NVM, you've not only installed npm but also gained the ability to manage multiple Node.js versions on your system. This flexibility is invaluable for development, testing, and ensuring compatibility across different Node.js versions. Whether you're working on personal projects, contributing to open source, or developing professional applications, the combination of NVM, Node.js, and npm provides a robust foundation for your JavaScript development endeavors.
