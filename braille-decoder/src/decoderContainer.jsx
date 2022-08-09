import React from 'react';
import Dot from './Dot.jsx';
import BrailleDictionary from './BrailleDictionary.jsx';

class DecoderContainer extends React.Component {
  constructor(props){
    super(props);
    this.state={
      TL: false,
      TR: false,
      ML: false,
      MR: false,
      BL: false,
      BR: false
    }
  }

  toggle(position) {

    this.setState({[position]: !this.state[position]})
  }

  render() {
    return (
      <div>
        DecoderContainer
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

        Decoded Letter: <BrailleDictionary values={this.state}/>
      </div>

    )
  }

}

export default DecoderContainer;