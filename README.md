# PETLY
# 개발 가이드

## 코드 구조 및 규칙

### 컴포넌트 구조
각 React 컴포넌트는 다음 구조를 따릅니다:

```javascript
// 1. 컴포넌트 정의
function ComponentName({ props }) {
    // 2. State 선언
    const [state, setState] = React.useState(initialValue);
    
    // 3. Effect 훅
    React.useEffect(() => {
        // 초기화 로직
    }, [dependencies]);
    
    // 4. 이벤트 핸들러
    const handleEvent = () => {
        // 이벤트 처리
    };
    
    // 5. 렌더링
    return (
        <div>
            {/* JSX */}
        </div>
    );
}
```

### API 호출 패턴

```javascript
const fetchData = async () => {
    try {
        const token = localStorage.getItem('token');
        const response = await fetch('/api/endpoint', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        });
        
        if (!response.ok) {
            throw new Error('API 호출 실패');
        }
        
        const data = await response.json();
        // 데이터 처리
    } catch (error) {
        console.error('오류:', error);
        // 오류 처리
    }
};
```

### LocalStorage 사용

```javascript
// 저장
localStorage.setItem('key', JSON.stringify(data));

// 불러오기
const data = JSON.parse(localStorage.getItem('key'));

// 삭제
localStorage.removeItem('key');
```

## 새로운 기능 추가하기

### 1. 새로운 페이지 추가

#### Step 1: 컴포넌트 생성
`public/components/NewFeature.js` 파일 생성:

```javascript
function NewFeature({ props }) {
    return (
        <div>
            <div className="header">
                <h1>새 기능 제목</h1>
                <p>설명</p>
            </div>
            
            <div className="content">
                {/* 내용 */}
            </div>
        </div>
    );
}
```

#### Step 2: CSS 추가
`public/css/NewFeature.css` 파일 생성

#### Step 3: MainApp에 통합
`public/MainApp.js`에서:

```javascript
// 페이지 상태에 추가
const [page, setPage] = React.useState('dashboard');

// 렌더링 부분에 추가
{page === 'newfeature' && <NewFeature />}
```

#### Step 4: Sidebar에 아이콘 추가
`public/components/Sidebar.js`에서:

```javascript
<div 
    className={`icon ${page === 'newfeature' ? 'active' : ''}`}
    onClick={() => setPage('newfeature')}
    title="새 기능"
>
    🆕
</div>
```

#### Step 5: HTML에 스크립트 추가
`public/main.html`에서:

```html
<script type="text/babel" src="components/NewFeature.js"></script>
```

### 2. 새로운 API 엔드포인트 추가

#### Step 1: 라우트 파일 생성
`routes/newfeature.js`:

```javascript
const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

router.get('/', auth, async (req, res) => {
    try {
        // 로직 구현
        res.json({ success: true, data: result });
    } catch (error) {
        res.status(500).json({ message: '서버 오류' });
    }
});

module.exports = router;
```

#### Step 2: server.js에 등록

```javascript
const newfeatureRoutes = require('./routes/newfeature');
app.use('/api/newfeature', newfeatureRoutes);
```

### 3. 새로운 MongoDB 모델 추가

`models/NewModel.js`:

```javascript
const mongoose = require('mongoose');

const newModelSchema = new mongoose.Schema({
    field1: {
        type: String,
        required: true
    },
    field2: {
        type: Number,
        default: 0
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('NewModel', newModelSchema);
```

## 디버깅 팁

### 1. 브라우저 콘솔 활용
```javascript
console.log('디버그:', variable);
console.error('오류:', error);
console.table(arrayData);
```

### 2. React DevTools
- 브라우저 확장 프로그램 설치
- 컴포넌트 상태 확인
- Props 추적

### 3. Network 탭
- API 호출 확인
- 응답 데이터 검증
- 오류 상태 코드 확인

### 4. LocalStorage 확인
```javascript
// 콘솔에서 실행
console.log(localStorage);
```

## 성능 최적화

### 1. 이미지 최적화
- 적절한 크기로 리사이즈
- WebP 형식 사용 고려
- Lazy loading 구현

### 2. API 호출 최적화
- 불필요한 재호출 방지
- 캐싱 활용
- 디바운싱/쓰로틀링 적용

### 3. 상태 관리
- 필요한 경우에만 상태 업데이트
- 불필요한 리렌더링 방지

## 보안 고려사항

### 1. 인증
- JWT 토큰 만료 시간 설정
- 토큰 갱신 메커니즘
- HTTPS 사용 (프로덕션)

### 2. 입력 검증
- 클라이언트와 서버 양쪽에서 검증
- SQL Injection 방지
- XSS 공격 방지

### 3. 환경 변수
- `.env` 파일을 git에 커밋하지 않기
- 민감한 정보는 환경 변수로 관리

## 배포

### 1. 프로덕션 빌드
```bash
# 의존성 설치
npm install --production

# 환경 변수 설정
# .env 파일 생성 및 프로덕션 값 입력
```

### 2. 서버 실행
```bash
# PM2 사용 (권장)
npm install -g pm2
pm2 start server.js --name petly

# 또는 직접 실행
node server.js
```

### 3. 체크리스트
- [ ] 환경 변수 설정 확인
- [ ] MongoDB 연결 확인
- [ ] Firebase 설정 확인
- [ ] OpenAI API 키 확인
- [ ] CORS 설정 확인
- [ ] 포트 설정 확인

## 문제 해결

### 자주 발생하는 문제

#### 1. MongoDB 연결 실패
```
해결: .env 파일의 MONGODB_URI 확인
```

#### 2. JWT 인증 실패
```
해결: 토큰 만료 확인, 로그아웃 후 재로그인
```

#### 3. 이미지 업로드 실패
```
해결: Firebase 설정 확인, Storage 규칙 확인
```

#### 4. AI 챗봇 응답 없음
```
해결: OpenAI API 키 확인, 크레딧 잔액 확인
```

## 기여 가이드

1. 기능 브랜치 생성
2. 코드 작성 및 테스트
3. 커밋 메시지 규칙 준수
4. Pull Request 생성

### 커밋 메시지 규칙
```
feat: 새로운 기능 추가
fix: 버그 수정
docs: 문서 수정
style: 코드 포맷팅
refactor: 코드 리팩토링
test: 테스트 추가
chore: 빌드 업무 수정
```
