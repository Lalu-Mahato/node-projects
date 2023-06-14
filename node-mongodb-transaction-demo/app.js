require('dotenv').config();
const http = require('http');
const cors = require('cors');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const connectDB = require('./config/database');
const apiRoutes = require('./routes');

connectDB();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api', apiRoutes);

app.get('/', (req, res) => {
    res.send({ message: 'Hello World' });
});

const server = http.createServer(app);
server.listen(port, () => console.log(`Server listening on port:${port}`));