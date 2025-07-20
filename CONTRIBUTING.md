# Contributing to Torn Client

First off, thank you for considering contributing to `torn-client`!  
It's people like you that make open-source software such a great thing  
We welcome any type of contribution, not just code

You can help with:

* **Reporting a bug**
* **Discussing the current state of the code**
* **Submitting a fix**
* **Proposing new features**
* **Improving the documentation**

## How Can I Contribute?

### Reporting Bugs

Before reporting a bug, please check the [existing issues](https://github.com/neon0404/torn-client/issues) to see if
someone has already reported it

If you've found a new bug:

1. Go to the **Issues** tab
2. Click **New Issue**
3. Apply "bug" label
4. Provide a clear title and a detailed description, including steps to reproduce the bug and what you expected to
   happen

### Suggesting Enhancements

If you have an idea for a new feature or an improvement to an existing one:

1. Check the [existing issues](https://github.com/neon0404/torn-client/issues) to see if your idea has already been
   discussed
2. Go to the **Issues** tab and open a new issue
3. Apply "enhancement" label
4. Provide a clear and detailed explanation of the feature, why it's needed, and how it could be implemented

### Your First Code Contribution

Unsure where to begin contributing to `torn-client`?  
You can start by looking through `good-first-issue` and `help-wanted` issues

#### Development Setup

Ready to contribute code? Here’s how to set up your environment:

1. **[Fork](https://github.com/neon0404/torn-client/fork) the repository**

2. **Clone your fork**
   ```bash
   git clone https://github.com/YOUR_USERNAME/torn-client.git
   cd torn-client
   ```

3. **[Install pnpm](https://pnpm.io/installation)**

4. **Install dependencies.**
   ```bash
   pnpm install
   ```

5. **Understand the Generator**  
   A key part of this project is the code generator, which creates the client from the Torn API's OpenAPI
   specification  
   The generator code lives in the `scripts/generator` directory
    * If you are fixing a bug in the runtime client (e.g., in `RequestHandler`), you probably don't need to run the
      generator
    * If you are editing something inside generator, you will need to run the generator via `pnpm run api:generate` command

> **A note for `npm` and `yarn` users**  
> We strongly advise against running `npm install` or `yarn install`  
> These commands will ignore our `pnpm-lock.yaml` file and generate a different set of dependencies, which can lead to
> subtle bugs and failing tests in your Pull Request  
> Using `pnpm install` is the only supported method for contributing to this project

#### Running Scripts

These are the most important scripts for development:

* **Run the generator:**
  ```bash
  pnpm run api:generate
  ```
  This will regenerate the endpoint, model and test files in `src/generated/` and `tests/generated`


* **Run tests:**

  Configure your Torn API key in .env

  ```bash
  pnpm test
  ```

  This runs the entire test suite. Please ensure all tests pass before submitting a pull request


* **Check code style:**
  ```bash
  pnpm run lint
  ```
  We use ESLint and Prettier. To automatically fix most style issues, run:
  ```bash
  pnpm run lint:fix
  ```

### Commit Message Guidelines

We adhere to the [**Conventional Commits**](https://www.conventionalcommits.org/en/v1.0.0/) specification  
This leads to
more readable messages that are easy to follow

Each commit message consists of a **header**, a **body**, and a **footer**. The header has a special format that
includes a **type** and a **subject**:

```
<type>: <description>

[optional body]

[optional footer(s)]
```

#### Type

Must be one of the following:

* **feat**: A new feature for the user
* **fix**: A bug fix for the user
* **docs**: Documentation only changes
* **style**: Changes that do not affect the meaning of the code (white-space, formatting, etc)
* **refactor**: A code change that neither fixes a bug nor adds a feature
* **perf**: A code change that improves performance
* **test**: Adding missing tests or correcting existing tests
* **build**: Changes that affect the build system or external dependencies (example: `tsup`, `pnpm`)
* **ci**: Changes to our CI configuration files and scripts (example: GitHub Actions)
* **chore**: Other changes that don't modify `src` or `test` files

#### Examples

* `feat: Add support for paginated responses`
* `fix(requester): Correctly handle rate limit errors in autoDelay mode`
* `docs: Update CONTRIBUTING.md with commit guidelines`
* `refactor(generator): Simplify endpoint class creation`
* `test(client): Add unit tests for RequestHandler`

### Pull Request Process

1. **Create a new branch** from the `main` branch. Use a descriptive name
   ```bash
   git checkout -b feat/my-awesome-feature
   ```

2. **Make your changes.** Write clean, readable code and add comments or documentation where necessary

3. **Add or update tests.** If you're adding a new feature, please add tests for it

4. **Ensure all tests and lint checks pass**

5. **Commit your changes.** Use a clear and concise commit message that follows
   our [Commit Message Guidelines](#commit-message-guidelines)

6. **Push your branch to your fork.**
   ```bash
   git push origin feat/my-awesome-feature
   ```

7. **Open a Pull Request** to the `main` branch of the original `torn-client` repository
    * Provide a clear title that also follows the Conventional Commits format
    * In the description, explain the "why" and "what" of your changes
    * Link to the issue you are resolving using the `Closes #123` keyword

## Styleguides

We use **ESLint** and **Prettier** to maintain a consistent code style

Your code will be automatically checked when you
open a pull request  
We highly recommend setting up your editor to use these tools to get real-time feedback

## License

By contributing, you agree that your contributions will be licensed under the [MIT License](LICENSE) that covers the
project