
# GSDT7

GSDT7 is a e-commerce website for the latest sneakers


## Demo

Insert gif or link to demo

## Screenshots

![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)


## API Reference


### Products

#### Get all products
```http
  GET /api/products/
```

#### Get all mens products
```http
  GET /api/products/mens
```

#### Get all womens products
```http
  GET /api/products/womens
```

#### Get products with same colorway
```http
  GET /api/prodcuts/colorway
```
|  Payload  |   Type   | Description                |
| :-------- | :------- | :------------------------- |
| `product` | `Prodcut`| **Required**. Prodcut Obj  |

#### Get a product
```http
  GET /api/products/:id
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
|   `id`    | `integer`| **Required**. productId Int       |



### Orders

#### Make an order
```http
  POST /api/orders
```
|     Payload     |   Type   | Description                |
|    :--------    | :------- | :------------------------- |
| `authorization` |   `JWT`  |       **Required**         |

#### Get user's cart information
```http
  GET /api/orders/cart
```
|     Payload     |   Type   | Description                |
|    :--------    | :------- | :------------------------- |
| `authorization` |   `JWT`  |       **Required**         |

#### Edit item in cart
```http
  PUT /api/orders/cart
```

| Payload               | Type       | Description               |
| :-------------------- | :--------- | :------------------------ |
| `authorization`       | `JWT`      | **Required**              |
| `LineItem`            | `LineItem` | **OPTIONAL** LineItem Obj |
| `{product, quantity}` | `Obj`      | **OPTIONAL** Prodcut Obj  |

#### Delete an item from cart
```http
  DELETE /api/orders/cart
```
|     Payload     |   Type   | Description                |
|    :--------    | :------- | :------------------------- |
| `authorization` |   `JWT`  |       **Required**         |
|    `product`    | `Product`|  **Required** Product Obj  |

#### Get all past orders
```http
  GET /api/purchases
```
|     Payload     |   Type   | Description                |
|    :--------    | :------- | :------------------------- |
| `authorization` |   `JWT`  |       **Required**         |



### Sessions

#### Sign up a user
```http
  POST /api/sessions/signup
```
|     Payload     |   Type   | Description                |
|    :--------    | :------- | :------------------------- |
|      `User`     |  `User`  |   **Required** User Obj    |

#### Login a user
```http
  POST /api/sessions
```
|     Payload     |   Type   | Description                |
|    :--------    | :------- | :------------------------- |
|      `User`     |  `User`  |   **Required** User Obj    |


#### Get a user's data
```http
  GET /api/sessions
```
|     Payload     |   Type   | Description                |
|    :--------    | :------- | :------------------------- |
|      `User`     |  `User`  |   **Required** User Obj    |
| `authorization` |  `JWT`   |   **Required**             |

#### Edit a user's data
```http
  PUT /api/sessions
```
|     Payload     |   Type   | Description                |
|    :--------    | :------- | :------------------------- |
|      `User`     |  `User`  |   **Required** User Obj    |
| `authorization` |  `JWT`   |   **Required**             |

## Authors

- [@Thombuhl](https://github.com/Thombuhl)
- [@WkChris](https://github.com/enycezchris)
- [@lnoel12](https://github.com/lnoel12)
- [@doobybooby](https://github.com/doobybooby)

