## redux

> * 리액트 단방향이므로 부모가 값을 다 가지고 있어야함, props가 너무 많아짐 -> redux를 사용하여 store에서 필요할때 가져다 씀
> * redux는 state 관리하기 - state를 저장하는 저장소(store)
> * 리덕스 장점 - 어디서든 state가 필요하면 가져다 쓸 수 있음
> * component가 sotre의 값을 바로 바꾸거나 요청하지 못함 

### redux 설치
> * react에서 사용 하기 위해선 redux와 react-redux 모두 설치해야함
> * npm install redux
> * npm install react-redux

### redux concept
* Component -useDispatch-> Action -> Reducer-> Store(객체타입(Object)) -useSelector->Component()
> * Provider(Component)를 통해 app에 store를 전달

#### useDispatch
> * 컴포넌트에서 reducer로 액션 전달하는 react hook 함수
> * 사용법
>   *  const dispatch = useDispatch();
>   * dispatch({type : "INCREMENT", payload: 5});

#### Action
> * 행동 ex>상품정보 가져오기
> * action은 객체 object - 반드시 type, payload 키가 있어야함
>    * type-액션의 이름, payload-매개변수(내가 원하는 정보를 보내줄수 있음) 키가 있어야함
    >* ex> {type : "INCREMENT", payload: 5}

#### Reducer
> * 함수, 행동지침에 따라서 store를 업데이트
> * store안에 reducer가 추가해야됨
>   * store = createStore(reducer);
> * reducer에서 return 값으로 store값이 바뀜
> * reducer는 리턴을 항상 해줘야함 - 무조건 기본리턴 필요

### store
> * 객체 타입(Object)
> * 리듀서가 return으로 값을 바꿔주면 store의 값이 바뀜
> * store가 업데이트가 되면 component의 값도 업데이트 됨

### useSelector
> * store에 있는 값을 가져다 쓸때 사용하는 react hook 함수
> * 사용법
>   * const count = useSelector(state => state.count)
> * 함수가 매개 변수(state는 store의 값)
