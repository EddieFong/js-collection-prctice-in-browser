'use strict';

function collectSameElements(collectionA, collectionB) {
  const found = function(value){
    return collectionB[0].includes(value)
  }
  return collectionA.filter(found);
}
