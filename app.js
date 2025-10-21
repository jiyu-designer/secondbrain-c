// 메뉴 데이터
const menuData = [
    // 한식
    { name: '김치찌개', category: '한식', emoji: '🍲', description: '얼큰하고 시원한 김치찌개, 밥도둑이죠!' },
    { name: '된장찌개', category: '한식', emoji: '🍲', description: '구수하고 깊은 맛의 된장찌개입니다.' },
    { name: '불고기', category: '한식', emoji: '🥩', description: '달콤한 양념의 불고기, 한국인의 소울푸드!' },
    { name: '삼겹살', category: '한식', emoji: '🥓', description: '고소한 삼겹살에 소주 한잔?' },
    { name: '비빔밥', category: '한식', emoji: '🍚', description: '건강한 한 끼, 비빔밥으로 영양 가득!' },
    { name: '냉면', category: '한식', emoji: '🍜', description: '시원하고 새콤달콤한 냉면!' },
    { name: '삼계탕', category: '한식', emoji: '🍗', description: '보양식의 정석, 삼계탕으로 기력 회복!' },
    { name: '갈비탕', category: '한식', emoji: '🍖', description: '진한 국물의 갈비탕, 든든합니다.' },
    { name: '제육볶음', category: '한식', emoji: '🍛', description: '매콤달콤한 제육볶음, 밥 한 공기 뚝딱!' },
    { name: '순두부찌개', category: '한식', emoji: '🍲', description: '부드럽고 얼큰한 순두부찌개' },

    // 중식
    { name: '짜장면', category: '중식', emoji: '🍝', description: '한국식 중화요리의 대표주자!' },
    { name: '짬뽕', category: '중식', emoji: '🍜', description: '얼큰한 국물이 생각날 때!' },
    { name: '탕수육', category: '중식', emoji: '🍖', description: '바삭한 튀김과 달콤한 소스의 조화' },
    { name: '양장피', category: '중식', emoji: '🥗', description: '시원하고 새콤달콤한 양장피' },
    { name: '마라탕', category: '중식', emoji: '🌶️', description: '얼얼한 맛이 당길 때, 마라탕!' },
    { name: '유산슬', category: '중식', emoji: '🥘', description: '다양한 해산물이 들어간 유산슬' },
    { name: '깐풍기', category: '중식', emoji: '🍗', description: '매콤달콤한 깐풍기' },
    { name: '볶음밥', category: '중식', emoji: '🍚', description: '고소한 중화 볶음밥' },

    // 일식
    { name: '초밥', category: '일식', emoji: '🍣', description: '신선한 생선으로 만든 초밥' },
    { name: '라멘', category: '일식', emoji: '🍜', description: '진한 국물의 일본식 라멘' },
    { name: '돈까스', category: '일식', emoji: '🍛', description: '바삭한 튀김옷의 돈까스' },
    { name: '우동', category: '일식', emoji: '🍜', description: '쫄깃한 면발의 우동' },
    { name: '덮밥', category: '일식', emoji: '🍚', description: '간편하고 맛있는 일본식 덮밥' },
    { name: '회덮밥', category: '일식', emoji: '🐟', description: '신선한 회가 가득한 회덮밥' },
    { name: '카레', category: '일식', emoji: '🍛', description: '부드러운 일본식 카레' },
    { name: '소바', category: '일식', emoji: '🥢', description: '메밀의 고소한 맛, 소바' },

    // 양식
    { name: '스테이크', category: '양식', emoji: '🥩', description: '육즙 가득한 스테이크' },
    { name: '파스타', category: '양식', emoji: '🍝', description: '다양한 소스의 파스타' },
    { name: '피자', category: '양식', emoji: '🍕', description: '치즈 가득한 피자' },
    { name: '햄버거', category: '양식', emoji: '🍔', description: '푸짐한 패티의 햄버거' },
    { name: '리조또', category: '양식', emoji: '🍚', description: '크리미한 이탈리안 리조또' },
    { name: '샐러드', category: '양식', emoji: '🥗', description: '신선한 야채 샐러드로 건강하게' },
    { name: '샌드위치', category: '양식', emoji: '🥪', description: '간편하고 든든한 샌드위치' },

    // 분식
    { name: '떡볶이', category: '분식', emoji: '🌶️', description: '매콤달콤한 떡볶이' },
    { name: '순대', category: '분식', emoji: '🍢', description: '쫄깃한 순대' },
    { name: '튀김', category: '분식', emoji: '🍤', description: '바삭한 각종 튀김' },
    { name: '김밥', category: '분식', emoji: '🍙', description: '간편한 한 끼, 김밥' },
    { name: '라면', category: '분식', emoji: '🍜', description: '얼큰한 라면' },
    { name: '우동', category: '분식', emoji: '🍜', description: '따뜻한 국물의 우동' },

    // 아시안
    { name: '쌀국수', category: '아시안', emoji: '🍜', description: '베트남의 대표 음식, 쌀국수' },
    { name: '팟타이', category: '아시안', emoji: '🍝', description: '태국식 볶음 쌀국수' },
    { name: '분짜', category: '아시안', emoji: '🍲', description: '베트남 스타일 고기국수' },
    { name: '월남쌈', category: '아시안', emoji: '🥬', description: '신선한 야채와 고기를 싸먹는 월남쌈' },
    { name: '팟카파오', category: '아시안', emoji: '🍛', description: '태국식 바질 볶음밥' },
    { name: '똠얌꿍', category: '아시안', emoji: '🍤', description: '새콤매콤한 태국 수프' },
    { name: '나시고렝', category: '아시안', emoji: '🍚', description: '인도네시아식 볶음밥' }
];

