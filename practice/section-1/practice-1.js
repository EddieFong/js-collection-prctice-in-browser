'use strict';

function collectSameElements(collectionA, collectionB) {
   const hasIt = function(value){
     return collectionB.includes(value)
   }
  
  //  return collectionA.filter((x) => hasIt(x));
  //  return collectionA.filter(hasIt);

  //  return collectionA.filter(value => collectionB.includes(value));
  const canFoundInB = (x) => collectionB.includes(x);
  return collectionA.filter(canFoundInB);
}
