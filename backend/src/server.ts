import "dotenv/config";
import mongoose from "mongoose";
import express from 'express';

const app = express();
const port = process.env.PORT;

app.get('/', (req, res) => {
    res.send('Welcome to komboNation');
});

mongoose.connect(process.env.MONGODB_CONNECTION_STRING!)
.then(() => {
    console.log("Mongoose Connected");
    app.listen(port, () => {
        console.log(`Server running on port: ${port}`);
    });
})
.catch(console.error);


