# 참고사항

## 아이콘 폰트

- https://fontawesome.com
- https://xpressengine.github.io/XEIcon
  :index.html <link> 태그 확인

### 1.1. 본프로젝트 활용 아이콘 폰트

- https://react-icons.github.io/react-icons

## 2. css 초기화

- reset.css - 간략한 정리
  : https://meyerweb.com/eric/tools/css/reset/reset.css

- normalize.css - 상세한 정리
  : https://necolas.github.io/normalize.css/8.0.1/normalize.css

- 우리가 만든 common.css 파일

```css
@charset "utf-8";
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100..900&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Inter&display=swap");

* {
  margin: 0px;
  padding: 0;
  box-sizing: border-box;
  /* outline-style: none; */
}
a {
  color: #1e1e1e;
  text-decoration: none;
}
ul,
ol,
li {
  list-style: none;
}
html {
  font-size: 14px;
  overflow-x: hidden;
}

body {
  font-family: "Inter", "Noto Sans KR", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-optical-sizing: auto;
  color: #1e1e1e;
  font-size: 14px;
}
```

-필수 주의 사항

```
반드시 reset 또는 normalize 를 먼저 배치하고
본인의 css 를 배치해야한다. 그렇지 않으면
우리 css 가 덮어써 져서 정상적 구성이 어렵다.

```

```html
<link
  rel="stylesheet"
  href="https://meyerweb.com/eric/tools/css/reset/reset.css"
/>
<link
  rel="stylesheet"
  href="https://necolas.github.io/normalize.css/8.0.1/normalize.css"
/>
<link
  rel="stylesheet"
  href="//cdn.jsdelivr.net/npm/xeicon@2.3.3/xeicon.min.css"
/>
<link rel="stylesheet" href="./css/common.css" />
<link rel="stylesheet" href="./css/header.css" />
<link rel="stylesheet" href="./css/main.css" />
<link rel="stylesheet" href="./css/card-list.css" />
<link rel="stylesheet" href="./css/footer.css" />
```

## 3. inline, block, inline-block 정리

### 3.1. display: inline

```
<span>, <b>, <strong>, <a>, <img>...
```

- 가로로 배치된다
- 너비, 높이 비활성이
- 패딩, 마진 일부 미지원
- 글자처럼 옆으로 계속 배치된다

### 3.2. display: bolck

```
<div>, <header>, <main>, <footer>
<ul>, <li>, <h1>, <h2> ...
```

- 자동으로 너비가 100% 기본값
- 너비, 높이, 마진, 패딩 등 모두 가능

### 3.3. display:inline-block

- 가로로너비, 높이 등을 셋팅, 즉 block 도 같이 부여
- display: inline-block
- 기본너비는 지정하지 않으면 내용물 만큼 소비.
- 가로로 연속 배치가 가능하다.

## 4. css 정리

- VScode PostCSS Sorting 설치

```
정렬 속성 셋팅
설정 메뉴 > setting.json 검색 > 파란색 글자 setting.json 찾아서 클릭
그냥 설정창 상단에 아이콘을 누르자.
```

-다음 항목을 추가한다. (쉼표를 꼭 넣자)

```json
"postcssSorting.config": {
  "properties-order": ["display", "list-style", "position", "top", "right", "bottom", "left", "float", "clear", "width", "height", "padding", "margin", "border", "background", "color", "font", "font-weight", "font-size", "line-height", "font-family", "letter-spacing", "text-decoration", "text-align", "verticla-align", "white-space", "content", "animation"]
}
```

- 키보드 단축기 셋팅하기

```
관리 도구 > 바로 가기 키  > 클릭 > post 검색 > 중복 안된키 조합
 Ctrl + Alt + C 로 설정
```
