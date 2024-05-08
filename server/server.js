const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

app.get('/', (req, res) => {
    res.send('Server is running');
});

app.get('/api', (req, res) => {
    res.json({"users": ['userOne', 'userTwo', 'userThree']});
});

// Server runs on port 5001
app.listen(5001, () => {
    console.log('Server started on port 5001');
});
