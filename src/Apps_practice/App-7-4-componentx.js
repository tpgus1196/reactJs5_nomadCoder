import { useEffect, useState } from "react";
import Movie from "./components/Movie"  

                   
function App(){
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const getMovies = async() => { //then() 사용 안함 > async-await
        const response = await fetch(
            `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`
            );
            const json = await response.json();
            setMovies(json.data.movies); 
                //movies받아오기 
                //> api로부터 얻은 data로 state 변경 가능 : const [movies, setMovies] = useState([]);
            setLoading(false);
    };//state는 data를 api로부터 받아옴
     useEffect(() => {
       getMovies();                     
    },[]);
    // console.log(movies);
    //배열이 두번 나오는 이유: getMovies함수에서 setMovies, setLoading 했기 때문
    return (
        //state로부터 받은 data 보여주기
        <div>
            {loading ? <h1>Loading...</h1> : (
                <div>
                    {movies.map((movie) => (
                    <Movie 
                        key={movie.id
                            //react.js에서만, map 안에서 component render할 때 사용
                        }
                        coverImg={movie.medium_cover_image}
                        title={movie.title}
                        summary={movie.summary}
                        genres={movie.genres}
                    />
                    ))}
                </div>
            )}
        </div>
           
        );
} 
export default App;


//map()
//배열 변환?
//[1,2,3,4,5,6].map(x => x**2)
//각 숫자(변수x로 설정)에 2를 곱한 배열 되돌려줌
//[2,4,6,8,10,12] 
//사용할때마다 key를 줘야 에러 안남


