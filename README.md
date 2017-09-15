# Blog.Ly Backend

In this lab we will be developing a backend to serve the frontend application built here in React for you.

- Download the React project here and CD into the "dist" folder.
- Run `npm install` to install dependencies, and then run `node index.js` to run the frontend.
- Your job is to develop a backend that serves the following endpoints:

### GET /posts

Response:

- Response Code: 200
- Response Body: Array of post objects in this format:

```json
[
    {
        "_id": "59baf81b4b08ecce0e3bc73e",
        "title": "My Title",
        "post_text": "My post text",
        "post_image": "image link here"
    }
]
```

### GET /posts/:id

Response:

- Response Code: 200
- Response Body: Object of single post in this format:

```json
{
    "_id": "59baf81b4b08ecce0e3bc73e",
    "title": "My Title",
    "post_text": "My post text",
    "post_image": "image link here"
}
```

### POST /posts

Sample Request:

```json
{
    "post": {
        "title": "My title",
        "post_text": "My post text",
        "post_image": "Image link here"
    }
}
```

Response:

- Response Code: 201
- Response Body: Object of new post in this format:

```json
{
    "_id": "59baf81b4b08ecce0e3bc73e",
    "title": "My title",
    "post_text": "My post text",
    "post_image": "Image link here"
}
```

### PUT /posts/:id

Sample Request:

```json
{
    "post": {
        "title": "Updated title",
        "post_text": "Updated post text",
        "post_image": "Updated image link here"
    }
}
```

Response:

- Response Code: 200

### DELETE /posts/:id

Response:

- Response Code: 200

> Note: The frontend is expecting the ID to be in the MongoDB format of "_id". If you need this to be something else you will need to change the source React project.

- **Bonus:** Use integration tests to develop your API TDD style.