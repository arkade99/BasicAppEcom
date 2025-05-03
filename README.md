# React Simple login part developed ReactJS json web Server data for login

I AM USING locally stored json web Server data for login

## To start

npm run dev

In package.json I have attached both npm run dev and npx json-server --watch db.json by using concurrently package

To run both npm run dev (for your React/Vite/Next dev server) and npx json-server --watch db.json together in a single command,
you can use the concurrently package.

```Install concurrently
npm install concurrently --save-dev
```

```package.json

"scripts": {
    "dev": "concurrently \"npm run react-dev\" \"npx json-server --watch db.json\"",
    "react-dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  },
```

## Future scopes:-

### will use json for storage

### build an ecommerce site without backend

### Intigrate Node backend and MongoDB

[json web Server](https://github.com/typicode/json-server#readme)
