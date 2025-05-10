---
layout: post
title: 'My Linux Cheat-Sheet'
date: 2025-02-17
categories: ['customization', 'linux']
tags: ['linux', 'cheat sheet', 'customization']
og_title: 'My Debian Linux Cheat-Sheet'
og_description: 'My personal collection of snippets to help make using Debian Linux a bit easier.'
og_image: '/assets/icons/og-image.png'
og_type: 'article'
og_author: 'Jim Sines'
---

> **🔍** Press `CTRL` + `F` (or `⌘` + `F`) to search this page.

---

## **Text Processing**

Text processing is a core function in Linux, enabling users to efficiently
manipulate, search, and transform text-based data. This section expands on three
powerful text-processing utilities: **grep**, **sed**, and **awk**. These
commands are essential for log analysis, data extraction, and automation.

---

## **1.1 grep – Searching for Patterns in Files**

The `grep` (Global Regular Expression Print) command searches for patterns in files and outputs matching lines. It supports **regular expressions**, **recursive searches**, **inverted matches**, and more.

### **Basic Usage**

```bash
grep "error" server.log         # Search for "error" in server.log
grep -i "error" server.log      # Case-insensitive search
grep -w "error" server.log      # Match whole words only
grep -v "error" server.log      # Show lines that do NOT contain "error"
```

### **Recursive Search**

```bash
grep -r "TODO" /home/user/projects/  # Search for "TODO" in all files under /home/user/projects
grep -R "function" .                 # Case-insensitive recursive search in current directory
```

### **Contextual Output**

```bash
grep -A 3 "ERROR" log.txt    # Show 3 lines AFTER each match
grep -B 3 "ERROR" log.txt    # Show 3 lines BEFORE each match
grep -C 3 "ERROR" log.txt    # Show 3 lines BEFORE & AFTER match
```

### **Using Regular Expressions in grep**

```bash
grep -E "error|failure" logs.txt      # Match multiple patterns (error OR failure)
grep -E "[0-9]{4}-[0-9]{2}-[0-9]{2}" logs.txt  # Match dates in YYYY-MM-DD format
grep -P "\d{3}-\d{3}-\d{4}" contacts.txt  # Match phone numbers (Perl regex)
```

### **Filtering & Counting Matches**

```bash
grep -c "fail" logs.txt   # Count occurrences of "fail"
grep -o "http[s]*://[^ ]*" urls.txt   # Extract all URLs
```

### **Combining grep with Other Commands**

```bash
ps aux | grep apache    # Find running processes related to Apache
dmesg | grep "disk"     # Filter kernel messages for disk-related logs
ls -l | grep "^d"       # List only directories
```

---

## **1.2 sed – Stream Editor for Text Manipulation**

`sed` (Stream Editor) is a powerful text manipulation tool that works on streams or files. It is commonly used for **find-and-replace**, **deleting lines**, **inserting text**, and **modifying files in-place**.

### **Basic Find and Replace**

```bash
sed 's/apple/orange/' fruits.txt      # Replace first occurrence of "apple" per line
sed 's/apple/orange/g' fruits.txt     # Replace ALL occurrences in each line
sed 's/apple/orange/2' fruits.txt     # Replace the second occurrence in each line
```

### **In-Place Editing** (Modifies the File)

```bash
sed -i 's/oldtext/newtext/g' file.txt  # Replace in file (WARNING: irreversible)
sed -i.bak 's/old/new/g' file.txt      # Create a backup before replacing
```

### **Deleting Lines**

```bash
sed '3d' file.txt           # Delete line 3
sed '1,5d' file.txt         # Delete lines 1 to 5
sed '/pattern/d' file.txt   # Delete lines matching "pattern"
sed '/^$/d' file.txt        # Delete empty lines
```

### **Printing & Extracting Lines**

```bash
sed -n '5p' file.txt       # Print only line 5
sed -n '5,10p' file.txt    # Print lines 5 to 10
sed -n '/pattern/p' file.txt  # Print lines matching "pattern"
```

### **Inserting & Appending Text**

```bash
sed '3i This is inserted' file.txt   # Insert before line 3
sed '3a This is appended' file.txt   # Append after line 3
```

### **Using Regular Expressions in sed**

```bash
sed -E 's/[0-9]{3}-[0-9]{3}-[0-9]{4}/(REDACTED)/g' contacts.txt  # Mask phone numbers
sed -E 's/[aeiouAEIOU]//g' words.txt  # Remove all vowels
```

---

## **1.3 awk – Pattern Scanning and Processing**

`awk` is a full-fledged programming language for text processing. It works line-by-line, allowing **field-based text extraction**, **mathematical operations**, **string manipulation**, and **pattern matching**.

```bash
awk '{print $1}' file.txt       # Print first column of each line
awk '{print $1, $3}' file.txt   # Print first and third columns
awk 'NR==5' file.txt            # Print only line 5
```

### **Using Delimiters**

```bash
awk -F ":" '{print $1, $3}' /etc/passwd  # Use ":" as field separator
awk -F "," '{print $2}' data.csv         # Extract second column from CSV
```

### **Filtering Lines Based on Conditions**

```bash
awk '$3 > 50' data.txt        # Print lines where the 3rd column is greater than 50
awk '/error/' log.txt         # Print lines containing "error"
awk 'length($0) > 80' file.txt  # Print lines longer than 80 characters
```

### **Performing Arithmetic Operations**

```bash
awk '{sum += $2} END {print sum}' data.txt  # Sum values in column 2
awk '{count++} END {print count}' data.txt  # Count number of lines
awk '{print $1, $2*2}' data.txt            # Multiply column 2 by 2
```

### **Using Regular Expressions in awk**

```bash
awk '/^[0-9]+$/' numbers.txt   # Print lines containing only numbers
awk '/^ERROR/ {print}' log.txt # Print lines starting with "ERROR"
awk '!/DEBUG/' log.txt         # Print all lines except those containing "DEBUG"
```

### **Working with Multiple Files**

```bash
awk '{sum += $2} END {print "Total:", sum}' file1.txt file2.txt  # Process multiple files
```

### **String Manipulation in awk**

```bash
awk '{print toupper($0)}' file.txt  # Convert to uppercase
awk '{print tolower($0)}' file.txt  # Convert to lowercase
awk '{gsub(/apple/, "orange"); print}' file.txt  # Replace "apple" with "orange"
```

---

## **Conclusion**

Mastering `grep`, `sed`, and `awk` significantly enhances your ability to manipulate and analyze text efficiently. Here’s a  quick summary of their key differences:

| Command | Use Case        | Key Features                                          |
| ------- | --------------- | ----------------------------------------------------- |
| `grep`  | Searching       | Fast pattern matching, supports regex                 |
| `sed`   | Editing         | Find & replace, delete, insert, modify text           |
| `awk`   | Data Processing | Column-based operations, arithmetic, string functions |

---

## **2.1 Finding Files & Directories with `find`**

The `find` command is a **powerful, recursive search tool** that locates files and directories based on name, type, size, modification time, permissions, and more. It operates in real time, scanning the filesystem without relying on a prebuilt index.

### **Basic Syntax**

```bash
find <directory> <search criteria> <actions>
```

- `<directory>`: The starting location for the search.
- `<search criteria>`: Defines filters like file name, type, size, etc.
- `<actions>`: Specifies what to do with matching files (print, delete, move,
  etc.).

---

### **Basic File Search**

```bash
find / -name "file.txt"        # Find file.txt starting from root (slow)
find . -name "file.txt"        # Find file.txt in the current directory
find /home -type f -name "*.log"  # Find all .log files in /home
find /var -type d -name "config"  # Find directories named "config"
```

- `-name "file.txt"` → Case-sensitive search for **exact** match.
- `-iname "file.txt"` → Case-insensitive search.

```bash
find /etc -iname "config*"     # Find files starting with "config" (case-insensitive)
```

---

### **Finding by File Type**

