import $ from 'jquery';
import * as kintoneJSSDK from '@kintone/kintone-js-sdk';
var kintoneUIComponent = require('modules/@kintone/kintone-ui-component/dist/kintone-ui-component.min.js');
require('modules/@kintone/kintone-ui-component/dist/kintone-ui-component.min.css');
import {setTable} from './configTable'
import {
  handleSaveButton,
  handleCancelButton
} from './saveAndCancel'


(function(PLUGIN_ID) {
  'use strict';


  // var getFormLayout = () => {
  var connection = new kintoneJSSDK.Connection()
  var kintoneApp = new kintoneJSSDK.App(connection)

  kintoneApp.getFormLayout(kintone.app.getId(), true).then((rsp) => {
  
  
console.log("🥶",rsp)

    var initialData = [{
      tableFieldCode: {
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
  
    var table = setTable(initialData)

    $('.settings').append(table.render());

    var saveButton = new kintoneUIComponent.Button({
      text: 'Save',
      type: 'submit'
    });
    saveButton.on('click', function () {
      handleSaveButton(table)
    });

    var cancelButton = new kintoneUIComponent.Button({
      text: 'Cancel'
    });
    cancelButton.on('click', function (event) {
      handleCancelButton(table)
    });

    $(".SaveButton").append(saveButton.render())
    $(".CancelButton").append(cancelButton.render())

  }).catch((err) => {
    console.log(err);
  });
// }

// getFormLayout()

  })(kintone.$PLUGIN_ID);

