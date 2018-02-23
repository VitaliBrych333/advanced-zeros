module.exports = function getZerosCount(number, base) {
	var num = number;
	var bas = base;
	var count=num;


    function f( num,  i) 
      { return num ? num/i + Math.floor(f(num/i, i)) : 0; }
 
    
    for (var i=2; i*i<=bas; i++) {
        var t=0;
        while (bas%i==0) {t++; bas/=i;}
        if (t) count = Math.floor(Math.min(count, Math.floor(f(num,i))/t));
    }

    if (bas>1) count = Math.min(count, Math.floor(f(num,bas)));
    return count;

}


 