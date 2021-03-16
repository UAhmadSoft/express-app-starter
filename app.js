const express = require('express');

const userRouter = require('./routers/userRouter');

const app = express();

app.use('/api/v1/users', userRouter);

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`listening to port ${port}`));
