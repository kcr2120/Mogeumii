// [App.jsx] - 교통정리소 역할!
import { Routes, Route } from 'react-router-dom';
import Home from './Home';      // 방금 만든 Home 방 불러오기
import Signup from './Signup';  // 방금 만든 Signup 방 불러오기
import './App.css';             // 폰 모양 껍데기 디자인은 그대로 유지!

function App() {
  return (
      // 💡 Routes: "지금부터 주소에 따라 길을 안내하겠습니다!"
      <Routes>

        {/* 1. 주소창이 딱 기본('/')일 때는 <Home /> 방을 보여줘! */}
        <Route path="/" element={<Home />} />

        {/* 2. 주소창이 '/signup'으로 바뀌면 <Signup /> 방을 보여줘! */}
        <Route path="/signup" element={<Signup />} />

      </Routes>
  );
}

export default App;