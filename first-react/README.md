## 리액트 기초 프로젝트
> ### 1. 프로젝트 생성 및 component 생성 및 props 사용
>* React 설치
    >* npx create-react-app -> 리액틀르 시작하는데 필요한 패키지들을 싹다 가져와 한번에 설치 
>* React 구성
    >* Public > index.html
        >* 리액트 프로젝트에서 html 파일은 단 하나(페이지가 하나) -> SPA(Single Page Application)
        >* 페이지는 하나이지만 안에 내용을 바꿔줌, 페이지가 여러개처럼 보이지만 하나밖에 없음
        >* 페이지를 매번 새로 가져올 필요X
        >* 웹사이트를 모바일앱처럼 사용가능
    >* Src > index.js
        >* 리액트 기본셋팅
        >* html과 js를 연결시켜주는 브릿지
        >* document.getElementById(‘’root) -> 딱 한번씀
        >* Index.js의 역할은 index.html파일과 App.js 를 연결해주는 브릿지
        >* ReactDOM.render -> 선택한 html 태그에 react를 그려줌(얹어주는 역할)
    >* Src > App.js
        >* 모든작업을 여기서 함
    >* 리액트 실행 - npm start
    >* 리액트는 Class가 아닌 className을 씀
    >* JSX에서 elements는 하나의 태그(<>)로 감싸져 있어야한다.
    >* react에선 내가 원하는걸 묶어서 태그화(컴포넌트) 시킬 수 있다.