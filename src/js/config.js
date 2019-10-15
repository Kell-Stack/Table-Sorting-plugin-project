import $ from 'jquery';
import * as kintoneJSSDK from '@kintone/kintone-js-sdk';
var kintoneUIComponent = require('modules/@kintone/kintone-ui-component/dist/kintone-ui-component.min.js');
require('modules/@kintone/kintone-ui-component/dist/kintone-ui-component.min.css');
// import {
//   filterFunc
// } from './filter'
import {
  handleSaveButton,
  handleCancelButton
} from './saveAndCancel'
// import {getRecordData} from './getTableData'


(function (PLUGIN_ID) {
  'use strict';

  var getTablesList = (formLayout) => {
    var items = [{
      label: '--------',
      value: '--------',
      isDisabled: true
    }]
    const layout = formLayout.layout
    console.log("⛱", layout)

    layout.forEach(subtable => {
      if (subtable.type === 'SUBTABLE') {
        //console.log("🤯", subtable)
        var itemObj = {}
        itemObj.label = subtable.code
        itemObj.value = subtable.code
        itemObj.isDisabled = false
        items.push(itemObj)
        //console.log("😈", itemObj)
      }
    })
    return items
  }

  var excludedFieldTypes = (formLayout) => {
    const layout = formLayout.layout
    layout.forEach(subtable => {
      if (subtable.type === 'SUBTABLE') {
        var fieldType = subtable.fields
        fieldType.forEach(field => {
          if (fieldType === 'MULTI_LINE_TEXT' || 'RICH_TEXT' || 'CHECK_BOX' || 'MULTI_SELECT' || 'FILE' || 'LINK' || 'USER_SELECT' || 'ORGANIZATION_SELECT' || 'GROUP_SELECT') {
            var arr = []
            arr.push(field)
            //console.log("EXCLUDED FIELD TYPES 🚨: ", arr.push(field))
          }
        })
      }
    })  
  }

  var updatedConfig = (config, itemsArr) => {
    var items = []
    var updatedConfigArr = []
    console.log(itemsArr,config, "items array🙀")

  }

  var getFormLayout = () => {
    var connection = new kintoneJSSDK.Connection()
    var kintoneApp = new kintoneJSSDK.App(connection)

    kintoneApp.getFormLayout(kintone.app.getId(), true).then((rsp) => {
      console.log("🥶", rsp)
      var config =kintone.plugin.app.getConfig(PLUGIN_ID)
      console.log(config,"config💩")

      var subTable = getTablesList(rsp)
      //console.log("😡", subTable)
      // var excluded = excludedFieldTypes(rsp)
      // console.log("this will be exclusions", excluded)

      var getTableColumns = (formLayout, event) => {
        var items = [{
          label: '--------',
          value: '--------',
          isDisabled: true
        }]
        const layout = formLayout.layout


        layout.forEach(subtable => {
          console.log("🛸🛸🛸", subtable, subtable.code, event)
          if (subtable.code === event) {
            if (subtable.type === 'SUBTABLE') {
              subtable.fields.forEach(field => {
                var itemObj = {}
                itemObj.label = field.code
                itemObj.value = field.code
                items.push(itemObj)
                // console.log("🛸", itemObj)
              })
            }

          }
        })
        return items
      }

      //Dropdown Module ###########################################################################################

      var dropdown = new kintoneUIComponent.Dropdown({
        items: JSON.parse(JSON.stringify(subTable)),
        value: '--------'
      });

      $('.dropdown').text("Please choose the table you'd like to sort: ").append(dropdown.render());


      dropdown.on('change', function (event) {
        console.log("🙃🙃🙃", event);

        var tableColumn = getTableColumns(rsp, event)

        var dropdown1 = new kintoneUIComponent.Dropdown({
          items: JSON.parse(JSON.stringify(tableColumn)),
          value: '--------'
        })

        $('.dropdown1')
          .text("Please choose the column from " + event + " you'd like to sort: ")
          .append(dropdown1.render());


        var dropdown2 = new kintoneUIComponent.Dropdown({
          items: [{
              label: '--------',
              value: '--------',
              isDisabled: true
            },
            {
              label: 'Ascending',
              value: 'Ascending',
              isDisabled: false
            },
            {
              label: 'Descending',
              value: 'Descending',
              isDisabled: false
            }
          ],
          value: '--------'
        });

        $('.dropdown2')
          .text("Then the way you'd like to sort the " + event + " column: ")
          .append(dropdown2.render());
      })


      var record = kintone.app.record.get();
      console.log("recs", record);

      // if (config) {
      //   var parsedConfigObj = JSON.parse(JSON.stringify(config))
      //   var newConfigObj = updatedConfig(parsedConfigObj)
      //   console.log(newConfigObj, "🤑")
      // }

      var saveButton = new kintoneUIComponent.Button({
        text: 'Save',
        type: 'submit'
      });
      saveButton.on('click', function () {
        handleSaveButton()
      });

      var cancelButton = new kintoneUIComponent.Button({
        text: 'Cancel'
      });
      cancelButton.on('click', function (event) {
        handleCancelButton()
      });

      $(".SaveButton").append(saveButton.render())
      $(".CancelButton").append(cancelButton.render())

    }).catch((err) => {
      console.log(err);
    });
  }

  getFormLayout()
  
  // getRecordData()

})(kintone.$PLUGIN_ID);