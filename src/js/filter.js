import * as kintoneJSSDK from '@kintone/kintone-js-sdk';
var kintoneUIComponent = require('modules/@kintone/kintone-ui-component/dist/kintone-ui-component.min.js');
require('modules/@kintone/kintone-ui-component/dist/kintone-ui-component.min.css');



var excludedFieldTypes = (rsp) => {

    var getFormLayout = () => {
        var connection = new kintoneJSSDK.Connection()
        var kintoneApp = new kintoneJSSDK.App(connection)

        kintoneApp.getFormLayout(kintone.app.getId(), true).then((rsp) => {
            console.log("🥶🥶🥶", rsp)



        }).catch((err) => {
            console.log(err);
        });
    }
    getFormLayout()
}



export {excludedFieldTypes}