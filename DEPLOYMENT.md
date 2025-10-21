# 배포 가이드

이 앱을 인터넷에 배포하는 여러 가지 방법을 안내합니다.

## 방법 1: GitHub Pages (추천)

1. GitHub 리포지토리로 이동: `https://github.com/jiyu-designer/secondbrain-c`
2. Settings 탭 클릭
3. 왼쪽 메뉴에서 "Pages" 클릭
4. Source 섹션에서:
   - Branch: `claude/lunch-menu-recommendation-011CUKw18UX8S6JzE1fJG3mF` 선택
   - Folder: `/ (root)` 선택
5. Save 버튼 클릭
6. 몇 분 후 `https://jiyu-designer.github.io/secondbrain-c/` 에서 접속 가능

## 방법 2: Netlify (가장 빠름)

1. https://app.netlify.com/ 접속
2. "Add new site" > "Import an existing project" 클릭
3. "Deploy with GitHub" 선택
4. `jiyu-designer/secondbrain-c` 리포지토리 선택
5. Branch: `claude/lunch-menu-recommendation-011CUKw18UX8S6JzE1fJG3mF` 선택
6. Deploy site 클릭
7. 자동으로 URL 생성됨 (예: `https://your-site-name.netlify.app`)

### 또는 Netlify Drop 사용:

1. https://app.netlify.com/drop 접속
2. 프로젝트 폴더를 드래그 앤 드롭
3. 즉시 배포 완료! (임시 URL 제공)

## 방법 3: Vercel

1. https://vercel.com/ 접속
2. "New Project" 클릭
3. GitHub 리포지토리 import
4. `jiyu-designer/secondbrain-c` 선택
5. Branch: `claude/lunch-menu-recommendation-011CUKw18UX8S6JzE1fJG3mF` 선택
6. Deploy 클릭
7. URL 자동 생성 (예: `https://your-project.vercel.app`)

## 방법 4: Cloudflare Pages

1. https://pages.cloudflare.com/ 접속
2. "Create a project" 클릭
3. GitHub 연결
4. 리포지토리 선택 및 브랜치 지정
5. Deploy

---

가장 추천하는 방법은 **Netlify**입니다.
- 설정이 가장 간단하고
- 자동으로 HTTPS 제공
- 무료 플랜으로 충분

어떤 방법을 선택하시든 몇 분 안에 배포 완료됩니다!
