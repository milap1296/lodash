import some from './some.js'
import get from './get.js'
import isUndefined from './isUndefined.js'
import isObject from './isObject.js'

/**
 *  Given an object and an array of keys, returns a value contained in object on priority from left to right
 *
 *  @since 5.0.0
 *  @category Util
 *  @param {object} obj to be queried
 *  @param {array} keyList eg:['title', 'postName']
 *  @returns {*} Returns the resolved value.
 *  @example
 *
 *  getValueForFirstExistingKey({ a: 1, b: 2 }, ['z', 'c', 'a', 'b'])
 *  // => 1
 *
 *  getValueForFirstExistingKey({ a: 1, b: 2 }, ['z', 'c', 'd', 'e'])
 *  // => undefined
 *
 */
function getValueForFirstExistingKey(obj, keyList) {
  let resolvedValue
  if (isObject(obj)) {
    some(keyList, (key) => {
      resolvedValue = get(obj, key)
      return !isUndefined(resolvedValue)
    })
  }
  return resolvedValue
}
export default getValueForFirstExistingKey