```bash
find /home -type f -name "*.sh"  # Find shell script files
find /var/log -type d -name "archive"  # Find directories named "archive"
find /usr/bin -type l             # Find symbolic links in /usr/bin
```

- `-type f` → Regular files
- `-type d` → Directories
- `-type l` → Symbolic links

---

### **Finding Files by Size**

```bash
find / -type f -size +100M   # Find files larger than 100MB
find . -type f -size -10k    # Find files smaller than 10KB
find /var/log -size +500M    # Locate huge log files
```

- `+100M` → Larger than **100MB**
- `-10k` → Smaller than **10KB**
- `1G` → Exactly **1GB**

---

### **Finding Files by Modification, Access, and Change Time**

```bash
find . -type f -mtime -7     # Files modified in the last 7 days
find . -type f -mtime +30    # Files older than 30 days
find . -type f -ctime -2     # Files changed in the last 2 days
find . -type f -atime -1     # Files accessed in the last 24 hours
```

- `-mtime` → Last **modification** time
- `-ctime` → Last **change** time (inode metadata change)
- `-atime` → Last **access** time

To search by minutes instead of days:

```bash
find . -type f -mmin -60  # Files modified in the last hour
```

---

### **Finding Files by Permissions**

```bash
find / -type f -perm 777       # Files with full read, write, execute permissions
find /var -type f -perm 644    # Files with read-write for owner, read for others
find /home -type f ! -perm 644 # Files that do NOT have 644 permissions
find . -perm -u+x             # Files the owner can execute
```

- `777` → Full access for everyone
- `644` → Owner can read/write, others can read
- `! -perm 644` → Find files that **do not** have 644 permissions

---

### **Finding Files Owned by a Specific User or Group**

```bash
find /home -user bob       # Find files owned by user "bob"
find /var/log -group admin # Find files owned by group "admin"
find /tmp -nouser         # Find files with no associated user
find /tmp -nogroup        # Find files with no associated group
```

---

### **Executing Commands on Found Files**

The `-exec` option allows executing commands on found files.

#### **Deleting Files**

```bash
find . -name "*.log" -exec rm {} \;   # Delete all .log files
find /tmp -type f -mtime +7 -exec rm {} \;  # Delete files older than 7 days
find /var/log -type f -name "*.log" -delete  # Alternative delete method
```

#### **Moving or Copying Files**

```bash
find /home -type f -name "*.jpg" -exec mv {} /backup/images/ \;
find /logs -type f -name "*.log" -exec cp {} /archive/logs/ \;
```

#### **Changing Permissions**

```bash
find /var/www -type f -exec chmod 644 {} \;
find /scripts -type f -exec chmod +x {} \;
```

---

## **2.2 Locating Files Quickly with `locate`**

The `locate` command is a **fast alternative** to `find` because it uses a prebuilt **file database** rather than searching in real-time.

### **Updating the File Database**

Before using `locate`, update its database:

```bash
sudo updatedb
```

```bash
locate file.txt            # Find file.txt
locate "*.mp3"             # Find all MP3 files
locate -i "report.pdf"     # Case-insensitive search
locate "/etc/passwd"       # Find exact file path
```

### **Limiting Results**

```bash
locate -n 10 "*.log"       # Show only the first 10 results
```

### **Filtering Results**

```bash
locate -r '.*config.*'     # Use regex to find files containing "config"
```

### **Comparing `find` and `locate`**

| Feature            | `find`                   | `locate`                         |
| ------------------ | ------------------------ | -------------------------------- |
| **Search Type**    | Real-time                | Uses a prebuilt index            |
| **Speed**          | Slower                   | Much faster                      |
| **File Freshness** | Always up-to-date        | Needs `updatedb` to refresh data |
| **Best For**       | Precise, custom searches | Quick lookups                    |

#### **When to Use Which?**

- Use **`find`** for **real-time**, **customizable searches** based on attributes like size, permissions, or modification date.
- Use **`locate`** for **instant** file lookups when speed is crucial.

---

## **2.3 Bonus: Other Useful File & Disk Management Commands**

Managing files efficiently in Linux involves not just searching for them, but also listing, organizing, and managing disk usage. This section expands on essential **file listing**, **disk usage monitoring**, and **handling external
drives**.

---

### **Listing Files & Directories (`ls`)**

The `ls` command lists files and directories in various formats.

```bash
ls                   # List files in the current directory
ls -l                # List files with detailed information (permissions, size, owner, etc.)
ls -a                # Show hidden files (files starting with `.`)
ls -lah              # Combine: list details, show hidden files, and human-readable sizes
```

#### **Sorting Files**

```bash
ls -lt               # Sort by modification time (newest first)
ls -Sr               # Sort by file size (smallest first)
ls -ltr              # Reverse sort order (oldest file first)
```

#### **Listing Directory Contents Recursively**

```bash
ls -R                # Show all files, including subdirectories
ls /var/log -lh      # List log files in /var/log with human-readable sizes
```

---

### **Checking Disk & Storage Usage**

Monitoring disk space helps prevent system issues and optimize storage.

#### **Checking Available Disk Space (`df`)**

```bash
df -h                # Show disk usage of mounted filesystems (human-readable)
df -Th               # Display filesystem types along with usage
df -i                # Show inode usage (useful if a disk is full but space seems available)
```

#### **Checking Directory & File Sizes (`du`)**

```bash
du -sh file.txt      # Show size of a single file
du -sh *             # Show sizes of files and directories in the current folder
du -h --max-depth=1  # Show total sizes of subdirectories (one level deep)
```

#### **Finding the Largest Files**

```bash
find / -type f -size +1G        # Find files larger than 1GB
du -ah /var | sort -rh | head -10  # Show top 10 largest files in /var
```

---

### **Listing Disks & Partitions**

To view storage devices and partitions, use:

```bash
lsblk                 # Show block devices (disks, partitions, USB drives)
fdisk -l             # List all partitions (requires sudo)
blkid                # Show UUIDs and filesystem types
ls /dev/sd*          # List detected storage devices
```

**Example Output of `lsblk`**

```bash
NAME   MAJ:MIN RM   SIZE RO TYPE MOUNTPOINT
sda      8:0    0 465.8G  0 disk
├─sda1   8:1    0   500M  0 part /boot
├─sda2   8:2    0   50G   0 part /
└─sda3   8:3    0 415.3G  0 part /home
sdb      8:16   1  14.9G  0 disk
└─sdb1   8:17   1  14.9G  0 part /mnt/usb
```

- `sda`, `sdb`: Primary disks
- `sda1`, `sda2`: Partitions on the first disk
- `sdb1`: Partition on an external USB drive

---

### **Mount a Filesystem**

```bash
sudo mount /dev/sdb1 /mnt        # Mount drive to /mnt
sudo mount -t ext4 /dev/sdb1 /mnt  # Mount as ext4 (ensure correct filesystem type)
```

### **Unmount a Filesystem**

```bash
sudo umount /mnt                 # Unmount the drive
sudo umount /dev/sdb1             # Unmount by device name
```

### **Auto-Mount at Boot (`/etc/fstab`)**

To automatically mount a drive at boot, add an entry to `/etc/fstab`:

```text
UUID=1234-ABCD  /mnt/usb  vfat  defaults  0  0
```

Find the UUID with:

```bash
blkid /dev/sdb1
```

---

### **Working with USB Drives & External Storage**

When inserting a USB drive, Linux usually assigns it `/dev/sdb` or `/dev/sdc`.
To manage USB drives:

### **Detect a Newly Inserted USB Drive**

```bash
lsblk                 # List block devices
dmesg | tail -20      # Check system logs for USB detection
```

### **Format a USB Drive**

```bash
sudo mkfs.vfat -n "USB_DRIVE" /dev/sdb1   # Format as FAT32
sudo mkfs.ext4 /dev/sdb1                  # Format as ext4
```

### **Eject a USB Drive Safely**

```bash
sudo umount /mnt/usb        # Unmount the drive
udisksctl power-off -b /dev/sdb  # Power off the device safely
```

---

### **Summary**

