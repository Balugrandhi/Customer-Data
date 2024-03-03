const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');

// Create a new Express application
const app = express();

app.use(cors());

// Database connection configuration
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: 'Balu7430',
  port: 5432, // default PostgreSQL port
});

// Define an endpoint to fetch data from the database
app.get('/api/gettabledata', async (req, res) => {
  try {
    // Connect to the database
    const client = await pool.connect();

    // Execute a query
    const queryResult = await client.query('SELECT * FROM customerdata');

    // Release the client back to the pool
    client.release();

    // Send the query result as JSON response
    res.json(queryResult.rows);
  } catch (err) {
    console.error('Error executing query', err);
    res.status(500).send('Internal Server Error');
  }
});

// Start the Express server
const PORT = process.env.PORT || 5000;
app.listen(5000, () => {
  console.log(`Server is running on port ${PORT}`);
});