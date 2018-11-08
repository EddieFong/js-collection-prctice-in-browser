'use strict';

function collectSameElements(collectionA, collectionB) {
  return collectionA.filter(value => -1 !== collectionB[0].indexOf(value));
}
