project(unitconverter)
cmake_minimum_required(VERSION 2.8.12)

find_package(ECM REQUIRED NO_MODULE)

set(CMAKE_MODULE_PATH ${ECM_MODULE_PATH} ${ECM_KDE_MODULE_DIR} ${CMAKE_MODULE_PATH})

find_package(KF5Plasma REQUIRED)

plasma_install_package(plasmoid org.kde.unitconverter)
