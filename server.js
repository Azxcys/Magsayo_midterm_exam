const express = require('express');
const { User, sequelize } = require('./models/User');

const app = express();
const PORT = 3000;

app.get('/users', async (req, res) => {
    await sequelize.sync(); // Ensure DB is in sync
    const users = await User.findAll();
    res.json(users);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
