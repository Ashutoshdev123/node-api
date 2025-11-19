const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const postRoutes = require('./Routes/postRoutes');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/demo_api")
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log(err));

app.use("/posts", postRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
