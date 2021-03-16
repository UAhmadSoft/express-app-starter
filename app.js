const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });

const express = require('express');
const morgan = require('morgan');

const DBConnect = require('./utils/dbConnect');

const userRouter = require('./routers/userRouter');

const app = express();

// * Connect DB
DBConnect();

// * Handle Static Files
app.use(express.static(`${__dirname}/public`));

// * MiddleWares

//$ Development Logging
if (process.env.NODE_ENV === 'development') app.use(morgan('dev'));

// * Routes
app.use('/api/v1/users', userRouter);

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`listening to port ${port}`));
