
import {useState, useEffect} from "react";
                   
function App(){
    const [toDo, setToDo] = useState("");
    const [toDos, setToDos] = useState([]); 
        //여러개의 toDo받는 배열
        //수정하려면 수정함수 사용해야함
            //todo.push 이런 거 안함
    const onChange = (event) => setToDo(event.target.value);
    // console.log(toDo);

    const onSubmit = (event) => {
        event.preventDefault();
        // console.log(toDo);
        if(toDo === ""){
            return; //todo가 비어있으면 함수 작동 안함
        }
        setToDo(""); //input비우기
        setToDos((currentArray) => [toDo, ...currentArray]); 
            //이 state는 항상 새로운 것이어야 한다
            //function (currentArray){} 와 똑같음
            //currentyArray 혹은 currentToDos를 받아왔고 새로운 array를 retur해주겠다
            //새로운 array는 state에 있는 toDo와 모든 이전 toDos들을 갖게될 것
            //[toDo, toDos] 안되는 이유 > [toDo, Array()] > 배열 안의 배열 형식
            //[todo, ...currentArray] 해야 배열이 이어짐
            //영상 좌표) 7-0, 9:57
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
        </div>)
}
export default App;