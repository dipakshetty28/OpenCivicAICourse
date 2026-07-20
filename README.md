# OpenCivic AI Course Platform

A minimal Next.js App Router course application for teaching one learner how to rebuild the production OpenCivic AI repository step by step.

This chunk sets up only the local application foundation. It does not add Cognito, DynamoDB, Terraform, GitHub Actions, CloudWatch, or lesson content yet.

## 1. prerequisite checks

Run these commands in **Windows VS Code Command Prompt**:

```cmd
node --version
npm --version
docker --version
docker compose version
```

Expected result: each command prints a version number.

## 2. npm install

```cmd
npm install
```

Expected result: npm installs the project dependencies and creates `node_modules`.

## 3. npm run dev

```cmd
npm run dev
```

Expected result: Next.js starts at `http://localhost:3000`.

Open these URLs in a browser:

- `http://localhost:3000`
- `http://localhost:3000/api/health`

The health endpoint should return:

```json
{ "status": "ok" }
```

## 4. npm run lint

```cmd
npm run lint
```

Expected result: ESLint completes with no errors.

## 5. npm run typecheck

```cmd
npm run typecheck
```

Expected result: TypeScript completes with no errors.

## 6. npm test

```cmd
npm test
```

Expected result: Vitest runs the React Testing Library test and passes.

## 7. npm run build

```cmd
npm run build
```

Expected result: Next.js creates a production standalone build.

## 8. docker compose up --build

```cmd
docker compose up --build
```

Expected result: Docker builds and starts the local course development container at `http://localhost:3000`.

Press `Ctrl+C` to stop the container.
