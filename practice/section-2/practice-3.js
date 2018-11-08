'use strict'

function countSameElements(collection) {

  let result = []
  for (var i=0; i<collection.length; i++) {
    var key = collection[i].substring(0, 1)
    var count = collection[i].match(/\d+/g) ? parseInt(collection[i].match(/\d+/g)[0]) : 1

    let object = result.find(x=>x.name === key) || {}
    object.name = key
    object.summary = (object.summary || 0 ) + count
    result = result.filter(x=> x.name !== key)
    result.push(object)
  }
  return result
}
