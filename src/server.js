// console.log("hello");
const express = require('express');
const { testRoutes } = require('./routes/test/testRoutes');
const app = express();
require('dotenv/config');
// orderroutes
app.use('/test', testRoutes);
let port = process.env.PORT || 3200;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})
