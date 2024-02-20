const http = require('http');
const express = require('express');
const cors = require('cors');
const apiRoutes = require('./routes');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: false }));

app.use('/', apiRoutes);

const server = http.createServer(app);
server.listen(port, () => console.log(`Server listening on port:${port}`));
