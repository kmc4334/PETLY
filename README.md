# PETLY - 반려동물 건강 관리 시스템

반려동물의 건강을 체계적으로 관리하고 모니터링하는 웹 애플리케이션입니다.

## 📁 프로젝트 구조

```
Fly/
├── config/                 # 설정 파일
│   ├── database.js        # MongoDB 연결 설정
│   └── firebase.js        # Firebase 설정
│
├── middleware/            # Express 미들웨어
│   └── auth.js           # JWT 인증 미들웨어
│
├── models/               # MongoDB 스키마
│   ├── User.js          # 사용자 모델
│   └── Pet.js           # 반려동물 모델
│
├── routes/              # API 라우트
│   ├── auth.js         # 인증 관련 API
│   ├── pets.js         # 반려동물 관리 API
│   └── chat.js         # AI 챗봇 API
│
├── public/             # 프론트엔드 파일
│   ├── components/     # React 컴포넌트
│   │   ├── Dashboard.js      # 대시보드
│   │   ├── PetList.js        # 반려동물 목록
│   │   ├── HealthCheck.js    # 건강 체크
│   │   ├── Vaccination.js    # 예방접종 관리
│   │   ├── Emergency.js      # 응급상황 대응
│   │   ├── Sidebar.js        # 사이드바
│   │   └── Modals.js         # 모달 컴포넌트
│   │
│   ├── css/           # 스타일시트
│   │   ├── Dashboard.css
│   │   ├── Pet.css
│   │   ├── Health.css
│   │   ├── Chat.css
│   │   └── Emergency.css
│   │
│   ├── images/        # 이미지 파일
│   │   └── logo.png
│   │
│   ├── utils/         # 유틸리티 함수
│   │   └── imageUpload.js
│   │
│   ├── index.html     # 로그인 페이지
│   ├── main.html      # 메인 애플리케이션
│   ├── Login.js       # 로그인 컴포넌트
│   ├── Login.css      # 로그인 스타일
│   ├── MainApp.js     # 메인 앱 컴포넌트
│   ├── App.js         # 앱 진입점
│   ├── Main.css       # 메인 스타일
│   └── firebase-config.js  # Firebase 클라이언트 설정
│
├── .env              # 환경 변수
├── server.js         # Express 서버
└── package.json      # 프로젝트 의존성

```

## 🚀 주요 기능

### 1. 사용자 인증
- 회원가입 / 로그인
- JWT 기반 인증
- 사용자 정보 관리

### 2. 반려동물 관리
- 반려동물 등록 (이름, 종류, 품종, 생년월일)
- 이미지 업로드 (Firebase Storage)
- 반려동물 정보 수정/삭제
- 나이 자동 계산

### 3. 건강 관리
- 일일 건강 체크리스트
- 주간 건강 점수 그래프
- 건강 상태 모니터링

### 4. 예방접종 관리
- 예방접종 일정 추가
- 접종 기록 관리
- 접종 상태 추적 (예정/완료/지남)
- 백신 종류별 관리

### 5. 응급상황 대응
- 응급상황별 대응 가이드
- 중독, 외상, 호흡곤란, 경련, 구토, 고열 등
- 응급 연락처 제공

### 6. AI 상담
- OpenAI 기반 반려동물 상담
- 실시간 채팅
- 대화 히스토리 관리

### 7. 지도 기능
- 현재 위치 기반 동물병원 검색
- Google Maps 연동

## 🛠 기술 스택

### Backend
- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT (jsonwebtoken)
- bcryptjs
- OpenAI API

### Frontend
- React 18 (CDN)
- Babel (브라우저 내 JSX 변환)
- Firebase (이미지 저장)
- Google Maps API

## 📦 설치 및 실행

### 1. 의존성 설치
```bash
npm install
```

### 2. 환경 변수 설정
`.env` 파일 생성:
```
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
OPENAI_API_KEY=your_openai_api_key
PORT=8080
```

### 3. 서버 실행
```bash
# 개발 모드 (nodemon)
npm run dev

# 프로덕션 모드
npm start
```

### 4. 접속
- 로그인: http://localhost:8080
- 메인 앱: http://localhost:8080/main

## 📝 API 엔드포인트

### 인증
- `POST /api/auth/register` - 회원가입
- `POST /api/auth/login` - 로그인
- `GET /api/auth/me` - 사용자 정보 조회

### 반려동물
- `GET /api/pets` - 반려동물 목록 조회
- `POST /api/pets` - 반려동물 등록
- `PUT /api/pets/:id` - 반려동물 정보 수정
- `DELETE /api/pets/:id` - 반려동물 삭제

### AI 챗봇
- `POST /api/chat/message` - AI 상담 메시지 전송

## 💾 데이터 저장

### LocalStorage
- `token` - JWT 인증 토큰
- `vaccinations` - 예방접종 기록
- `healthCheck_YYYY-MM-DD` - 일별 건강 체크리스트

### MongoDB
- Users 컬렉션 - 사용자 정보
- Pets 컬렉션 - 반려동물 정보

### Firebase Storage
- 반려동물 이미지 파일

## 🎨 디자인 특징
- 반응형 디자인
- 직관적인 UI/UX
- 부드러운 애니메이션
- 색상 코드 기반 상태 표시

## 📄 라이센스
MIT License
