const express = require('express');
const router = express.Router();
const Post = require('../model/post');

// GET /posts?page=1&limit=10&sort=title
router.get("/", async (req, res) => {
    try {
        let { page = 1, limit = 10, sort = "id" } = req.query;

        page = parseInt(page);
        limit = parseInt(limit);

        const posts = await Post.find()
            .sort({ [sort]: 1 })        // ascending sort
            .skip((page - 1) * limit)
            .limit(limit);

        const total = await Post.countDocuments();

        res.json({
            total,
            page,
            limit,
            totalPages: Math.ceil(total / limit),
            data: posts
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
