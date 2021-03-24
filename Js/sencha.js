var signupBase = {
    standardSubmit : false,
    items: [{
             xtype: 'fieldset',
             title: 'Sign up',
             defaults: {
                        required: true,
                        labelAlign: 'left',
                        useClearIcon: true,
                        labelWidth: '37%'
                        },
                        items: [{
                                xtype: 'textfield',
                                name : 'FirstName',
                                label: 'FirstName' ,
                                useClearIcon: true
                                },{
                                xtype: 'textfield',
                                name : 'LastName',
                                label: 'LastName',
                                useClearIcon: true
                                },{
                                xtype: 'textfield',
                                name : 'email',
                                label: 'Email',
                                useClearIcon: true
                                },{
                                xtype: 'passwordfield',
                                name : 'password',
                                label: 'Password',
                                useClearIcon: true
                                },{
                                xtype: 'passwordfield',
                                name : 'Confirm',
                                label: 'Confirm',
                                useClearIcon: true
                                }]
                        },{
                        xtype:  'button',
                        text:   'Sign up',
                        ui: 'confirm',
                        handler: function() {
                        view.setActiveItem('welcomepanel', {type:'fade', direction:'left'});
    
                        }
                        }]
                }
              var carousel = new Ext.create('Ext.Carousel',
                                              {
                                              fullscreen: true,
                                              itemLength: 250, // **you can change value as you want**
                                              defaults: {
                                              styleHtmlContent: true
                                              },
                                              items: [signupBase]});
            var view = Ext.create('Ext.TabPanel', {
                           fullscreen: true,
                           tabBarPosition: 'bottom',
                           scroll:'vertical',
                           //styleHtmlContent: true,
                           //padding: 10,
                           items: [{
                                   title: 'HOME',
                                   iconCls: 'home',
                                   items: [{
                                           xtype: 'toolbar',
                                           title: 'Sign In',
                                           },signinBase]
    
                                   },
                                   {
                                   title: 'ITEMS',
                                   iconCls: 'star',
                                   items: [
                                           {
                                           xtype: 'toolbar',
                                           title: 'Add Items',
                                           },
                                           carousel]
                                        }