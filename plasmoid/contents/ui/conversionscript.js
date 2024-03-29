//conversionscript.js
//Surface

function getListOfFieldsForTab(tabname)
{
	var ret=[];
	if(tabname=="Area")
	{
		var ret=["m2","km2","hectare","Roman acre","inch2","feet2"];
	}
	if (tabname=="Speed")
	{
		var ret=["m/s","km/h","mph","kt","Mach"];
	}
	if (tabname=="Flow-rate")
	{
		var ret=["m3/s","l/s","m3/h","cfm"];
	}
	return ret;
}
function createTabModel(tabname,model)
{
	for(var i=0; i<getListOfFieldsForTab(tabname).length;i++)
	{
		model.insert(0,{"name":getListOfFieldsForTab(tabname)[i],"value":"-1.0"});
	}	
}
function UpdateTab(tabname,model,name,value)
{
	var listofconvertedvalue=getListOfConvertedFieldsForTab(tabname,name,value);
	for (var i=0 ;i <model.count;i++)
	{
		var elem=model.get(i);
		var j=getListOfFieldsForTab(tabname).indexOf(elem.name)
		model.setProperty(i,"value",listofconvertedvalue[j])
	}
}
function getListOfConvertedFieldsForTab(tabname,name,value)
{
	//Don't even need to switch over tabname since we should not have two times the same unit acrorss the tabs
	var mainvalue=0;
	var mainvalue=(parseFloat(value,10)); //For each tab, there is a value which we convert he field that has been entered to. from form this value we will convert every other
	switch(name)
	{
		case("m/s"):
		{
			mainvalue=value*1.0;
			break;
		}
		case("km/h"):
		{
			mainvalue=value/3.6;
			break;
		}
		case("mph"):
		{
			mainvalue=value/(3.6*1.60934);
			break;
		}
		case("kt"):
		{
			mainvalue=value*(1.85/3.6);
			break;
		}
		case("Mach"):
		{
			mainvalue=value*340.0;
			break;
		}
		case("m2"):
		{
			mainvalue=value;
			break;
		}
		case("km2"):
		{
			mainvalue=value*1.0e6;
			break;
		}
		case("hectare"):
		{
			mainvalule=value*10000.0;
			break;
		}
		case("Roman acre"):
		{
			mainvalue=value*5058.054;
			break;
		}
		case("inch2"):
		{
			mainvalue=value*0.00064516;
			break;
		}
		case("feet2"):
		{
			mainvalue=value*0.092903;
			break;
		}
		case("m3/s"):
		{
			mainvalue=value;
			break;
		}
		case("l/s"):
		{
			mainvalue=value/1000.0;
			break;
		}
		case("m3/h"):
		{
			mainvalue=value/3600.0;
			break;
		}
		case("cfm"):
		{
			mainvalue=value*(0.3048*0.3048*0.3048/60.0);
			break;
		}
		default:
		{
			console.log(name+" not yet implemented");
		}
	}
	var ret=[];
	for (var i = 0; i < getListOfFieldsForTab(tabname).length; i++) 
	{
		switch(getListOfFieldsForTab(tabname)[i])
		{
			case("m/s"):
			{
				ret.push(formatvalue(mainvalue));
				break;
			}
			case("km/h"):
			{
				ret.push(formatvalue(mainvalue*3.6));
				break;
			}
			case("mph"):
			{
				ret.push(formatvalue(mainvalue*3.6/1.60934))
				break;
			}
			case("kt"):
			{
				ret.push(formatvalue(mainvalue/(1.85/3.6)));
				console.log(mainvalue+" m/s is "+ret[-1]+"kt");
				break;
			}
			case("Mach"):
			{
				ret.push(formatvalue(mainvalue/340.0));
				break;
			}			
			case("m2"):
			{
				ret.push(mainvalue);
				break;
			}
			case("km2"):
			{
				ret.push(formatvalue(mainvalue/1.0e6));
				break;
			}
			case("hectare"):
			{
				ret.push(formatvalue(mainvalue/10000.0));
				break;
			}
			case("Roman acre"):
			{
				ret.push(formatvalue(mainvalue/5058.054));
				break;
			}
			case("inch2"):
			{
				ret.push(formatvalue(mainvalue/0.00064516));
				break;
			}
			case("feet2"):
			{
				ret.push(formatvalue(mainvalue/0.092903));
				break;
			}
			case("m3/s"):
			{
				ret.push(formatvalue(mainvalue));
				break;
			}
			case("l/s"):
			{
				ret.push(formatvalue(mainvalue*1000.0));
				break;
			}
			case("m3/h"):
			{
				ret.push(formatvalue(mainvalue*3600));
				break;
			}
			case("cfm"):
			{
				ret.push(formatvalue(mainvalue/(0.3048*0.3048*0.3048/60.0)));
				break;
			}
			default:
			{
				console.log(getListOfFieldsForTab(tabname)[i]+" not yet implemented");
				ret.push("not implemented");
				break;
			}
		}
	}
	return ret;
}

