# FuseBox Demo App (React + Express)
a simple boilerplate to bootstrap a server+client project

---

### Why?
In short, Webpack Fatique.  While webpack is supremely configurable, it's something of a nightmare to setup, and many basic assumptions (like babel support, jsx if using ReactJS, images, less/sass compiling, etc) are not included by default.  Each has to be researched, included, and configured.  If you want to build a server+client in a single app, this complexity explodes even further.  [Parcel.js](https://www.npmjs.com/package/parcel) touts a blazing fast "zero-config" setup, and has been confirmed by this project to do just that, while supporting many of these complexities out of the box.


### NPM/YARN Commands
##### The following commands are included for convenience.

```bash
yarn dev         # runs client and server in watch mode @ http://localhost:3000
yarn build       # builds the server + client to /dist
yarn lint        # lints the project
```

### Structure
- `/src/client` - throw your entire untranspiled client code+assets in here (entry point is index.html)
- `/src/server` - throw your entire untranspiled server code here (entry point is index.js)
- `/dist` - generated output using the `yarn dev` or `yarn build` commands
- `.env` (root) - local environment variables will be automatically loaded
- `fuse.js` - build config
- `.eslint.json` - linting config
- `.babelrc` - babel transpile options

### Supports (out of the box)
- [x] React/JSX
- [x] Hot Reloading
- [x] CSS/LESS/SASS
- [x] Images
- [x] Autoreloading of server & client while in `npm run dev` mode
- [x] Sourcemaps (manual refresh required, as hot-reloading messes with sourcemaps)
- [x] Build to ES5
- [x] Cache-busting

