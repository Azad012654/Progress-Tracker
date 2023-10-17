import React, { Component } from 'react'

class Range extends Component {
    constructor() {
      super();
      this.state = {
        rangeValues: [0,10, 25, 50, 75, 100],
        currentRangeValue: 0
      };
  
      this.handleInputChange = this.handleInputChange.bind(this);
    }
  
    handleInputChange = (e) => {
      this.setState({ currentRangeValue: e.target.value });
    };
  
  
    render() {
      const { rangeValues, currentRangeValue } = this.state
      return (
        <div>
          <input
            onChange={this.handleInputChange}
            type={"range"}
            min={0}
            defaultValue={0}
            max={5}
            step={1}
            list={"tick-list"} />
          <datalist id="tick-list">
            <option>0</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </datalist>
          <span id="output">{rangeValues[currentRangeValue]}</span>
        </div>
      );
    }
  }
export default Range;
  
