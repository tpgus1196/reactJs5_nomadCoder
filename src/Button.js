import PropTypes from "prop-types";
import styles from "./Button.module.css";
    //create-react-app은 Button.module.css코드를 
    //javascript오브젝트로 변환해줌

function Button({text}){
    return <button className={styles.btn}>{text}</button>
}            //javascript object styles는 btn을 가진다.
             //관리자모드로 보면 button태그 안에 클래스명은 랜덤으로 설정된다.
             //"Button_btn__5ty" 이런 식.

             //~.modue.css 파일 특징
             //컴포넌트에 독립적 스타일 부여 가능
             //다른 ~.module.css파일과 클래스명이 겹쳐도 괜찮음
             //= css에서 클래스 중첩 방지  

Button.propTypes = {
    text: PropTypes.string.isRequired,
}

export default Button; 
//App.js에서 가져올 수 있게