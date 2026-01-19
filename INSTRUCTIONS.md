# Fix for "localhost refused to connect" error

The error `ERR_CONNECTION_REFUSED` means the web server is not running. This is happening because of some conflicting files in your project.

**To fix this, you MUST delete the following two files:**

1.  `vite.config.js` (This file is in the main directory of your project)
2.  `src/main.jsx` (This file is inside the `src` directory)

**After you have deleted these two files**, you can start the development server. Open your terminal and run this command:

```bash
npm run dev
```

Your website will then be available at `http://localhost:3000`.
