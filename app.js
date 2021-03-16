const express = require('express');

const app = express();

app.get('/', (req, res) => {
   res.end('Server Running');
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`listening to port ${port}`));
