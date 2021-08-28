import { Accepts } from '../../utils/accepts.ts'
import type { Req } from '../../deps.ts'

export const getAccepts =
  <Request extends Req = Req>(req: Request) =>
  (...types: string[]) =>
    new Accepts(req.headers).types(types)

export const getAcceptsEncodings =
  <Request extends Req = Req>(req: Request) =>
  (...encodings: string[]) =>
    new Accepts(req.headers).encodings(encodings)

export const getAcceptsCharsets =
  <Request extends Req = Req>(req: Request) =>
  (...charsets: string[]) =>
    new Accepts(req.headers).charsets(charsets)

export const getAcceptsLanguages =
  <Request extends Req = Req>(req: Request) =>
  (...languages: string[]) =>
    new Accepts(req.headers).languages(languages)
