import Auxiliary from './Auxiliary.js'
const aux = new Auxiliary();

export default function Cell ( id, state, states ) {
    this.id = id;
    this.state = state;
    this.states = states;
    this.neighborhood = [];
    // this.div = document.createElement('div');
    // this.div.classList.add('cell');
    // this.div.id = this.id;

    this.getId = () => this.id;
    this.getState = () => this.state;
    this.getStates = () => this.states;

    this.setState = function ( newState ) {
      this.state = newState;
    };

    this.setNeighborhood = function ( cellArray ) {
      this.neighborhood = cellArray;
    };

    this.sum = function ( a, b ) {
      return a + b;
    };

  }
