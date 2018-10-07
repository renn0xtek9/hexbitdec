import QtQuick 2.2
import QtQuick.Controls 1.4
import QtQuick.Layouts 1.3
import QtQml 2.2
import QtQml 2.2
import QtQml.Models 2.2
import org.kde.plasma.plasmoid 2.0 //needed to give the Plasmoid attached properties
import org.kde.plasma.components 2.0 as PlasmaComponents
import org.kde.plasma.core 2.0 as PlasmaCore
import org.kde.plasma.extras 2.0 as PlasmaExtras
import "conversionscript.js" as Conversionscript
ColumnLayout{
	id : col 
	Layout.fillWidth:true
	Layout.fillHeight:true
	function clicked(name,value)
	{
		
		Conversionscript.UpdateEnergy(fruitModel,name,value)
	}
	function createmodel()
	{
		console.log("create");
		Conversionscript.createEnergyModel(fruitModel)
	}
	
	ListModel {				//This will be create onCompleted by the javascript script !
		id: fruitModel
	}
	Component {
		id: fruitDelegate
		Row {
			id: rowcomponent
			Layout.fillWidth:true
			Layout.fillHeight:true
			spacing: 10
			PlasmaComponents.TextField{
				id : textfield
				text: value} 
			PlasmaComponents.ToolButton{ 
				id: button
				text: name
				flat: true
				tooltip: i18n("Convert from "+name)
				onClicked:{rowcomponent.clicked()}
			}
			function clicked()
			{
				col.clicked(name,textfield.text) ;
			}
		}
	}
	
	ListView {
		Layout.fillWidth:true
		Layout.fillHeight:true
		model: fruitModel
		delegate:fruitDelegate
		
	}
	Component.onCompleted:{
			col.createmodel();
	}
}
