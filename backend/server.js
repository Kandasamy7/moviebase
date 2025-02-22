const express = require('express');
const { Pool } = require('pg');  
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'signup',
    password: 'kanda77',  // Ensure this is correct
    port: 5432,
});

// ✅ Test Route - Check if server is running
app.get('/', (req, res) => {
    res.send('Server is running!');
});

// ✅ Store user data
app.post('/signup', async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const newUser = await pool.query(
            'INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *',
            [name, email, password]
        );

        res.status(201).json({ message: 'User registered successfully', user: newUser.rows[0] });
    } catch (error) {
        console.error('Database Error:', error);
        res.status(500).json({ error: 'Database error' });
    }
});

// ✅ Login user
app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    console.log('Login request received:', { email, password }); // Log the received email and password

    try {
        const user = await pool.query(
            'SELECT * FROM users WHERE email = $1 AND password = $2',
            [email, password]
        );

        console.log('Query result:', user.rows); // Log the query result

        if (user.rows.length > 0) {
            res.status(200).json({ message: 'Login successful', user: user.rows[0] });
        } else {
            res.status(401).json({ error: 'Invalid email or password' });
        }
    } catch (error) {
        console.error('Database Error:', error);
        res.status(500).json({ error: 'Database error' });
    }
});

app.listen(3001, () => {
    console.log('✅ Server is running on port 3001');
});