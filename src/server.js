require('dotenv').config();
const app = require(".");
const { connectDb } = require("./config/db");

const PORT = process.env.PORT || 3000;
app.listen(PORT, async () => {
    await connectDb();
    console.log("API listening on port", PORT);
});
