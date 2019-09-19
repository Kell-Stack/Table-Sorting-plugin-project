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
import {
  popUpConfigTable
} from './popUpConfigTable';


(function (PLUGIN_ID) {
  'use strict';

  var getSubTableList = (formLayout) => {
    var items = [{
      label: '--------',
      value: '--------',
      isDisabled: true
    }]
    const layout = formLayout.layout
    console.log("⛱", layout)

    layout.forEach(subtable => {
      if (subtable.type === 'SUBTABLE') {
        console.log("🤯", subtable)
        var itemObj = {}
        itemObj.label = subtable.code
        itemObj.value = subtable.code
        itemObj.isDisabled = false
        items.push(itemObj)
        console.log("😈", itemObj)
      }
    })
    return items
  }


  var getFormLayout = () => {
    var connection = new kintoneJSSDK.Connection()
    var kintoneApp = new kintoneJSSDK.App(connection)

    kintoneApp.getFormLayout(kintone.app.getId(), true).then((rsp) => {
      console.log("🥶", rsp)
      var config = kintone.plugin.app.getConfig(PLUGIN_ID)
      console.log("why is this empty? ", config)
      var subTable = getSubTableList(rsp)
      console.log("😡", subTable)

      var initialData = [{
        tableFieldCode: {
          items: subTable,
          value: '--------'
        },
      }];



      var table = setTable(initialData)

      table.on('cellChange', function (event) {
        console.log("🙃", event);
        let tableName = event.data[0].tableFieldCode.value
        popUpConfigTable(tableName)
      });

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
  }

  getFormLayout()

})(kintone.$PLUGIN_ID);