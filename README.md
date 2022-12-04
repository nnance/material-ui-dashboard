# Dashboard template

An example web application template that represents a administrative dashboard. This is a pretty lightweight template with minimal dependencies and configuration. It's a good starting point for many different web application use cases.

## Tech Stack

- typescript
- prettier
- eslint
- parcel bundler
- preact web framework
- material UI components
- vega
- react router

## Usage

Use as is by installing the dependencies and starting the watcher for development and opening a browser at localhost:1234

```
> npm i
> npm run watch
```

The graph library can be easily replaced by uninstalling Vega and editing the `Chart.tsx` file.

```
> npm uninstall --save vega vega-embed vega-lite
```

Replacing the Material UI component library is a little more work but still possible. Start by uninstalling MUI and replacing all the imports and component references with an equivalent starting with the `App.tsx` file.

```
> npm uninstall --save @emotion/react @emotion/styled @mui/icons-material @mui/material
```

It's even possible to build a completely different interface by removing Vega and MUI and deleting all the files except `index.tsx` and `App.tsx`