| Command    | Purpose                                      |
| ---------- | -------------------------------------------- |
| `ls`       | List files & directories                     |
| `du`       | Show disk usage of files & directories       |
| `df`       | Show disk space usage of mounted filesystems |
| `lsblk`    | List block devices (disks, partitions)       |
| `mount`    | Mount a drive to a directory                 |
| `umount`   | Unmount a drive                              |
| `blkid`    | Show UUID & filesystem type of a device      |
| `fdisk -l` | List all partitions on a system              |
| `mkfs`     | Format a disk or USB drive                   |

---

## **Addendum: Writing a Disk Image to a USB Drive via Terminal**

Writing a disk image (**ISO** or **IMG**) to a USB drive is essential for
creating bootable media or deploying OS images. This can be done using `dd`,
`cat`, or `pv`.

### **Step 1: Identify the USB Drive**

First, determine the correct USB device name:

```bash
lsblk
```

or

```bash
sudo fdisk -l
```

Look for a device like `/dev/sdb` (ensure it’s the correct USB drive to avoid
data loss).

---

### **Step 2: Unmount the USB Drive**

If the drive is auto-mounted, unmount it before writing:

```bash
sudo umount /dev/sdb*
```

---

### **Step 3: Write the Image to USB**

#### **Using `dd` (Recommended)**

```bash
sudo dd if=/path/to/image.iso of=/dev/sdb bs=4M status=progress
```

- `if=/path/to/image.iso` → Input file (ISO or IMG)
- `of=/dev/sdb` → Output device (USB drive)
- `bs=4M` → Block size (adjustable for speed)
- `status=progress` → Shows writing progress

💡 _Be sure to write to the **device** (`/dev/sdb`), not a partition
(`/dev/sdb1`)._

#### **Using `cat` (Simple Alternative)**

```bash
sudo cat /path/to/image.iso > /dev/sdb
```

#### **Using `pv` (With Progress Indicator)**

If `pv` is installed, you can monitor progress:

```bash
pv /path/to/image.iso | sudo dd of=/dev/sdb bs=4M
```

---

#### **Verification (Optional, but Recommended)**

Compare the written data with the original image:

```bash
sudo cmp /path/to/image.iso /dev/sdb
```

If there is **no output**, the write was successful.

---

### **Step 4: Safely Eject the USB Drive**

Once the process is complete, flush data to disk and remove the USB safely:

```bash
sync
sudo eject /dev/sdb
```

---

## **3.1 Linux Processes**

A **process** is an instance of a running program. Each process has:

- A **PID** (Process ID)
- A **parent process** (PPID)
- A specific **state** (running, sleeping, stopped, etc.)
- **CPU and memory usage**

You can view process information using `/proc/`:

```bash
cat /proc/<PID>/status  # Detailed process information
cat /proc/cpuinfo       # Show CPU information
```

---

## **3.2 Process Monitoring and Inspection**

### **Listing Processes with `ps`**

```bash
ps aux # Show all running processes with detailed info
ps -ef # Alternative format for listing processes
ps -eo pid,ppid,user,%cpu,%mem,cmd --sort=-%cpu # Sort by CPU usage
```

**Common `ps` Columns Explained:**

| Column   | Meaning                    |
|----------|----------------------------|
| `PID`    | Process ID                 |
| `PPID`   | Parent Process ID          |
| `%CPU`   | CPU usage percentage       |
| `%MEM`   | Memory usage percentage    |
| `COMMAND`| Executed command           |

**Filter Specific Users' Processes:**

```bash
ps -u username         # Show processes belonging to a user
ps -U root            # Show all processes run by root
```

---

### **Real-Time Process Monitoring (`top` & `htop`)**

#### **`top` – System Process Monitor**

```bash
top                   # Show real-time process list
top -o %CPU           # Sort by CPU usage
top -o %MEM           # Sort by memory usage
```

**Interactive Commands in `top`:**

- Press `M` → Sort by memory usage
- Press `P` → Sort by CPU usage
- Press `K` → Kill a process by PID
- Press `q` → Quit `top`

#### **`htop` – Advanced Process Monitor**

`htop` is a more user-friendly version of `top`:

```bash
htop                  # Interactive process monitoring
```

**Why use `htop` over `top`?**

- Colored, interactive UI
- Easier process navigation
- Tree view for process hierarchy

---

### **Finding Processes (`pgrep` and `pidof`)**

```bash
pgrep process_name           # Find process by name
pgrep -u user_name           # Find processes owned by a user
pgrep -l apache              # Show PID and name of matching processes
pidof bash                   # Get PID of a running command
```

#### Example: Find all Python processes

```bash
pgrep -f "python"
```

---

## **3.3 Managing Process States**

### **Background & Foreground Processes (`&`, `fg`, `bg`)**

```bash
command &                 # Run a process in the background
jobs                      # List background jobs
fg %1                     # Bring job 1 to foreground
bg %1                     # Resume job 1 in background
```

**Example:**

```bash
sleep 300 &               # Run sleep command in background
```

---

### **Pausing & Resuming Processes (`Ctrl+Z`, `kill -STOP`, `kill -CONT`)**

```bash
kill -STOP PID            # Pause (stop) a process
kill -CONT PID            # Resume a paused process
```

**Example:**

```bash
sleep 1000 &
jobs                      # Check background jobs
kill -STOP <PID>          # Suspend the sleep command
kill -CONT <PID>          # Resume the sleep command
```

---

## **3.4 Killing Processes & Managing Resource-Hogs**

### **Killing Processes by PID**

```bash
kill PID                 # Terminate a process
kill -9 PID              # Force kill a process (SIGKILL)
kill -15 PID             # Gracefully terminate a process (SIGTERM)
```

#### **Kill signal options**

| Signal | Name | Description |
|--------|------|-------------|
| `1` | SIGHUP | Restart process |
| `9` | SIGKILL | Force kill process (cannot be caught) |
|`15` | SIGTERM | Graceful termination |

### **Killing Processes by Name**

```bash
pkill process_name       # Kill process by name
pkill -u username        # Kill all processes of a user
pkill -9 -f "python script.py"  # Force kill a specific script
```

### **Killing All Instances of a Process**

```bash
killall process_name     # Kill all processes with that name
killall -9 firefox       # Force kill all Firefox processes
```

---

## **3.5 Managing Resource Usage (CPU & Memory)**

### **Limiting CPU Usage (`cpulimit`)**

```bash
cpulimit -p <PID> -l 20  # Limit CPU usage of a process to 20%
```

### **Finding High CPU & Memory Usage**

```bash
ps -eo pid,%cpu,%mem,cmd --sort=-%cpu | head -10   # Top 10 CPU consumers
ps -eo pid,%cpu,%mem,cmd --sort=-%mem | head -10   # Top 10 Memory consumers
```

### **Restricting Resource Usage with `nice` and `renice`**

- `nice` controls the priority of a process **before** starting it.
- `renice` modifies priority **after** a process has started.

```bash
nice -n 10 command       # Start a command with lower priority
renice +5 -p PID         # Increase the priority of a running process
renice -10 -p PID        # Decrease priority (higher priority)
```

#### **Priority Levels:**

| Nice Value | Priority |
|------------|----------|
| `-20`| Highest priority |
| `0` | Default |
| `+19` | Lowest priority |

---

## **3.6 Advanced Process Control**

### **Running Processes Persistently (`nohup`, `disown`, `screen`)**

#### **`nohup` – Run Process Without Hangup**

```bash
nohup long-running-command &   # Run process immune to disconnection
```

#### **`disown` – Remove Process from Shell Control**

```bash
disown -h %1  # Detach process from terminal
```

#### **`screen` – Persistent Terminal Sessions**

```bash
screen                   # Start a new screen session
screen -S session_name   # Start screen with a name
screen -ls              # List running screen sessions
screen -r session_name  # Reattach to a session
```

Useful for running processes that must continue after logout.

---

## **3.7 Viewing Process Dependencies & Trees**

### **Showing Process Hierarchy (`pstree`)**

