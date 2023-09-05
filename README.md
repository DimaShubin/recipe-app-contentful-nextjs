## Features

- Responsive UI using Tailwind's utility
- Localization ready.
- SEO ready.
- Incremental Static Regeneration with Next.js[^1].
- Generation of GraphQL[^2] typed code (schema, and types), in sync with the content types through graphql-codegen[^3].
- Used [react-markdown](https://www.npmjs.com/package/react-markdown#use-custom-components-syntax-highlight) package to render propperly recipe's markdown description.

$~$

## Not implemented(time limit)

- Unit Tests
- Rate functionality

$~$

## Getting started

To get started, read the following guidelines.

- [Environment variables](./README.md#environment-variables)
- [Setup Dependencies and Run Dev mode](./README.md#setup-dependencies-and-run-dev-app-in-dev-mode)
- [Dependencies](./README.md#dependencies)
- [Development](./README.md#development)
- [Contentful API & GraphQL](./README.md#contentful-api--graphql)
- [Deployment](./README.md#deployment)

$~$

### Environment variables

In order to authenticate the requests to the Contentful APIs, the following values are necessary:

- Your space ID: [https://www.contentful.com/help/find-space-id/](https://www.contentful.com/help/find-space-id/)
- Contentful Delivery API token: [https://www.contentful.com/developers/docs/references/content-delivery-api/](https://www.contentful.com/developers/docs/references/content-delivery-api/)
- Contentful Preview API token: [https://www.contentful.com/developers/docs/references/content-preview-api/](https://www.contentful.com/developers/docs/references/content-preview-api/)

Rename the `.env.example` file to `.env` and add the necessary values.

$~$

### Setup dependencies and run dev App in dev mode

```bash
yarn run setup
```

Necessary dependanceis should be installed into node_modules directory and
The App should be up and running on `http://localhost:3000`.

$~$

### Dependencies

To install the necessary dependencies, run:

```bash
yarn
```

### Run the App in development mode

```bash
yarn dev
```

The App should be up and running on `http://localhost:3000`.

$~$

## Development

### Node

It is recommended to use the Node version listed in the `.nvmrc` file.

$~$

### Husky & git hooks

This repository makes use of [Husky](https://github.com/typicode/husky) to enforce commit hooks.

The config for both the `pre-commit` and `pre-push` hooks can be found in the `.husky` folder, located in the root of the project.

---

#### Pre-commit

Before allowing a commit, we require a successful result from the TypeScript compiler (`tsc`) and our `lint-staged` script will be run.

This ensures all ESLint and Prettier rules are enforced on the files that are staged to be committed.

The `tsc` command is run separately from the `lint-staged` step because we require the Typescript compiler to sample _all_ files.

This is important to ensure that no deviating types were introduced by the [codegen](./README.md#graphql--code-generation) for example.

---

#### Pre-push

The same two tasks are run for pre-push and for pre-commit.

---

#### Overriding the Husky git hooks

In case of wanting to bypass the `pre-commit` or `pre-push` hooks, pass a `--noVerify` flag to your Git commands.

⚠️ Make sure you only use this if you know why you're using it. ⚠️

$~$

### Contentful API & GraphQL

This project makes use of Contentful's [GraphQL API](https://www.contentful.com/developers/docs/references/graphql/).

API calls made to the Contentful GraphQL endpoint are made through `graphql-request`.

The types are generated from the `.graphql` files located in the `/lib/graphql/` directory:

1. `lib/graphql/[fileName].graphql` is detected by the [codegen](./README.md#graphql--code-generation)
2. `lib/__generated/sdk.ts` is generated
3. Within the generated file, their types and a new `getSdk` function are generated
4. The `getSdk` function can now be imported and used within the `getStaticProps` in the pages files

$~$

### GraphQL & code generation

We use `graphql-codegen` to generate a type-safe API client, utilizing [GraphQLClient](https://the-guild.dev/graphql/codegen/plugins/typescript/typescript-graphql-request) as the "client".

---

#### Commands

In order to (re-)generate the GraphQL schema, types and sdk, please use either of the following commands:

- `yarn graphql-codegen:generate` generates a schema, types and code to fetch data from the Contentful APIs
- `yarn graphql-codegen:watch` similar to the `generate` command, but it runs as a watch task which will rerun the steps when changes are made in the `.graphql` files

The first steps of the codegen generate files that contain the GraphQL schema and matching TypeScript types. All these files are located in the `src/lib/graphql` folder.
They're generated to the `src/lib/__generated` folder and ought to be committed once altered/added to the repository.

The TS types for these files are generated in the same location, in a `__generated` folder and like the other files ought to be committed.

---

#### Configuration

The configuration for the codegen can be found in `codegen.ts`, located in the root of the project.

$~$

<!-- FOOTNOTES -->

[^1]: [Next.js docs](https://nextjs.org/docs/basic-features/data-fetching/get-static-props)
[^2]: [GraphQL docs](https://graphql.org/learn/)
[^3]: [graphql-codegen](https://www.the-guild.dev/graphql/codegen)
[^4]: [TypeScript](https://www.typescriptlang.org/)
[^note]: [React docs](https://reactjs.org/docs/getting-started.html)
