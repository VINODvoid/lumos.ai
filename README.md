<div align="center">

# Lumos.ai

**AI-Powered Workflow Automation Platform**

Build, automate, and scale your workflows with visual node-based editor and AI capabilities.

[![Next.js](https://img.shields.io/badge/Next.js-15.5-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)

[Features](#features) • [Getting Started](#getting-started) • [Tech Stack](#tech-stack) • [Documentation](#documentation)

</div>

---

## What is Lumos.ai?

Lumos.ai is a modern, open-source workflow automation platform that empowers you to create sophisticated automation workflows through an intuitive visual interface. Similar to n8n and Zapier, but with AI-first approach and built on cutting-edge technology.

Whether you're automating business processes, integrating APIs, or building complex data pipelines, Lumos.ai provides the tools you need with the flexibility of code when you need it.

### Why Lumos.ai?

- **Visual Workflow Builder**: Drag-and-drop interface powered by React Flow for intuitive workflow creation
- **AI-Powered**: Built-in AI capabilities with Google AI SDK integration
- **Developer-First**: Built with TypeScript, tRPC, and modern web technologies
- **Self-Hosted**: Full control over your data and deployments
- **Extensible**: Easy to add custom nodes and integrations
- **Real-Time**: Background job processing with Inngest

---

## Features

### Core Capabilities

- **Visual Workflow Editor**
  - Intuitive node-based interface
  - Real-time workflow visualization
  - Drag-and-drop node connections
  - Mini-map and zoom controls

- **Trigger Nodes**
  - Manual triggers for on-demand execution
  - HTTP request triggers
  - Scheduled triggers (coming soon)
  - Webhook support (coming soon)

- **Execution Nodes**
  - HTTP requests
  - Data transformations (coming soon)
  - AI operations (coming soon)
  - Custom code execution (coming soon)

- **User Management**
  - Secure authentication with Better Auth
  - Email/password and OAuth support
  - Session management
  - Role-based access control (coming soon)

- **Workflow Management**
  - Create, edit, and delete workflows
  - Version control (coming soon)
  - Workflow templates (coming soon)
  - Import/export workflows (coming soon)

- **Execution History**
  - Track all workflow executions
  - Detailed execution logs
  - Error tracking and debugging
  - Performance metrics (coming soon)

- **Credentials Management**
  - Secure credential storage
  - Reusable across workflows
  - Multiple authentication methods
  - Encrypted at rest

---

## Tech Stack

Lumos.ai is built with modern, production-ready technologies:

### Frontend
- **[Next.js 15](https://nextjs.org/)** - React framework with App Router
- **[React 19](https://react.dev/)** - UI library
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety
- **[Tailwind CSS](https://tailwindcss.com/)** - Styling
- **[React Flow](https://reactflow.dev/)** - Workflow visualization
- **[Radix UI](https://www.radix-ui.com/)** - Accessible components
- **[Jotai](https://jotai.org/)** - State management

### Backend
- **[tRPC](https://trpc.io/)** - End-to-end typesafe APIs
- **[Prisma](https://www.prisma.io/)** - Database ORM
- **[PostgreSQL](https://www.postgresql.org/)** - Database
- **[Better Auth](https://www.better-auth.com/)** - Authentication
- **[Inngest](https://www.inngest.com/)** - Background jobs

### AI & Integrations
- **[Google AI SDK](https://ai.google.dev/)** - AI capabilities
- **[Vercel AI SDK](https://sdk.vercel.ai/)** - AI orchestration

### Developer Experience
- **[Biome](https://biomejs.dev/)** - Linting and formatting
- **[Turbopack](https://turbo.build/pack)** - Fast bundling
- **[Sentry](https://sentry.io/)** - Error tracking

---

## Getting Started

### Prerequisites

- Node.js 20+ and npm/pnpm/yarn
- PostgreSQL database
- Google AI API key (optional, for AI features)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/VINODvoid/lumos.ai.git
   cd lumos.ai
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   pnpm install
   # or
   yarn install
   ```

3. **Set up environment variables**

   Create a `.env` file in the root directory:

   ```env
   # Database
   DATABASE_URL="postgresql://user:password@localhost:5432/lumos"

   # Auth
   BETTER_AUTH_SECRET="your-secret-key"
   BETTER_AUTH_URL="http://localhost:3000"

   # Google AI (optional)
   GOOGLE_AI_API_KEY="your-google-ai-key"

   # Inngest
   INNGEST_EVENT_KEY="your-inngest-key"
   INNGEST_SIGNING_KEY="your-inngest-signing-key"

   # Sentry (optional)
   SENTRY_DSN="your-sentry-dsn"
   ```

4. **Set up the database**

   ```bash
   npx prisma generate
   npx prisma db push
   ```

5. **Run the development server**

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

### First Steps

1. **Create an account** - Sign up at `/signup`
2. **Create your first workflow** - Navigate to workflows and click "New Workflow"
3. **Add nodes** - Click the "+" button to add trigger and execution nodes
4. **Connect nodes** - Drag connections between nodes to build your workflow
5. **Execute** - Run your workflow and view execution results

---

## Project Structure

```
lumos.ai/
├── prisma/
│   └── schema.prisma          # Database schema
├── src/
│   ├── app/                   # Next.js app directory
│   │   ├── (auth)/           # Authentication pages
│   │   ├── (dashboard)/      # Dashboard pages
│   │   └── api/              # API routes
│   ├── components/           # Shared components
│   │   └── ui/               # UI component library
│   ├── features/             # Feature modules
│   │   ├── auth/            # Authentication
│   │   ├── editor/          # Workflow editor
│   │   ├── executions/      # Execution nodes
│   │   ├── triggers/        # Trigger nodes
│   │   └── workflows/       # Workflow management
│   ├── hooks/               # Custom React hooks
│   ├── lib/                 # Utility libraries
│   ├── trpc/                # tRPC setup and routers
│   └── inngest/             # Background job functions
├── .env                     # Environment variables
├── package.json
└── tsconfig.json
```

---

## Development

### Available Scripts

```bash
# Start development server with Turbopack
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Lint code
npm run lint

# Format code
npm run format
```

### Adding New Nodes

To add a new node type:

1. Define the node type in `prisma/schema.prisma`
2. Create node component in `src/features/[category]/components/`
3. Register node in `src/config/node-components.ts`
4. Add node logic to execution engine

### Database Migrations

```bash
# Create a migration
npx prisma migrate dev --name your_migration_name

# Apply migrations
npx prisma migrate deploy

# Reset database (development only)
npx prisma migrate reset
```

---

## Deployment

### Vercel (Recommended)

The easiest way to deploy Lumos.ai is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import project in Vercel
3. Configure environment variables
4. Deploy

### Docker

```bash
# Build image
docker build -t lumos-ai .

# Run container
docker run -p 3000:3000 lumos-ai
```

### Self-Hosted

Requirements:
- Node.js 20+ runtime
- PostgreSQL database
- Reverse proxy (nginx/caddy) for HTTPS

```bash
npm run build
npm run start
```

---

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `DATABASE_URL` | PostgreSQL connection string | Yes |
| `BETTER_AUTH_SECRET` | Secret key for authentication | Yes |
| `BETTER_AUTH_URL` | Application URL | Yes |
| `GOOGLE_AI_API_KEY` | Google AI API key | No |
| `INNGEST_EVENT_KEY` | Inngest event key | Yes |
| `INNGEST_SIGNING_KEY` | Inngest signing key | Yes |
| `SENTRY_DSN` | Sentry error tracking DSN | No |

---

## Contributing

We welcome contributions! Here's how you can help:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Follow TypeScript best practices
- Write meaningful commit messages
- Add tests for new features
- Update documentation as needed
- Use Biome for code formatting

---

## Roadmap

> **Note**: Lumos.ai is currently under active development. Many features are still being built and refined.

### In Development
- [ ] Core workflow execution engine
- [ ] Additional trigger types (Webhooks, Schedules, Email)
- [ ] More execution nodes (Database, File operations, Transformations)
- [ ] AI-powered node suggestions
- [ ] Error handling and retry mechanisms
- [ ] Workflow testing and debugging tools

### Planned Features
- [ ] Workflow templates library
- [ ] Team collaboration features
- [ ] Advanced debugging tools
- [ ] API for programmatic workflow management
- [ ] Marketplace for custom nodes
- [ ] Real-time workflow monitoring dashboard
- [ ] Workflow versioning and rollback
- [ ] Mobile app for monitoring
- [ ] Webhook integrations
- [ ] Data transformation nodes
- [ ] Conditional logic nodes
- [ ] Loop and iteration support

---

## Support

- **Documentation**: Coming soon
- **Issues**: [GitHub Issues](https://github.com/VINODvoid/lumos.ai/issues)
- **Discussions**: [GitHub Discussions](https://github.com/VINODvoid/lumos.ai/discussions)
- **Discord**: Coming soon

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## Acknowledgments

Built with inspiration from:
- [n8n](https://n8n.io/) - Workflow automation platform
- [Zapier](https://zapier.com/) - Automation tool
- [Temporal](https://temporal.io/) - Workflow engine

Special thanks to all the open-source projects that make Lumos.ai possible.

---

<div align="center">

**[⬆ Back to Top](#lumosai)**

Made with ❤️ by the Lumos.ai team

</div>
