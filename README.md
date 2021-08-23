1. Clone the repository
2. `npm i`
3. `npom start`

## APIs:
### Login
POST http://localost:8080/user/login
```
Body {
  email: string;
  password: string;
}
Response {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
}
Response Headers {
  Authorization: "Bearer {token}";
}
```

### Register
POST http://localost:8080/user/register
```
Body {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}
Response {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
}
Response Headers {
  Authorization: "Bearer {token}";
}
```
