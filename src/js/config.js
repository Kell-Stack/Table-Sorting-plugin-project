import $ from 'jquery';
import * as kintoneJSSDK from '@kintone/kintone-js-sdk';
var kintoneUIComponent = require('modules/@kintone/kintone-ui-component/dist/kintone-ui-component.min.js');
require('modules/@kintone/kintone-ui-component/dist/kintone-ui-component.min.css');
import {
  setTable
} from './configTable'


(function (PLUGIN_ID) {
  'use strict';

  var connection = new kintoneJSSDK.Connection()
  var kintoneApp = new kintoneJSSDK.App(connection)

  kintoneApp.getFormLayout(kintone.app.getId(), true).then((rsp) => {


    var tableRecords = event.record.order_items.value;
    console.log("👹", tableRecords)

  }).catch((err) => {
    console.log(err);
  });

  var initialData = [{
    column: {
      items: [{
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
      items: [{
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

  }, ];

  var table = setTable(initialData)

  $('.settings').append(table.render());



})(kintone.$PLUGIN_ID);