# WhatsApp Chat Manager

A simple messaging application built using Express.js, MongoDB, and Mongoose.

## Features

- Create a new message
- View all messages
- Edit existing messages
- Delete messages
- Store sender and receiver information
- MongoDB database integration
- RESTful API architecture

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- EJS
- Method Override
- REST APIs

## Project Structure

```text
MONG/
│
├── models/
│   └── chat.js
│
├── public/
│   └── style.css
│
├── views/
│   ├── edit.ejs
│   ├── index.ejs
│   └── new.ejs
│
├── index.js
├── init.js
├── package.json
├── package-lock.json
└── node_modules/
```

## Installation

1. Clone the repository

```bash
git clone <your-repository-url>
```

2. Install dependencies

```bash
npm install
```

3. Start MongoDB locally

```bash
mongod
```

4. Run the application

```bash
node index.js
```

or

```bash
npm run dev
```

5. Open in browser

```text
http://localhost:8080/chats
```

## Learning Outcomes

Through this project, I learned:

- Express.js routing
- RESTful API design
- CRUD operations
- MongoDB and Mongoose
- Method Override for PUT and DELETE requests
- Server-side rendering with EJS
- Connecting Node.js applications with databases

## Future Improvements

- User Authentication
- Real-time messaging using Socket.io
- Search messages
- Message timestamps
- Responsive UI

## Author

Jaydivya Maurya
