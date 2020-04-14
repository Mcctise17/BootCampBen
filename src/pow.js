function pow(num, power) {
    if(power === 0) return 1;
    else if(power === 1) return num;
    else {
        let result = num;
        for(let i=1; i < power; i++) {
            result = result * num;
        }
        return result;
    }
}

module.exports = pow;