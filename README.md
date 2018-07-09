# App Boilerplate (React + Express)
a simple boilerplate to bootstrap a server+client project

---

### Why?
To get us off the ground running with simpe examples.

### Supports (out of the box)
- [x] React/JSX
- [x] Hot Reloading
- [x] CSS/LESS/SASS
- [x] Images
- [x] Autoreloading of server & client while in `npm run dev` mode
- [x] Sourcemaps (manual refresh required, as hot-reloading messes with sourcemaps)
- [x] Build to ES5
- [x] Cache-busting

## Installation
1. Create a new repo and copy the SSH link (e.g. **git@github.com:yourname/my-app.git**)

2. From terminal
```bash
git clone git@github.com:kwhitley/fusebox-demo-app.git myapp # clone repo to "myapp" folder
cd myapp                            # enter "myapp" folder
rm -rf .git                         # wipe previous git history from repo
git init                            # initialize git
git remote add origin git@github.com:yourname/my-app.git # replace origin reference with your own
```

3. Edit `package.json` file in root of project to replace repo references, package name, desc, etc.  Then:
```
yarn                                # install dependencies
git add .                           # add all files to stage
git commit -m 'initial commit'      # commit all files
git push -u origin master           # set upstream link and push to save to your own repo
```

### NPM/YARN Commands
##### The following commands are included for convenience.

```bash
yarn dev         # runs client and server in watch mode @ http://localhost:3000
yarn build       # builds the server + client to /dist
yarn lint        # lints the project
```

### Structure
- `/src/client` - throw your entire untranspiled client code+assets in here (entry point is index.jsx)
- `/src/server` - throw your entire untranspiled server code here (entry point is index.js)
- `/dist` - generated distributable output from the `yarn build` command
- `.env` (root) - local environment variables will be automatically loaded
- `fuse.js` - build config
- `.eslint.json` - linting config

