import Auxiliary from './Auxiliary.js'
const aux = new Auxiliary();

export default function Edge ( id, state, states, cells ) {
    this.id = id;
    this.state = state;
    this.states = states;
    this.cells = cells;

    this.getId = () => this.id;
    this.getState = () => this.state;
    this.getStates = () => this.states;
    this.getCells = () => this.cells;
    this.getCellsIds = () => this.cells.map( cell => cell.id );

    this.checkCell = function ( cellId ) {
      if ( this.getCellsIds().includes( cellId ) ) {
        return true;
      } else {
        return false;
      };
    };

    this.getOtherCell = function ( cellId ) {
      if ( this.cells[0].id === cellId ) {
        return this.cells[1];
      } else {
        return this.cells[0];
      };
    };

  }
