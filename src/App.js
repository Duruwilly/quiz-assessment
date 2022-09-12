import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/pages/Home';
import Test1 from './components/pages/Test1';
import Test2 from './components/pages/Test2';
import Test3 from './components/pages/Test3';
import Test4 from './components/pages/Test4';
import Result from './components/pages/Result';
import Test5 from './components/pages/Test5';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/test/1' element={<Test1 />} />
          <Route path='/test/2' element={<Test2 />} />
          <Route path='/test/3' element={<Test3 />} />
          <Route path='/test/4' element={<Test4 />} />
          <Route path='/test/5' element={<Test5 />} />
          <Route path='/result' element={<Result />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
