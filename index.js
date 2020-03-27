const express = require('express');
const mongoose = require('mongoose');
const routes = require('./src/routes');

const app = express();

mongoose.connect('mongodb+srv://Elisinha:alefe015@cluster0-xnzw3.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
});

app.use(express.json());
app.use(routes);


app.listen(process.env.PORT || 3333);