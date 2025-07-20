# Torn API Client


[![API Compatibility](https://img.shields.io/badge/dynamic/regex?url=https%3A%2F%2Fraw.githubusercontent.com%2Fneon0404%2Ftorn-client%2Fmain%2F.torn-api-version&search=.*&label=Torn%20API&color=62a03f)](https://www.torn.com/api.html)
[![NPM Version](https://img.shields.io/npm/v/torn-client.svg)](https://www.npmjs.com/package/torn-client)
[![License](https://img.shields.io/npm/l/torn-client?color=62a03f)](https://github.com/neon0404/torn-client/blob/main/LICENSE)
[![PRs](https://img.shields.io/badge/PRs-welcome-blue)](https://github.com/neon0404/torn-client/pulls)

A TypeScript-first, auto-generated client for the [Torn City v2 API](https://www.torn.com/swagger.php)

This client provides full type safety, built-in rate limiting and automatic multi-key balancing to simplify interactions with the Torn API

> **⚠️ Warning**
> 
> The Torn v2 API is under active development and changes frequently  
> This client is also a work in progress, use with caution
>
> Some multi-selection endpoints like `/user` - are not yet fully tested and may behave unexpectedly


## Features

-   **Fully Typed**: Provides strong type safety and autocompletion for API methods and responses
-   **Cross-Environment**: Works seamlessly in both Node.js and browser environments
-   **Zero Runtime Dependencies**: No external dependencies, ensuring a lightweight footprint and easy integration
-   **Multi-Key Management**: Automatically balances requests across multiple API keys using round-robin or random strategies
-   **Built-in Rate Limiting**: Avoids hitting the API limit by auto-delaying requests
-   **Robust Pagination**: Simple `.next()` and `.prev()` methods are always available on paginated API responses
-   **Auto-Generated**: The client is generated from the official OpenAPI specification, ensuring it stays up-to-date with API changes

## Installation

```sh
# Using npm
npm install torn-client

# Using yarn
yarn add torn-client

# Using pnpm
pnpm add torn-client

```
You can also use `torn-client` directly in a browser without any build tools by importing it from a CDN like [unpkg](https://unpkg.com/)

```html
<script type="module">
  import { TornAPI } from 'https://unpkg.com/torn-client/dist/index.mjs';

  const client = new TornAPI({ apiKeys: ['YOUR_API_KEY'] });
</script>
```

## Quick Start

```ts
import { TornAPI } from 'torn-client';

// Initialize the client with your API keys
const client = new TornAPI({
    apiKeys: ['YOUR_API_KEY'],
    comment: 'MyTornApp',
});

// Example: Fetch a user's profile using a context method
async function getUserProfile() {
    try {
        const user = await client.user.withId(1).get();
        console.log(user.name, user.level, user.gender);
    } catch (error) {
        console.error('Failed to fetch user profile:', error);
    }
}

getUserProfile();
```

## Usage with Context

The client separates general calls from ID-based ones

**Global Call**
```ts
// Fetches the Hall of Fame for factions, sorted by respect
const factionHof = await client.torn.factionhof({ cat: 'respect' });
```

**Context-Specific Call**
```ts
// All subsequent calls are now in the context of user ID 1
const userContext = client.user.withId(1);

// Fetch multiple details for the same user without repeating the ID
const profile = await userContext.get();
const personalStats = await userContext.personalstats({ cat: 'all' });
const properties = await userContext.properties();
```
## Documentation

Full API client reference is available at the [Torn Client Docs](https://neon0404.github.io/torn-client/)  
For information about Torn API endpoints and parameters, see the [official Torn API v2 documentation](https://www.torn.com/swagger.php)  

## Contributing

Contributions, issues, and feature requests are welcome!  
Feel free to open an issue or submit a pull request on GitHub  
Please read [contributing guide](https://github.com/neon0404/torn-client/blob/main/CONTRIBUTING.md) first

## Contact

Got a question? [Open an issue](https://github.com/neon0404/torn-client/issues/new) with the **"question"** label  
You can also contact me in **Torn:** [Neon](https://www.torn.com/profiles.php?XID=3772610) or on **Discord:** `neon0404`
