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

    var connection = new kintoneJSSDK.Connection()
    var kintoneApp = new kintoneJSSDK.App(connection)

    kintoneApp.getFormLayout(kintone.app.getId(), true).then((rsp) => {
      // var config = kintone.plugin.app.getConfig(PLUGIN_ID)





    }).catch((err) => {
      console.log(err);
    });
  // }

  console.log("hello kintone from kelly")



  kintone.events.on(['app.record.edit.submit','app.record.create.submit','app.record.detail.show'], function (event) {
    console.log("this is the event you were looking for: ", event)
    // filterFunc()
    //try reassigning the row thats at index 0 and index 1
    //do i need to keep the {id: x, value": y}

  })


})(kintone.$PLUGIN_ID);