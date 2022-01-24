//6-4 cleanup ~
import {useState, useEffect} from "react";
                   
function Hello(){
    //초기 방법
        // function byeFn(){
        //     console.log("bye");
        // }
        // function hiFn() {
        //     console.log("created!");
        //     return byeFn; 
             //컴포넌트가 파괴될 때 function 실행하고 싶으면
             //=이 컴포넌트가 언제 파괴될지 알고싶으면
             //hiFn이 byeFn을 리턴 해줘야 함
             //특이 케이스만 사용하게 될 것이다.
                    
        // }
        //useEffect(hiFn,[]);
             //useEffect에 dependency가 비어있으므로,
             //component 처음 생성 이후 function 한번만 호출
             //byeFn 리턴이 있어야 react.js가 hiFn 이후
             //컴포넌트 파괴될 때 hiFn이 리턴한 function 실행 

    //방법1
    useEffect(() => {
        console.log("hi!");
        return function(){
            console.log("bye!");
        }
    }, []);

    //방법2 익명함수 제작 > 짧아서 선호
    useEffect(() => {
        console.log("hi!");
        return () => console.log("bye!"); //익명함수
    }, []);
    

    
    
    return <h1>Hello</h1>
}

function App(){
    //이 state는 showing과 setShowing을 불러온다
    const [showing, setShowing] = useState(false); //false가 디폴트?
    const onClick = () => setShowing((prev) => !prev); //앞의 인자와 반대 호출
    return (
        <div>
            {showing ? <Hello /> : null
                //showing = true이면, Hello 컴포넌트 render
            }
            <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
        </div>
    );
}
export default App;
