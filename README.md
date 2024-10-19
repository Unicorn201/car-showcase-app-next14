This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Biome

You can analyze, format and lint your codes by using Biome, take a look at the following resources:

- [Biome Documentation](https://biomejs.dev/guides/getting-started/) - learn about Biome settings.


## Deploy on Cloudflare Pages

Next.js is an open-source React framework for creating websites and applications. In this guide, you will create a new Next.js application and deploy it using Cloudflare Pages.

### Configure and deploy a project without C3

If you already have a Next.js project or wish to manually create and deploy one without using C3,
Cloudflare recommends that you use `@cloudflare/next-on-pages` and refer to its [README](https://github.com/cloudflare/next-on-pages/tree/main/packages/next-on-pages)
for instructions and additional information to help you develop and deploy your project.

### Create a new project using the create-cloudflare CLI (C3)

The create-cloudflare CLI (C3) will configure your Next.js site for Cloudflare Pages. Run the following command in your terminal to create a new Next.js site:

```bash
npm create cloudflare@latest my-next-app -- --framework=next
```

C3 will ask you a series of setup questions. C3 will also install necessary dependencies, including the Wrangler CLI and the @cloudflare/next-on-pages adapter.

After creating your project, C3 will generate a new my-next-app directory using the default Next.js template, updated to be fully compatible with Cloudflare Pages.

When creating your new project, C3 will give you the option of deploying an initial version of your application via Direct Upload. You can redeploy your application at any time by running following command inside your project directory:

```bash
npm run deploy
```

### Git integration

#### Create a new GitHub repository

Create a new GitHub repository by visiting repo.new. After creating a new repository, go to your newly created project directory
to prepare and push your local application to GitHub by running the following commands in your terminal:
```bash
git init
git add .
git commit -m "Initial commit"

git branch -M main
git remote add origin https://github.com/<your-gh-username>/<repository-name>
git push -u origin main
```

#### ​​Connect your application to the GitHub repository via the Cloudflare dashboard

Log in to the Cloudflare dashboard and select your account.
In Account Home, select Workers & Pages > Create application > Pages > Connect to Git.
You will be asked to authorize access to your GitHub account if you have not already done so. Cloudflare needs this so that it can monitor and deploy your projects from the source. You may narrow access to specific repositories if you prefer. However, you will have to manually update this list within your GitHub settings when you want to add more repositories to Cloudflare Pages.

Select the new GitHub repository that you created and, in the Set up builds and deployments section, provide the following information:
Configuration option	Value
Production branch	main
Build command	npx @cloudflare/next-on-pages@1
Build directory	.vercel/output/static
Optionally, you can customize the Project name field. It defaults to the GitHub repository’s name, but it does not need to match. The Project name value is assigned as your *.pages.dev subdomain.

After completing configuration, select Save and Deploy.
You will be able to review your first deploy pipeline in progress. Pages installs all dependencies and builds the project as specified. Cloudflare Pages will automatically rebuild your project and deploy it on every new pushed commit.

Additionally, you will have access to preview deployments, which repeat the build-and-deploy process for pull requests. With these, you can preview changes to your project with a real URL before deploying your changes to production.

### ​​Troubleshooting

[👍️Click Here](https://developers.cloudflare.com/pages/framework-guides/nextjs/deploy-a-nextjs-site/#troubleshooting)