import './App.css';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Widgets from './Widgets';

function App() {
  return (
    <div className="App">
      {/* Sidebar */}
      <Sidebar/>
      {/* News Feed */}

      <Feed />
      {/* Widgets */}

      <Widgets />

    </div>
  );
}

export default App;
