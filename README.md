# CRUD App with Database

simple express application that:

1. Connects to a database
2. Creates the payload:
   { message: String, data: Object }
   name, email, country

3. Get's the data created
4. Updates the data created
5. Deletes the data created

# Dependencies

Express, mongoose

## Heroku
https://zuri-crud-app-21.herokuapp.com/



## API Reference

#### Test users route

```http
  GET /test
```

#### Create new user route

```http
   POST /new-users
```

| Parameter | Type     | Description   |
| :-------- | :------- | :------------ |
| `name`    | `string` | **Required**. |
| `email`   | `string` | **Required**. |
| `country` | `string` | **Required**. |

#### List all Users route

```http
   GET /get-users
```

#### Find single user by id

```http
  GET /find/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

#### Update user by id

```http
  PUT /update/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

#### Delete user by id

```http
  DELETE /delete/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |




