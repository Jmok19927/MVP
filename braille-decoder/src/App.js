import './App.css';
import DecoderContainer from './decoderContainer.jsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div>
        Braille Decoder
        <DecoderContainer/>
      </div>
      <div>
        Click 'Add' or . on your keyboard to add the current letter to the textbox.
      </div>
      </header>
    </div>
  );
}

export default App;