```bash
pstree -p               # Show process tree with PIDs
pstree -u user_name     # Show tree for a specific user
```

### **Checking Process Open Files (`lsof`)**

```bash
lsof -p PID            # Show files opened by a process
lsof -i :8080          # Check what process is using port 8080
```

### **Checking Process Network Activity (`netstat`, `ss`)**

```bash
netstat -tulnp         # Show processes using network ports
ss -tulnp              # Faster alternative to netstat
```

---

## **Process Management Summary**

Process management is **critical** for performance tuning, debugging, and
ensuring system stability. Here’s a quick recap:

| Command                     | Purpose                               |
| --------------------------- | ------------------------------------- |
| `ps`, `top`, `htop`         | View running processes                |
| `pgrep`, `pidof`            | Find process by name                  |
| `kill`, `pkill`, `killall`  | Terminate processes                   |
| `nice`, `renice`            | Adjust process priority               |
| `nohup`, `screen`, `disown` | Keep processes running after logout   |
| `lsof`, `netstat`, `ss`     | Monitor process file/network activity |

---

## **4.1 Understanding File Permissions**

Each file or directory in Linux has three types of **access permissions**
assigned to three categories of users:

| Category           | Symbol | Description                          |
| ------------------ | ------ | ------------------------------------ |
| **User (Owner)**   | `u`    | The file's owner                     |
| **Group**          | `g`    | Users who belong to the file's group |
| **Others (World)** | `o`    | Everyone else on the system          |

Each category can have three **permission types**:

| Permission  | Symbol | Numeric | Description               |
| ----------- | ------ | ------- | ------------------------- |
| **Read**    | `r`    | `4`     | View the file contents    |
| **Write**   | `w`    | `2`     | Modify the file contents  |
| **Execute** | `x`    | `1`     | Run the file as a program |

### **Viewing File Permissions**

To check a file’s permissions, use `ls -l`:

```bash
ls -l file.txt
```

Example output:

```bash
-rw-r--r--  1 user group  1234 Feb 15 12:30 file.txt
```

Breakdown:

- `-rw-r--r--` → File permissions
- `1` → Number of links
- `user` → Owner of the file
- `group` → Group associated with the file
- `1234` → File size in bytes
- `Feb 15 12:30` → Last modified date
- `file.txt` → File name

---

## **4.2 Changing Permissions with `chmod`**

### **Using Numeric (Octal) Mode**

The **numeric mode** represents permissions as a three-digit number:

- **User (Owner)** → **First digit**
- **Group** → **Second digit**
- **Others** → **Third digit**

Each digit is a **sum** of `r (4)`, `w (2)`, and `x (1)`:

| Mode  | Numeric     | Permissions                                              |
| ----- | ----------- | -------------------------------------------------------- |
| `777` | `rwxrwxrwx` | Everyone has full access                                 |
| `755` | `rwxr-xr-x` | Owner can edit & execute, others can only read & execute |
| `644` | `rw-r--r--` | Owner can read & write, others can only read             |
| `600` | `rw-------` | Only owner can read & write                              |
| `400` | `r--------` | Only owner can read                                      |
| `000` | `---------` | No access for anyone                                     |

### **Examples**

```bash
chmod 644 file.txt   # Owner can read & write, others can only read
chmod 755 script.sh  # Owner full access, others can execute but not modify
chmod -R 700 dir/    # Make directory private (recursively apply)
```

---

### **Using Symbolic Mode**

Instead of numbers, **symbolic mode** modifies permissions with `u`, `g`, `o`,
and `a` (all).

```bash
chmod u+x script.sh   # Give execute permission to the owner
chmod g-w file.txt    # Remove write permission from the group
chmod o+r file.txt    # Allow others to read
chmod a-x file.sh     # Remove execute permission for everyone
chmod u=rw,go=r file.txt  # Set explicit permissions: owner (rw), group & others (r)
```

---

## **4.3 Changing Ownership with `chown`**

The `chown` command **changes the owner and/or group** of a file or directory.

### **Changing File Ownership**

```bash
chown newuser file.txt     # Change file owner
chown newuser:newgroup file.txt  # Change file owner and group
```

### **Changing Ownership Recursively**

```bash
chown -R newuser:newgroup dir/   # Change ownership of all files in a directory
```

### **Changing Only the Group**

```bash
chgrp newgroup file.txt    # Change group ownership
```

### **Transferring Ownership of Multiple Files**

```bash
chown user:group file1 file2 file3
```

---

## **4.4 Understanding `umask` (Default Permissions)**

The **umask (User Mask)** defines **default** permissions for newly created
files and directories.

### **Checking the Current `umask`**

```bash
umask
```

Example output:

```bash
0022
```

The **umask value** subtracts permissions from **777 (for directories)** or
**666 (for files)**.

### **Common `umask` Values**

| `umask` | File Default      | Directory Default |
| ------- | ----------------- | ----------------- |
| `0000`  | `rw-rw-rw-` (666) | `rwxrwxrwx` (777) |
| `0022`  | `rw-r--r--` (644) | `rwxr-xr-x` (755) |
| `0077`  | `rw-------` (600) | `rwx------` (700) |

### **Changing `umask`**

```bash
umask 027   # Set default permissions: owner (rw), group (r), others (none)
umask 077   # Set strict private permissions
```

To make changes **permanent**, add `umask 027` to `~/.bashrc` or `/etc/profile`.

---

## **4.5 Special File Permissions (SUID, SGID, Sticky Bit)**

### **Set User ID (`SUID`)**

- Applies to **executables** (`chmod u+s`)
- When run, the **program inherits the owner's privileges**.

```bash
chmod u+s /usr/bin/passwd  # Enables `passwd` command to change passwords
```

Checking SUID files:

```bash
find / -perm -4000 -type f 2>/dev/null  # List all SUID files
```

---

### **Set Group ID (`SGID`)**

- Applies to **directories** (`chmod g+s`)
- **New files inherit the group** of the directory, instead of the user’s group.

```bash
chmod g+s /shared/dir  # Set SGID on a directory
```

Checking SGID files:

```bash
find / -perm -2000 -type f 2>/dev/null  # List all SGID files
```

---

### **Sticky Bit**

- Applies to **directories** (`chmod +t`)
- **Only the file owner can delete** their files inside the directory.

```bash
chmod +t /tmp  # Set Sticky Bit on /tmp to prevent users from deleting each other's files
```

Checking Sticky Bit directories:

```bash
ls -ld /tmp
```

Expected output:

```bash
drwxrwxrwt  10 root root  4096 Feb 15 12:30 /tmp
```

The `t` at the end means the **Sticky Bit** is enabled.

---

## **4.6 Advanced File Access Control (ACLs)**

For **granular permissions** beyond traditional **`chmod`**, use **ACLs (Access
Control Lists)**.

### **Checking ACLs**

```bash
getfacl file.txt
```

### **Setting ACLs**

```bash
setfacl -m u:username:rwx file.txt  # Give specific user full access
setfacl -m g:groupname:rw file.txt  # Give group read/write access
```

### **Removing ACLs**

```bash
setfacl -x u:username file.txt
```

---

## **File Ownership Summary**

Mastering Linux **permissions, ownership, and access control** is crucial for
**security and system integrity**.

| Command              | Purpose                      |
| -------------------- | ---------------------------- |
| `chmod`              | Modify file permissions      |
| `chown`              | Change file owner/group      |
| `chgrp`              | Change group ownership       |
| `umask`              | Set default file permissions |
| `ls -l`              | View file permissions        |
| `setfacl`, `getfacl` | Advanced access control      |

---

## **5.1 Checking Disk Usage**

Monitoring **disk usage** helps prevent performance issues and ensures
sufficient storage availability.

### **Checking Available Disk Space with `df`**

The `df` (**disk free**) command reports available and used disk space.

```bash
df -h                 # Show disk usage in human-readable format (MB, GB)
df -Th                # Display filesystem type along with usage
df -i                 # Show inode usage (useful when space is full but files are small)
df -x tmpfs           # Exclude temporary filesystems from results
```

