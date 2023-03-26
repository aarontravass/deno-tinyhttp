import { App } from '../../app.ts'

const app = new App()

const subApp = new App()
const subsubApp = new App()

subApp.get(
  '/route',
  function handler(_, res) {
    res.send(`Hello from ${subApp.mountpath}`)
  },
)
subsubApp.use((req, res) => void res.send(`Hello from ${req.url}`))
subApp.use('/subapp', subsubApp)

app.use('/subapp', subApp)

await app.listen(3000)