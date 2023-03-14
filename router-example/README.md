## 라우터 : 멀티 웹페이지 만드는 법
> * Route - 경로
> * 리액트만으로는 여러개 페이지 만들 수 없다.
> * React-router 라이브러리를 사용하여 여러개 페이지를 보여줄수 있음
> * Routes 역할 - 각각의 페이지를 스위치 하는 역할
> * Route 속성값 2개 - path, element
> * path - 경로(각페이지의 주소), element - 해당 주소에 보여줄 페이지

> * Route 끼리 이동 되는 Link, Navigate
> * Link -> `<a>`태그처럼 작동, 라우터간에 이동할 수 있게 도와주는 링크
> * Navigate ->함수안에서 이동되게할때 사용하는 reactHook

> * 라우터 path에 ‘:id’ 같이 추가하면 파라미터를 받을 수 있음 : 뒤에 오는 값이 키값이 됨
> * UseParams로 파라미터값을 전달 받을 수 있음(react Hook)

> * url 쿼리 - 추가적인 조건, 정보를 보낼때 사용
> * 쿼리 뒤에 있는 값은 url 경로에 영향을 미치지 않음
> * Url 파라미터는 경로에 영향을 미침

> * Redirect 하는법
> * 해당 url 접근허용하지 않을 경우 다른 url로 이동시키는 것
> * 예시> 로그인이 안되있는 경우에 로그인시에만 볼수있는 페이지 url 호출 시 로그인페이지로 이동 시키는 것
> * Navigate라는 컴포넌트를 사용하여, 미로그인 시 로그인화면으로 이동 시킴

### Restful Route
> * REST 규칙을 이용해서 만든 api 디자인 패턴
> * Http 명령어와 URL을 매칭시켜 url디자인을 좀더 단순하고 통일성 있게 만듬

![restful routes](https://user-images.githubusercontent.com/111855438/224924303-4a97486e-3f4f-4b2e-a10a-00b4fae52074.png)

> * HTTP명령어
>   * Get : 데이터를 가져올 때 쓰임 (fetch하면 기본 명령어 속성이 Get임)
>   * Post : 데이터를 생성할 때 쓰임.
>   * Put : 데이터를 수정할 때 쓰임(Patch 라고도 불림)
>   * Delete: 데이터를 삭제할때 쓰임


