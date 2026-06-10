# c0redumpsec.github.io

Astro-powered static blog for c0redumpsec.

## Development

Install dependencies:

```bash
npm install
```

Run locally:

```bash
npm run dev
```

Build:

```bash
npm run build
```

## Content

Blog posts live in:

```text
src/content/blog/
```

Posts use Markdown frontmatter:

```md
---
title: "Post Title"
description: "Short description."
pubDate: 2026-06-09
tags: ["security", "learning"]
draft: false
---
```

Set `draft: true` to hide a post from builds.

## Deployment

The site is deployed to GitHub Pages using GitHub Actions.

## Notes

This README is for the repository only. 

Repo structure:

```text
src
├── content
│   └── blog
│       └── blog-page.md
├── content.config.ts
├── layouts
│   ├── BlogPost.astro
│   └── PageLayout.astro
├── pages
│   ├── about.md
│   ├── blog
│   │   ├── index.astro
│   │   └── [slug].astro
│   ├── index.astro
│   └── rss.xml.js
└── styles
    └── global.css
```
