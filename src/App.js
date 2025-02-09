import React, { Component } from 'react';
import './App.css';
import Invoice from './Invoice/Invoice.js';
import SpecsList from './SpecsList/SpecsList.js';
import Header from './header/header.js'

export default class App extends Component {
  constructor(props){
    super(props);
    this.updateFeature = this.updateFeature.bind(this);
    this.state = {
      selected: {
        Processor: {
            name: '17th Generation Intel Core HB (7 Core with donut spare)',
            cost: 700
          },
        "Operating System": {
            name: 'Ubuntu Linux 16.04',
            cost: 200
          },
        "Video Card":{
            name: 'Toyota Corolla 1.5v',
            cost: 1150.98
          },
        Display: {
            name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
            cost: 1500
          }
      }
    }
  }

    updateFeature(feature, newValue) {
      console.log('this.state.selected', this.state.selected);
      const selected = this.state.selected;
      selected[feature] = newValue;
      console.log('selected', selected);
      console.log(feature, newValue);
      this.setState({
        selected
      });
    }

  render() {
    return (
      <div>
        <header>
          <Header />
        </header>      
        <main>
          <section className="main__form">
            <SpecsList 
              features={this.props.features}
              selected={this.state.selected}
              updateFeature={this.updateFeature}
            /> 
          </section>
          <section className="main__summary">
            <h3>NEW GREENLEAF 2018</h3>
            <Invoice 
              selected={this.state.selected}
            />
          </section>
        </main>
      </div>
    );
  }
}
















