export default function Auxiliary () {

  const capitals = 'QWERTYUIOPASDFGHJKLZXCVBNM';
  const digits = '1234567890'

  this.randomElement = function ( array ) {
    var rand = Math.floor( array.length * Math.random() );
    return array[rand];
  };

  this.setProduct = function ( set1, set2 ) {
    var ret = [];
    for ( let elmt1 of set1 ) {
      for ( let elmt2 of set2 ) {
        ret.push( [elmt1, elmt2] );
      };
    };
    return ret;
  };

  // this.generate = function ( number ) {
  //
  // };

}
