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
	property string tabname
	id : col 
	Layout.fillWidth:true
	Layout.fillHeight:true
	function clicked(name,value)
	{
		Conversionscript.UpdateTab(tabname,listmodel,name,value)
	}
	function createmodel()
	{
		Conversionscript.createTabModel(tabname,listmodel)
	}
	
	ListModel {				//This will be create onCompleted by the javascript script !
		id: listmodel
	}
	Component {
		id: listDelegate
		RowLayout {
			width: listview.width
			id: rowcomponent
			spacing: 10
			PlasmaComponents.TextField{
				Layout.fillWidth:true
	 			Layout.fillHeight:true
				id : textfield
				text: value} 
			PlasmaComponents.ToolButton{ 
				width:80
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
			Component.onCompleted:{
				//console.log(rowcomponent.width);
			}
		}
	}
	
	ListView {
		id: listview
		Layout.fillWidth:true
		Layout.fillHeight:true
		model: listmodel
		delegate:listDelegate
		
	}
	Component.onCompleted:{
			col.createmodel();
	}
}

