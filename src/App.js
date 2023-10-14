import './App.css';
import { Counter } from './components/Counter';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="box col-md-4 col-10">
      <header className="App-header">
        <h2>
          Responsive Paragraph Word Counter
        </h2>
        <Counter />
      </header>
    </div>
  );
}

export default App;
