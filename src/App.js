import "./App.css";
import SongsList from "./components/SongsList";
import SongDetail from './components/SongDetail'

function App() {
  return (
    <div className="ui container grid">
      <div className="ui row">
        <div className="column eight wide">
          <SongsList />
        </div>
        <div className="column eight wide">
          <SongDetail />
        </div>
      </div>
    </div>
  );
}

export default App;
