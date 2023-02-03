# App

> [Steps before first deployment](burn-after-reading.md)

## Administration

- [Contember](https://XXX.eu.contember.cloud/)

## Website

- [Beta](https://XXX-beta.vercel.app/)
- [Production](https://XXX.vercel.app/)

## Development

```sh
npm ci
npm run dev
```

### Update schema

```
npm run contember migration:diff "migration-name"
npm run generate-schema
```

## Deployment

Push to:

- `deploy/contember/beta`
- `deploy/contember/prod`
- `deploy/website/beta`
- `deploy/website/prod`
