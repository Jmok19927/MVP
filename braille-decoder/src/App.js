import './App.css';
import DecoderContainer from './decoderContainer.jsx';

function App() {
  return (
    <div className="App">
      Braille Decoder
      <header className="App-header">
      <div>
        Main Clickable Component
        <DecoderContainer/>
      </div>
      <div>Extra Info</div>
      </header>
    </div>
  );
}

export default App;
