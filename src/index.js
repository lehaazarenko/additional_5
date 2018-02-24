module.exports = function check(str, bracketsConfig) {
	// your solution

	let arr = [], bc = [], stack = [], pos, k = 0;
	arr = Array.from(str);
	bc = Array.from(bracketsConfig);

	for (let i = 0; i < arr.length; i++) {
	  let c = arr[i];
	  for (let j = 0; j < bc.length; j++) {
	    if (bc[j].indexOf(c) > -1) {
	      
	      pos = j;
	      stack.push(c); 
	       
	      if (bc[pos].indexOf(c) === 1 || bc[pos][0] === bc[pos][1]) {
	        if (stack[k-1] === bc[pos][0]) {
	          stack.splice(k-1, 2);
	          k--;
	          break;
	        }
	      }
	      
	      if (i === arr.length - 1) {
	        i = arr.length + 1;
	      }
	     
	      k++;
	      break;
	    }
	  }
	}
	return !stack.length;
}
