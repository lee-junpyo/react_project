## 리액트 기초 프로젝트
> ### 1. 프로젝트 생성 및 리액트 구성
>* React 설치
>    * npx create-react-app -> 리액트를 시작하는데 필요한 패키지들을 싹다 가져와 한번에 설치 
>* React 구성
>   * Public > index.html
>   * 리액트 프로젝트에서 html 파일은 단 하나(페이지가 하나) -> SPA(Single Page Application)
>   * 페이지는 하나이지만 안에 내용을 바꿔줌, 페이지가 여러개처럼 보이지만 하나밖에 없음
>   * 페이지를 매번 새로 가져올 필요X
>   * 웹사이트를 모바일앱처럼 사용가능
>   * src > index.js
>       * 리액트 기본셋팅
>       * html과 js를 연결시켜주는 브릿지
>       * document.getElementById(‘’root) -> 딱 한번씀
>       * Index.js의 역할은 index.html파일과 App.js 를 연결해주는 브릿지
>       * ReactDOM.render -> 선택한 html 태그에 react를 그려줌(얹어주는 역할)
>   * Src > App.js
>       * 모든작업을 여기서 함
>   * 리액트 실행 - npm start
>   * 리액트는 Class가 아닌 className을 씀
>   * JSX에서 elements는 하나의 태그(<>)로 감싸져 있어야한다.
>   * react에선 내가 원하는걸 묶어서 태그화(컴포넌트) 시킬 수 있다.
***
> ### 2.component
> * 컴포넌트 만드는 단축키 : rafce
> * 컴포넌트 주의사항
>   * 컴포넌트 명은 반드시 대문자로 시작
> * 컴포넌트만드는 경우
>   1. 반복되는 부분
>       * 리스트의 아이템 같은 반복이 되는 UI요소는 컴포넌트로 만드는게 좋음
>   2. 기능별로 
>       * 기능별로 나누어야 개발, 테스트, 유지보수 시 용이
>   3. 하나의 컴포넌트에 하나의 기능만 
>        * 나중에 재활용 될 경우 대비 컴포넌트에 한기능만 있는 것이 좋음
>   * 절대적인 기준은 없음, 시스템에 따라, 회사따라 그 규칙은 바뀜
> * props
>   * 상위 컴포넌트에서 하위 컴포넌트에 값전달 시 사용(단방향 데이터  흐름)
>   * 프로퍼티 수정X
>   * 프로퍼티에 문자열을 전달할 때는 큰따옴표(" ")를, 문자열 외의 값을 전달할 때는 중괄호({ })를 사용
*** 
> ### 3.state
> * state는 값이 바뀌면 렌더링이 일어난다.
> * useState -> react hook 중에 하나
> * useState(매개변수)초기값 설정, array 반환 - [상태값, 상태업데이트함수]
>   * 상태업데이트함수를 호출하여 상태값 변경 - 비 동기식
>   * 함수가 끝날때 실행됨
>* let이 아닌 const로 할당하는 이유
>   * 함수 내부의 변수가 함수 수명이 끝나더라도, 변수의 참조가 계속 된다면 그 변수의 수명은 계속 된다.-이걸 클로저라고함 이렇게 우린 컴포넌트가 render 가 되더라도 state를 기억할 수 있음.
>   * const로 선언하면 변수형태의 재 할당을 막을 수 있음.
*** 
> ### 4.class component
> * Constructor 라는 생성자를 통해 컴포넌트 생성할 때 state도 같이 생성
> * state값을 변경 시 setState 함수를 통해 값 변경
> * 함수, state를 부를 시 this. 항상 붙음> * ˚kv
> * props 만들 시 this. 항상 붙음
*** 
> ### 5.lifecycle
> * 리액트 앱의 3가지 lifecycle
> #### 1. Mounting - 컴포넌트가 시작했을때
> * 실행 Function
>    1. constructor - 첫번째로 실행되는 lifecycle 함수, 컴포넌트가 실행될 때 constructor 먼저 호출
>    2. getDerivedStateFromProps - render 메서드를 호출하기 직전에 호출, state와 props를 동기화 시켜주는 함수
>    3. render - UI 그려주는 함수
>    4. componentDidMount - UI 세팅이 완료되면 알려줌
> #### 2. Updating - state가 업데이트되고 UI업데이트 될때
> * 실행 Function
>    1. getDerivedStateFromProps - render 메서드를 호출하기 직전에 호출, state와 props를 동기화 시켜주는 함수
>    2. shouldComponentUpdate - 컴포넌트가 render를 할지말지 결정하는 함수
>    3. render - state, props가 업데이트되거나 업데이트가 강요되는 기타 상황들일 경우 render가 일어남
>    4. componentDidUpdate - state가 업데이트가 됐는지 알려줌
> #### 3. Unmounting : 컴포넌트가 종료될때
> * 실행 Function
>    1. componentWillUnmount - 컴포넌트가 종료될때 사용
*** 
> ### 6.함수형 component 라이프사이클
> * Lifecycle function은 class형컴포넌트에서만 사용가능하며 함수형 컴포넌트에서 사용 못함
> * 함수형 component의 라이플사이클 대체제 - useEffect(react hook)
> * useEffect - 매개변수를 2개를 받음(콜백함수, 배열)
> * componentDidMount
>   * useEffect 는 기본적으로 앱실행후 첫번째 렌더 후에 한번 실행이 된다.여기에선 주로 화면에 처음 보여줘야할 데이터들에 대한 api호출을 한다.
>   * useEffect의 배열에 아무것도 없으면 componentDidMount처럼 작동
> * componentDidUpdate
>   * useEffect두번째 매개변수인 배열에 state가 들어가 있다면 state값이 바뀔때마다 호출되는 componentDidUpdate 의 역할을 한다.
>   * state가 바뀌고 렌더후 호출된다
> * 배열 안에 여러개의 state 가 들어있다면?
>   * 배열안에 여러개의 state를 구독하고 있다면 배열 안에 state중 하나라도 업데이트가 되면 해당 useEffect가 호출이 된다. 하지만 여러개의 state가 동시에 업데이트 되었다 해도 한번만 호출이 된다.
