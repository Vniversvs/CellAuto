import Graph from './classes/Graph.js';
import GraphOperations from './classes/GraphOperations.js';
import * as fs from 'fs';
import Auxiliary from './classes/Auxiliary.js'
const aux = new Auxiliary();

const lg = ( input ) => console.log( input );


//TODO
//// bonus)
////// a) add edges to graph by declaring neighborhoods of cells
//// 1) define stateSpace
////// a)
////// B)

//// 2) game of life
////// a) graph operation of cartesian product
////// b) rules of computation
////// c)
////// d)
////// e)



//// questions)
////////////////////////How to Instantiate a "rule", i.e., a function F: W -> W (W = state space) ? (define value on every point?)
////////////////////// map : stateSpace -> stateSpace




// let preData = fs.readFile( './Data/placeHolderCells.json' ) ;
// // console.log(preData);
// let cellData = JSON.parse( preData );
// console.log(cellData);


// console.log(aux.randomElement( [ 1,2,3,4 ] ))

// fs.readFile('./Data/placeHolderCells.json', (err, data) => {
//     if (err) throw err;
//     let cellData = JSON.parse(data);
//     console.log(cellData);
// });

const X = new Graph(
  'X',
  [],
  []
  );


X.addRandomCells( 3 );
// X.addRandomEdges( 12 );

X.addEdge( {
  'id': '1',
  'state': 0,
  'states': [0, 1],
  'cells': [X.cells[0], X.cells[1]]
  } );

X.addEdge( {
  'id': '2',
  'state': 0,
  'states': [0, 1],
  'cells': [X.cells[1], X.cells[2]]
  } );

// X.addEdge( {
//   'id': '3',
//   'state': 0,
//   'states': [0, 1],
//   'cells': [X.cells[2], X.cells[3]]
//   } );

// X.addEdge( {
//   'id': '4',
//   'state': 0,
//   'states': [0, 1],
//   'cells': [X.cells[3], X.cells[4]]
//   } );

X.update();
const graphOperations = new GraphOperations();
// lg( X.edges.length );
const Y =  graphOperations.cartesianProduct( X, X );
// lg( graphOperations.cartesianProduct( X, X )[0].length );
// lg( Y[1].length );
// lg( Y[2][0] );
// lg( X.cells[1].neighborhood.map( cell => cell.id ) );


for ( let edge of Y[2] ) {
  lg([edge[0].map( cell => cell.id ), edge[0].map( cell => cell.id ) ] );
};





////////////////////////////////// rent scanner : 1) model domain 2) graphify data model 3) decide pattern (scheme model)





// lg( X.cells[1].id );
// lg( X.cells[3].neighborhood.map( ( cell ) => cell.id ) );
// lg( X.checkAdjacency( '1', '2' ) );

// lg( X.cells.length )


// lg(X.getIncidentEdges( '2' ));
// lg(X.getNeighborhood( '2' ));
// X.appendCellNeighborhood( '2' );
// lg(X.getCell( '2' ).neighborhood)
