'use strict';

function collectSameElements(collectionA, objectB) {
  return  collectionA.filter(a => -1 !== objectB.value.indexOf(a.key)).map(x => x.key) ;
}
