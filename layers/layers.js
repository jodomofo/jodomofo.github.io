var wms_layers = [];


        var lyr_OpenStreetMapmonochrome_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap monochrome',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://a.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png'
            })
        });
var format_Puntos_1 = new ol.format.GeoJSON();
var features_Puntos_1 = format_Puntos_1.readFeatures(json_Puntos_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Puntos_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Puntos_1.addFeatures(features_Puntos_1);
var lyr_Puntos_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Puntos_1, 
                style: style_Puntos_1,
                interactive: true,
                title: '<img src="styles/legend/Puntos_1.png" /> Puntos'
            });
var format_provincias_2 = new ol.format.GeoJSON();
var features_provincias_2 = format_provincias_2.readFeatures(json_provincias_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_provincias_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_provincias_2.addFeatures(features_provincias_2);
var lyr_provincias_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_provincias_2, 
                style: style_provincias_2,
                interactive: true,
                title: '<img src="styles/legend/provincias_2.png" /> provincias'
            });
var format_TRAMOS_RED_TRONCAL_REV08_3 = new ol.format.GeoJSON();
var features_TRAMOS_RED_TRONCAL_REV08_3 = format_TRAMOS_RED_TRONCAL_REV08_3.readFeatures(json_TRAMOS_RED_TRONCAL_REV08_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TRAMOS_RED_TRONCAL_REV08_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TRAMOS_RED_TRONCAL_REV08_3.addFeatures(features_TRAMOS_RED_TRONCAL_REV08_3);
var lyr_TRAMOS_RED_TRONCAL_REV08_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TRAMOS_RED_TRONCAL_REV08_3, 
                style: style_TRAMOS_RED_TRONCAL_REV08_3,
                interactive: true,
                title: '<img src="styles/legend/TRAMOS_RED_TRONCAL_REV08_3.png" /> TRAMOS_RED_TRONCAL_REV08'
            });
var format_TRAMOS_RED_REGIONAL_REV08_4 = new ol.format.GeoJSON();
var features_TRAMOS_RED_REGIONAL_REV08_4 = format_TRAMOS_RED_REGIONAL_REV08_4.readFeatures(json_TRAMOS_RED_REGIONAL_REV08_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TRAMOS_RED_REGIONAL_REV08_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TRAMOS_RED_REGIONAL_REV08_4.addFeatures(features_TRAMOS_RED_REGIONAL_REV08_4);
var lyr_TRAMOS_RED_REGIONAL_REV08_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TRAMOS_RED_REGIONAL_REV08_4, 
                style: style_TRAMOS_RED_REGIONAL_REV08_4,
                interactive: true,
                title: '<img src="styles/legend/TRAMOS_RED_REGIONAL_REV08_4.png" /> TRAMOS_RED_REGIONAL_REV08'
            });
var format_TRAMOS_RED_LOCAL_REV08_5 = new ol.format.GeoJSON();
var features_TRAMOS_RED_LOCAL_REV08_5 = format_TRAMOS_RED_LOCAL_REV08_5.readFeatures(json_TRAMOS_RED_LOCAL_REV08_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TRAMOS_RED_LOCAL_REV08_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TRAMOS_RED_LOCAL_REV08_5.addFeatures(features_TRAMOS_RED_LOCAL_REV08_5);
var lyr_TRAMOS_RED_LOCAL_REV08_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TRAMOS_RED_LOCAL_REV08_5, 
                style: style_TRAMOS_RED_LOCAL_REV08_5,
                interactive: true,
                title: '<img src="styles/legend/TRAMOS_RED_LOCAL_REV08_5.png" /> TRAMOS_RED_LOCAL_REV08'
            });

