require('module-alias/register');
const path = require('path');
const http = require('http');
const dotenv = require('dotenv');
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const logger = require('@logger');
const indexRouter = require('./routes');

const envFile = process.env.NODE_ENV ? `.env.${process.env.NODE_ENV}` : '.env';
dotenv.config({ path: envFile });

const app = express();

// API logger

if (process.env.NODE_ENV === 'development') {
    const myFormat = '[:date[clf]] ":method :url" :status :res[content-length] - :response-time ms';
    app.use(morgan(myFormat));
}

app.use(cors());
app.use(helmet());

const SIX_MONTHS = 15778476000;
app.use((req, res, next) => {
    res.setHeader('X-XSS-Protection', '1; mode=block');
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('X-Download-Options', 'noopen');
    res.setHeader(
        'Strict-Transport-Security',
        `max-age=${SIX_MONTHS}; includeSubDomains; preload`,
    );
    res.removeHeader('X-Powered-By');
    next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/api/v1', indexRouter);

// Error handler
// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
    res.status(500).send({ error: err.message });
});

http
    .createServer(app)
    .listen(process.env.PORT, () => logger.info(`Application running on port:${process.env.PORT}`));

module.exports = app;
