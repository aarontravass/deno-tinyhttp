import { App } from './app.ts'
import {
  checkIfXMLHttpRequest,
  getAccepts,
  getAcceptsCharsets,
  getAcceptsEncodings,
  getAcceptsLanguages,
  getFreshOrStale,
  getIP,
  getIPs,
  getSubdomains,
  reqIs,
} from './extensions/req/mod.ts'
import {
  attachment,
  end,
  formatResponse,
  json,
  send,
  sendFile,
  sendStatus,
  status,
} from './extensions/res/mod.ts'
import type { THRequest } from './request.ts'
import type { THResponse } from './response.ts'
import type { NextFunction } from './types.ts'

/**
 * Extends Request and Response objects with custom properties and methods
 */
export const extendMiddleware = <EngineOptions>(app: App<EngineOptions>) =>
(
  req: THRequest,
  res: THResponse<EngineOptions>,
  next: NextFunction,
): void => {
  const u = new URL(req.url)
  // Request
  req.accepts = getAccepts(req)
  req.acceptsCharsets = getAcceptsCharsets(req)
  req.acceptsEncodings = getAcceptsEncodings(req)
  req.acceptsLanguages = getAcceptsLanguages(req)
  req.is = reqIs(req)
  req.xhr = checkIfXMLHttpRequest(req)
  req.protocol = u.protocol.slice(0, u.protocol.length - 1)
  // req.fresh = getFreshOrStale(req, res)
  // req.stale = !req.fresh
  req.ip = getIP(req)
  req.ips = getIPs(req)
  req.subdomains = getSubdomains(req, app.settings.subdomainOffset)

  // Response
  res.end = end(res)
  res.send = send(req, res)
  res.sendFile = sendFile(req, res)
  res.json = json(res)
  res.sendStatus = sendStatus(res)
  res.attachment = attachment(res)
  res.format = formatResponse(req, res, next)
  res.status = status(res)

  next()
}
