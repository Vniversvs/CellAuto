import Auxiliary from './Auxiliary.js'
const aux = new Auxiliary();

import Cell from './Cell.js'
import Edge from './Edge.js'



export default function Graph ( id, cells, edges ) {
  this.id = id;
  this.cells = cells;
  this.edges = edges;

  this.getId = () => this.id;
  this.getCells = () => this.cells;
  this.getEdges = () => this.edges;

  this.addCell = function ( cellData ) {
    this.cells.push( new Cell(
      cellData['id'],
      cellData['state'],
      cellData['states']
      ) );
  };

  this.addCells = function ( cellDataArray ) {
    for ( let cellData of cellDataArray ) {
      this.addCell( cellData );
    };
  };

  this.addEdge = function ( edgeData ) {
    this.edges.push( new Edge(
      edgeData['id'],
      edgeData['state'],
      edgeData['states'],
      edgeData['cells']
      ));
  };

  this.addEdges = function ( edgeDataArray ) {
    for ( let edgeData of edgeDataArray ) {
      this.addCell( edgeData );
    };
  };

  this.getCell = function ( id ) {
    return this.cells.find( cell => cell.id === id );
  };

  this.getIncidentEdges = function ( cellId ) {
    return this.edges.filter( edge => edge.checkCell( cellId ) );
  };

  this.getNeighborhood = function ( cellId ) {
    var neighborEdges = this.getIncidentEdges( cellId );
    return neighborEdges.map( edge => edge.getOtherCell( cellId ) )
  };

  this.addRandomCells = function ( number ) {
    for ( let idx = 1; idx < number + 1; idx += 1 ) {
      this.cells.push( new Cell(
        idx.toString(),
        0,
        [0, 1]
        ) );
    };
  };

  this.addRandomEdges = function ( number ) {
    for ( let idx = 1; idx < number + 1; idx += 1 ) {
      this.edges.push( new Edge(
        idx.toString(),
        0,
        [0, 1],
        [ aux.randomElement( this.cells ),
        aux.randomElement( this.cells )]
        ) );
    };
  };

this.appendCellNeighborhood = function ( cellId ) {
  this.getCell( cellId ).setNeighborhood( this.getNeighborhood( cellId ) );
};

this.appendNeighborhoods = function () {
  for ( let cell of this.cells ) {
    this.appendCellNeighborhood( cell.id );
  };
};

this.getCellStates = function (  ) {

};

this.update = function () {
  this.appendNeighborhoods();
};

this.checkAdjacency = function ( cellId1, cellId2 ) {
  if ( this.getNeighborhood( cellId1 ).map( cell => cell.id ).includes( cellId2 ) ) {
    return true;
  } else {
    return false;
  };
};

}
