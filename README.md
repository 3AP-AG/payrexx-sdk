# Payrexx SDK

**Payrexx SDK** for NodeJS with TypeScript support.

Supported **Payrexx API** functionalities:

- **Paylink**
- **Gateway**
- **QR code**
- **Payment Provider**
- **Payment Method**
- **Payout**
- **Transaction**

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

API is grouped by Payrexx functionalities:

```ts
client.api.paylink
client.api.gateway
client.api.qrCode
client.api.paymentProvider
client.api.paymentMethod
client.api.payout
client.api.transaction
```

#### Use examples

##### Retrieve a paylink

```ts
await client.api.paylink.retrieve(id);
```

##### Create a paylink

```ts
const request = new PaylinkRequest('title', 'description', '123456', 'purpose', 1000, 'CHF');
request.addField('forename', true, 'Name');
request.addField('surname', false, 'Surname');

const result = await client.api.paylink.create(request);
```

##### Delete a paylink

```ts
await client.api.paylink.remove(123456)
```

## Requirements

This library requires minimum **Node v18** in order to run correctly.
