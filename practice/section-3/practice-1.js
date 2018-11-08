'use strict';

function createUpdatedCollection(collectionA, objectB) {
  
  objectB.value.forEach((BItem) => {
    var foundIndex = collectionA.findIndex(x => x.key == BItem);
    collectionA[foundIndex].count = collectionA[foundIndex].count - 1;
  })
  
  return collectionA
}
