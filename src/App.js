import './App.css';
import Main from './components/Main';
import Sidebar from './components/Sidebar';

function App () {
  return (
    <div className="window">
      <Sidebar />
      <Main />
    </div>
  );
}

export default App;
