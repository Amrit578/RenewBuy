import logo from './logo.svg';
import './App.css';
import Sidebar from './Component/Sidebar/sidebar';
import Navbar from './Component/Navbar/Navbar';
import Inner from './Component/innerHeader/inner';
import List from './Component/List/List';
function App() {
  return (
    <div className="App">
      <Sidebar />
      <Navbar />
      <Inner />
      <List />
    </div>
  );
}

export default App;
