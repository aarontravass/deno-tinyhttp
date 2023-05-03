import { App } from '../app.ts'
import type { THRequest } from '../request.ts'
import type { DummyResponse, THResponse } from '../response.ts'
import type { AppConstructor, Handler } from '../types.ts'
import { makeFetch } from '../dev_deps.ts'
export const supertest = (app: App) => {
  const fetch = makeFetch((req, conn) => app.handler(req, conn))

  return fetch
}

export const initAppAndTest = (
  handler: Handler,
  route = '/',
  settings: AppConstructor<Request, THResponse> = {},
  method: 'get' | 'post' | 'patch' | 'put' | 'use' = 'use',
) => {
  const app = new App<unknown, THRequest, THResponse>(settings)

  app[method](route, handler)

  return { fetch: supertest(app), app }
}

export const runServer = (
  fn: (
    req: Request,
    res: DummyResponse,
  ) => Response | Promise<Response>,
) => {
  const res: DummyResponse = {
    _init: { headers: new Headers({}) },
    locals: {},
  }
  return async (req: Request) => await fn(req, res)
}
