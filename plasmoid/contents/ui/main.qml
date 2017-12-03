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
		Layout.maximumWidth:300
		Layout.maximumHeight:75
		ColumnLayout{
			id: col
			anchors{
				left:parent.left 
				right:parent.right
				top:parent.top
				bottom:parent.bottom
			}
			RowLayout{
				id:row_button
				anchors{
					left:parent.left 
					right: parent.right
				}
				PlasmaComponents.ToolButton{
					id: button_hex
					text:i18n("Hex")
					tooltip: i18n("Convert from Hexadecimal")
					Layout.fillWidth: true
					anchors{
						left:parent.left
						right:button_decimal.left
					}
					onClicked:{
						//console.log("hex clicked")
						field_dec.text=Conversionscript.conversion_from_hex_to_dec(field_hex.text)
						field_bin.text=Conversionscript.conversion_from_dec_to_bin(Conversionscript.conversion_from_hex_to_dec(field_hex.text))
					}
				}
				PlasmaComponents.ToolButton{
					id: button_decimal
					text:i18n("Dec")
					tooltip: i18n("Convert from Decimal")
					Layout.fillWidth: true
					onClicked:{
						//console.log("dec clicked")
						field_hex.text=Conversionscript.conversion_from_dec_to_hex(field_dec.text)
						field_bin.text=Conversionscript.conversion_from_dec_to_bin(field_dec.text)
						
					}
				}
				PlasmaComponents.ToolButton{
					id: button_binary
					text:i18n("Bin")
					tooltip: i18n("Convert from Binary")
					Layout.fillWidth: true
					anchors{
						right:parent.right
						left:button_decimal.right
					}
					onClicked:{
						//console.log("bin clicked")
						field_dec.text=Conversionscript.conversion_from_bin_to_dec(field_bin.text)
						field_hex.text=Conversionscript.conversion_from_dec_to_hex(Conversionscript.conversion_from_bin_to_dec(field_bin.text))
					}
				}
			}			
			RowLayout{
				id:row_txtfield 
				Layout.fillWidth: true
				PlasmaComponents.TextField{
					clearButtonShown: true
					Layout.fillWidth: true
					id: field_hex
					text: "1A2B3B"
					
					anchors{
						left:parent.left
					}
				}
				PlasmaComponents.TextField{
					clearButtonShown: true
					Layout.fillWidth: true
					id: field_dec
					text: "123"
				}
				PlasmaComponents.TextField{
					clearButtonShown: true
					Layout.fillWidth: true
					id: field_bin
					text: "010011"
					anchors{
						right:parent.right
					}
				}
			}
		}
	}
}

