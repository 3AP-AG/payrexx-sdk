# Payrexx SDK

**Payrexx SDK** for NodeJS with TypeScript support.

Supported **Payrexx API** functionalities:

- **Paylink**
- **Gateway**
- **QR code**

Unsupported **Payrexx API** functionalities:

- **Subscription** API is still in experimental state on the Payrexx, hence it will not be supported by this library

Visit the [Payrexx](https://payrexx.com/) for more information.

## Disclaimer 🚧

This library is unofficial and is developed independently from the Payrexx payment provider.

Please note that **QR code** is not fully tested.

## How to use 🖥️

Install library by running command

```shell
npm i payrexx-sdk
```

Start by creating the Payrexx client. You will need to provide your **Payrexx** instance and API secret.

```ts
const client = new PayrexxClient('PAYREXX_INSTANCE', 'API_SECRET')
```

### API

API is grouped by the Payrexx functionalities. 

```ts
| client.api.paylink |
| client.api.gateway |
| client.api.qrCode  |
```

Use example - retrieve the paylink:

```ts
await client.api.paylink.retrieve(id);
```

### Webhook

If you are using webhook on the Payrexx and need TS type for the reponse you can use `Transaction` interface.
Do note that `Transaction` properties are not fully typed.

## Requirements

This library requires minimum **Node v16.3.0** in order to run correctly.
