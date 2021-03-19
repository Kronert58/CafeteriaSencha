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
        },
        items: [{
            title: 'Cafe Latte',
            html: '<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum suscipit deleniti iste enim consectetur facilis excepturi est, quae culpa, eligendi doloremque, tempore fugiat. Provident animi perspiciatis doloribus iure pariatur repudiandae?</p>',
        }, {
            title: 'Panel 2',
            html: '<p>Contenido del primer panel</p>',
        }, {
            title: 'Panel 3',
            html: '<p><form>Hola <input type="text" name="txtNom"/></form></p>'
        }],
        renderTo: Ext.getBody()
    });
});