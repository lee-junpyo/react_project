import './App.css';
import Box from './component/Box';

function App() {
  return (
    <div>
      {/* 컴포넌트 */}
      <Box name="리사" num={1} />
      <Box name="제니" num={2} />
      <Box name="지수" num={3} />
      <Box name="로제" num={4} />
  </div>
  );
  
}

export default App;
