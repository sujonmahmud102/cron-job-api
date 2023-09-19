const express = require('express');
const cors = require('cors')
const cron = require('node-cron');
const fs = require('fs');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Load the to-do items from the JSON file
let todos = require('./data/todo.json');


// console.log(todoItems)

app.get('/', (req, res) => {
    res.send("to do api is running")
})


// API Endpoints

// Create a new to-do item
app.post('/todos', (req, res) => {
    const newTodo = req.body;
    todos.push(newTodo);
    saveDataToFile();
    res.send(newTodo);
});

// Retrieve all to-do items
app.get('/todos', (req, res) => {
    res.send(todos);
});

// Update a to-do item by ID
app.put('/todos/:id', (req, res) => {
    const {
        id
    } = req.params;
    const updatedTodo = req.body;
    const index = todos.findIndex(todo => todo.id == id);

    console.log(id, index, updatedTodo)

    if (index !== -1) {
        todos[index] = updatedTodo;
        saveDataToFile();
        res.send(updatedTodo);
    } else {
        res.status(404).json({
            error: 'Todo not found'
        });
    }
});

// Delete a to-do item by ID
app.delete('/todos/:id', (req, res) => {
    const {
        id
    } = req.params;
    todos = todos.filter(todo => todo.id !== id);
    saveDataToFile();
    res.send(todos);
});


// Helper function to save data to a JSON file
function saveDataToFile() {
    fs.writeFileSync('todos.json', JSON.stringify(todos, null, 2));
}


// Cron Job to delete completed items daily at midnight
cron.schedule('0 0 * * *', () => {
    todos = todos.filter(todo => !todo.completed);
    saveDataToFile();
    console.log('Cron Job: Deleted completed items');
});



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})