import $ from 'jquery';
import * as kintoneJSSDK from '@kintone/kintone-js-sdk';
var kintoneUIComponent = require('modules/@kintone/kintone-ui-component/dist/kintone-ui-component.min.js');
require('modules/@kintone/kintone-ui-component/dist/kintone-ui-component.min.css');
import {
  setTable
} from './configTable'
import {
  handleSaveButton,
  handleCancelButton
} from './saveAndCancel'


(function (PLUGIN_ID) {
  'use strict';

  var getSubtableList = (formLayout) => {
    var items = [{
      label: '--------',
      value: '--------',
      isDisabled: true
    }]
    const layout = formLayout.layout

      // var subTableArr = 
      console.log("⛱",layout)

      var subtableLayout = (row) => {
        var layoutArr = row.code
        layoutArr.forEach(subtable => {
          var itemObj = {}
          // itemObj.code = subtable.
        })
      }

    return items
  }


  // var getFormLayout = () => {
  var connection = new kintoneJSSDK.Connection()
  var kintoneApp = new kintoneJSSDK.App(connection)

  kintoneApp.getFormLayout(kintone.app.getId(), true).then((rsp) => {
    console.log("🥶", rsp)
    var subTable = getSubtableList(rsp)
    console.log("😡",subTable)

    var initialData = [{
      tableFieldCode: {
        items: [{
            items: subTable,
            value: '🎡',
            isDisabled: false
          },
        ],
        value: '🎡'
      },
      column: {
        items: [{
            label: 'Cars',
            value: 'cars',
            isDisabled: false
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
        ],
        value: 'cars'
      },

    }, ];

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