lyr_OpenStreetMapmonochrome_0.setVisible(true);lyr_Puntos_1.setVisible(true);lyr_provincias_2.setVisible(true);lyr_TRAMOS_RED_TRONCAL_REV08_3.setVisible(true);lyr_TRAMOS_RED_REGIONAL_REV08_4.setVisible(true);lyr_TRAMOS_RED_LOCAL_REV08_5.setVisible(true);
var layersList = [lyr_OpenStreetMapmonochrome_0,lyr_Puntos_1,lyr_provincias_2,lyr_TRAMOS_RED_TRONCAL_REV08_3,lyr_TRAMOS_RED_REGIONAL_REV08_4,lyr_TRAMOS_RED_LOCAL_REV08_5];
lyr_Puntos_1.set('fieldAliases', {'id': 'id', 'Nombre': 'Nombre', 'PhotoPath': 'PhotoPath', });
lyr_provincias_2.set('fieldAliases', {'PROVINCIA': 'PROVINCIA', 'NOMBRE': 'NOMBRE', 'CodUNICEF': 'CodUNICEF', 'Men': 'Men', 'Women': 'Women', 'PopTot': 'PopTot', 'REGI_SALUD': 'REGI_SALUD', 'COD_ONE_T': 'COD_ONE_T', 'COD_ONE': 'COD_ONE', 'POB_2000': 'POB_2000', 'NO_REG_SAL': 'NO_REG_SAL', 'Viviendas': 'Viviendas', });
lyr_TRAMOS_RED_TRONCAL_REV08_3.set('fieldAliases', {'TIPO': 'TIPO', 'CODIGO': 'CODIGO', 'TRTAMO_RT': 'TRTAMO_RT', 'NOMBRE': 'NOMBRE', 'INICIO': 'INICIO', 'FIN': 'FIN', 'LONGITUD': 'LONGITUD', 'ANCHO_m_': 'ANCHO_m_', 'ESTADO': 'ESTADO', });
lyr_TRAMOS_RED_REGIONAL_REV08_4.set('fieldAliases', {'TIPO': 'TIPO', 'CODIGO': 'CODIGO', 'TRAMO_RT': 'TRAMO_RT', 'NOMBRE': 'NOMBRE', 'INICIO': 'INICIO', 'FIN': 'FIN', 'LONGITUD': 'LONGITUD', 'ANCHO_m_': 'ANCHO_m_', 'ESTADO': 'ESTADO', });
lyr_TRAMOS_RED_LOCAL_REV08_5.set('fieldAliases', {'TIPO': 'TIPO', 'CODIGO': 'CODIGO', 'TRAMOS_RT': 'TRAMOS_RT', 'NOMBRE': 'NOMBRE', 'INI_TRAMO': 'INI_TRAMO', 'FIN_TRAMO': 'FIN_TRAMO', 'LONGITUD': 'LONGITUD', 'ANCHO': 'ANCHO', 'ESTADO': 'ESTADO', });
lyr_Puntos_1.set('fieldImages', {'id': 'TextEdit', 'Nombre': 'TextEdit', 'PhotoPath': 'ExternalResource', });
lyr_provincias_2.set('fieldImages', {'PROVINCIA': '', 'NOMBRE': '', 'CodUNICEF': '', 'Men': '', 'Women': '', 'PopTot': '', 'REGI_SALUD': '', 'COD_ONE_T': '', 'COD_ONE': '', 'POB_2000': '', 'NO_REG_SAL': '', 'Viviendas': '', });
lyr_TRAMOS_RED_TRONCAL_REV08_3.set('fieldImages', {'TIPO': '', 'CODIGO': '', 'TRTAMO_RT': '', 'NOMBRE': '', 'INICIO': '', 'FIN': '', 'LONGITUD': '', 'ANCHO_m_': '', 'ESTADO': '', });
lyr_TRAMOS_RED_REGIONAL_REV08_4.set('fieldImages', {'TIPO': '', 'CODIGO': '', 'TRAMO_RT': '', 'NOMBRE': '', 'INICIO': '', 'FIN': '', 'LONGITUD': '', 'ANCHO_m_': '', 'ESTADO': '', });
lyr_TRAMOS_RED_LOCAL_REV08_5.set('fieldImages', {'TIPO': '', 'CODIGO': '', 'TRAMOS_RT': '', 'NOMBRE': '', 'INI_TRAMO': '', 'FIN_TRAMO': '', 'LONGITUD': '', 'ANCHO': '', 'ESTADO': '', });
lyr_Puntos_1.set('fieldLabels', {'id': 'no label', 'Nombre': 'header label', 'PhotoPath': 'no label', });
lyr_provincias_2.set('fieldLabels', {'PROVINCIA': 'no label', 'NOMBRE': 'no label', 'CodUNICEF': 'no label', 'Men': 'no label', 'Women': 'no label', 'PopTot': 'no label', 'REGI_SALUD': 'no label', 'COD_ONE_T': 'no label', 'COD_ONE': 'no label', 'POB_2000': 'no label', 'NO_REG_SAL': 'no label', 'Viviendas': 'no label', });
lyr_TRAMOS_RED_TRONCAL_REV08_3.set('fieldLabels', {'TIPO': 'no label', 'CODIGO': 'no label', 'TRTAMO_RT': 'no label', 'NOMBRE': 'no label', 'INICIO': 'no label', 'FIN': 'no label', 'LONGITUD': 'no label', 'ANCHO_m_': 'no label', 'ESTADO': 'no label', });
lyr_TRAMOS_RED_REGIONAL_REV08_4.set('fieldLabels', {'TIPO': 'no label', 'CODIGO': 'no label', 'TRAMO_RT': 'no label', 'NOMBRE': 'no label', 'INICIO': 'no label', 'FIN': 'no label', 'LONGITUD': 'no label', 'ANCHO_m_': 'no label', 'ESTADO': 'no label', });
lyr_TRAMOS_RED_LOCAL_REV08_5.set('fieldLabels', {'TIPO': 'no label', 'CODIGO': 'no label', 'TRAMOS_RT': 'no label', 'NOMBRE': 'no label', 'INI_TRAMO': 'no label', 'FIN_TRAMO': 'no label', 'LONGITUD': 'no label', 'ANCHO': 'no label', 'ESTADO': 'no label', });
lyr_TRAMOS_RED_LOCAL_REV08_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});