import * as kintoneJSSDK from '@kintone/kintone-js-sdk';
var kintoneUIComponent = require('modules/@kintone/kintone-ui-component/dist/kintone-ui-component.min.js');
require('modules/@kintone/kintone-ui-component/dist/kintone-ui-component.min.css');

var filterFunc = () => {
    console.log("see filter.js")

    //   can't access the table
      kintone.events.on('app.record.detail.show', function(event) {
        // if (!event.record) {
        //     return;
        // }
        // console.log(event,"👻")


        // var tableRecords = event.record.Table_0.value

        // var tableRecord = event.record.code.value

        // var test = tableRecords[1].value['Radio_button'].value

        // // var sortArr = new Array();


        // console.log(tableRecords, "👽👽👽")
        console.log(tableRecord, "👽")
      })

      


}



export {filterFunc}