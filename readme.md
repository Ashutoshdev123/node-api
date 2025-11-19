Insert API data into MongoDB
node fetchAndSave.js

Run the Node API server
node server.js

Test API Endpoints
GET http://localhost:5000/posts?page=1&limit=10

Sorting by title
GET http://localhost:5000/posts?sort=title

Custom pagination + sorting
GET http://localhost:5000/posts?page=2&limit=5&sort=userId

Project setup
npm init -y
npm install express mongoose axios cors