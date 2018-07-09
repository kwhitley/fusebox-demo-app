const { src, task, exec, context } = require('fuse-box/sparky')
const {
  FuseBox,
  EnvPlugin,
  JSONPlugin,
  CSSPlugin,
  CSSResourcePlugin,
  SassPlugin,
  LESSPlugin,
  WebIndexPlugin,
  QuantumPlugin
} = require('fuse-box')

const DEV_BUILD_PATH = '.dist-dev'
const PROD_BUILD_PATH = 'dist'
const variants = ['semantic' , 'blueprint', 'material', 'antd']

const clientConfig = (isProduction, variant, basePath = DEV_BUILD_PATH) => ({
  homeDir: 'src',
  output: `${basePath}/client/${variant}/$name.js`,
  useTypescriptCompiler: true,
  allowSyntheticDefaultImports: true,
  debug: !isProduction,
  cache: !isProduction,
  sourceMaps: true,
  plugins: [
    [
      SassPlugin(),
      CSSPlugin()
    ],
    [
      LESSPlugin(),
      CSSPlugin()
    ],
    [
      CSSResourcePlugin({
        dist: `${basePath}/client/${variant}/assets/`,
        resolve: f => `/${variant}/assets/${f}`
      }),
      CSSPlugin()
    ],
    CSSPlugin(),
    WebIndexPlugin({
      template: `src/client/${variant}/index.html`,
      bundles: ['app', 'vendor']
    }),
    isProduction && QuantumPlugin({
      manifest : true,
      target: 'browser',
      replaceTypeOf: false,
      uglify: true,
      bakeApiIntoBundle: true,
      css: {
        clean: true
      }
    })
  ]
})

const serverConfig = (isProduction, basePath = DEV_BUILD_PATH) => ({
  homeDir: 'src',
  output: `${basePath}/$name.js`,
  useTypescriptCompiler: true,
  allowSyntheticDefaultImports: true,
  target : 'server@esnext',
  debug: true,
  sourceMaps: true,
  plugins: [
    isProduction && EnvPlugin({
      NODE_ENV: 'production',
      foo: 'bar'
    }),
    JSONPlugin(),
  ]
})

task('default', async context => {
  await src(`./${DEV_BUILD_PATH}`)
      .clean(`${DEV_BUILD_PATH}/`)
      .exec()

  for (var variant of variants) {
    let client = FuseBox.init(clientConfig(false, variant))

    client.dev({ port: 4445 + variants.indexOf(variant), httpServer: false })

    client
      .bundle('app')
      .instructions(` > client/${variant}/index.jsx`)
      .watch(`src/client/${variant}/**`)
      .hmr()

    await client.run()
  }

  const server = FuseBox.init(serverConfig(false))
  server
    .bundle('server')
    .instructions(' > [server/index.js]')
    .watch('src/server/**')
    .completed(proc => proc.start())

  await server.run()
})

task('build', async context => {
  await src(`./${PROD_BUILD_PATH}`)
      .clean(`${PROD_BUILD_PATH}/`)
      .exec()

  for (var variant of variants) {
    let client = FuseBox.init(clientConfig(true, variant, PROD_BUILD_PATH))

    client
      .bundle('vendor')
      .instructions(`~ client/${variant}/index.jsx`)

    client
      .bundle('app')
      .instructions(`!> [client/${variant}/index.jsx]`)

    await client.run()
  }

  const server = FuseBox.init(serverConfig(true, PROD_BUILD_PATH))
  server
    .bundle('server')
    .instructions(' > [server/index.js]')
    .completed(proc => proc.exec())


  await server.run()
})
