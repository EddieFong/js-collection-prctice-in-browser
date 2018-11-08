'use strict';

function collectSameElements(collectionA, objectB) {

  return collectionA.filter(value => -1 !== objectB.value.indexOf(value));
}
