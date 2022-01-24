
//7-2 Coin Tracker
// 1. 페이지, 앱 들어왔을때 로딩메세지
// 2. 코인들 나열 
// 3. 로딩메세지 숨기고 코인들을 리스트로 보여주기
import {useState} from "react";
import { useEffect } from "react/cjs/react.development";
                   
function App(){
   const [loading, setLoading] = useState(true);
   const [coins, setCoins] = useState([]); 
    //coins변수에 코인 배열 담김
    //디폴트로 빈 배열 넘겨줌 
        //그래서 coin이 로딩화면(처음)에서는 0개 표시
    //[]괄호 없으면 > undefined
        //coin.length-배열길이-값이 산출되지 않기 때문에
   useEffect(() => {
        //코인 api
        //확인: 개발자툴 > 네트워크 > tickers >머리글> 요청(request)로 가능
        fetch("https://api.coinpaprika.com/v1/tickers")
        .then((response) => response.json())
        .then((json) => 
            {setCoins(json); //coin state 바꿈
            setLoading(false); //loading state 바꿈
        }); 
        //콘솔에서 데이터 확인 가능: .then((json) => console.log(json)); 
        //데이터를 component에 보여주려면 state에 넣어야 한다
        
   }, [])
    return (
        <div>
            <h1>The Coins! ({coins.length})</h1>
            {loading ? <strong>Loading...</strong> : null}
            <ul>
                {coins.map((coin) => (
                <li>
                    {coin.name} ({coin.symbol}): {coin.quotes.USD.price}
                </li>
                ))}
            </ul>
        </div>
        );
} 
export default App;

//coin 안의 quotes 안의 USD안의 price
