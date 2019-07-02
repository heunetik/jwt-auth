const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
let middleware = require('./middleware');
const pathHandlers = require('./pathHandlers');

let app = express();
const port = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(cors());

app.post('/login', pathHandlers.login);
app.get('/', middleware.checkToken, pathHandlers.index);
app.listen(port, () => console.log(`Server is listening on port: ${port}`));
