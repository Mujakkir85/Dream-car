import './App.css';
import Allproducts from './components/Allproducts/Allproducts';
import Header from './components/Header/Header';
import Question from './components/Question/Question';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Allproducts></Allproducts>
      <Question></Question>
    </div>
  );
}

export default App;   
