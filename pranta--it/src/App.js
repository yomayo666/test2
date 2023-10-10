import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Main from './components/mainPage/Main';
import Header from './components/mainPage/Header'
import Buisnes from './components/mainPage/Buisnes';
import UsWorks from './components/mainPage/UsWorks';
import СalculateЕheСost from './components/mainPage/СalculateЕheСost';
import Blog from './components/mainPage/Blog';
function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <Buisnes/>
      <UsWorks/>
      <СalculateЕheСost/>
       <Blog/>
    </div>
  );
}

export default App;

