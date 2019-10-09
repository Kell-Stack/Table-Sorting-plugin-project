import * as kintoneJSSDK from '@kintone/kintone-js-sdk';

var getTableData = (response) => {
    var mostRecentData = response.records[0]

    console.log(mostRecentData,"🦜")

    if (query ){
        
    }



    
    // records.forEach(element => {
    //     console.log(element,"👠👠👠👠👠👠")
    //     var mostRecentData = element[0]
    //     console.log(mostRecentData, "recent data")
        
}

var getRecordData = () => {
    console.log("hello world")

    var connection = new kintoneJSSDK.Connection()
    // var kintoneApp = new kintoneJSSDK.App(connection)
    var kintoneRecord = new kintoneJSSDK.Record(connection)

    let appID = kintone.app.getId();
    console.log(appID,"sf")
    var query;

    kintoneRecord.getRecords(appID)
    .then((rsp) => {
        console.log(rsp, "👠");

        getTableData(rsp)


    })
    .catch((err) => {
        // This SDK return err with KintoneAPIExeption
        console.log(err);
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