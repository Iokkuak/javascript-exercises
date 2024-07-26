const repeatString = function(word, times) {
    if(times < 0) return "ERROR";
    
    let s = "";

    for(let i = 0; i < times; i++) {
        s += word; 
    }

    return s;
};

// Do not edit below this line
module.exports = repeatString;
