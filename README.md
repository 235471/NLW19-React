# NLW Connect - Web Frontend

This is the web frontend for the NLW Connect application, built with Next.js and TypeScript. It provides the user interface for event subscriptions and referral tracking.

## Features

*   User subscription form.
*   Invite page displaying referral link, ranking, and statistics.
*   Integration with the NLW Connect backend API.

## Tech Stack

*   **Framework:** [Next.js](https://nextjs.org/) (with Turbopack)
*   **Language:** [TypeScript](https://www.typescriptlang.org/)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
*   **UI Components:** Custom components + [Lucide React](https://lucide.dev/) for icons
*   **Forms:** [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/) for validation
*   **API Client:** Generated using [Orval](https://orval.dev/) from the backend OpenAPI specification.
*   **Linting/Formatting:** [Biome](https://biomejs.dev/)

## Backend API

This frontend `https://nlw-19-react.vercel.app/` consumes the API hosted on render available at `https://nlw19-nodejs.onrender.com`. The API client code located in `src/http/api.ts` is generated based on the backend's OpenAPI specification using the configuration in `orval.config.ts`.

## Getting Started

### Prerequisites

*   Node.js (Check project requirements or use a recent LTS version)
*   npm (or yarn/pnpm/bun)

### Installation

1.  Clone the repository (if you haven't already):
    ```bash
    git clone https://github.com/235471/NLW19-React
    ```
2.  Install dependencies:
    ```bash
    npm install
    # or: yarn install / pnpm install / bun install
    ```
3.  **(Optional)** Generate/Update the API client:
    If the backend API specification at `https://nlw19-nodejs.onrender.com/api-docs/json` has changed, you may need to regenerate the client. While no specific script exists in `package.json`, you can typically run Orval using npx:
    ```bash
    npx orval
    ```
    *Note: Ensure you have `orval` available, potentially via `npm install -D orval` if not already installed globally or locally.*

### Running the Development Server

To start the development server (using Turbopack for speed):

```bash
npm run dev
# or: yarn dev / pnpm dev / bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## Available Scripts

*   `npm run dev`: Starts the development server with Turbopack.
*   `npm run build`: Creates a production-ready build of the application.
*   `npm run start`: Runs the production build.
*   `npm run lint`: Checks the code style using Biome.

## Project Structure Overview

```
web/
├── public/         # Static assets (images, fonts, etc.)
├── src/
│   ├── app/        # Next.js App Router: Pages, layouts, route groups
│   │   ├── (home)/ # Route group for the main landing page
│   │   ├── invite/ # Route group for the referral/invite section
│   │   └── ...     # Other routes and UI components
│   ├── assets/     # Project-specific static assets (e.g., logos, icons)
│   ├── components/ # Reusable React UI components
│   └── http/       # Code related to HTTP requests and API interaction
│       └── api.ts  # Auto-generated API client (via Orval)
├── .gitignore      # Specifies intentionally untracked files
├── biome.json      # Configuration for Biome (linter/formatter)
├── next.config.ts  # Configuration for Next.js
├── orval.config.ts # Configuration for Orval (API client generator)
├── package.json    # Lists project dependencies and scripts
├── postcss.config.mjs # Configuration for PostCSS (used by Tailwind CSS)
├── README.md       # This file: Project documentation
└── tsconfig.json   # Configuration for TypeScript compiler
```

## Learn More

To dive deeper into the technologies used in this project, check out their official documentation:

*   [Next.js Documentation](https://nextjs.org/docs)
*   [React Documentation](https://react.dev/)
*   [Tailwind CSS Documentation](https://tailwindcss.com/docs)
*   [TypeScript Documentation](https://www.typescriptlang.org/docs/)
*   [Orval Documentation](https://orval.dev/overview)
*   [Biome Documentation](https://biomejs.dev/docs/)
*   [React Hook Form Documentation](https://react-hook-form.com/get-started)
*   [Zod Documentation](https://zod.dev/)
