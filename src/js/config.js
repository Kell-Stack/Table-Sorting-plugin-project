import $ from 'jquery';
import * as kintoneJSSDK from '@kintone/kintone-js-sdk';
var kintoneUIComponent = require('modules/@kintone/kintone-ui-component/dist/kintone-ui-component.min.js');
require('modules/@kintone/kintone-ui-component/dist/kintone-ui-component.min.css');


(function(PLUGIN_ID) {
  'use strict';

  var connection = new kintoneJSSDK.Connection()
  var kintoneApp = new kintoneJSSDK.App(connection)

  kintoneApp.getFormLayout(kintone.app.getId(), true).then((rsp) => {
  
  
    var tableRecords = event.record.order_items.value;
  console.log("👹",tableRecords)

}).catch((err) => {
  console.log(err);
});

    var initialData = [{
        column: {
          items: [
               {
                   label: 'Cars',
                   value: 'cars',
                   isDisabled: false
               },
               {
                   label: 'Robots',
                   value: 'robots',
                   isDisabled: false
               },
               {
                   label: 'Animals',
                   value: 'animals',
                   isDisabled: true
               },
           ],
          value: 'cars'
        },

        filter: {
          items: [
               {
                   label: 'Cars',
                   value: 'cars',
                   isDisabled: false
               },
               {
                   label: 'Robots',
                   value: 'robots',
                   isDisabled: false
               },
               {
                   label: 'Animals',
                   value: 'animals',
                   isDisabled: true
               },
           ],
          value: 'cars'
        },
        
      },
    ];
  
    // default row data of a table, this data will be used to create new row
    var defaultRowData = JSON.parse(JSON.stringify(initialData[0]))

    var overriddenRowData = JSON.parse(JSON.stringify(initialData[0]))
  
    var table = new kintoneUIComponent.Table({
      // initial table data
      data: initialData,
      // default row data on row add
      defaultRowData: defaultRowData,
      onRowAdd: function(e) {
        console.log('table.onAdd', e);
        // if onRowAdd does not return anything, defaultRowData will be used to create new table row
        // if below row data is returned, it will override defaultRowData to be used to create new table row
        return JSON.parse(JSON.stringify(overriddenRowData));
      },
      columns: [
        {
          header: 'Column',
          cell: function() { return kintoneUIComponent.createTableCell('dropdown', 'column') }
        },
        {
          header: 'Filter',
          cell: function() { return kintoneUIComponent.createTableCell('dropdown', 'filter') }
        },
      ]
    });
    $('.settings').append(table.render());

  })(kintone.$PLUGIN_ID);

