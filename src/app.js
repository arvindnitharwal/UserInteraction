const express = require('express');
const app = express();
const UserInteraction = require('./resolvers/interaction');
app.post('/insertProfileDetails', function (req, res) { UserInteraction.insertSignUpInfo });
app.get('/userProfileDetails', function (req, res) { UserInteraction.getUserInfo });
const PORT = '8080';
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});