# g-jslib
The lightweight pure JavaScript library.

## Installation
````
$ npm install g-jslib
````

## Modules
* [LocalStorageMethods](#using)
    * store(key, value)
    * retrieve(key, defaultReturn)
    * remove(key)
    * removeAll()
* [OwnObjectArray](https://github.com/nguyenkhois/library/tree/master/javascript#ownobjectarray-own-objectsjs)
    * toJSONString(objectArray)
    * toObjectArray(sJSON)
    * findIndex(objectArray, sPropertyName, sPropertyValue)
    * sortByAlphabet(objectArray, sPropertyName, order)
    * sortByNumeric(objectArray, sPropertyName, order)
    * filterByProperty(objectArray,sPropertyName,sSeekingValue)
    * getMax(objectArray,sPropertyName)
* [Utils](https://github.com/nguyenkhois/library/tree/master/javascript#functions-functionsjs)
    * convertStringToInterger(sNumber, fractionDigits)
    * getRandomNumber(minNr, maxNr)
* [String.prototype](https://github.com/nguyenkhois/library/tree/master/javascript#stringprototypes)
    * .toText()
    * .limitWords(limitNumber)
* [Array.prototype](https://github.com/nguyenkhois/library/tree/master/javascript#arrayprototype) (Using only for object array)
    * .toJSONString()
    * .findIndexByProperty(sPropertyName, sPropertyValue)
    * .sortByAlphabet(sPropertyName, orderKeyword)
    * .sortByNumeric(sPropertyName, orderKeyword)
    * .filterByProperty(sPropertyName, sSeekingValue)
    * .getMax(sPropertyName)

## Online demo
* [OwnObjectArray](https://codepen.io/khois/pen/oEJqra)
* [String.prototype](https://codepen.io/khois/pen/PdRbON)
* [Array.prototype](https://codepen.io/khois/pen/KxRPGX)

## Using
Import the modules you need and String.prototype and Array.prototype are included automatic (recommendation):

``import { LocalStorageMethods, OwnObjectArray } from 'g-jslib';``

For only using String.prototype or Array.prototype (for object array):

``import 'g-jslib';``

## Detail

You may want to view how to use this library on [GitHub](https://github.com/nguyenkhois/library/tree/master/javascript)
