import * as kintoneJSSDK from '@kintone/kintone-js-sdk';

var getTableData = (rsp) => {
    var records = rsp.records
    records.array.forEach(element => {
        var lastIndex = element[element.length-1]
        console.log(lastIndex, "last index baby")
        
    });
}

var getRecordData = () => {
    console.log("hello world")

    var connection = new kintoneJSSDK.Connection()
    // var kintoneApp = new kintoneJSSDK.App(connection)
    var kintoneRecord = new kintoneJSSDK.Record(connection)

    let appID = kintone.app.getId();
    console.log(appID,"sf")

    kintoneRecord.getRecords(appID)
    .then((rsp) => {
        console.log(rsp, "👠");



    })
    .catch((err) => {
        // This SDK return err with KintoneAPIExeption
        console.log(err.get());
    });

    // kintone.events.on(["app.record.create.submit.success", "app.record.edit.submit.success", "app.record.detail.show"], function(e) {
    // console.log(e, "event")
    // })
    // kintoneApp.getApp(appID)
    //     .then((rsp) => {
    //         console.log(rsp, "yerrrrrr");
    //     })
    //     .catch((err) => {
    //         // This SDK return err with KintoneAPIExeption
    //         console.log(err.get());
    //     });

    }

export {
    getRecordData
};