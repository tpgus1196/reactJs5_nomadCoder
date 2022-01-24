//강의 #7.3 then 사용

import { useEffect, useState } from "react";
                   
function App(){
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
     useEffect(() => {
        fetch(
            `https://yts-proxy.now.sh/list_movies.json`
            ).then((response) => response.json())//response.json은 메서드. () 붙이기!
            .then((json) => { 
                //console.log(json)로 확인하면 object에서 property볼 수 있다
                setMovies(json.data.movies);//json.data.movies 이해 안됨       
                setLoading(false);
            }); 
                            
    },[]);
    // console.log(movies); > 로딩 시 [], 이후 배열 나옴
    return (
        <div>
            {loading ? <h1>Loading...</h1> : null}
        </div>
           
        );
} 
export default App;