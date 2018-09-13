module.exports = function getZerosCount(number, base) {
	let num = number;
	let bas = base;
	let count = num;

    function recurs(num,  i) 
      { return num ? num / i + Math.floor(recurs(num / i, i)) : 0; }
 
    
    for (let i = 2; i * i <= bas; i++) {
        let temp = 0;
        while (bas % i == 0) {
          temp++;
          bas /= i;
        }

        if (temp) count = Math.floor(Math.min(count, Math.floor(recurs(num, i)) / temp));
    }

    if (bas > 1) count = Math.min(count, Math.floor(recurs(num, bas)));
    return count;
}
 
