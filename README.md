# FakeSpread

## General Information

The product is built using a `two-tier` pattern where the React frontend is decoupled logically and physically from the API backend. How to use the product: 

- `Compile and start` the **Flask API Backend**
  - by default the server starts on port `5000`
- `Compile and start` the **React UI**
  - UI will start on port `3000` and expects a running backend on port `5000`
- `Configuration` (Optional)
  - Change the API port
  - Configure the API port used by the React UI to communicate with the backend 

<br />

## Manual build

### Start the Flask API 

```bash
$ cd flask-api
$ 
$ # Create a virtual environment
$ virtualenv env
$ source env/bin/activate
$
$ # Install modules
$ pip install -r requirements.txt
$
$ # Set up the environment
$ export FLASK_APP=run.py
$ export FLASK_ENV=development
$ 
$ # Start the API
$ flask run
```

<br />

### Compile & start the React UI

```bash
$ cd react-ui
$
$ # Install Modules
$ yarn
$
$ # Start for development (LIVE Reload)
$ yarn start 
```

<br />

### Configuration (Optional)

> Change the port exposed by the Flask API

```bash
$ flask run --port=5001
```

Now, the API starts on port `5001`. 

<br />

> Update the API port used by the React Frontend

**API Server URL** - `src/config.js` 

```javascript
const config = {
    ...
    API_SERVER: 'http://localhost:5000/api/'  // <-- The magic line
};
```

<br />

## API

For a fast set up, use this POSTMAN file: [api_sample](https://github.com/app-generator/api-server-unified/blob/main/api.postman_collection.json)

> **Register** - `api/users/register` (**POST** request)

```
POST api/users/register
Content-Type: application/json

{
    "username":"test",
    "password":"pass", 
    "email":"test@appseed.us"
}
```

<br />

> **Login** - `api/users/login` (**POST** request)

```
POST /api/users/login
Content-Type: application/json

{
    "password":"pass", 
    "email":"test@appseed.us"
}
```

<br />

> **Logout** - `api/users/logout` (**POST** request)

```
POST api/users/logout
Content-Type: application/json
authorization: JWT_TOKEN (returned by Login request)

{
    "token":"JWT_TOKEN"
}
```

<br />

## Product UI

> **Flask React Berry Dashboard** - Login 

![Flask React Berry Dashboard - Login.](https://user-images.githubusercontent.com/51070104/142580244-3dd97d0b-f6ca-4947-a941-6fc640cea84e.png)

<br />

> **Flask React Berry Dashboard** - Icons

![Flask React Berry Dashboard - Icons.](https://user-images.githubusercontent.com/51070104/142580373-64a492cf-637b-4532-81a8-8e49eca0c91e.png)

<br />

> **Flask React Berry Dashboard** - Grid

![Flask React Berry Dashboard - Grid.](https://user-images.githubusercontent.com/51070104/142580452-02ceeef8-5ee3-4072-a279-ae06ea64623a.png)

<br />

## Links & Resources

- Ask for [Support](https://appseed.us/support) on [Discord](https://discord.gg/fZC6hup)
- See for [React Starters](https://appseed.us/apps/react) - index provided by AppSeed

<br />

---
**[Flask React Berry Dashboard](https://appseed.us/product/flask-react-berry-dashboard)** - Full-Stack seed project provided by **AppSeed [App Generator](https://appseed.us/)**
