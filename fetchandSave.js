const axios = require('axios');
const mongoose = require('mongoose');
const Post = require('./model/post');

const MONGO_URL = 'mongodb://127.0.0.1:27017/demo_api';

async function fetchAndSaveData() {
    try {
        await mongoose.connect(MONGO_URL);
        console.log("MongoDB connected!");

        const { data } = await axios.get("https://jsonplaceholder.typicode.com/posts");

      //  console.log(data);

        await Post.deleteMany();   // optional: clear old data
        const result = await Post.insertMany(data);

        console.log("Data saved successfully!", result.length);
        mongoose.disconnect();
    } catch (error) {
        console.error(error);
    }
}

fetchAndSaveData();
