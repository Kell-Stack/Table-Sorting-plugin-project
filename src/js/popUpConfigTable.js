import * as kintoneJSSDK from '@kintone/kintone-js-sdk';
var kintoneUIComponent = require('modules/@kintone/kintone-ui-component/dist/kintone-ui-component.min.js');
require('modules/@kintone/kintone-ui-component/dist/kintone-ui-component.min.css');


var popUpConfigTable = (tableName) => {
    var initialData2 = [{
        tableFieldCode: {
            column: {
                items: [{
                    label: 'Cars',
                    value: 'cars',
                    isDisabled: false
                }, ],
                value: 'cars'
            },
            filter: {
                items: [{
                    label: 'Cars',
                    value: 'cars',
                    isDisabled: false
                }, ],
                value: 'cars'
            }
        }
    }];


    var defaultRowData = JSON.parse(JSON.stringify(initialData2[0]))

    var overriddenRowData = JSON.parse(JSON.stringify(initialData2[0]))

    var getFormLayout = () => {
        var connection = new kintoneJSSDK.Connection()
        var kintoneApp = new kintoneJSSDK.App(connection)

        kintoneApp.getFormLayout(kintone.app.getId(), true).then((rsp) => {
            // console.log("🥶🥶🥶", rsp)


            const layout = rsp.layout
            // console.log("😳😳😳", layout)
            var subTableName = [{
                name: ''
            }]

            // var getSubTableName = (rsp) => {
            layout.forEach(index => {
                // console.log("😡", index)
                if (index.type === 'SUBTABLE') {
                    var subTableObj = {}
                    subTableObj.name = index.code
                    subTableName.push(subTableObj)
                    // console.log("😈😈😈", subTableName)
                }
                return subTableName
            })
            // getSubTableName(rsp)
        }).catch((err) => {
            console.log(err);
        });
    }
    // console.log("😬",getFormLayout())

    var table = new kintoneUIComponent.Table({

        data: initialData2,

        defaultRowData: defaultRowData,
        onRowAdd: function (e) {
            console.log('table.onAdd', e);
            return JSON.parse(JSON.stringify(overriddenRowData));
        },
        columns: [{
                header: tableName + '\'s Column',
                cell: function () {
                    return kintoneUIComponent.createTableCell('dropdown', 'column')
                }
            },
            {
                header: 'Filter',
                cell: function () {
                    return kintoneUIComponent.createTableCell('dropdown', 'filter')
                }
            },
        ]
    });
    $('.settings').append(table.render());
}

export {
    popUpConfigTable
}