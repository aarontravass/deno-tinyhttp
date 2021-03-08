<p align="center">
  <img src="logo.svg"  />
  <h1 align="center">tinyhttp</h1>
</p>

[![nest badge](https://nest.land/badge.svg)](https://nest.land/package/tinyhttp) ![GitHub release (latest by date)](https://img.shields.io/github/v/release/talentlessguy/tinyhttp-deno?style=flat-square) [![GitHub Workflow Status][gh-actions-img]][github-actions]
[![Codecov][codecov-badge]][codecov] [![][docs-badge]][docs]

This is a [Deno](https://deno.land) port of [tinyhttp](https://github.com/talentlessguy/tinyhttp), 0-legacy, tiny &amp; fast web framework as a replacement of Express.

> **WARNING!** This port is very unstable and is not well tested yet. Wait for the v2 release of tinyhttp for a complete version (see [talentlessguy/tinyhttp#198](https://github.com/talentlessguy/tinyhttp/issues/198))

## Example

```ts
import { App } from 'https://deno.land/x/tinyhttp/app.ts'

const app = new App()

app.get('/:name/', (req, res) => {
  res.send(`Hello on ${req.url} from Deno v${Deno.version.deno} and tinyhttp! 🦕`)
})

app.listen(3000, () => console.log(`Started on :3000`))
```

[gh-actions-img]: https://img.shields.io/github/workflow/status/talentlessguy/tinyhttp/CI?style=flat-square
[codecov]: https://codecov.io/gh/talentlessguy/tinyhttp-deno
[github-actions]: https://github.com/talentlessguy/tinyhttp-deno/actions
[license]: https://github.com/talentlessguy/tinyhttp-deno/blob/master/LICENSE
[codecov-badge]: https://img.shields.io/codecov/c/gh/talentlessguy/tinyhttp-deno?style=flat-square
[docs-badge]: https://img.shields.io/github/v/release/talentlessguy/tinyhttp-deno?color=yellow&label=Docs&logo=deno&style=flat-square
[docs]: https://doc.deno.land/https/deno.land/x/tinyhttp/mod.ts
