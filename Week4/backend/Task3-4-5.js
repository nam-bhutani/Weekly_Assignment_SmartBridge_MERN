/*Task 3: Set up an Express.js server running on port 5000
with middleware to parse JSON requests. 
Task 4: Define a GET route /welcome that responds with
{ message: "Welcome to Express!" }.
 Task 5: Create an in-memory array to store users (id, name,
email) and implement the following routes:
• GET /users
• POST /users
• PUT /users/:id
• DELETE /users/:id */

const express = require("express");
const app = express();
const PORT = 5000;

app.use(express.json());

//Define a route for "/"
app.get("/", (req, res) => {
    res.send("<h1>Welcome to My Express Server</h1>");
  });

//Welcome Route
app.get("/welcome", (req, res) => {
  res.json({ message: "Welcome to Express!" });
});

const users = [];

app.get("/users", (req, res) => {
  res.json(users);
});

app.post("/users", (req, res) => {
  const { name, email } = req.body;
  const newUser = { id: users.length + 1, name, email };
  users.push(newUser);
  res.status(201).json(newUser);
});

app.put("/users/:id", (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;
  const user = users.find((u) => u.id == id);
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  user.name = name || user.name;
  user.email = email || user.email;
  res.json(user);
});

app.delete("/users/:id", (req, res) => {
  const { id } = req.params;
  const index = users.findIndex((u) => u.id == id);
  if (index === -1) {
    return res.status(404).json({ message: "User not found" });
  }
  users.splice(index, 1);
  res.json({ message: "User deleted" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

