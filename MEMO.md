<!-- @format -->

# Stack

- react
- react-router-dom

## react

### useState

```
import {useState} from "react"

const [temp, setTemp] = useState();

/*
1. 첫번째 인자: state로 쓸 변수명
2. 두번째 인자: state의 값을 업데이트 시킬 때 써야하는 함수
3. useState = state의 초깃값을 설정함

state를 사용하는 이유:
state로 지정한 변수 값이 업데이트할 때 화면을 재렌더링시킬 필요가 없어짐

*/
```

```
onChange: 해당 요소의 값이 변화하면 발생하는 이벤트
onClick: 해당 요소가 클릭되면 발생하는 이벤트
```

### react-router-dom

```
import {BrowserRoute, Routes, Route} from "react-router-dom";

return(
  <BrowserRoute>
    <Routes>
      <Route path={"/"} element={<Home/>} ></Route>
    </Routes>
  </BrowserRoute>
);
=> BrowserRouter 안에 Routes를, Routes 안에 Route를 넣어 사용
=> Route에서 path는 url 주소를 element에는 그 주소에서 띄울 컴포넌트를 넣음
```

```
import {Link} from "react-router-dom";

return (
  <Link to={"/"}>Home</Link>
);
=> Link는 navbar를 만들 때 사용
=> Link에서 to는 이동할 url 주소를 넣음
```