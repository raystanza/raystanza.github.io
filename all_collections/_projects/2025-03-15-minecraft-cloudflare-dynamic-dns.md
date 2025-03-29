---
layout: project
title: 'Minecraft Dynamic Cloudflare DNS Updater'
description: 'Keep your Minecraft server reachable by automatically updating its IP address on Cloudflare DNS.'
date: 2026-03-15
categories: ['projects', 'python', 'networking', 'cloudflare', 'dns']
tags: ['minecraft', 'dns updater', 'dynamic dns', 'cloudflare', 'python', 'networking', 'automation']
og_title: 'Minecraft Dynamic DNS Updater - Keep Your Server Online'
og_description: 'A Python script that ensures your Minecraft server stays accessible by automatically updating your Cloudflare DNS records when your IP changes.'
og_image: '/assets/icons/og-image.png'
og_type: 'website'
og_author: 'Jim Sines'
---

## Overview

If you host a **Minecraft server at home**, your **IP address constantly changes** due to your internet provider’s dynamic IP system. This can be frustrating for your friends who connect using a domain name—one moment it works, and the next it doesn’t.

The **Minecraft Dynamic DNS Updater** is a **Python script** that solves this problem by automatically updating your server’s IP address on **Cloudflare DNS** whenever it changes. Now, your domain (e.g., `mc.yourdomain.com`) will **always point to the correct IP**, ensuring a seamless gaming experience.

[Minecraft Dynamic Cloudflare DNS Updater](https://github.com/raystanza/mc-dns-update)

---

## **How It Works**

1. The script **checks your public IP address** using six different providers.
2. It validates the IP by requiring at least **three providers to agree**.
3. The script queries **Cloudflare DNS** to check your current domain’s IP.
4. If your IP **has changed**, it **updates the Cloudflare record** automatically.
5. Logs are stored and automatically cleaned up every 24 hours.
6. You can schedule automatic execution using **cron jobs**.

---

## **Setup Instructions**

### **1️⃣ Prerequisites**

You'll need:

- A **Cloudflare account** with a registered **domain** (e.g., `mydomain.com`).
- A **subdomain** (e.g., `mc.mydomain.com`) managed by Cloudflare.
- Python **3.x** installed (`python3 --version` to check).
- Git installed (`git --version` to check).
- A **Cloudflare API token** with **DNS Read & Edit permissions**.

---

### **2️⃣ Clone the Repository**

```bash
git clone https://github.com/raystanza/mc-dns-update.git
cd mc-dns-update
```

---

### **3️⃣ Configure Cloudflare API Access**

Create a `.env` file to store your Cloudflare credentials and domain info:

```bash
nano .env
```

Paste the following, replacing with your actual values:

```bash
CLOUDFLARE_ZONE_ID=your_cloudflare_zone_id
CLOUDFLARE_API_READ_TOKEN=your_read_token
CLOUDFLARE_API_EDIT_TOKEN=your_edit_token
SUBDOMAIN=mc.yourdomain.com
```

💡 **Important**: Do **not** use spaces or quotes around the values!

---

### **4️⃣ Run the Script Manually**

To test if everything is working:

```bash
python3 update_mc_dns.py
```

If successful, you’ll see logs confirming the IP check and Cloudflare update.

---

### **5️⃣ Automate with a Cron Job**

To ensure the script runs automatically every **10 minutes**, run:

```bash
./setup_cron.sh
```

This will add a scheduled task to your system’s cron jobs.

---

## **Technical Details**

### **📌 Key Features**

- **Reliable IP Detection**: Uses **six IP providers** and selects the most commonly reported one.
- **Cloudflare API Integration**:
  - **Read Token**: Fetches the current DNS record.
  - **Edit Token**: Updates the DNS record if the IP has changed.
- **Automatic Logging**: Logs updates and deletes old logs after 24 hours.

---

## **Troubleshooting**

### **⚠️ My IP isn’t updating!**

1. Run the script manually:

   ```bash
   python3 update_mc_dns.py
   ```

2. Check the logs:

   ```bash
   cat update_mc_dns.log
   ```

3. Verify your **Cloudflare API tokens** and **Zone ID** in the `.env` file.

---

### **⚠️ The script is running but Cloudflare isn’t updating**

- Check if your **IP has actually changed**.
- Ensure your **Cloudflare API tokens** have the correct **DNS permissions**.
- Run the following to check if your environment variables are set:

  ```bash
  echo $CLOUDFLARE_ZONE_ID
  ```

  If it returns `None`, your `.env` file might be misconfigured.

---

## **Why Use This?**

- **Hands-free DNS Updates**: No need to manually update your IP.
- **Minimizes Downtime**: Ensures your Minecraft server is **always accessible**.
- **Lightweight & Efficient**: Runs in the background with minimal resource usage.
- **Secure**: Uses API tokens with restricted permissions for **added safety**.

Now your **Minecraft server will always be online**, no matter how often your ISP changes your IP! 🚀

---

## 📜 **License**

This project is open-source under the **Apache 2.0 License**.
