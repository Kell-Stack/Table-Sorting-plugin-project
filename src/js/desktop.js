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

  const getLayout = () => {

    var connection = new kintoneJSSDK.Connection()
    var kintoneApp = new kintoneJSSDK.App(connection)

    kintoneApp.getFormLayout(kintone.app.getId(), true).then((rsp) => {
      // var config = kintone.plugin.app.getConfig(PLUGIN_ID)

    }).catch((err) => {
      console.log(err);
    });
  }

  console.log("hello kintone from kelly")

  kintone.events.on('app.record.detail.show', function (event) {
    console.log("this is the event you were looking for: ", event)
    filterFunc()
  });


})(kintone.$PLUGIN_ID);