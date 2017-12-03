//conversionscript.js
function conversion_from_bin_to_dec(str){
	//console.log("conver from binary to dec");
	//console.log(str);
	return parseInt(str,2);
}
function conversion_from_hex_to_dec(str){
	//console.log("convert from hex to dec")
	//console.log(str)
	return parseInt(str,16)
}
function conversion_from_dec_to_hex(str){   
	//console.log("dec->hex")
	//console.log(str)
	return (str >>> 0).toString(16);
}
function conversion_from_dec_to_bin(str){
	//console.log("dec->bin");
	//console.log(str);
	return (str >>> 0).toString(2);
}
	
