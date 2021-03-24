/*
acordeon.js
Uso de la distribución tipo acordeón de ExtJS
*/
Ext.require([
    'Ext.plugin.Viewport'
]);
Ext.onReady(function() {
    Ext.create('Ext.panel.Panel', {
        title: 'Ejemplo Acorde&oacute;n',
        width: '50rem',
        height: 500 , //si no dice la unidad, entonces son pixeles
        fontSize: 'px',
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
            html: '<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab autem itaque reprehenderit, delectus animi perferendis in, aperiam quos dignissimos necessitatibus, facilis id nostrum adipisci inventore. Dolorem nulla ducimus id magni.</p>',
        }, {
            title: 'Panel 2',
            html: '<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab autem itaque reprehenderit, delectus animi perferendis in, aperiam quos dignissimos necessitatibus, facilis id nostrum adipisci inventore. Dolorem nulla ducimus id magni.</p>'
        }, {
            title: 'Panel 3',
            html: '<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab autem itaque reprehenderit, delectus animi perferendis in, aperiam quos dignissimos necessitatibus, facilis id nostrum adipisci inventore. Dolorem nulla ducimus id magni.</p>'
        }],
        renderTo: Ext.getBody()
    });
});

/**
 * Demonstrates how to use an Ext.Carousel in vertical and horizontal configurations
 */

 