import Header from './components/Header';
import Main from './components/Main';
import { useContext } from 'react'
import { Context } from  './components/ThemeContext';

function App() {
  const {theme} = useContext(Context);
  return (
    <div className={"App " + theme}>
      <Header/>
      <Main />
    </div>
  );
}

export default App;
