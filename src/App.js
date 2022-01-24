//router(url을 보고 있는 component)를 render함
//새로운 component render할 것이다
//댓글 정보 : https://nomadcoders.co/react-for-beginners/lectures/3291
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom"; 
//link 컴포넌트: a태그 대신 다른 페이지 링크해줌
//화면 전체 재실행 방지
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App(){
    return (
    <Router>
        <Switch>
            <Route path="/movie/:id">
                <Detail />
            </Route>
            <Route path="/">
                <Home />
            </Route>
        </Switch>
    </Router>)
} 
export default App;
//switch에서는 한번에 하나의 route 렌더할 수 있다.





