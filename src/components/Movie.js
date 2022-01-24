//movie컴포넌트의 부모요소는 home이다
//movie 컴포넌트에 props로 id받아와야 link 경로 설정 가능,
// app.js에서 경로에 /아이디 표시 가능 
//부모에서 먼저 작업
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
function Movie({coverImg, title, summary, genres, id}){ 
                //({properties}) > 부모 컴포넌트로부터 받아옴. 
                //props=object들
                //우리는 이를 열어서 item 꺼내 쓰는 것이다
                //이름 원하는대로 짓기 가능
    return (
    <div>
        <img src={coverImg} alt={title}/>
        <h2>
           <Link to={`/movie/${id}`}>{title}</Link>
            </h2>
        <p>{summary.length > 235 ?  `${summary.slice(0,235)}...` : summary}</p>
        <ul>
            {genres.map( //genre = 배열 > 새로운 map 필요
                (g) => ( 
                    //임의 변수 g 각각에 대해 li 만들기
                    //key값 없으면 에러
                    //key는 id값이 없을 때 g로 대체 가능
                    //g =고유값
                    <li key={g}>{g}</li>
                )
            )}
        </ul>
    </div>);
}
Movie.propTypes = {
    id: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};



export default Movie;

//summary.slice(0,235) 
//slice함수: (start number)0에서 (end number)235까지의 문자 끊기
