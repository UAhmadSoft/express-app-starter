const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });

const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');

const DBConnect = require('./utils/dbConnect');

const userRouter = require('./routers/userRouter');
const globalErrorHandler = require('./middlewares/globalErrorHandler');

const app = express();

// * Connect DB
DBConnect();

// * Handle Static Files
app.use(express.static(`${__dirname}/public`));

// * MiddleWares

// $ CORS
app.use(cors());

// $ Body Parser
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

//$ Development Logging
if (process.env.NODE_ENV === 'development') app.use(morgan('dev'));

// * Routes
app.use('/api/v1/users', userRouter);

//$ Global Error Handler
app.use(globalErrorHandler);

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`listening to port ${port}`));
