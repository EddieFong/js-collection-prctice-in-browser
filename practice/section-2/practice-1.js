'use strict';

function countSameElements(collection) {
  let result = []
  for (var i=0; i<collection.length; i++) {
    var key = collection[i].substring(0, 1)

    let object = result.find(x=>x.key === key) || {}
    object.key = key
    object.count = (object.count || 0 ) + 1
    result = result.filter(x=> x.key !== key)
    result.push(object)
  }
  return result
}
