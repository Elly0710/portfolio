import { Router } from 'react-router-dom';
import './App.css';
// import './color-1.css';
import Aside from './component/Aside';
import Main from './component/Main';
import Switcher from './component/Switcher';


function App() {
  return (
      <div className="main-container">
          <Aside></Aside>
          <Main></Main>
          <Switcher></Switcher>
      </div>
  );
}

export default App;
