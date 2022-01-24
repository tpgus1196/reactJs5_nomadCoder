
//수정함수- 두가지 옵션 기억 ***복습***
    //1. 값을 보내는 방법
    //setToDo(""); //input비우기
    //2. 함수를 보내는 방법 
    //setToDos((currentArray) => [toDo, ...currentArray]); 
    import {useState, useEffect} from "react";
                   
    function App(){
        const [toDo, setToDo] = useState("");
        const [toDos, setToDos] = useState([]); 
           
        const onChange = (event) => setToDo(event.target.value);
        // console.log(toDo);
    
        const onSubmit = (event) => {
            event.preventDefault();
            // console.log(toDo);
            if(toDo === ""){
                return;
            }
            setToDo(""); //input비우기
            //setToDo가 비어있는 string값으로 불려졌다면
            //toDo는 비어있는 String 값이 될 것이다
    
            setToDos((currentArray) => [toDo, ...currentArray]); 
            //현재 toDos를 받아 새로운 toDo의 배열로 return하는 것
            //함수 보낼 때 react.js는 
            //함수의 첫 번째 argument로 현재 state로 보냄
            //>이 현재 State를 계산하거나 새로운 state만드는데 사용할 수 있다.
        };
        console.log(toDos); //toDo 배열 확인
    
        return (
            <div>
            <h1>My To Dos ({toDos.length})</h1>
            <form onSubmit={onSubmit}>
                <input 
                onChange={onChange} 
                value={toDo} 
                type="text" 
                placeholder="Write your to do..." />
                <button>Add To Do</button>
            </form>
            <hr />
            <ul>
            {toDos.map((item, index) => (
            <li key={index}>{item}</li> 
            // map함수는 배열의 모든 item에 대해 실행될 것이다
            //예전 배열(todos)을 가져와 item들을 변형함 > li로 바꿈
            //map(()=>":)") 이런 식 > 모든 배열 아이템들이 :)로 변형됨
            //map((item)=>item.toUpperCase())
            //key는 고유값만 설정 가능 > index는 숫자
            ))}
            </ul>
            </div>)
    }
    export default App;