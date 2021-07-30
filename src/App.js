import logo from './logo.svg';
import './App.css';
import Banner from './components/Banner';
import Trending from './components/Trending';
import Comedy from './components/Comedy';
import Action from './components/Action';
import Horror from './components/Horror';
function App() {
  return (
    <div className="App">
      <Banner/>
      <Trending/>
      <Comedy/>
      <Action/>
      <Horror/>
    </div>
  );
}

export default App;
