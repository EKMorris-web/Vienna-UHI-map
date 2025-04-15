var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_ASIT_BI_1 = new ol.format.GeoJSON();
var features_ASIT_BI_1 = format_ASIT_BI_1.readFeatures(json_ASIT_BI_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ASIT_BI_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ASIT_BI_1.addFeatures(features_ASIT_BI_1);
var lyr_ASIT_BI_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ASIT_BI_1, 
                style: style_ASIT_BI_1,
                popuplayertitle: 'ASIT_BI',
                interactive: true,
    title: 'ASIT_BI<br />\
    <img src="styles/legend/ASIT_BI_1_0.png" /> Not built-up/urban (ASIT_BI=0)<br />\
    <img src="styles/legend/ASIT_BI_1_1.png" /> Built-up/urban (ASIT_BI=1)<br />' });
var format_NDVI_2 = new ol.format.GeoJSON();
var features_NDVI_2 = format_NDVI_2.readFeatures(json_NDVI_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NDVI_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NDVI_2.addFeatures(features_NDVI_2);
var lyr_NDVI_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NDVI_2, 
                style: style_NDVI_2,
                popuplayertitle: 'NDVI',
                interactive: true,
    title: 'NDVI<br />\
    <img src="styles/legend/NDVI_2_0.png" /> Not vegetation (<=0.5)<br />\
    <img src="styles/legend/NDVI_2_1.png" /> All vegetation (>0.5)<br />' });
var format_MNDWI_3 = new ol.format.GeoJSON();
var features_MNDWI_3 = format_MNDWI_3.readFeatures(json_MNDWI_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MNDWI_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MNDWI_3.addFeatures(features_MNDWI_3);
var lyr_MNDWI_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MNDWI_3, 
                style: style_MNDWI_3,
                popuplayertitle: 'MNDWI',
                interactive: true,
    title: 'MNDWI<br />\
    <img src="styles/legend/MNDWI_3_0.png" /> Non-Waterbodies (MNDWI <0)<br />\
    <img src="styles/legend/MNDWI_3_1.png" /> Waterbodies (MNDWI >0)<br />' });
var format_TemperatureCelsius_4 = new ol.format.GeoJSON();
var features_TemperatureCelsius_4 = format_TemperatureCelsius_4.readFeatures(json_TemperatureCelsius_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TemperatureCelsius_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TemperatureCelsius_4.addFeatures(features_TemperatureCelsius_4);
var lyr_TemperatureCelsius_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TemperatureCelsius_4, 
                style: style_TemperatureCelsius_4,
                popuplayertitle: 'Temperature (Celsius) ',
                interactive: true,
    title: 'Temperature (Celsius) <br />\
    <img src="styles/legend/TemperatureCelsius_4_0.png" /> 38 - 42<br />\
    <img src="styles/legend/TemperatureCelsius_4_1.png" /> 34 - 38<br />\
    <img src="styles/legend/TemperatureCelsius_4_2.png" /> 29 - 34<br />\
    <img src="styles/legend/TemperatureCelsius_4_3.png" /> 25 - 29<br />\
    <img src="styles/legend/TemperatureCelsius_4_4.png" /> 21 - 25<br />' });
var lyr_NIRRB_5 = new ol.layer.Image({
        opacity: 1,
        
    title: 'NIRRB<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/NIRRB_5.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [1807532.420881, 6125179.945394, 1847449.841679, 6149695.749402]
        })
    });
var lyr_RGB_6 = new ol.layer.Image({
        opacity: 1,
        
    title: 'RGB<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/RGB_6.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [1807532.420881, 6125179.945394, 1847449.841679, 6149695.749402]
        })
    });

lyr_OpenStreetMap_0.setVisible(true);lyr_ASIT_BI_1.setVisible(true);lyr_NDVI_2.setVisible(true);lyr_MNDWI_3.setVisible(true);lyr_TemperatureCelsius_4.setVisible(true);lyr_NIRRB_5.setVisible(true);lyr_RGB_6.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_ASIT_BI_1,lyr_NDVI_2,lyr_MNDWI_3,lyr_TemperatureCelsius_4,lyr_NIRRB_5,lyr_RGB_6];
lyr_ASIT_BI_1.set('fieldAliases', {'fid': 'fid', 'ASIT_BI': 'ASIT_BI', });
lyr_NDVI_2.set('fieldAliases', {'fid': 'fid', 'NDVI': 'NDVI', });
lyr_MNDWI_3.set('fieldAliases', {'fid': 'fid', 'MNDWI': 'MNDWI', });
lyr_TemperatureCelsius_4.set('fieldAliases', {'fid': 'fid', 'LST': 'LST', });
lyr_ASIT_BI_1.set('fieldImages', {'fid': 'TextEdit', 'ASIT_BI': 'Range', });
lyr_NDVI_2.set('fieldImages', {'fid': 'TextEdit', 'NDVI': 'Range', });
lyr_MNDWI_3.set('fieldImages', {'fid': 'TextEdit', 'MNDWI': 'Range', });
lyr_TemperatureCelsius_4.set('fieldImages', {'fid': 'TextEdit', 'LST': 'Range', });
lyr_ASIT_BI_1.set('fieldLabels', {'fid': 'hidden field', 'ASIT_BI': 'no label', });
lyr_NDVI_2.set('fieldLabels', {'fid': 'hidden field', 'NDVI': 'no label', });
lyr_MNDWI_3.set('fieldLabels', {'fid': 'hidden field', 'MNDWI': 'no label', });
lyr_TemperatureCelsius_4.set('fieldLabels', {'fid': 'hidden field', 'LST': 'no label', });
lyr_TemperatureCelsius_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});