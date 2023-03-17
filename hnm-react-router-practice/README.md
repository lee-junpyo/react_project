## 쇼핑몰 프로젝트
### 프로젝트 소개
* 해당 프로젝트는 인프런 강의인 **리액트 : 프론트엔드 개발자로 가는 마지막 단계** 의 클론코딩한 프로젝트 입니다.
* H&M 쇼핑몰을 참고하여 리액트로 구현한 프로젝트 입니다.
* react router를 활용하여 메인페이지, 로그인페이지, 상품정보 페이지 이동과 api 연동하여 데이터를 보여주는 것이 해당 프로젝트의 핵심 기능입니다.
* state 관리는 redux를 사용하였으며, api 연동 시 리덕스 미들웨이인 redux-thunk를 사용하였습니다.
<br>

### 화면단
<img src="https://user-images.githubusercontent.com/111855438/225038092-42d3d11f-05eb-4371-8d0c-747190dbdb2d.mp4">
<br>
<br>

### 서버 URL
* https://2junticket-hnm-project.netlify.app/
<br>
<br>

 ### 스토리보드

> 1. 유저는 메뉴와 상품들을 볼 수 있다.
>       * 상단메뉴는 동작하지 않는다.
> 2. 유저는 로그인을 할 수 있다.
>       * 2-1. json-server로 자체 api 생성하여 테스트(db.json에 값이 있음)
>       * 서버에서 사용하기위해 my-json-server API 서버 구축
> 3. 유저는 상품디테일을 보기 위해 로그인을 해야한다.
>       * 백엔드가 없으므로 로그인 버튼 클릭 시 로그인 되도록 한다.
> 4. 로그인한 유저는 상품디테일정보를 볼 수 있다.
> 5. 유저는 상품을 검색할 수 있다.
>       * 검색창에서 엔터시에만 검색한다.
> 6. 유저는 로그아웃할 수 있다.
> 7. 모바일화면으로 전환 시 사이드바버튼을 노출한다.
#### 추가사항
> * 리덕스와 리덕스 미들웨어로 state 관리 및 api 연동

<br>

### API문서
* 자체 restAPI 생성하여 사용
* https://my-json-server.typicode.com/lee-junpyo/react_project/products/
<br>

### 사용한 기술 스택
#### IDE
  <img src="https://img.shields.io/badge/Visual Studio Code-007ACC?style=flat&logo=Visual Studio Code&logoColor=white"/>
<br>

#### Front-End Programming Languages
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white"/> <img src="https://img.shields.io/badge/CSS Modules-000000?style=flat&logo=cssModules&logoColor=white"/> <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white"/> <img src="https://img.shields.io/badge/JavaScript(ES8)-F7DF1E?style=flat&logo=javascript&logoColor=white"/> <img src="https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=white"/><img src="https://img.shields.io/badge/BootStrap-7952B3?style=flat&logo=bootstrap&logoColor=white"/>
<br>

#### 형상관리
  <img src="https://img.shields.io/badge/GitHub-181717?style=flat&logo=github&logoColor=white"/>
<br>

#### 배포서버
 <img src="https://img.shields.io/badge/netlify-%23000000.svg?style=for-the-badge&logo=netlify&logoColor=#00C7B7"/>
<br>
<br>

### 라이브러리
* react-bootstrap : 2.7.2
* json-server : 0.17.2
* react-router-dom : 6.9.0
* redux : 4.2.1
* react-redux : 8.0.5
* redux-thunk : 2.4.2
<br>
<br>


### 개발자 정보
|Profile|<img src="https://user-images.githubusercontent.com/48265181/197502155-a56f3d2b-6301-41cf-aa65-59e54e253fa9.png" />|
|:---:|:---:|
|Name|이준표|
|Email|2junticket@gmail.com|