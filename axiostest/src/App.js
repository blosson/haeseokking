import "./App.css";
import axios from "axios";
import { React, useState } from "react";

function App() {
  // axios return 결과를 result에 담아줍니다!
  const [result, setResult] = useState({});

  // 버튼 클릭시 실행되는 함수
  const testDocker = () => {
    console.log("axios 요청 드가자~~~"); // 버튼 눌렀을 때 함수 실행이 제대로 되었는 지 확인하기 위한 console.log
    axios
      .get("http://localhost:3000/") // 이 부분 url을 해석님이 원하시는대로 수정하면 됩니다!
      .then((res) => {
        console.log(res);
        setResult(res);
      })
      .catch((err) => console.log(err)); // axios에서 문제가 있었을 시에 에러 console.log
  };

  return (
    <div className="App">
      <button onClick={testDocker}>해석님을 위한 버튼</button>
      <div>{result.data}</div>
    </div>
  );
}
export default App;