Example output:

```bash
Filesystem     Type   Size  Used Avail Use% Mounted on
/dev/sda1      ext4   50G   20G   30G   40%  /
tmpfs          tmpfs   8G     0    8G    0%  /dev/shm
```

- `Size`: Total disk space
- `Used`: Space in use
- `Avail`: Free space
- `Use%`: Percentage of space used

---

### **Checking Directory & File Sizes with `du`**

The `du` (**disk usage**) command calculates disk space used by files and
directories.

```bash
du -sh file.txt       # Show the size of a single file
du -sh *              # Show sizes of files and directories in the current folder
du -sh /home/user     # Check size of a specific directory
du -h --max-depth=1 /var/log   # Show total sizes of subdirectories (one level deep)
```

Example output:

```bash
2.3G    /home/user/Documents
1.2G    /home/user/Downloads
```

- `-s`: Summary (only show total size)
- `-h`: Human-readable output (MB, GB)
- `--max-depth=1`: Limit recursion depth

### **Finding the Largest Files & Directories**

```bash
du -ah /var | sort -rh | head -10   # Show top 10 largest files in /var
find / -type f -size +1G            # Find files larger than 1GB
```

---

## **5.2 Listing & Identifying Storage Devices**

### **List Block Devices with `lsblk`**

```bash
lsblk
```

Example output:

```bash
NAME   MAJ:MIN RM   SIZE RO TYPE MOUNTPOINT
sda      8:0    0 465.8G  0 disk
├─sda1   8:1    0   50G   0 part /
├─sda2   8:2    0   50G   0 part /home
└─sda3   8:3    0 365.8G  0 part /data
sdb      8:16   1  14.9G  0 disk
└─sdb1   8:17   1  14.9G  0 part /mnt/usb
```

- `sda`, `sdb`: Primary disks
- `sda1`, `sda2`: Partitions
- `MOUNTPOINT`: Where the partition is mounted

### **Show Device Information with `blkid`**

```bash
blkid
```

Example output:

```bash
/dev/sda1: UUID="abc123" TYPE="ext4"
/dev/sdb1: UUID="def456" TYPE="vfat"
```

- **UUID**: Unique identifier for the partition
- **TYPE**: Filesystem type (ext4, NTFS, FAT32, etc.)

---

## **5.3 Mounting & Unmounting Storage Devices**

### **Manually Mount a Drive**

```bash
sudo mount /dev/sdb1 /mnt
```

- `sdb1`: Partition to mount
- `/mnt`: Target directory (mount point)

### **Mount a Drive with a Specific Filesystem**

```bash
sudo mount -t ext4 /dev/sdb1 /mnt   # Mount as ext4
sudo mount -t vfat /dev/sdb1 /mnt   # Mount FAT32 USB drive
```

### **Unmounting a Drive**

```bash
sudo umount /mnt
```

or

```bash
sudo umount /dev/sdb1
```

---

### **Persistent Mounting with `/etc/fstab`**

To automatically mount a drive at boot, add an entry to `/etc/fstab`:

```bash
UUID=abc123 /mnt/backup ext4 defaults 0 2
```

Find the UUID of a drive:

```bash
blkid /dev/sdb1
```

---

## **5.4 Formatting & Partitioning Disks**

### **Checking Disk Partitions with `fdisk`**

```bash
sudo fdisk -l
```

Example output:

```bash
Disk /dev/sda: 500GB
Device     Boot  Start      End  Sectors  Size  Id  Type
/dev/sda1  *      2048  1050623  1048576  512M  83  Linux
/dev/sda2       1050624 976773167 975722544 466G  8e  Linux LVM
```

### **Creating a New Partition**

1. Open `fdisk`:

   ```bash
   sudo fdisk /dev/sdb
   ```

2. Create a partition:
   - Press `n` (new partition)
   - Choose partition number
   - Press `w` (write changes)

### **Formatting a Partition**

Format a new partition with a filesystem:

```bash
sudo mkfs.ext4 /dev/sdb1      # Format as ext4
sudo mkfs.vfat -F32 /dev/sdb1  # Format as FAT32
sudo mkfs.ntfs /dev/sdb1       # Format as NTFS
```

---

## **5.5 Working with Swap Space**

### **Checking Current Swap Usage**

```bash
free -h
swapon --summary
```

### **Adding Swap Space**

#### **Step 1: Create a Swap File**

```bash
sudo fallocate -l 2G /swapfile   # Create a 2GB swap file
sudo chmod 600 /swapfile         # Secure the file
sudo mkswap /swapfile            # Format it as swap
sudo swapon /swapfile            # Activate swap
```

#### **Step 2: Make Swap Permanent**

Add this line to `/etc/fstab`:

```bash
/swapfile none swap sw 0 0
```

---

## **5.6 Managing Logical Volumes (LVM)**

### **Checking LVM Volumes**

```bash
lsblk
sudo lvdisplay
```

### **Creating an LVM Partition**

```bash
sudo pvcreate /dev/sdb1     # Create a physical volume
sudo vgcreate my_vg /dev/sdb1  # Create a volume group
sudo lvcreate -L 10G -n my_lv my_vg  # Create a logical volume
sudo mkfs.ext4 /dev/my_vg/my_lv  # Format the new volume
```

### **Extending an LVM Partition**

```bash
sudo lvextend -L +5G /dev/my_vg/my_lv   # Increase size by 5GB
sudo resize2fs /dev/my_vg/my_lv         # Resize the filesystem
```

---

## **Disk Summary**

| Command     | Purpose                       |
| ----------- | ----------------------------- |
| `df -h`     | Show disk space usage         |
| `du -sh`    | Show file/directory size      |
| `lsblk`     | List mounted disks            |
| `blkid`     | Show UUID and filesystem type |
| `mount`     | Mount a device                |
| `umount`    | Unmount a device              |
| `fdisk -l`  | Show partition table          |
| `mkfs.ext4` | Format a partition            |
| `swapon`    | Enable swap space             |
| `lvextend`  | Extend LVM partitions         |

---

## **6.1 Viewing Network Configuration**

### **Checking IP Addresses (`ip a`)**

The `ip a` (short for `ip address show`) command displays the system's network
interfaces and assigned IP addresses.

```bash
ip a
```

Example output:

```bash
1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536
    inet 127.0.0.1/8 scope host lo
2: eth0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500
    inet 192.168.1.100/24 brd 192.168.1.255 scope global eth0
```

- `lo`: Loopback interface (127.0.0.1)
- `eth0`: Ethernet interface with assigned IP (`192.168.1.100/24`)

#### **Show IPv4 or IPv6 Only**

```bash
ip -4 a    # Show only IPv4 addresses
ip -6 a    # Show only IPv6 addresses
```

---

### **Checking the Routing Table (`ip r`)**

The `ip r` (short for `ip route show`) command displays the system's routing
table.

```bash
ip r
```

Example output:

```bash
default via 192.168.1.1 dev eth0
192.168.1.0/24 dev eth0 proto kernel scope link
```

- `default via 192.168.1.1` → Default gateway (router)
- `192.168.1.0/24 dev eth0` → Local network subnet

#### **Adding a Static Route**

```bash
sudo ip route add 10.10.10.0/24 via 192.168.1.1 dev eth0
```

---

### **Displaying Network Interfaces (`ip link`)**

To list network interfaces:

```bash
ip link show
```

Example output:

```bash
1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN
2: eth0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc fq_codel state UP
```

---

## **6.2 Checking Open Ports and Network Connections**

### **Checking Listening Ports (`netstat`, `ss`)**

To find out which ports are open and which services are listening:

#### **Using `netstat`**

```bash
netstat -tulnp
```

- `-t` → Show TCP ports
- `-u` → Show UDP ports
- `-l` → Show listening ports
- `-n` → Show numeric addresses instead of hostnames
- `-p` → Show process using the port

Example output:

