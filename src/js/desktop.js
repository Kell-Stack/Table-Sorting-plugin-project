import $ from 'jquery';
import * as kintoneJSSDK from '@kintone/kintone-js-sdk';
var kintoneUIComponent = require('modules/@kintone/kintone-ui-component/dist/kintone-ui-component.min.js');
require('modules/@kintone/kintone-ui-component/dist/kintone-ui-component.min.css');
// import image from '../image/sort-arrows-couple-pointing-up-and-down.png';
import {
  filterFunc
} from './filter'



(function (PLUGIN_ID) {
  'use strict';

  // const getLayout = () => {

  //   var connection = new kintoneJSSDK.Connection()
  //   var kintoneApp = new kintoneJSSDK.App(connection)

  //   kintoneApp.getFormLayout(kintone.app.getId(), true).then((rsp) => {
  //     // var config = kintone.plugin.app.getConfig(PLUGIN_ID)


  //   }).catch((err) => {
  //     console.log(err);
  //   });
  // }



  kintone.events.on(['app.record.edit.submit', 'app.record.create.submit', 'app.record.detail.show'], function (event) {
    console.log("this is the event you were looking for: ", event)

    // console.log("skrt skrt", event.record, event.record.Table_0)
    var tableNameCheck = (object, value) => {
      return Object.keys(object).find(key => object[key] === value)
    }
  console.log(event.record)

  //this will only get you the first instance so maybe write and error code that this plugin will not work if theres more than one table
  var tableVals = Object.values(event.record).find(element=> { return element.type === "SUBTABLE"})
  var tableName = Object.keys(event.record).find(key => {return event.record[key].type === "SUBTABLE"})
  console.log("table VAL ", tableVals)
  console.log("test name", tableName)

    // filterFunc()
    //try reassigning the row thats at index 0 and index 1
    //do i need to keep the {id: x, value": y}
    var valueArr = []
    console.log(tableVals.value, "skkrt")

  })


})(kintone.$PLUGIN_ID);