var total = 0;
var arg = process.argv;
var len = arg.length;
for (i=0;i<len;i++){
	if(i!=0&&i!=1){
		total += Number(arg[i]);
	}
}

console.log(total);
