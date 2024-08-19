# Pulsegurd-api

## Introduction

We developed RESTFUL API using node.js, express.js and mongoose.js

## Tools

- Node.js
- Express.js
- MongoDB
- nodemon
- cors
- dotenv
- postman

### Installation

2. Clone the repo

   ```js
   git clone https://github.com/wali39/pulsegurd-api.git
   ```

3. Install NPM packages
   ```sh
   npm install
   ```
4. Run api
   ```sh
   node index.js
   ```

## Get list of api data

### Request

`GET /patients/`

    http://localhost:8000/api/v1/sens

### Response

```json
 {
"status": 200,
"data": [
{
"_id": "65249746e35daa3665674a",
"name": "patient name",
"age": 40,
"heartbeat": 87,
"spo2": 98,
"ecg": [
1466,
1343,
1447,
1351,.
..]},
"createdAt": "2023-10-10T00:13:58.883Z",
"updatedAt": "2023-10-10T00:13:58.883Z",
"__v": 0]
}
```

### Linking

<h4><a href="https://github.com/wali39/pulsegurd-app">Pulsegurd App Repository</a></h4>
<h4><a href="https://github.com/wali39/pulsegurd-app">Live Demo </a></h4>

