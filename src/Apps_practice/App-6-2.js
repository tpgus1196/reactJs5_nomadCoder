import {useState, useEffect} from "react";
                    //useEffect function
                    //argument 2개(딱 한번 실행하고싶은 코드, 리액트가 지켜봐야하는(dependency) 특정한 변수)
                                                             //이게 변할때 코드 실행해야 해서                   
function App(){
    const [counter,setValue] = useState(0); 
                                //react.useState()안해도 됨 
    const [keyword, setKeyword] = useState("");
    const onClick = () => setValue((prev) => prev +1); //인자를 왜 넣어줄까? (없어도 작동함)
    //setValue > 이전 counter 에 1 더해져 return됨
    const onChange = (event) => setKeyword(event.target.value); 
    //이벤트리스너, function 작동 시 argument 로 event 받아 옴
    //글자 타이핑마다 I run all the time 출력. state 리렌더링 되는 것

    console.log("I run all the time");
   
    // const iRunOnlyOnce = () => {
    //     console.log("I run only once");
    // }
        //아래 익명 화살표 함수와 역할 같음(간단화)
    useEffect(() => {
        console.log("I run only once");
    }, []);
    //첫 번째로 render할 때만 코드 실행하고 싶은 경우
    //api로부터 데이터 가져올때, 
      //첫번째 component render에서 api call
      //state가 변화했을때 api 또 가져오고싶지 않은 경우
      //빈[]: react.js가 아무것도 지켜보지 않음 
      //따라서 한 번만 실행

    //버튼 클릭시(counter가 변해도) 키워드 변할때만 검색하도록(리렌더링 방지)
    useEffect(()=>{
        //console.log("I run when 'keyword' changes")
        if(keyword !== "" && keyword.length > 5){
            console.log("SEARCH FOR", keyword);
        }    
    }, [keyword]); //keyword가 변할때 검색하겠다 알려줌
    
    useEffect(()=>{
        console.log("I run when 'counter' changes")
    }, [counter]); //counter 변화만 관찰
    
    useEffect(()=>{
        console.log("I run when keyword and counter change");
    }, [keyword, counter]);

    return (
        <div>
            <input value={keyword} 
                    onChange={onChange} 
                    type="text" 
                    placeholder="Search here..." />
            <h1>{counter}</h1>
            <button onClick={onClick}>Click me</button>
        </div>
    );
}
export default App;
