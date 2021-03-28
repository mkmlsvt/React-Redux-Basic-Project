
import './App.css';
import Counter from "./components/counter"
import DecreaseCounter from './components/DecreaseCounter'
import IncreaseCounter from './components/IncreaseCounter'
import IncreaseByTwoCounter from './components/IncreaseByTwoCounter'


function App() {
  return (
    <div >
        <Counter></Counter>
        <IncreaseCounter></IncreaseCounter>
        <DecreaseCounter></DecreaseCounter>
        <IncreaseByTwoCounter></IncreaseByTwoCounter>
    </div>
  );
}

export default App;
