const express = require('express');
const cors = require('cors');
const connectDB = require('./config/database');
const authRoutes = require('./routes/auth');
const petRoutes = require('./routes/pets');
const chatRoutes = require('./routes/chat');
require('dotenv').config();

const app = express();

// 데이터베이스 연결
connectDB();

// 미들웨어
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// 라우트
app.use('/api/auth', authRoutes);
app.use('/api/pets', petRoutes);
app.use('/api/chat', chatRoutes);

// 기본 라우트
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// 메인 페이지 라우트
app.get('/main', (req, res) => {
  res.sendFile(__dirname + '/public/main.html');
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`서버가 포트 ${PORT}에서 실행 중입니다.`);
});