import $ from 'jquery';
import * as kintoneJSSDK from '@kintone/kintone-js-sdk';
var kintoneUIComponent = require('modules/@kintone/kintone-ui-component/dist/kintone-ui-component.min.js');
require('modules/@kintone/kintone-ui-component/dist/kintone-ui-component.min.css');
import image from '../image/sort-arrows-couple-pointing-up-and-down.png';



(function (PLUGIN_ID) {
  'use strict';

  const getArrowIcon = () => {

    var config = kintone.plugin.app.getConfig(PLUGIN_ID)

    var parsedConfig = JSON.parse(config.table);
    parsedConfig.forEach(index => {

      var icon = document.createElement('img')
      icon.setAttribute('src', image)


      $(icon).attr('class', 'arrow-icon')
 
    })
  }

  kintone.events.on('app.record.detail.show', function (event) {
    getArrowIcon()
  });

})(kintone.$PLUGIN_ID);
