const LocalStorageMethods = {
    store(key, value) {
        try {
            if (typeof (Storage) !== 'undefined') {
                localStorage.setItem(key, JSON.stringify(value));
                return true;
            } else {
                return false;
            }
        } catch (error) {
            return error;
        }
    },
    retrieve(key, defaultReturn = {}) {
        try {
            if (typeof (Storage) !== 'undefined') {
                if (localStorage.getItem(key)) {
                    return JSON.parse(localStorage.getItem(key));
                } else {
                    return defaultReturn;
                }
            } else {
                return false;
            }
        } catch (error) {
            return error;
        }
    },
    remove(key) {
        try {
            if (typeof (Storage) !== 'undefined') {
                if (localStorage.getItem(key)) {
                    localStorage.removeItem(key);
                    return true;
                } else {
                    return null;
                }
            } else {
                return false;
            }
        } catch (error) {
            return error;
        }
    },
    removeAll() {
        try {
            if (typeof (Storage) !== 'undefined') {
                localStorage.clear();
            } else {
                return false;
            }
        } catch (error) {
            return error;
        }
    }
}

const OwnObjectArray = {
    toJSONString(objectArray) {
        try {
            if (Array.isArray(objectArray) && objectArray.length > 0)
                return JSON.stringify(objectArray);
            else
                return null;
        } catch (e) { return false; }
    },
    toObjectArray(sJSON) {
        try {
            let objJSON = JSON.parse(sJSON) || [];
            if (Array.isArray(objJSON))
                return objJSON;
            else
                return [];
        } catch (e) { return false; }
    },
    findIndex(objectArray, sPropertyName, sPropertyValue) {
        try {
            if (Array.isArray(objectArray))
                return objectArray.findIndex(objItem => objItem[sPropertyName] === sPropertyValue);
            else
                return -1;
        } catch (e) { return false; }
    },
    sortByAlphabet(objectArray, sPropertyName, order) {
        try {
            objectArray.sort(function (a, b) {
                let x = a[sPropertyName].toUpperCase();
                let y = b[sPropertyName].toUpperCase();
                if (order === 1) { //1 is mean descending
                    if (x < y) { return 1; }
                    if (x > y) { return -1; }
                } else { //0 or other is mean ascending
                    if (x < y) { return -1; }
                    if (x > y) { return 1; }
                }
                return 0;
            });
            return objectArray;
        } catch (e) { return false; }
    },
    sortByNumeric(objectArray, sPropertyName, order) {
        try {
            objectArray.sort(function (a, b) {
                if (order === 1) //1 is mean descending
                    return b[sPropertyName] - a[sPropertyName];
                else //0 and other is mean ascending
                    return a[sPropertyName] - b[sPropertyName];
            });
            return objectArray;
        } catch (e) { return false; }
    },
    filterByProperty(objectArray, sPropertyName, sSeekingValue) {
        try {
            if (Array.isArray(objectArray)) {
                if (objectArray.length > 0)
                    return objectArray.filter(objItem => objItem[sPropertyName] === sSeekingValue);
                else
                    return null;
            } else
                return false;
        } catch (e) { return false; }
    },
    getMax(objectArray, sPropertyName) {
        try {
            if (Array.isArray(objectArray)) {
                if (objectArray.length > 0) {
                    let i;
                    let arrValues = [];
                    for (i in objectArray)
                        arrValues.push(objectArray[i][sPropertyName]);
                    return Math.max.apply(Math, arrValues);
                } else
                    return null;
            } else
                return false;
        } catch (e) { return false; }
    }
}

const Utils = {
    convertStringToInterger(sNumber, fractionDigits) {
        let newNumber = parseFloat(Number(sNumber).toFixed(fractionDigits));
        if (Number.isInteger(newNumber))
            return newNumber;
        else
            return 0;
    },
    getRandomNumber(minNr, maxNr) {
        return Math.floor(Math.random() * (maxNr - minNr + 1)) + minNr;
    }
}

module.exports = {
    LocalStorageMethods,
    OwnObjectArray,
    Utils
}

String.prototype.toText = function () {
    return this.replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/\//g, "&frasl;")
        .replace(/\'/g, "&apos;")
        .replace(/\"/g, "&quot;");
}

String.prototype.limitWords = function (limitNumber) {
    try {
        limitNumber = parseInt(limitNumber) || 0;
        if (limitNumber > 0 && this.length > 0)
            return this.split(" ").slice(0, limitNumber).join(" ");
    } catch (e) { }
};

Array.prototype.toJSONString = function () {
    try {
        return JSON.stringify(this)
    } catch (e) { return e; }
}

Array.prototype.findIndexByProperty = function (sPropertyName, sPropertyValue) {
    try {
        return this.findIndex(objItem => objItem[sPropertyName] === sPropertyValue)
    } catch (e) { return e; }
}

Array.prototype.sortByAlphabet = function (sPropertyName, orderKeyword) {
    try {
        this.sort(function (a, b) {
            const x = a[sPropertyName].toUpperCase();
            const y = b[sPropertyName].toUpperCase();
            if (orderKeyword === 1) { //1 is mean descending
                if (x < y) { return 1; }
                if (x > y) { return -1; }
            } else { //0 or other is mean ascending
                if (x < y) { return -1; }
                if (x > y) { return 1; }
            }
            return 0;
        });
        return this;
    } catch (e) { return e; }
}

Array.prototype.sortByNumeric = function (sPropertyName, orderKeyword) {
    try {
        this.sort(function (a, b) {
            if (orderKeyword === 1) //1 is mean descending
                return b[sPropertyName] - a[sPropertyName];
            else //0 and other is mean ascending
                return a[sPropertyName] - b[sPropertyName];
        });
        return this;
    } catch (e) { return e; }
}

Array.prototype.filterByProperty = function (sPropertyName, sSeekingValue) {
    try {
        if (this.length > 0)
            return this.filter(objItem => objItem[sPropertyName] === sSeekingValue);
        else
            return null;
    } catch (e) { return e; }
}

Array.prototype.getMax = function (sPropertyName) {
    try {
        const arrLength = this.length;
        if (this.length > 0) {
            let arrValues = [];
            for (let i = 0; i < arrLength; i++) {
                arrValues.push(this[i][sPropertyName]);
            }
            return Math.max.apply(Math, arrValues)
        }
        return null;
    } catch (e) { return e; }
}
