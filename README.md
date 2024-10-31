# 카드리스트 만들기

## 1. 주의 사항

```

a, span 태그는 너비와 높이를 줄 수 없다.
이유는 초기값이 display: inline 이라서.
```

```
a, span 태그에 너비, 높이, 마진, 패딩을 주려면
display: block 을 손으로 적어준다.
팁! display: flex 를 준다.
```

## 2. 정말 중요한 내용

### 2.1 position 을 필수로 이해를 해야 한다.

#### 2.1.2. position:fixed

```
웹 브라우저 기준으로 위치 고정
스크롤, 화면이 넓거나, 좁거나, 짧아도 위치가 고정 된다.
```

-주의사항

```
position:fixed 하면 웹브라우저 기준으로 화면의 내용이
레이아웃에서 높이가 반영이 안된다.
position:fixed 하면 너비를 줘야 한다.
배경색도 줘야 한다.
웹브라우저 기준으로 left, top bottom, right 도 설정
```

```
position:fiexd 하면 우선 전체 너비를 기준으로
내용과 구분해서 div 구성을 추천한다.
```
