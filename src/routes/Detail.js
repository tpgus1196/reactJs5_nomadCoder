import { getMouseEventOptions } from "@testing-library/user-event/dist/utils";
import { useEffect } from "react";
import {useParams} from "react-router-dom";
//url 값을 반환해주는 함수. 리액트 router에서 제공
//특히 url의 변수값. = id

function Detail() {
//const x = useParams();
//console.log(x);
    //여기서 받는 변수의 이름은
    //app.js에서 적었던 Detail router의 경로 url의 마지막부분
    //path="movie/:id" > id가 된다.
  //따라서 아래와 같이 변수 x를 바꿔도 됨
  const {id} = useParams();
//console.log(id); =확인작업
const getMovie = async() =>{
    const json = await( //await는 async함수 내부에 있지 않으면 사용 못함
        await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json);
    
};

useEffect(()=> {
    
    getMovie();
},[])


  return <h2>Hi</h2>;
}
export default Detail;

//#7.6 강의 링크: https://nomadcoders.co/react-for-beginners/lectures/3292
//react-router-dom v6: https://alpaca92.notion.site/react-router-dom-4fc2c78083594edc9a04d73caa71aa38
//과제)
    //로딩페이지, state 만들기(getMovie함수 활용) > 영화 상세정보 아래쪽 return에 표시
    //navigation bar 만들어 home, about페이 메뉴에 넣기
    