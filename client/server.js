const { error } = require('console');
const express = require('express');
// express: Used to create a web server and handle HTTP requests and responses

const fs = require('fs');
// fs: Provides file system methods to read from and write to files (users.json in this case)

const path = require('path');
// path: Provides utilities for working with file paths (used to construct the path to users.json)

const app = express();
// app: The main Express application object.

const port = 3000;
// port: Defines the port number (3000) on which the server will listen

app.use(express.json());
// Middleware to parse incoming JSON requests and make the data available in req.body

const usersFilePath = path.join(__dirname, 'users.json');
// path.join(): Combines the current directory (__dirname) with 'users.json' to form the full file path.
// Purpose: Ensures you can read/write the users.json file regardless of the operating system

// Route to handle user registration
app.post('/register', (req, res) => {
    const { username, password } = req.body;
    // Extracts the username and password from the request body

    if (!username || !password) {
        // Checks if the username and password are provided
        return res.status(400).json({ error: 'Username and password are required' });
        // If either is missing, sends a 400 Bad Request response with an error message
    }

    fs.readFile(usersFilePath, 'utf8', (err, data) => {
        // fs.readFile(): Reads the content of the users.json file asynchronously
        // 'utf8': Ensures the file is read as text, not binary
        // err: Captures any error that occurs while reading the file
        // data: Contains the file’s content as a string

        if (err) {
            console.error('Error reading users.json:', err);
            return res.status(500).json({ error: 'Internal Server Error' });
            // If an error occurs reading the file, logs the error and sends a 500 Internal Server Error response
        }

        const users = JSON.parse(data);
        // Converts the string content of users.json into a JavaScript array using JSON.parse()

        // Check if username already exists
        if (users.some((user) => user.username === username)) {
            return res.status(400).json({ error: 'Username already exists' });
            // If the username already exists, returns a 400 Bad Request response with an error message
        }

        // Add the new user to the users array
        users.push({ username, password });

        // Write the updated users array back to users.json
        fs.writeFile(usersFilePath, JSON.stringify(users, null, 2), (writeErr) => {
            // fs.writeFile(): Writes the updated array back to the users.json file
            // JSON.stringify(users, null, 2): Converts the array back to a formatted JSON string
            // null and 2: Ensures the JSON is nicely indented for readability

            if (writeErr) {
                console.error('Error writing to users.json:', writeErr);
                return res.status(500).json({ error: 'Internal Server Error' });
                // If an error occurs writing to the file, logs the error and sends a 500 Internal Server Error response
            }

            res.status(201).json({ message: 'User registered successfully' });
            // Sends a 201 Created response indicating that the user was successfully registered
        });
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
    // Logs the URL where the server is running
});

