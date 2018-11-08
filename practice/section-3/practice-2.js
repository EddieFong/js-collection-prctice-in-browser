'use strict';

function createUpdatedCollection(collectionA, objectB) {
  
  objectB.value.forEach((BItem) => {
    var foundIndex = collectionA.findIndex(x => x.key == BItem);
    collectionA[foundIndex].count = collectionA[foundIndex].count - Math.floor( collectionA[foundIndex].count / 3);
  })
  
  return collectionA
}
