const express = require('express');
const bodyParser = require('body-parser');

const routes = require('./routes/index');
const port = process.env.PORT || 5000;
const app = express();
const apiversion1 = '/api/v1';


app.get('/', (req, res) => {
	res.json('Server is running.. Navigate to /api/v1');
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(`${apiversion1}`, routes);

app.listen(port, () => console.log(`listening on port ${port}`))