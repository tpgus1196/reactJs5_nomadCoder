//~.module.css 파일 특징
//컴포넌트에 독립적 스타일 부여 가능
//이름이 다른 ~.module.css파일과 겹쳐도 괜찮음

import Button from "./Button";
import styles from "./App.module.css";


function App() {
  return (
    <div>
      <h1 className={styles.title}>Welcome!!</h1>
      <Button text={"Continue"} />
      </div>


      
  );
}

export default App;