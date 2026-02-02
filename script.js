// ===== D-Day 계산 =====
function calculateDday() {
    const openingDate = new Date('2026-02-21T16:00:00');
    const today = new Date();
    const timeDiff = openingDate - today;
    const daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

    const ddayElement = document.getElementById('dday');
    if (ddayElement) {
        if (daysDiff > 0) {
            ddayElement.textContent = `D-${daysDiff}`;
        } else if (daysDiff === 0) {
            ddayElement.textContent = 'D-Day';
        } else {
            ddayElement.textContent = `D+${Math.abs(daysDiff)}`;
        }
    }
}

// ===== 계좌번호 복사 =====
function copyAccount(accountNumber) {
    navigator.clipboard.writeText(accountNumber).then(() => {
        showToast('계좌번호가 복사되었습니다.');
    }).catch(() => {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = accountNumber;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        showToast('계좌번호가 복사되었습니다.');
    });
}

// ===== 링크 복사 =====
function copyLink() {
    const url = window.location.href;
    navigator.clipboard.writeText(url).then(() => {
        showToast('링크가 복사되었습니다.');
    }).catch(() => {
        const textArea = document.createElement('textarea');
        textArea.value = url;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        showToast('링크가 복사되었습니다.');
    });
}

// ===== 카카오톡 공유 =====
function shareKakao() {
    // 카카오톡 SDK가 로드되어 있으면 사용
    if (typeof Kakao !== 'undefined' && Kakao.isInitialized()) {
        Kakao.Share.sendDefault({
            objectType: 'feed',
            content: {
                title: 'KICK FC ACADEMY 개업 안내',
                description: '2026년 2월 21일 토요일 오후 4시 ~ 7시\n축구 교실 개업을 축하해주세요!',
                imageUrl: 'YOUR_IMAGE_URL', // 대표 이미지 URL
                link: {
                    mobileWebUrl: window.location.href,
                    webUrl: window.location.href,
                },
            },
            buttons: [
                {
                    title: '개업 안내 보기',
                    link: {
                        mobileWebUrl: window.location.href,
                        webUrl: window.location.href,
                    },
                },
            ],
        });
    } else {
        // 카카오 SDK가 없으면 안내 메시지
        showToast('카카오톡 공유를 사용하려면 Kakao SDK 설정이 필요합니다.');
    }
}

// ===== 토스트 메시지 =====
function showToast(message) {
    // 기존 토스트 제거
    const existingToast = document.querySelector('.toast');
    if (existingToast) {
        existingToast.remove();
    }

    // 새 토스트 생성
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    document.body.appendChild(toast);

    // 표시
    setTimeout(() => toast.classList.add('show'), 10);

    // 3초 후 제거
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// ===== 방명록 추가 =====
function addGuestbookEntry() {
    const messageInput = document.getElementById('guestbookMessage');
    const nameInput = document.getElementById('guestbookName');
    const entriesContainer = document.getElementById('guestbookEntries');

    const message = messageInput.value.trim();
    const name = nameInput.value.trim() || '익명';

    if (!message) {
        showToast('메시지를 입력해주세요.');
        return;
    }

    // 새 방명록 항목 생성
    const entry = document.createElement('div');
    entry.className = 'guestbook-entry';
    entry.innerHTML = `
        <p class="entry-message">"${escapeHtml(message)}"</p>
        <p class="entry-author">- ${escapeHtml(name)}</p>
    `;

    // 맨 위에 추가
    entriesContainer.insertBefore(entry, entriesContainer.firstChild);

    // 입력 필드 초기화
    messageInput.value = '';
    nameInput.value = '';

    showToast('축하 메시지가 등록되었습니다.');

    // 실제 서버에 저장하려면 여기에 API 호출 추가
    // saveGuestbookEntry(name, message);
}

// ===== HTML 이스케이프 =====
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// ===== RSVP 폼 제출 =====
document.addEventListener('DOMContentLoaded', function() {
    const rsvpForm = document.getElementById('rsvpForm');

    if (rsvpForm) {
        rsvpForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const formData = new FormData(rsvpForm);
            const data = {
                guestName: formData.get('guestName'),
                guestCount: formData.get('guestCount'),
                attendance: formData.get('attendance')
            };

            // 실제 서버에 전송하려면 여기에 API 호출 추가
            // sendRsvp(data);

            console.log('RSVP Data:', data);
            showToast('참석 여부가 전달되었습니다. 감사합니다!');
            rsvpForm.reset();
        });
    }

    // D-Day 계산 실행
    calculateDday();

    // 스크롤 애니메이션 (Intersection Observer)
    initScrollAnimation();
});

// ===== 스크롤 애니메이션 =====
function initScrollAnimation() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // 애니메이션 적용할 요소들 선택
    const animatedElements = document.querySelectorAll('section');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // 히어로 섹션은 항상 보이도록
    const heroSection = document.querySelector('.hero-section');
    if (heroSection) {
        heroSection.style.opacity = '1';
        heroSection.style.transform = 'none';
    }
}

// ===== 서버 API 함수들 (실제 구현 시 사용) =====

// 방명록 저장
async function saveGuestbookEntry(name, message) {
    try {
        const response = await fetch('/api/guestbook', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, message }),
        });
        return await response.json();
    } catch (error) {
        console.error('방명록 저장 실패:', error);
    }
}

// RSVP 전송
async function sendRsvp(data) {
    try {
        const response = await fetch('/api/rsvp', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        return await response.json();
    } catch (error) {
        console.error('RSVP 전송 실패:', error);
    }
}
