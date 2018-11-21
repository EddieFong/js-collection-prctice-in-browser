'use strict';

function collectSameElements(collectionA, objectB) {

  return collectionA.filter(value => objectB.value.includes(value));
}
