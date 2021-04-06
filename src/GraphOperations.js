import Graph from './Graph.js'
import Auxiliary from './Auxiliary.js'
const aux = new Auxiliary();

// const X = new Graph(
//   'X',
//   [],
//   []
//   );
// console.log( X );

export default function GraphOperations (  ) {

  this.cartesianProduct = function ( graph1, graph2 ) {
    const retId = `${graph1.getId()}x${graph2.getId()}`;
    const retCells = aux.setProduct( graph1.getCells(), graph2.getCells() );
    var retEdges = [];
    for ( let cell1 of retCells ) {
      // console.log(cell1.map( cell => cell.id ));

      for ( let cell2 of retCells ) {
        if( cell1[0].id === cell2[0].id && graph2.checkAdjacency( cell1[1].id, cell2[1].id ) ) {
          // retEdges.push( [cell1, cell2] );
          retEdges.push( [cell1, cell2] );
          // console.log( [cell1.map( cell => cell.id ), cell2.map( cell => cell.id )] );
        };
        // if( cell1[0].id === cell2[0].id && graph2.checkAdjacency( cell1[1].id, cell2[1].id ) ) {
        //   retEdges.push( [cell1, cell2] );
        // };
      };
    };
    for ( let edge in retEdges ) {
      console.log(edge[0]);
      // console.log( [edge[0].map( subCell => subCell.id ), edge[1].map( subCell => subCell.id ) ] )
    }
    return [retId, retCells, retEdges];
  };

};
