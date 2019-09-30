import $ from 'jquery';
import * as kintoneJSSDK from '@kintone/kintone-js-sdk';
var kintoneUIComponent = require('modules/@kintone/kintone-ui-component/dist/kintone-ui-component.min.js');
require('modules/@kintone/kintone-ui-component/dist/kintone-ui-component.min.css');
// import {setTable} from './configTable'
import {
  handleSaveButton,
  handleCancelButton
} from './saveAndCancel'
// import {
//   popUpConfigDropDowns
// } from './popUpConfigDropDowns';


(function (PLUGIN_ID) {
  'use strict';

  var getSubTableList = (formLayout) => {
    var items = [{
      label: '--------',
      value: '--------',
      isDisabled: true
    },
  ]
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

    var dropdown = new kintoneUIComponent.Dropdown({
      items: subTable
      // [
      //     {
      //         label: subTable,
      //         value: subTable,
      //         isDisabled: false
      //     },
      // ],
      // value: '--------'
  });

      // dropdown.on('change', function (event) {
      //   console.log("🙃", event);
      // //   for (let i = 0; i < event.data.length; i++) {
      // //     var tableName = event.data[i].tableFieldCode.value
      // //     console.log("🤬", tableName)
      // //   }
      // //   popUpConfigDropDowns(tableName)
      // });

      $('.settings').append(dropdown.render());


      var saveButton = new kintoneUIComponent.Button({
        text: 'Save',
        type: 'submit'
      });
      saveButton.on('click', function () {
        handleSaveButton(dropdown)
      });

      var cancelButton = new kintoneUIComponent.Button({
        text: 'Cancel'
      });
      cancelButton.on('click', function (event) {
        handleCancelButton(dropdown)
      });

      $(".SaveButton").append(saveButton.render())
      $(".CancelButton").append(cancelButton.render())

    }).catch((err) => {
      console.log(err);
    });
  }

  getFormLayout()

})(kintone.$PLUGIN_ID);

//BUGS 
// 1. when you select a drop down of the table you want towork with, a pop up table appears
//    that *will* allow you to choose the columns' of that table HOWEVER if you choose that 
//    same table again in the initial dropdown a new table pops out, will need to disable 
//    once chose 

// 2. if you switch the table the popup doesn't change it just gets added

// 3. popup table is aggregating all column names as opposed to table specific column names