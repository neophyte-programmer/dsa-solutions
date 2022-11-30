/**
 * @param {number[]} arr
 * @return {boolean}
 */
 var uniqueOccurrences = function(arr) {
    let map = new Map();
    let set = new Set();
    
    for(var num of arr) {
        if(map.has(num)) {
            map.set(num, map.get(num) + 1);
        } else{
          map.set(num, 1);
        }
        
    }
    for(var freq of map.values()) {
        if(set.has(freq)) return false;
        set.add(freq);
    }
    
    return true;
};