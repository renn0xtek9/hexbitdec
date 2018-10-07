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
function createEnergyModel(model)
{
	for (var i = 0; i < getListOfEnergyFields().length; i++) 
	{
		model.insert(0,{"name":getListOfEnergyFields()[i],"value":-1.0})
	}	
}

function getListOfEnergyFields()
{
	var ret=["Joule","Wh","kg. TNT"];
	return ret;
}
function UpdateEnergy(model,name,value)
{
	var listofconvertedvalue=getListOfConvertedEnergy(name,value);
	for (var i=0 ;i <model.count;i++)
	{
		var elem=model.get(i);
		var j=getListOfEnergyFields().indexOf(elem.name)
		model.setProperty(i,"value",listofconvertedvalue[j])
		
		
	}
}
function getListOfConvertedEnergy(name,value){
	var valuefloat=(parseFloat(value,10));
	var joule=valuefloat;	
	switch (name) {
		case "Joule":
			joule=valuefloat;
			break;
		case "Wh":
			joule=valuefloat*3600.0
			break;
		case "kg. TNT":
			joule=valuefloat*4184.0*1000000.0
			break;
			
		default:
			defaultaction;
	}
// 	console.log(value +" "+name+" is "+joule+"J" );
	var ret=[];
	for (var i = 0; i < getListOfEnergyFields().length; i++) 
	{
		switch(getListOfEnergyFields()[i])
		{
			case "Joule":
				ret.push(joule)
				break ;
			case "Wh":
				ret.push(joule/3600.0);
				break;
			case "kg .TNT":
				ret.push(joule/4184.0/1000000);
				break;
			default:
				ret.push(NaN)
				console.log("Field "+getListOfEnergyFields()[i]+" not implemented")
		}
	}
	return ret			
}
