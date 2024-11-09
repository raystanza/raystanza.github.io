---
title: An Exercise in Futility
layout: blog
description: "Showcasing acts of futility, creativity, and technology projects by Jim Sines."
keywords: "Jim Sines, tech blog, coding, creativity"

# Open Graph metadata for social sharing
og_title: "An Exercise in Futility - Tech & Creativity by Jim Sines"
og_description: "Explore technology projects, coding insights, and creative endeavors by Jim Sines."
og_image: "/assets/icons/og-image.jpg"
---

Welcome to **{{ site.title }}**, where I showcase various projects, thoughts, and acts of futility. Here you’ll find my latest posts and updates on technology, coding, and creativity.

<div id="greeting" style="margin-top: 1rem; font-style: italic;"></div>

<script>
  const hour = new Date().getHours();
  const greetingElement = document.getElementById('greeting');
  
  if (hour >= 6 && hour < 12) {
    greetingElement.textContent = "🌞 Good morning, visitor! Dive into some content to start your day!";
  } else if (hour >= 12 && hour < 18) {
    greetingElement.textContent = "🌞 Good afternoon! Here’s something interesting for your afternoon.";
  } else {
    greetingElement.textContent = "🌜 Good evening! Wind down with some late-night reading.";
  }
</script>
