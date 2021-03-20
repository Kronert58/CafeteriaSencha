Ext.create({
    xtype: 'panel',
    title: 'Static button here (white icon)',
    bodyStyle: {
        "background-color": "red"
    },
    renderTo: Ext.getBody(),
    height: 200,
    width: 400,
    items: [{
        xtype: 'button',
        margin: '10',
        cls: 'hideBorder',
        iconCls: 'x-fa fa-floppy-o',
        scale: 'large'
    }]
});

Ext.create({
    xtype: 'panel',
    margin: '10 0 0 0',
    title: 'your floating ui button here (black icon)',
    renderTo: Ext.getBody(),
    height: 200,
    width: 400,
    listeners: {
        afterrender: {
            fn: function () {
                var obj = Ext.create({
                    xtype: 'button',
                    width: 60,
                    height: 60,
                    ui: 'lstbuttonclrounded',
                    iconCls: 'x-fa fa-floppy-o',
                    scale: 'large',
                    scope: this.getController(),
                    floating: true,
                    renderTo: this.body,
                    handler: function() {
                        this.setPosition(Math.random()*350, Math.random()*100);
                    }
                });
                this.add(obj);

                obj.setPosition(0, 0);

            }
        }
    }
});

var object2 = Ext.create({
    extend: 'Ext.carousel.Carousel',
    xtype: 'carousel-basic',

    defaults: {
        layout: 'center'
    },

    items: [{
        html: '<p>Swipe left to show the next card&hellip;</p>',
        cls: 'stock-image stock-one-background'
    }, {
        html: '<p>You can also tap on either side of the indicators.</p>',
        cls: 'stock-image stock-two-background'
    }, {
        html: 'Card #3',
        cls: 'stock-image stock-three-background'
    }]
});

