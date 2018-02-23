module.exports = function getZerosCount(number, base) {
	var n = number;
	var k = base;
    function f( n,  i) { return n ? n/i + Math.floor(f(n/i, i)) : 0; }
 
    var r=n;
    for (var i=2; i*i<=k; i++) {
        var p=0;
        while (k%i==0) {p++; k/=i;}
        if (p) r = Math.floor(Math.min(r, Math.floor(f(n,i))/p));
    }
    if (k>1) r = Math.min(r, Math.floor(f(n,k)));
    return r;

}


 