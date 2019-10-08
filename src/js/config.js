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
import {getRecordData} from './getTableData'


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





  var getFormLayout = () => {
    var connection = new kintoneJSSDK.Connection()
    var kintoneApp = new kintoneJSSDK.App(connection)



    kintoneApp.getFormLayout(kintone.app.getId(), true).then((rsp) => {
      console.log("🥶", rsp)
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

        var dropdown3 = new kintoneUIComponent.Dropdown({
          items: JSON.parse(JSON.stringify(tableColumn)),
          value: '--------'
        })

        $('.dropdown3')
          .text("Please choose the column from " + event + " you'd like to sort: ")
          .append(dropdown3.render());

        var dropdown5 = new kintoneUIComponent.Dropdown({
          items: JSON.parse(JSON.stringify(tableColumn)),
          value: '--------'
        })

        $('.dropdown5')
          .text("Please choose the column from " + event + " you'd like to sort: ")
          .append(dropdown5.render());

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

        var dropdown4 = new kintoneUIComponent.Dropdown({
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

        $('.dropdown4')
          .text("Then the way you'd like to sort the " + event + " column: ")
          .append(dropdown4.render());

        var dropdown6 = new kintoneUIComponent.Dropdown({
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

        $('.dropdown6')
          .text("Then the way you'd like to sort the " + event + " column: ")
          .append(dropdown6.render());
      })
      //Dropdown Module End#######################################################################################


      var record = kintone.app.record.get();
      console.log("recs", record);


      // kintone.events.on("app.record.create.submit.success", function (ev) {
      //   var record = ev.record;
      //   alert("The record ID is " + record["$id"]["value"] + ".");
      // });

      // var body = {
      //   "app": [],
      //   "id": []
      // };

      // kintone.api(kintone.api.url('/k/admin/app/flow?app=' + kintone.app.getId(), true), 'GET', body, function (resp) {
      //   // success
      //   console.log(resp);
      // }, function (error) {
      //   // error
      //   console.log(error);
      // });

      //   kintone.events.on("app.record.create.submit.success", function (ev) {
      //     var record = ev.record;
      //     alert("The record ID is " + record["$id"]["value"] + ".");
      //   })

      //   kintone.events.on("app.record.create.submit.success", function (ev) {
      //     var record = ev.record;
      //     alert("The record ID is " + record["$id"]["value"] + ".uhh");
      //   });

      //   kintone.events.on('app.record.index.edit.submit', function (event) {
      //     var record = event.record;
      //     console.log("ok", record)
      //     console.log("okok", event)
      //     return event
      //   })

      //   var record = kintone.app.record.get();
      //   console.log(record, "hihbbbu");

      //   kintone.events.on('app.record.index.show', function (event) {
      //     console.log(event, "fjbnvkfsk");
      //   })


      //   var recordId = kintone.app.record.getId();
      //   console.log(recordId, "jsfkbksfksk");

      //   kintone.events.on('app.record.index.edit.change', function (event) {
      //     console.log("🤖", event)

      //   })


      //   var record = kintone.app.record.get();
      //   console.log(record, "hellohellohelloe");

      //   // kintone.api('/k/v1/records', 'GET', params).then(function (resp) {

      //   var recordCreate = kintone.app.record.create
      //   console.log("🆘🆘", recordCreate);
      //   var recordEdit = kintone.app.record.edit
      //   console.log("🆘🆘🆘", recordEdit);
      //   var recordShow = kintone.app.record.show
      //   console.log("🆘🆘🆘🆘", recordShow);

      //   // })


      //   kintone.events.on('app.record.create.submit', function(event) {
      //     var record = event.record;
      //     var params = { app: masterAppId, query: query };

      //     return kintone.api('/k/v1/records', 'GET', params).then(function(resp) {
      //         //Check that the company name exists in the master app
      //         return event;
      //     }, function(resp) { //Dealing with errors received by the system
      //         var errmsg = 'There was an error when retrieving the data.';
      //         if (resp.message) {
      //             errmsg += '\n' + resp.message;
      //         }
      //         alert(errmsg);
      //     });
      // });



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
  
  getRecordData()

})(kintone.$PLUGIN_ID);