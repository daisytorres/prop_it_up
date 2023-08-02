import logo from './logo.svg';
import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard lastName = "Heron" firstName = "Cady" age = {18} hairColor = "Red"  />
      <PersonCard lastName = "George" firstName = "Regina" age = {88} hairColor = "Blonde"/>
      <PersonCard lastName = "Smith" firstName = "Karen" age = {19} hairColor = "Blonde"/>
      <PersonCard lastName = "Wienders" firstName = "Gretchen" age = {21} hairColor = "Brown"/>
    </div>
  );
}

export default App;
