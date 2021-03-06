import React from 'react';

// NOTE: Probably not needed as separate component because onclick event can be passed to normal button
// and this button will not need to store the state
export default class CancelButton extends React.Component {
  constructor(props) {
    super(props);
  }

  returnPosition(element){
    var pos = this.props.position;
    this.props.passedFunction(pos);
  }

  render(props) {
    return (
      <button className={this.props.buttonClass} type="button" onClick={this.returnPosition.bind(this)}>{this.props.text}</button>
    );
  }
}
