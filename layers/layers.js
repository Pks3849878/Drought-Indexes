var wms_layers = [];

var lyr_VHI_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "VHI",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/VHI_0.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-19847674.393678, -5621521.486192, 19820082.076561, 4865753.805224]
                            })
                        });
var lyr_SMI_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "SMI",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/SMI_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [11996901.522791, -6012545.640607, 17614083.028219, -732977.111854]
                            })
                        });
var lyr_SPI_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "SPI",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/SPI_2.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-19847450.675581, -5621521.486192, 19820299.580266, 4865942.279503]
                            })
                        });
var format_LGA_DRI_3 = new ol.format.GeoJSON();
var features_LGA_DRI_3 = format_LGA_DRI_3.readFeatures(json_LGA_DRI_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LGA_DRI_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LGA_DRI_3.addFeatures(features_LGA_DRI_3);
var lyr_LGA_DRI_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LGA_DRI_3, 
                style: style_LGA_DRI_3,
                popuplayertitle: "LGA_DRI",
                interactive: true,
                    title: '<img src="styles/legend/LGA_DRI_3.png" /> LGA_DRI'
                });

lyr_VHI_0.setVisible(true);lyr_SMI_1.setVisible(true);lyr_SPI_2.setVisible(true);lyr_LGA_DRI_3.setVisible(true);
var layersList = [lyr_VHI_0,lyr_SMI_1,lyr_SPI_2,lyr_LGA_DRI_3];
lyr_LGA_DRI_3.set('fieldAliases', {'LGA_CODE16': 'LGA_CODE16', 'LGA_NAME16': 'LGA_NAME16', 'STE_CODE16': 'STE_CODE16', 'STE_NAME16': 'STE_NAME16', 'AREASQKM16': 'AREASQKM16', 'SM_m': 'SM_m', 'VHI_m': 'VHI_m', 'SPI_m': 'SPI_m', 'VHI_N': 'VHI_N', 'SPI_N': 'SPI_N', 'Hazard_In': 'Hazard_In', 'Cnt_landU': 'Cnt_landU', 'Ex_landUse': 'Ex_landUse', 'Ex_eleva': 'Ex_eleva', 'Ex_AspectN': 'Ex_AspectN', 'Ex_elev_N': 'Ex_elev_N', 'Exposur_In': 'Exposur_In', 'SEIFA': 'SEIFA', 'Vulne_Popu': 'Vulne_Popu', 'Vulner_In': 'Vulner_In', 'DRI': 'DRI', 'DRI_Fina': 'DRI_Fina', 'LGA_Name': 'LGA_Name', });
lyr_LGA_DRI_3.set('fieldImages', {'LGA_CODE16': '', 'LGA_NAME16': '', 'STE_CODE16': '', 'STE_NAME16': '', 'AREASQKM16': '', 'SM_m': '', 'VHI_m': '', 'SPI_m': '', 'VHI_N': '', 'SPI_N': '', 'Hazard_In': '', 'Cnt_landU': '', 'Ex_landUse': '', 'Ex_eleva': '', 'Ex_AspectN': '', 'Ex_elev_N': '', 'Exposur_In': '', 'SEIFA': '', 'Vulne_Popu': '', 'Vulner_In': '', 'DRI': '', 'DRI_Fina': '', 'LGA_Name': '', });
lyr_LGA_DRI_3.set('fieldLabels', {'LGA_CODE16': 'no label', 'LGA_NAME16': 'no label', 'STE_CODE16': 'no label', 'STE_NAME16': 'no label', 'AREASQKM16': 'no label', 'SM_m': 'no label', 'VHI_m': 'no label', 'SPI_m': 'no label', 'VHI_N': 'no label', 'SPI_N': 'no label', 'Hazard_In': 'no label', 'Cnt_landU': 'no label', 'Ex_landUse': 'no label', 'Ex_eleva': 'no label', 'Ex_AspectN': 'no label', 'Ex_elev_N': 'no label', 'Exposur_In': 'no label', 'SEIFA': 'no label', 'Vulne_Popu': 'no label', 'Vulner_In': 'no label', 'DRI': 'no label', 'DRI_Fina': 'no label', 'LGA_Name': 'no label', });
lyr_LGA_DRI_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});