import React from 'react';
import Dot from './Dot.jsx';
import dict from './BrailleDictionary.js';
import InputBox from './InputBox.jsx';

class DecoderContainer extends React.Component {
  constructor(props){
    super(props);
    this.state={
      TL: true,
      TR: false,
      ML: false,
      MR: false,
      BL: false,
      BR: false,
      string: '',
    }
  }

  handleKeyPress(e, letter) {
    if (e.key === '.') {
      this.addLetter(letter);
      this.resetState()
    }
  }

  resetState() {
    this.setState({
      TL: false,
      TR: false,
      ML: false,
      MR: false,
      BL: false,
      BR: false
    })
  }

  toggle(position) {
    this.setState({[position]: !this.state[position]})
  }

  handleStringChange(e) {
    let newString = e.target.value;
    this.setState({string: newString})
    console.log(this.state.string)
  }

  addLetter(letter) {
    if (letter) {
      letter = letter.toLowerCase()
    } else {
      letter = '?'
    }

    let newString = this.state.string + letter
    this.setState({string: newString})
    this.resetState();
  }

  changeLetter(value) {
    this.setState({letter: value})
  }

  render() {
    let toggles = Object.fromEntries(Object.entries(this.state).slice(0,6));
    let binaryToggles = '';
      //take the positions from the state and turn them into a binary string
    Object.keys(toggles).slice(0,6).forEach((position) => {
      if (toggles[position]) {
        binaryToggles += 1;
      } else {
        binaryToggles += 0;
      }
    })

    return (
      <div
      onKeyDown={(event) =>
        {this.handleKeyPress(event, dict[binaryToggles])}}
      tabIndex='0'
      >
        <div className='DotRow'>
          <Dot toggled={this.state.TL} position={'TL'} handleClick={this.toggle.bind(this)}/>
          <Dot toggled={this.state.TR} position={'TR'} handleClick={this.toggle.bind(this)}/>
        </div>
        <div className='DotRow'>
          <Dot toggled={this.state.ML} position={'ML'} handleClick={this.toggle.bind(this)}/>
          <Dot toggled={this.state.MR} position={'MR'} handleClick={this.toggle.bind(this)}/>
        </div>
        <div className='DotRow'>
          <Dot toggled={this.state.BL} position={'BL'} handleClick={this.toggle.bind(this)}/>
          <Dot toggled={this.state.BR} position={'BR'} handleClick={this.toggle.bind(this)}/>
        </div>

        <div className='flex'>
          Decoded Letter:
          <div className='decodedLetter'>{dict[binaryToggles]|| '?'}
          </div>
        </div>

        <InputBox
          stringChange={this.handleStringChange.bind(this)}
          string={this.state.string}
          binaryToggles={binaryToggles}
          handleAddClick={this.addLetter.bind(this)}
          />
      </div>

    )
  }

}

export default DecoderContainer;