//7-2 Coin Tracker
// 1. 페이지, 앱 들어왔을때 로딩메세지
// 2. 코인들 나열 
// 3. 로딩메세지 숨기고 코인들을 리스트로 보여주기
import {useState} from "react";
import { useEffect } from "react/cjs/react.development";
                   
function App(){
   const [loading, setLoading] = useState(true);
   const [coins, setCoins] = useState([]); 
    
   useEffect(() => {
        //한번만 실행
        fetch("https://api.coinpaprika.com/v1/tickers")
        .then((response) => response.json())
        .then((json) => 
            {setCoins(json); //coin state 바꿈
            setLoading(false); //loading state 바꿈
        }); 
        
        
   }, [])
    return (
        <div>
            <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
            {loading ? <strong>Loading...</strong> :
                <select>
                {coins.map((coin) => (
                <option>
                    {coin.name} ({coin.symbol}): {coin.quotes.USD.price}
                </option>
                ))}
                </select>
                //로딩되는 동안 select 숨기기(로딩 false일때 보여주는 select~)
                //마찬가지
                    //<h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
                    //로딩동안 괄호 안의 숫자(coin.length) 출력x
            }
            
        </div>
        );
} 
export default App;

//coin 안의 quotes 안의 USD안의 price

//challenge
//usd btc로 전환하기
//챌린지 내용: input 만들어 내 돈으로 얼마만큼의 비트코인을 살 수 있는가?
//20달러 가지고 있을때 얼만큼 btc로 돌려주는지, 폴카닷, 이더리움... 변환
//0.00 단위