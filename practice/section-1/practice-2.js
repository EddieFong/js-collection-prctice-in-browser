'use strict';

function collectSameElements(collectionA, collectionB) {
  return collectionA.filter(value => collectionB[0].includes(value));
}
