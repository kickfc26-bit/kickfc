# 모바일 청첩장 웹페이지

임진욱 ♥ 송효은 결혼식 모바일 청첩장

## 프로젝트 구조

```
wedding-invitation/
├── index.html    # 메인 HTML
├── style.css     # 스타일시트
├── script.js     # JavaScript
└── README.md     # 설명서
```

## 기능

- ✅ 반응형 디자인 (모바일/태블릿/PC)
- ✅ 인사말 및 성경구절
- ✅ 신랑/신부 연락처 (전화/문자)
- ✅ 갤러리 (사진 6장)
- ✅ 캘린더 및 D-Day 카운터
- ✅ 오시는 길 (카카오맵/네이버지도/티맵 연동)
- ✅ 참석 여부 RSVP 폼
- ✅ 축의금 계좌 (복사 기능)
- ✅ 방명록
- ✅ 카카오톡/링크 공유

## 커스터마이징

### 1. 기본 정보 수정 (index.html)

- 신랑/신부 이름
- 결혼식 날짜 및 시간
- 예식장 정보
- 부모님 성함
- 연락처
- 계좌번호

### 2. 사진 추가 (style.css, index.html)

갤러리 섹션의 `.gallery-item`에 실제 이미지 추가:
```html
<div class="gallery-item" style="background-image: url('images/photo1.jpg');"></div>
```

### 3. D-Day 날짜 수정 (script.js)

```javascript
const weddingDate = new Date('2026-01-31T16:00:00');
```

### 4. 카카오톡 공유 설정

1. [Kakao Developers](https://developers.kakao.com) 앱 등록
2. JavaScript 키 발급
3. index.html에 SDK 추가:
```html
<script src="https://t1.kakaocdn.net/kakao_js_sdk/2.6.0/kakao.min.js"></script>
<script>
    Kakao.init('YOUR_JAVASCRIPT_KEY');
</script>
```

### 5. 지도 API 연동

카카오맵 API나 네이버지도 API를 사용하여 실제 지도 표시 가능

---

## 🆓 무료 호스팅 옵션

### 1. GitHub Pages (추천)

**장점**: 완전 무료, 안정적, HTTPS 지원, 커스텀 도메인 가능

**방법**:
1. GitHub 계정 생성: https://github.com
2. 새 저장소(Repository) 생성
3. 파일 업로드 (index.html, style.css, script.js)
4. Settings → Pages → Source: main branch 선택
5. 배포 완료: `https://username.github.io/repository-name`

```bash
# Git 명령어로 배포
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/username/wedding-invitation.git
git push -u origin main
```

### 2. Netlify

**장점**: 드래그앤드롭 배포, 자동 HTTPS, 폼 제출 기능 내장

**방법**:
1. https://netlify.com 가입
2. "Add new site" → "Deploy manually"
3. 폴더 드래그앤드롭
4. 즉시 배포 완료

**URL 예시**: `https://random-name.netlify.app`

### 3. Vercel

**장점**: 빠른 CDN, 자동 배포, GitHub 연동

**방법**:
1. https://vercel.com 가입
2. "New Project" → GitHub 저장소 연결
3. 자동 배포

**URL 예시**: `https://project-name.vercel.app`

### 4. Cloudflare Pages

**장점**: 전 세계 CDN, 무제한 대역폭, 빠른 속도

**방법**:
1. https://pages.cloudflare.com 가입
2. GitHub/GitLab 연결
3. 프로젝트 배포

### 5. Firebase Hosting

**장점**: Google 인프라, 빠른 속도, CLI 도구 제공

**방법**:
```bash
npm install -g firebase-tools
firebase login
firebase init hosting
firebase deploy
```

---

## 호스팅 비교표

| 서비스 | 무료 용량 | 커스텀 도메인 | HTTPS | 배포 난이도 |
|--------|----------|---------------|-------|-------------|
| **GitHub Pages** | 1GB | ✅ | ✅ | 쉬움 |
| **Netlify** | 100GB/월 | ✅ | ✅ | 매우 쉬움 |
| **Vercel** | 100GB/월 | ✅ | ✅ | 쉬움 |
| **Cloudflare** | 무제한 | ✅ | ✅ | 보통 |
| **Firebase** | 10GB | ✅ | ✅ | 보통 |

---

## 추가 기능 (선택사항)

### 실시간 RSVP/방명록

무료 백엔드 서비스:
- **Firebase Realtime Database**: 실시간 데이터 동기화
- **Supabase**: PostgreSQL 기반 무료 백엔드
- **Airtable**: 스프레드시트 형태의 데이터베이스

### 구글 폼 연동

RSVP를 구글 폼으로 대체하면 백엔드 없이도 응답 수집 가능

### 커스텀 도메인

- **가비아, 호스팅케이알** 등에서 도메인 구매 (연 1-2만원)
- GitHub Pages, Netlify 등에서 커스텀 도메인 연결 가능

---

## 브라우저 테스트

로컬에서 테스트:
```bash
# Python 3
python -m http.server 8000

# Node.js (npx)
npx serve

# VS Code Live Server 확장 사용
```

http://localhost:8000 에서 확인

---

## 라이선스

개인 사용 목적으로 자유롭게 수정 및 배포 가능
