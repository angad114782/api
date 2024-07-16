require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    return res.status(200).send({ message: "Welcome to API - Node", status: true });
});

const authRouters = require('./routes/auth.routes.js');
app.use('/auth', authRouters);

const userRouters = require('./routes/user.routes.js');
app.use('/api/users', userRouters);

const resetRouters = require('./routes/reset.routes.js');
app.use('/api/reset', resetRouters);

const documentRouters = require('./routes/document.router.js');
app.use('/api/docs', documentRouters);

const engineRouters = require('./routes/engine.router.js');
app.use('/api/engines', engineRouters);

const testDriveRouters = require('./routes/testDrive.router.js');
app.use('/api/testDrives', testDriveRouters);

const featuresRouters = require('./routes/features.router.js');
app.use('/api/features', featuresRouters);

const acRouters = require('./routes/ac.router.js');
app.use('/api/ac', acRouters);

const exteriorRouters = require('./routes/exterior.router.js');
app.use('/api/exteriors', exteriorRouters);

app.use((req, res, next) => {
    console.log(`Received request for: ${req.url}`);
    next();
});

module.exports = app;
