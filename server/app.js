const express = require('express');
const cors = require('cors');
const { banners, newsList } = require('./mock/news');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

// 获取轮播图数据
app.get('/api/banners', (req, res) => {
    res.json({
        code: 0,
        data: banners
    });
});

// 获取新闻列表
app.get('/api/news', (req, res) => {
    res.json({
        code: 0,
        data: newsList
    });
});

// 获取新闻详情
app.get('/api/news/:id', (req, res) => {
    const newsId = parseInt(req.params.id);
    const news = newsList.find(item => item.id === newsId);
    
    if (news) {
        res.json({
            code: 0,
            data: news
        });
    } else {
        res.status(404).json({
            code: -1,
            message: '新闻不存在'
        });
    }
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