```bash
Proto Recv-Q Send-Q Local Address  Foreign Address  State   PID/Program name
tcp   0      0      0.0.0.0:22     0.0.0.0:*        LISTEN  1023/sshd
tcp   0      0      127.0.0.1:3306 0.0.0.0:*        LISTEN  1204/mysqld
```

#### **Using `ss` (Recommended Alternative to `netstat`)**

```bash
ss -tulnp
```

Faster than `netstat`, `ss` provides the same information but is optimized for
modern Linux systems.

#### **Finding What’s Using a Specific Port**

```bash
sudo netstat -tulnp | grep 80  # Find which process is using port 80
sudo ss -tulnp | grep :443     # Find what’s listening on port 443
```

---

## **6.3 Testing Network Connectivity**

### **Checking Network Connectivity with `ping`**

```bash
ping google.com
```

Sends **ICMP packets** to a destination to check reachability.

#### **Options:**

```bash
ping -c 5 google.com  # Send 5 pings
ping -i 0.2 google.com  # Ping every 0.2 seconds
ping -s 1000 google.com  # Send packets with a size of 1000 bytes
```

### **Tracing the Route to a Host (`traceroute`)**

To diagnose network routing issues:

```bash
traceroute google.com
```

Example output:

```bash
 1  router.local (192.168.1.1)  1.234 ms
 2  10.10.10.1 (10.10.10.1)  5.678 ms
 3  192.168.0.1 (192.168.0.1)  9.012 ms
 4  google.com (8.8.8.8)  20.123 ms
```

Each hop represents a router along the route.

#### **Alternative: Using `mtr`**

For real-time updates, use `mtr`:

```bash
mtr google.com
```

`mtr` provides a continuous traceroute view.

---

## **6.4 Managing Network Connections**

### **Bringing Up & Down Network Interfaces**

```bash
sudo ip link set eth0 up   # Enable an interface
sudo ip link set eth0 down # Disable an interface
```

### **Releasing and Renewing DHCP Address**

```bash
sudo dhclient -r eth0  # Release IP address
sudo dhclient eth0     # Renew IP address
```

---

## **6.5 Downloading Files from the Web**

### **Downloading Files with `wget`**

```bash
wget http://example.com/file.zip
```

#### **Common Options**

```bash
wget -c http://example.com/file.zip  # Resume a download
wget -O custom_name.zip http://example.com/file.zip  # Rename file on download
wget -r -np -nH http://example.com/files/  # Download entire directory recursively
```

---

### **Downloading Files with `curl`**

```bash
curl -O http://example.com/file.zip
```

#### **Common Examples**

```bash
curl -o custom_name.zip http://example.com/file.zip  # Save file with a different name
curl -C - -O http://example.com/file.zip  # Resume a download
curl -L -O http://example.com/file.zip  # Follow redirects
```

#### **Downloading Multiple Files**

```bash
curl -O http://example.com/file1.zip -O http://example.com/file2.zip
```

---

## **6.6 Advanced Networking Tools**

### **Checking External IP Address**

```bash
curl ifconfig.me
curl -4 ifconfig.me  # Show only IPv4 address
curl -6 ifconfig.me  # Show only IPv6 address
```

### **Checking DNS Resolution**

```bash
nslookup google.com
dig google.com +short
host google.com
```

### **Testing Network Bandwidth**

```bash
iperf3 -s  # Start iperf3 as a server
iperf3 -c server_ip  # Run iperf3 as a client
```

---

## **7.1 Viewing User Information**

### **Check the Current Logged-in User**

```bash
whoami
```

This command simply returns the username of the current session.

### **Get Detailed Information About a User**

```bash
id
```

Example output:

```bash
uid=1001(john) gid=1001(john) groups=1001(john),27(sudo)
```

- `uid=1001` → User ID (UID)
- `gid=1001` → Primary Group ID (GID)
- `groups=1001(john),27(sudo)` → Groups the user belongs to

### **List Currently Logged-in Users**

```bash
who
```

Example output:

```bash
john   tty2         2024-02-17 14:30 (:0)
alice  pts/1        2024-02-17 14:32 (192.168.1.100)
```

- `john tty2` → John is logged into a physical terminal
- `alice pts/1` → Alice is connected remotely from `192.168.1.100`

### **Show Active User Sessions**

```bash
w
```

Example output:

```bash
USER     TTY      FROM             LOGIN@   IDLE   JCPU   PCPU WHAT
john     tty2     :0               14:30    2:34   0.01s  0.01s bash
alice    pts/1    192.168.1.100    14:32    0.00s  0.12s  0.08s sshd
```

This provides additional details, including CPU and process usage.

---

## **7.2 Creating and Managing Users**

### **Creating a New User**

```bash
sudo adduser newuser
```

- This creates a **home directory** at `/home/newuser`
- Prompts to set a **password**
- Adds user to default groups

### **Creating a User Without a Home Directory**

```bash
sudo useradd -M newuser
```

Use `-m` to create a home directory if needed:

```bash
sudo useradd -m newuser
```

### **Setting a Password for a User**

```bash
sudo passwd newuser
```

Example output:

```bash
Enter new UNIX password:
Retype new UNIX password:
passwd: password updated successfully
```

### **Changing User Details**

Modify a user’s **full name, room number, phone, etc.**:

```bash
sudo chfn newuser
```

---

## **7.3 Deleting Users**

### **Remove a User (Without Deleting Files)**

```bash
sudo userdel newuser
```

### **Remove a User and Their Home Directory**

```bash
sudo userdel -r newuser
```

---

## **7.4 Managing Groups**

### **View Groups for a User**

```bash
groups john
```

Example output:

```bash
john : john sudo docker
```

This means **john** is in the `john`, `sudo`, and `docker` groups.

### **List All Groups on the System**

```bash
cut -d: -f1 /etc/group
```

### **Creating a New Group**

```bash
sudo groupadd developers
```

### **Adding a User to a Group**

```bash
sudo usermod -aG developers john
```

- `-aG` → Append the user to the group **without removing them from others**

### **Removing a User from a Group**

```bash
sudo deluser john developers
```

### **Changing a User’s Primary Group**

```bash
sudo usermod -g developers john
```

This changes **john's primary group** to `developers`.

---

## **7.5 Granting Administrative (sudo) Privileges**

### **Adding a User to the `sudo` Group**

```bash
sudo usermod -aG sudo john
```

- Users in the `sudo` group can execute commands as **root**.

### **Checking sudo Access**

```bash
sudo -l -U john
```

This lists commands `john` is allowed to run with `sudo`.

### **Giving a User Root Privileges**

```bash
sudo visudo
```

Add the following line:

```bash
john ALL=(ALL) NOPASSWD:ALL
```

This allows `john` to run any command as root **without a password prompt**.

---

## **7.6 Managing Logged-in Users & Sessions**

### **Forcing a User to Log Out**

```bash
sudo pkill -KILL -u john
```

### **List All User Processes**

```bash
ps -u john
```

### **Manually Switching Users**

```bash
su - john
```

- Logs in as `john` (requires password)

To **switch to root**, use:

```bash
sudo -i
```

---

## **7.7 Managing User Login Policies**

### **Prevent a User from Logging In**

```bash
sudo usermod -L john  # Lock the account
```

To **unlock** the account:

```bash
sudo usermod -U john
```

### **Disable User Login Without Deleting Their Account**

```bash
sudo passwd -l john
```

### **Restrict SSH Access to Specific Users**

Edit `/etc/ssh/sshd_config`:

```bash
AllowUsers alice bob
DenyUsers guest
```

Restart SSH:

```bash
sudo systemctl restart ssh
```

---

## **7.8 Managing User Expiration & Account Locking**

### **Setting an Expiration Date for a User**

```bash
sudo chage -E 2024-12-31 john
```

This locks `john`'s account on **December 31, 2024**.

### **Forcing a User to Change Password on Next Login**

```bash
sudo chage -d 0 john
```

### **Viewing a User's Password Expiry Information**

```bash
chage -l john
```

Example output:

