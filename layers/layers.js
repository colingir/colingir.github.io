var wms_layers = [];

var format_Europe_0 = new ol.format.GeoJSON();
var features_Europe_0 = format_Europe_0.readFeatures(json_Europe_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Europe_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Europe_0.addFeatures(features_Europe_0);
var lyr_Europe_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Europe_0, 
                style: style_Europe_0,
                interactive: true,
                title: '<img src="styles/legend/Europe_0.png" /> Europe'
            });
var format_France_1 = new ol.format.GeoJSON();
var features_France_1 = format_France_1.readFeatures(json_France_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_France_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_France_1.addFeatures(features_France_1);
var lyr_France_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_France_1, 
                style: style_France_1,
                interactive: true,
                title: '<img src="styles/legend/France_1.png" /> France'
            });
var format_region_2 = new ol.format.GeoJSON();
var features_region_2 = format_region_2.readFeatures(json_region_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_region_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_region_2.addFeatures(features_region_2);
var lyr_region_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_region_2, 
                style: style_region_2,
                interactive: true,
                title: '<img src="styles/legend/region_2.png" /> region'
            });
var format_dpartement_3 = new ol.format.GeoJSON();
var features_dpartement_3 = format_dpartement_3.readFeatures(json_dpartement_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_dpartement_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_dpartement_3.addFeatures(features_dpartement_3);
var lyr_dpartement_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_dpartement_3, 
                style: style_dpartement_3,
                interactive: true,
                title: '<img src="styles/legend/dpartement_3.png" /> département'
            });
var format_Typedesabattoirs_4 = new ol.format.GeoJSON();
var features_Typedesabattoirs_4 = format_Typedesabattoirs_4.readFeatures(json_Typedesabattoirs_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Typedesabattoirs_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Typedesabattoirs_4.addFeatures(features_Typedesabattoirs_4);
var lyr_Typedesabattoirs_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Typedesabattoirs_4, 
                style: style_Typedesabattoirs_4,
                interactive: true,
    title: 'Type des abattoirs <br />\
    <img src="styles/legend/Typedesabattoirs_4_0.png" /> Abattoir mobile - caisson<br />\
    <img src="styles/legend/Typedesabattoirs_4_1.png" /> Abattoir mobile - camion<br />\
    <img src="styles/legend/Typedesabattoirs_4_2.png" /> Création d\'un abattoir fixe<br />\
    <img src="styles/legend/Typedesabattoirs_4_3.png" /> Création d\'un abattoir fixe avec caisson<br />\
    <img src="styles/legend/Typedesabattoirs_4_4.png" /> Non défini<br />\
    <img src="styles/legend/Typedesabattoirs_4_5.png" /> Reprise d\'un abattoir fixe<br />\
    <img src="styles/legend/Typedesabattoirs_4_6.png" /> Reprise d\'un abattoir fixe avec caisson<br />'
        });

lyr_Europe_0.setVisible(true);lyr_France_1.setVisible(true);lyr_region_2.setVisible(true);lyr_dpartement_3.setVisible(true);lyr_Typedesabattoirs_4.setVisible(true);
var layersList = [lyr_Europe_0,lyr_France_1,lyr_region_2,lyr_dpartement_3,lyr_Typedesabattoirs_4];
lyr_Europe_0.set('fieldAliases', {'SOVEREIGNT': 'SOVEREIGNT', });
lyr_France_1.set('fieldAliases', {'SOVEREIGNT': 'SOVEREIGNT', });
lyr_region_2.set('fieldAliases', {'code_insee': 'code_insee', 'nom': 'nom', 'nuts2': 'nuts2', 'wikipedia': 'wikipedia', 'surf_km2': 'surf_km2', });
lyr_dpartement_3.set('fieldAliases', {'code_insee': 'code_insee', 'nom': 'nom', 'nuts3': 'nuts3', 'wikipedia': 'wikipedia', 'surf_km2': 'surf_km2', });
lyr_Typedesabattoirs_4.set('fieldAliases', {'Code': 'Code', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Commune/D�': 'Département', 'Nom de str': 'Nom de la structure', 'Qui porte': 'Qui porte le projet ', 'Combien de': 'Nombre de paysans sont impliqués ', 'A quelle �': 'Etape d\'avancement', 'Quel type': 'Type d\'abattoir', 'Pour quell': 'Quelles espèces ', 'Quelle vol': 'Volume ', 'Quel statu': 'Quel statut juridique  ', 'Contact de': 'Contacte de la persoone référente ', 'Adresse ma': 'Adresse mail', });
lyr_Europe_0.set('fieldImages', {'SOVEREIGNT': 'TextEdit', });
lyr_France_1.set('fieldImages', {'SOVEREIGNT': 'TextEdit', });
lyr_region_2.set('fieldImages', {'code_insee': 'TextEdit', 'nom': 'TextEdit', 'nuts2': 'TextEdit', 'wikipedia': 'TextEdit', 'surf_km2': 'TextEdit', });
lyr_dpartement_3.set('fieldImages', {'code_insee': 'TextEdit', 'nom': 'TextEdit', 'nuts3': 'TextEdit', 'wikipedia': 'TextEdit', 'surf_km2': 'TextEdit', });
lyr_Typedesabattoirs_4.set('fieldImages', {'Code': 'Hidden', 'Latitude': 'Hidden', 'Longitude': 'Hidden', 'Commune/D�': 'TextEdit', 'Nom de str': 'TextEdit', 'Qui porte': 'TextEdit', 'Combien de': 'TextEdit', 'A quelle �': 'TextEdit', 'Quel type': 'TextEdit', 'Pour quell': 'TextEdit', 'Quelle vol': 'TextEdit', 'Quel statu': 'TextEdit', 'Contact de': 'TextEdit', 'Adresse ma': 'TextEdit', });
lyr_Europe_0.set('fieldLabels', {'SOVEREIGNT': 'no label', });
lyr_France_1.set('fieldLabels', {'SOVEREIGNT': 'no label', });
lyr_region_2.set('fieldLabels', {'code_insee': 'no label', 'nom': 'no label', 'nuts2': 'no label', 'wikipedia': 'no label', 'surf_km2': 'no label', });
lyr_dpartement_3.set('fieldLabels', {'code_insee': 'no label', 'nom': 'no label', 'nuts3': 'no label', 'wikipedia': 'no label', 'surf_km2': 'no label', });
lyr_Typedesabattoirs_4.set('fieldLabels', {'Commune/D�': 'inline label', 'Nom de str': 'inline label', 'Qui porte': 'inline label', 'Combien de': 'inline label', 'A quelle �': 'inline label', 'Quel type': 'inline label', 'Pour quell': 'inline label', 'Quelle vol': 'inline label', 'Quel statu': 'inline label', 'Contact de': 'inline label', 'Adresse ma': 'inline label', });
lyr_Typedesabattoirs_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});