import QtQuick 2.2
import QtQuick.Controls 1.4
import QtQuick.Layouts 1.3
import QtQml 2.2
import org.kde.plasma.plasmoid 2.0 //needed to give the Plasmoid attached properties
import org.kde.plasma.components 2.0 as PlasmaComponents
import org.kde.plasma.core 2.0 as PlasmaCore
import org.kde.plasma.extras 2.0 as PlasmaExtras
import "conversionscript.js" as Conversionscript


Item {
	id: mainWindow
	Plasmoid.toolTipMainText: i18n("Converter between hexadecimal, binary and decimal numbers")
	Plasmoid.switchWidth: units.gridUnit * 5
	Plasmoid.switchHeight: units.gridUnit * 5
	Plasmoid.activationTogglesExpanded: true
	//Layout.preferredHeight:200
	Plasmoid.fullRepresentation:  Item{
		id: mainrepresentation
// 		Layout.maximumWidth:300
// 		Layout.maximumHeight:75
		TabView
		{
			anchors.fill:parent
			Tab{
				title:"Computer"
				Computersciencetab{
					id : cstab 
					anchors.fill:parent
				}
			}
			Tab{
				title: "Energy"
				Energytab{
					id :energytab
					anchors.fill:parent
				}


			}
			Tab{
				title: "Areas"
				Tabcomponent{
					id :areatab
					tabname: "Area"
					anchors.fill:parent
				}
			}
			Tab{
				title: "Speed"
				Tabcomponent{
					id: speedtab
					tabname: "Speed"
					anchors.fill: parent 
				}
			}
			Tab{
				title: "Flow-rate"
				Tabcomponent{
					id: speedtab
					tabname: "Flow-rate"
					anchors.fill: parent
				}
			}
		}
		
	}
}

