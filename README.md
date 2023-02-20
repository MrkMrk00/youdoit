# App

## Administration

- [Contember](https://youdoit.eu.contember.cloud)

## Website

- [Beta](https://youdoit-beta.vercel.app/)
- [Production](https://youdoit.vercel.app/)

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
