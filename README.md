# Dynamic Runtime Component Import in Svelte v3

This is a project template for [Svelte] showcasing dynamically component loading at runtime.

The real thing here is that the component loaded dynamically is not bundled at build time, but is added at a post build/deployment time.

## Technical Details

The public/Apps/Chatbox/main.js is a simple Svelte component precompiled as iife. Below you can see the required Rollup configuration:

```javascript
 input: 'src/main.js',
output: {
    sourcemap: true,
    format: 'iife',
    name: 'main',
    file: 'public/main.js'
}
```

*Note that you will need to have [Node.js](https://nodejs.org) installed.*

## Get started

Clone the repository

```bash
git clone https://github.com/rzvdaniel/svelte-dynamic-import-v3.git
```

Install the dependencies...

```bash
cd svelte-dynamic-import-v3
npm install
```

...then start [Rollup](https://rollupjs.org):

```bash
npm run dev
```

Navigate to [localhost:5000](http://localhost:5000).

Clicking the Chat button will load the Chatbox component dynamically. :O


