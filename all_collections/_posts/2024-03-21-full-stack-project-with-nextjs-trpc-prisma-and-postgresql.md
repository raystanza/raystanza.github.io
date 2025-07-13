---
layout: post
title: "Setting Up a Full-Stack Project (Next.js, tRPC, Prisma, PostgreSQL)"
date: 2024-03-21 07:00:00 -04:00

description: >
  A step-by-step guide to building scalable, type-safe full-stack applications using Next.js, tRPC for end-to-end type-safe APIs, Prisma ORM for database modeling, and PostgreSQL for reliable data storage.

canonical_url: "https://raystanza.uk/posts/full-stack-project-with-nextjs-trpc-prisma-and-postgresql/"

categories:
  - tutorials
  - fullstack
  - nextjs
  - trpc
  - prisma
  - postgresql

tags:
  - full-stack
  - next.js
  - trpc
  - prisma
  - postgresql
  - typescript
  - web development
  - tutorial

image: "/assets/images/articles/full-stack-next-trpc-prisma-postgres-og.png"
image_alt: "Diagram showing full-stack architecture with Next.js, tRPC, Prisma, and PostgreSQL"
image_caption: "Integrating Next.js, tRPC, Prisma ORM, and PostgreSQL"

og_type: "article"
og_title: "Full-Stack Mastery: Architecting Modern Web Applications with Next.js, tRPC, Prisma, and PostgreSQL"
og_description: >
  A step-by-step guide to building scalable, type-safe full-stack applications using Next.js, tRPC for end-to-end type-safe APIs, Prisma ORM for database modeling, and PostgreSQL for reliable data storage.

robots: "index, follow"

twitter:
  card: "summary_large_image"
  creator: "@realcaptgeech"
---
In this article, we're diving into the process of setting up a full-stack project using a powerful combination of technologies: Next.js, tRPC, Prisma, and PostgreSQL. This stack enables developers to build scalable, type-safe applications with ease. We'll walk through each step, from initializing the project to configuring each technology, providing example code and commands to guide you through the setup.

## Prerequisites

Before we start, ensure you have the following installed:

- Node.js (v14 or later)
- npm or yarn
- PostgreSQL
- A code editor (e.g., Visual Studio Code)

## Step 1: Setting Up Next.js

First, let's create a Next.js project. Open your terminal and run:

```bash
npx create-next-app@latest my-fullstack-app
cd my-fullstack-app
```

This command scaffolds a new Next.js project in the `my-fullstack-app` directory.

## Step 2: Adding TypeScript

Next.js supports TypeScript out of the box. Let's convert our project to TypeScript:

```bash
touch tsconfig.json
yarn add --dev typescript @types/react @types/node
```

Restart your development server (`yarn dev`), and Next.js will automatically configure TypeScript for you.

## Step 3: Integrating Prisma with PostgreSQL

Prisma is an ORM (Object-Relational Mapping) tool that makes database operations easy and type-safe.

### 3.1 Install Prisma CLI

```bash
yarn add prisma --dev
yarn add @prisma/client
```

### 3.2 Initialize Prisma

Run the following command to create a `prisma` directory with a `schema.prisma` file inside:

```bash
npx prisma init
```

### 3.3 Configure Prisma to Use PostgreSQL

Edit the `prisma/schema.prisma` file to define your PostgreSQL connection string:

```prisma
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}
```

Replace `DATABASE_URL` with your PostgreSQL database URL in the `.env` file.

### 3.4 Define Your Prisma Model

In `schema.prisma`, define a model for your application. For example, a `User` model:

```prisma
model User {
  id        Int      @id @default(autoincrement())
  email     String   @unique
  name      String?
  createdAt DateTime @default(now())
}
```

### 3.5 Generate Prisma Client

Run the following command to generate the Prisma client:

```bash
npx prisma generate
```

## Step 4: Setting Up tRPC

tRPC allows you to build end-to-end typesafe APIs without the need for manually writing API schemas.

### 4.1 Install tRPC

```bash
yarn add @trpc/server @trpc/client @trpc/react @trpc/next
yarn add zod
```

### 4.2 Create a Basic tRPC Router

Create a new directory `src/server/trpc` and add a file `router.ts`:

```typescript
// src/server/trpc/router.ts
import { initTRPC } from '@trpc/server';
import { z } from 'zod';

const t = initTRPC.create();

export const appRouter = t.router({
  hello: t.procedure
    .input(z.object({
      name: z.string(),
    }))
    .query(({ input }) => {
      return `Hello, ${input.name}`;
    }),
});

// export type definition of API
export type AppRouter = typeof appRouter;
```

### 4.3 Set Up Next.js API Routes for tRPC

Create a new file `src/pages/api/trpc/[trpc].ts` and set up the API handler:

```typescript
// src/pages/api/trpc/[trpc].ts
import * as trpcNext from '@trpc/server/adapters/next';
import { appRouter } from '../../../server/trpc/router';

export default trpcNext.createNextApiHandler({
  router: appRouter,
  createContext: () => null, // optional
});
```

## Step 5: Using Prisma in Your tRPC Routes

Integrate Prisma with tRPC to perform database operations. Modify the `router.ts` to include a Prisma query:

```typescript
import { prisma } from '../prisma/client'; // Ensure you export prisma from your Prisma setup

export const appRouter = t.router({
  getUser: t.procedure
    .input(z.object({
      id: z.number(),
    }))
    .query(async ({ input }) => {
      return await prisma.user.findUnique({
        where: { id: input.id },
      });
    }),
});
```

## In The End

You've now set up a full-stack project using Next.js, tRPC, Prisma, and PostgreSQL. This stack provides you with a robust starting point for building type-safe applications with ease. Explore further by adding more models to your Prisma schema, expanding your tRPC API, and building out your Next.js frontend.

Remember, the technology landscape is vast and constantly evolving. Keep experimenting with new tools and libraries to find the best fit for your projects.