```bash
Last password change:    Feb 17, 2024
Password expires:        May 17, 2024
Account expires:         Never
Minimum number of days between password change: 7
```

---

## **7.9 Viewing and Editing System User Files**

### **Checking System Users**

```bash
cat /etc/passwd
```

Example entry:

```bash
john:x:1001:1001:John Doe:/home/john:/bin/bash
```

- `1001:1001` → UID and GID
- `/home/john` → Home directory
- `/bin/bash` → Default shell

### **Viewing Encrypted Passwords**

```bash
sudo cat /etc/shadow
```

### **Checking Group Membership**

```bash
cat /etc/group | grep sudo
```

---

## **7.10 Creating Temporary or Restricted Users**

### **Creating a User Without a Login Shell**

```bash
sudo useradd -s /usr/sbin/nologin guest
```

This prevents `guest` from logging in.

### **Creating a User with an Expiring Account**

```bash
sudo useradd -e 2024-12-31 tempuser
```

---

## **User Management Quickview**

| Command       | Purpose                          |
| ------------- | -------------------------------- |
| `whoami`      | Show current user                |
| `id`          | Show user and group info         |
| `who` / `w`   | List logged-in users             |
| `adduser`     | Create a new user                |
| `passwd`      | Change a user’s password         |
| `userdel -r`  | Delete a user and home directory |
| `groupadd`    | Create a new group               |
| `usermod -aG` | Add a user to a group            |
| `chage -E`    | Set account expiration date      |
| `sudo visudo` | Edit sudo privileges             |

---

## **8.1 Checking System Uptime**

The `uptime` command provides a quick summary of how long the system has been
running.

```bash
uptime
```

Example output:

```bash
14:30:45 up 10 days, 3:45,  2 users,  load average: 0.24, 0.30, 0.20
```

- **10 days, 3:45** → System has been running for 10 days, 3 hours, 45 minutes
- **2 users** → Number of logged-in users
- **Load average** → System load in the last **1, 5, and 15 minutes**

### **Check Uptime in Human-Readable Format**

```bash
uptime -p
```

Example:

```bash
up 10 days, 3 hours, 45 minutes
```

---

## **8.2 Viewing Kernel Messages (`dmesg`)**

The `dmesg` command displays messages from the **kernel ring buffer**, which
logs **hardware events, boot messages, and driver issues**.

### **View Recent Kernel Messages**

```bash
dmesg | tail -20
```

This shows the last 20 kernel log messages.

### **View Hardware Errors (e.g., Disk, CPU, RAM Issues)**

```bash
dmesg | grep -i "error"
```

### **Monitor New Kernel Messages in Real-Time**

```bash
dmesg -w
```

### **Filter Specific Events**

```bash
dmesg | grep -i "usb"    # Show USB device logs
dmesg | grep -i "eth0"   # Show network interface logs
```

### **Clear Kernel Message Buffer**

```bash
sudo dmesg -C
```

---

## **8.3 Monitoring System Performance (`vmstat`)**

The `vmstat` (**virtual memory statistics**) command provides a summary of
**CPU, memory, swap, and disk activity**.

```bash
vmstat 1
```

Example output (updated every second):

```bash
procs -----------memory---------- ---swap-- -----io---- -system-- -------cpu-------
 r  b   swpd   free   buff  cache   si   so    bi    bo   in   cs us sy id wa st gu
 4  0    296 7336348 441296 4546304   64   57   340   193 2725  374 12 15 71  2  0  0
```

**Key Metrics:**

- `r` → Number of runnable processes (waiting for CPU)
- `b` → Number of blocked processes
- `free` → Free memory in KB
- `buff/cache` → Memory used for disk caching
- `si/so` → Swap-in and swap-out activity
- `bi/bo` → Block input/output operations
- `us/sy/id/wa` → CPU usage (user, system, idle, waiting for I/O)

### **Monitor Performance Every 2 Seconds**

```bash
vmstat 2
```

### **Show Disk I/O Statistics**

```bash
vmstat -d
```

---

## **8.4 Monitoring CPU & Disk Usage (`iostat`)**

The `iostat` command provides detailed **CPU and disk I/O usage statistics**.

```bash
iostat
```

Example output:

```bash
avg-cpu:  %user   %nice %system %iowait  %steal   %idle
          10.2     0.0     5.8      2.0     0.0    82.0

Device            tps    kB_read/s    kB_wrtn/s    kB_read    kB_wrtn
sda              2.50       123.00       456.00    1203045    4587321
```

- **%user** → CPU time spent on user processes
- **%system** → CPU time spent on system processes
- **%iowait** → CPU waiting for disk I/O (high values indicate disk bottlenecks)
- **tps** → Transfers per second
- **kB_read/s** / **kB_wrtn/s** → Disk read/write speed

### **Monitor CPU & Disk I/O Every 3 Seconds**

```bash
iostat -c -d 3
```

### **Check Disk Latency**

```bash
iostat -x
```

This shows extended disk I/O statistics, including **average wait time
(await)**.

---

## **8.5 Real-Time System Monitoring Tools**

### **Monitoring CPU & Memory Usage (`top`)**

The `top` command displays real-time **CPU, memory, and process** usage.

```bash
top
```

**Useful Interactive Commands in `top`:**

- Press `M` → Sort by memory usage
- Press `P` → Sort by CPU usage
- Press `K` → Kill a process by PID
- Press `q` → Quit

### **Enhanced Process Monitoring (`htop`)**

The `htop` command is an interactive, user-friendly alternative to `top`.

```bash
htop
```

Features:

- Colored CPU, memory, and swap usage graphs
- Tree view for process hierarchy
- Easy process management

---

## **8.6 Network Performance Monitoring**

### **Monitor Network Usage (`iftop`)**

```bash
sudo iftop -i eth0
```

Displays **real-time bandwidth usage** by IP address.

### **Check Network Connections (`netstat` or `ss`)**

```bash
netstat -tulnp  # Show listening network ports
ss -tulnp       # Faster alternative to netstat
```

---

## **8.7 Checking System Load & Bottlenecks**

### **Checking System Load (`uptime` & `w`)**

```bash
uptime
w
```

- **Load average** values:
  - **1.00** (1 CPU fully utilized)
  - **0.50** (50% CPU usage)

### **Identifying High CPU Usage (`pidstat`)**

```bash
pidstat -u 2
```

Shows **CPU usage per process** every 2 seconds.

### **Identifying High Memory Usage**

```bash
ps aux --sort=-%mem | head -10
```

Displays the **top 10 memory-consuming processes**.

---

## **8.8 Disk Space & Filesystem Monitoring**

### **Check Disk Space Usage (`df`)**

```bash
df -h
```

Shows **free and used space** on mounted filesystems.

### **Find Large Files (`du`)**

```bash
du -ah / | sort -rh | head -10
```

Finds **top 10 largest files**.

---

## **8.9 Log Monitoring & Analysis**

### **View System Logs (`journalctl`)**

```bash
journalctl -xe
```

Shows **recent system errors**.

### **Check Authentication Logs**

```bash
sudo cat /var/log/auth.log | tail -20
```

### **Monitor Logs in Real-Time**

```bash
tail -f /var/log/syslog
```

---

## **System Monitoring Quickview**

| Command             | Purpose                                   |
| ------------------- | ----------------------------------------- |
| `uptime`            | Show system uptime & load                 |
| `dmesg \| tail -20` | View recent kernel logs                   |
| `vmstat 1`          | Monitor CPU, memory, and I/O every second |
| `iostat -c -d`      | Check CPU & disk usage                    |
| `top` / `htop`      | Real-time process monitoring              |
| `df -h`             | Show disk space usage                     |
| `iftop`             | Monitor real-time network bandwidth       |
| `journalctl -xe`    | View system logs                          |

---

## **9.1 Command History & Reuse**

Linux keeps a **history of executed commands**, which can be viewed and reused
to save time.

### **Viewing Command History**

```bash
history
```

Example output:

