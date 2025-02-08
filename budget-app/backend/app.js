const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const accountsRoute = require('./routes/accounts');
const budgetsRoute = require('./routes/budgets'); 

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

app.use('/accounts', accountsRoute);
app.use('/budgets', budgetsRoute); 

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
