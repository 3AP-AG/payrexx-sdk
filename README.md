# Payrexx SDK

**Payrexx SDK** for NodeJS with TypeScript support.

The library supports only *Paylink* feature from the **Payrexx API** at the moment.
Other functionality e.g. *QR code*, *Subscription*, *Design* will come as the library continues to be developed.

Visit the [Payrexx](https://payrexx.com/) for more information.

## Disclaimer 🚧

This library is unofficial and is developed independently from the Payrexx payment provider.

Please note that the library is in active development and not all Payrexx features are fully tested.

## How to use 🖥️

Install library by running command

```shell
npm i payrexx-sdk
```

Start by creating the Payrexx client. You will need to provide your **Payrexx** instance and API secret.

```ts
const client = new PayrexxClient('PAYREXX_INSTANCE', 'API_SECRET')
```

### Paylink

#### Retrieve a paylink with `id`

<https://developers.payrexx.com/reference/retrieve-a-paylink>

```ts
await client.api.paylink.retrieve(id);
```

#### Create a paylink

<https://developers.payrexx.com/reference/create-a-paylink>

```ts
const request: PaylinkRequest =  {};
await client.api.paylink.create(request);
```

#### Remove a paylink with `id`

<https://developers.payrexx.com/reference/remove-a-paylink>

```ts
await client.api.paylink.remove(id);
```

### Gateway

#### Retrieve a gateway with `id`

<https://developers.payrexx.com/reference/retrieve-a-gateway>

```ts
await client.api.gateway.retrieve(id);
```

#### Create a gateway

<https://developers.payrexx.com/reference/create-a-gateway>

```ts
const request: GatewayRequest = {};
await client.api.gateway.create(request);
```

#### Remove a gateway with `id`

<https://developers.payrexx.com/reference/delete-a-gateway>

```ts
await client.api.gateway.remove(id);
```

### Webhook

If you are using webhook on the Payrexx and need TS type for the reponse you can use `Transaction` interface.
Do note that `Transaction` properties are not fully typed.

## Requirements

This library requires minimum **Node v16.3.0** in order to run correctly.
