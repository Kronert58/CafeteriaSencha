/*
acordeon.js
Uso de la distribución tipo acordeón de ExtJS
*/
Ext.require([
    'Ext.plugin.Viewport'
]);
Ext.onReady(function() {
    Ext.create('Ext.panel.Panel', {
        title: 'Acorde&oacute;n',
        width: '100%',
        height: 500, //si no dice la unidad, entonces son pixeles
        defaults: {
            // para todos los paneles del acordeón
            bodyStyle: 'padding:10px'
        },
        layout: {
            // definición para el acordeón
            type: 'accordion',
            titleCollapse: true,
            animate: true,
            activeOnTop: true
        },
        items: [{
            title: 'Panel 1',
            html: '<p style="font-size:30px">Contenido del primer panel</p>',
        }, {
            title: 'Panel 2',
            html: ''
        }, {
            title: 'Panel 3',
            html: '<p></p>'
        }],
        renderTo: Ext.getBody()
    });
});

/**
 * Demonstrates how to use an Ext.Carousel in vertical and horizontal configurations
 */

 