// 전역 변수
let currentCategory = 'all';
let history = [];

// DOM 요소
const categoryBtns = document.querySelectorAll('.category-btn');
const recommendBtn = document.getElementById('recommendBtn');
const menuEmoji = document.getElementById('menuEmoji');
const menuName = document.getElementById('menuName');
const menuCategory = document.getElementById('menuCategory');
const menuDescription = document.getElementById('menuDescription');
const historyList = document.getElementById('historyList');
const clearHistoryBtn = document.getElementById('clearHistoryBtn');

// 로컬 스토리지에서 기록 불러오기
function loadHistory() {
    const savedHistory = localStorage.getItem('lunchHistory');
    if (savedHistory) {
        history = JSON.parse(savedHistory);
        renderHistory();
    }
}

// 로컬 스토리지에 기록 저장
function saveHistory() {
    localStorage.setItem('lunchHistory', JSON.stringify(history));
}

// 카테고리 필터링
categoryBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // 모든 버튼의 active 클래스 제거
        categoryBtns.forEach(b => b.classList.remove('active'));
        // 클릭된 버튼에 active 클래스 추가
        btn.classList.add('active');
        // 현재 카테고리 업데이트
        currentCategory = btn.dataset.category;
    });
});

// 메뉴 추천
function recommendMenu() {
    // 카테고리에 맞는 메뉴 필터링
    let filteredMenus = menuData;
    if (currentCategory !== 'all') {
        filteredMenus = menuData.filter(menu => menu.category === currentCategory);
    }

    // 랜덤 메뉴 선택
    const randomIndex = Math.floor(Math.random() * filteredMenus.length);
    const selectedMenu = filteredMenus[randomIndex];

    // 화면에 표시
    menuEmoji.textContent = selectedMenu.emoji;
    menuName.textContent = selectedMenu.name;
    menuCategory.textContent = selectedMenu.category;
    menuDescription.textContent = selectedMenu.description;

    // 애니메이션 효과
    const card = document.querySelector('.recommendation-card');
    card.style.animation = 'none';
    setTimeout(() => {
        card.style.animation = 'fadeIn 0.5s ease';
    }, 10);

    // 기록에 추가
    addToHistory(selectedMenu);
}

// 기록에 추가
function addToHistory(menu) {
    const now = new Date();
    const timeString = now.toLocaleString('ko-KR', {
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });

    const historyItem = {
        name: menu.name,
        category: menu.category,
        time: timeString,
        timestamp: now.getTime()
    };

    // 최근 10개만 유지
    history.unshift(historyItem);
    if (history.length > 10) {
        history.pop();
    }

    saveHistory();
    renderHistory();
}

// 기록 렌더링
function renderHistory() {
    if (history.length === 0) {
        historyList.innerHTML = '<p class="empty-message">아직 추천 기록이 없습니다.</p>';
        return;
    }

    historyList.innerHTML = history.map(item => `
        <div class="history-item">
            <div class="history-item-info">
                <span class="history-item-menu">${item.name}</span>
                <span class="history-item-category">${item.category}</span>
            </div>
            <span class="history-item-time">${item.time}</span>
        </div>
    `).join('');
}

// 기록 삭제
function clearHistory() {
    if (confirm('추천 기록을 모두 삭제하시겠습니까?')) {
        history = [];
        saveHistory();
        renderHistory();
    }
}

// 이벤트 리스너
recommendBtn.addEventListener('click', recommendMenu);
clearHistoryBtn.addEventListener('click', clearHistory);

// 초기화
loadHistory();

// 엔터키로도 추천 가능
document.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        recommendMenu();
    }
});