//Computer science
function getListOfComputerScienceFields()
{
	var ret=["Binary","Hex","Decimal"];
	return ret;
}

function createComputerScienceModel(model)
{
	for(var i=0; i<getListOfComputerScienceFields().length;i++)
	{
		model.insert(0,{"name":getListOfComputerScienceFields()[i],"value":"-1.0"});
	}	
}
function UpdateComputerScience(model,name,value)
{
	var listofconvertedvalue=getListOfConvertedComputerScience(name,value);
	for (var i=0 ;i <model.count;i++)
	{
		var elem=model.get(i);
		var j=getListOfComputerScienceFields().indexOf(elem.name)
		model.setProperty(i,"value",listofconvertedvalue[j])
	}
}
function getListOfConvertedComputerScience(name,value)
{
	var decimal=0;
	switch(name)
	{
		case("Binary"):
		{
			decimal=conversion_from_bin_to_dec(value);
			break;
		}
		case("Hex"):
		{
			decimal=conversion_from_hex_to_dec(value);
			break;
		}
		case("Decimal"):
		{
			decimal=value;
			break;
		}
		default:
		{
			console.log(name+" not yet implemented");
		}
	}
// 	console.log(value+" in decimal is"+decimal);
	var ret=[];
	for (var i = 0; i < getListOfComputerScienceFields().length; i++) 
	{
		switch(getListOfComputerScienceFields()[i])
		{
			case("Decimal"):
			{
				ret.push(decimal);
				break;
			}
			case("Binary"):
			{
				ret.push(conversion_from_dec_to_bin(decimal));
				break;
			}
			case("Hex"):
			{
				ret.push(conversion_from_dec_to_hex(decimal));
				break;
			}
			default:
			{
				console.log(getListOfComputerScienceFields()[i]+" not yet implemented");
				ret.push("not implemented");
				break;
			}
		}
	}
	return ret;
}

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


//Energy
function createEnergyModel(model)
{
	for (var i = 0; i < getListOfEnergyFields().length; i++) 
	{
		model.insert(0,{"name":getListOfEnergyFields()[i],"value":"-1.0"});
	}	
}

function formatvalue(val)
{
	if((Math.abs(val)<10000) &&(Math.abs(val) >0.01))
	{
		return  val.toFixed(4).toString();
	}
	return val.toExponential(4);
}

function getListOfEnergyFields()
{
	var ret=["Joule","Wh","cal","ev","Mev","kg. TNT","1t Coal","1t Oil","1L diesel","1L gasoline"];
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
			joule=valuefloat*3600.0;
			break;
		case "kg. TNT":
			joule=valuefloat*4.1840*1000000.0;
			break;
		case "cal":
			joule=valuefloat*4184;
			break;
		case "ev":
			joule=valuefloat*1.6e-19;
			break;
		case "Mev":
			joule=valuefloat*1.6e-13;
			break;
		case "1t Coal":
			joule=valuefloat*29.3076E9;
			break;
		case "1t Oil":
			joule=valuefloat*41.868E9;
			break;
		case "1L diesel":
			joule=valuefloat*36.4E6;
			break
		case "1L gasoline":
			joule=valuefloat*32.08E6;
			break;			
		default:
			console.log("Field "+getListOfEnergyFields()[i]+" not implemented")
			joule=NaN;
	}
// 	console.log(value +" "+name+" is "+joule+"J" );
	var ret=[];
	for (var i = 0; i < getListOfEnergyFields().length; i++) 
	{
		switch(getListOfEnergyFields()[i])
		{
			case "Joule":
				ret.push(formatvalue(joule))
				break ;
			case "Wh":
				ret.push(formatvalue(joule/3600.0));
				break;
			case "kg. TNT":
				ret.push(formatvalue(joule/4.1840/1000000));
				break;
			case "cal":
				ret.push(formatvalue(joule/4184));
				break;
			case "ev":
				ret.push(formatvalue(joule*1.6e19));
				break;
			case "Mev":
				ret.push(formatvalue(joule*1.6e13));
				break;
			case "1t Coal":
				ret.push(formatvalue(joule/29.3076E9));
				break;
			case "1t Oil":
				ret.push(formatvalue(joule/41.868E9));
				break;
			case "1L diesel":
				ret.push(formatvalue(joule/36.4E6));
				break
			case "1L gasoline":
				ret.push(formatvalue(joule/32.08E6));
				break;		
			default:
				ret.push(NaN)
				console.log("Field "+getListOfEnergyFields()[i]+" not implemented")
		}
	}
	return ret			
}