```bash
  1  ls -l
  2  cd /var/log
  3  cat syslog
  4  history
```

### **Running a Command from History**

```bash
!3  # Repeats command number 3 (cat syslog)
```

### **Search Command History (`Ctrl + R`)**

Press `Ctrl + R`, then type part of a command to search previous entries.

### **Clearing Command History**

```bash
history -c
```

**Note:** The session’s history may still be saved in `~/.bash_history`.

---

## **9.2 Creating & Managing Aliases**

Aliases are **shortcuts for frequently used commands**.

### **Creating an Alias**

```bash
alias ll='ls -lah'
```

Now, running `ll` is equivalent to:

```bash
ls -lah
```

### **Making Aliases Permanent**

Add them to `~/.bashrc` or `~/.bash_aliases`:

```bash
echo "alias ll='ls -lah'" >> ~/.bashrc
source ~/.bashrc
```

### **Listing All Defined Aliases**

```bash
alias
```

### **Removing an Alias**

```bash
unalias ll
```

---

## **9.3 Running Commands in the Background**

Linux allows **background execution of tasks**, freeing the terminal for other
work.

### **Running a Command in the Background**

```bash
nohup command &
```

- `nohup` → Ensures the command keeps running even after logout.
- `&` → Runs the command in the background.

Example:

```bash
nohup python3 script.py &
```

### **Listing Background Jobs**

```bash
jobs
```

### **Bringing a Background Job to the Foreground**

```bash
fg %1   # Bring job 1 to the foreground
```

### **Detaching a Background Job (`disown`)**

To keep a background job running even after closing the terminal:

```bash
disown -h %1
```

---

## **9.4 Repeating Commands Periodically (`watch`)**

The `watch` command **automatically reruns a command at fixed intervals**.

```bash
watch -n 5 "ls -l"
```

- Runs `ls -l` every **5 seconds**.

### **Monitor Disk Usage Every 2 Seconds**

```bash
watch -n 2 df -h
```

### **Highlight Changes**

```bash
watch -d "ls -l"
```

- `-d` → Highlights differences between updates.

---

## **9.5 Running Multiple Commands Together**

### **Chaining Commands (`;`)**

Runs multiple commands in **sequence**, regardless of success/failure.

```bash
command1; command2; command3
```

Example:

```bash
echo "Updating system"; sudo apt update; sudo apt upgrade -y
```

### **Conditional Execution (`&&` and `||`)**

- `&&` → Runs the next command **only if** the previous one succeeds.
- `||` → Runs the next command **only if** the previous one fails.

Example:

```bash
mkdir newdir && cd newdir   # Create directory and enter it (only if mkdir succeeds)
ls file.txt || echo "File not found"  # Show error message if file is missing
```

---

## **9.6 Time Execution (`time`)**

The `time` command measures **execution time of a command**.

```bash
time ls -R /
```

Example output:

```bash
real    0m1.234s
user    0m0.678s
sys     0m0.456s
```

- `real` → Total elapsed time.
- `user` → Time spent in **user mode**.
- `sys` → Time spent in **kernel mode**.

---

## **9.7 Preventing Accidental Deletion (`rm -i`)**

To add a **confirmation prompt** before deleting files:

```bash
alias rm='rm -i'
```

Now, running `rm file.txt` will prompt:

```bash
rm: remove regular file ‘file.txt’? y/n
```

To restore `rm` behavior:

```bash
unalias rm
```

---

## **9.8 Creating Temporary Files & Directories**

### **Creating a Temporary File**

```bash
mktemp
```

Example output:

```bash
/tmp/tmp.XYZ12345
```

### **Creating a Temporary Directory**

```bash
mktemp -d
```

These are automatically deleted on system reboot.

---

## **9.9 Generating Random Numbers & Strings**

### **Generate a Random Number (0–32767)**

```bash
echo $RANDOM
```

- Built-in Bash variable.
- Produces a random integer between 0 and 32767.

---

### **Generate a Random Number in a Custom Range (e.g. 1–100)**

```bash
echo $(( RANDOM % 100 + 1 ))
```

- `% 100` gives you a number from 0–99.
- `+ 1` shifts it to 1–100.
- Useful for games, scripts, or seed values.

---

### **Generate a 10-Character Random Alphanumeric String**

```bash
cat /dev/urandom | tr -dc 'A-Za-z0-9' | head -c 10
```

- Uses the kernel's random byte stream.
- Filters to alphanumeric characters only.
- Generates a 10-character string.

---

### **Generate a Cryptographically Secure Random String (16 bytes)**

```bash
openssl rand -base64 16
```

- Uses OpenSSL’s secure random generator.
- Encodes output in base64 (printable characters).
- Ideal for secrets, tokens, or passwords.

---

### **Generate a Random Hexadecimal String (32 chars / 16 bytes)**

```bash
openssl rand -hex 16
```

- Outputs 16 random bytes in hexadecimal (32 hex chars).
- Great for API keys, tokens, etc.

---

### **Generate a UUID (Universally Unique Identifier)**

```bash
uuidgen
```

- Outputs a standard UUID (e.g., `550e8400-e29b-41d4-a716-446655440000`).
- Useful for unique file IDs, user tokens, etc.

---

## **9.10 Debugging Scripts (`set -x`)**

To enable **debug mode** in Bash scripts:

```bash
set -x
```

Example:

```bash
#!/bin/bash
set -x
echo "Debugging Mode Enabled"
```

Disable debugging with:

```bash
set +x
```

---

## **9.11 Scheduling Tasks (at & cron)**

Linux provides two main tools for scheduling tasks:

- **`at`** — for one-time, scheduled tasks
- **`cron`** — for recurring or periodic tasks

---

### **One-Time Tasks with `at`**

Use `at` to schedule a command to run once at a specific time in the future.

#### Run a Command at a Specific Time

```bash
echo "shutdown -h now" | at 23:00
```

> Schedules a system shutdown at **11:00 PM** today.

You can also specify times like:

- `at now + 1 hour`
- `at 8:30 AM tomorrow`
- `at midnight`

#### List Scheduled `at` Jobs

```bash
atq
```

> Shows your currently scheduled `at` jobs.

#### Remove a Scheduled `at` Job

```bash
atrm <job_id>
```

> Removes a scheduled job by its ID (shown in `atq`).

---

### **Recurring Tasks with `cron`**

Use `cron` when you want to **run tasks repeatedly** (e.g., every day, every week, every 5 minutes, etc.).

#### Edit Your Crontab

```bash
crontab -e
```

> Opens your user-specific cron schedule in the default text editor.

#### View Your Crontab

```bash
crontab -l
```

> Lists your currently scheduled cron jobs.

#### Remove Your Crontab

```bash
crontab -r
```

> Deletes your entire crontab file (⚠️ use with caution!).

---

### **Cron Job Format**

Each line in your crontab follows this format:

```text
* * * * * /path/to/command
│ │ │ │ │
│ │ │ │ └─ Day of the week (0–7) (Sunday is 0 or 7)
│ │ │ └─── Month (1–12)
│ │ └───── Day of the month (1–31)
│ └─────── Hour (0–23)
└───────── Minute (0–59)
```

#### Example: Run a Backup Script Every Day at 2 AM

```bash
0 2 * * * /home/user/scripts/backup.sh
```

---

### Use `cron` with `logger` to debug

```bash
* * * * * echo "It works!" | logger
```

> Sends output to syslog so you can check it with `journalctl` or `tail /var/log/syslog`.

## **Misc Quickview**

| Command             | Purpose                              |
| ------------------- | ------------------------------------ |
| `history`           | View command history                 |
| `alias` / `unalias` | Create/remove command shortcuts      |
| `nohup command &`   | Run command in background            |
| `watch`             | Run a command at intervals           |
| `time`              | Measure execution time               |
| `rm -i`             | Prompt before deleting files         |
| `mktemp`            | Create a temporary file or directory |
| `$RANDOM`           | Generate a random number             |
| `set -x`            | Enable script debugging              |
| `at`                | Schedule a one-time task             |
