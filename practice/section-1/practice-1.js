'use strict';

function collectSameElements(collectionA, collectionB) {
   const hasIt = function(value){
     return collectionB.includes(value)
   }
   return collectionA.filter(hasIt);
  //  return collectionA.filter((x) => hasIt(x));
  //  return collectionA.filter(value => collectionB.includes(value));
}
