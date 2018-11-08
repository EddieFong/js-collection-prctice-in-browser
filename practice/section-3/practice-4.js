'use strict';

function countSameElements(collection) {

  let result = []
  for (var i=0; i<collection.length; i++) {
    var key = collection[i].substring(0, 1)
    var count = collection[i].match(/\d+/g) ? parseInt(collection[i].match(/\d+/g)[0]) : 1

    let object = result.find(x=>x.key === key) || {}
    object.key = key
    object.count = (object.count || 0 ) + count
    result = result.filter(x=> x.key !== key)
    result.push(object)
  }
  return result
}


function createUpdatedCollection(collectionA, objectB) {
  let newCollectionA = countSameElements(collectionA);
  objectB.value.forEach((BItem) => {
    var foundIndex = newCollectionA.findIndex(x => x.key == BItem);
    newCollectionA[foundIndex].count = newCollectionA[foundIndex].count - Math.floor( newCollectionA[foundIndex].count / 3);
  })
  
  return newCollectionA
}
