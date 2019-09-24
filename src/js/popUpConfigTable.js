import * as kintoneJSSDK from '@kintone/kintone-js-sdk';
var kintoneUIComponent = require('modules/@kintone/kintone-ui-component/dist/kintone-ui-component.min.js');
require('modules/@kintone/kintone-ui-component/dist/kintone-ui-component.min.css');


var getTableColumns = (formLayout) => {
    var items = [{
        label: '--------',
        value: '--------',
        isDisabled: true
    }]
    const layout = formLayout.layout

    //

    layout.forEach(subtable => {
        if (subtable.type === 'SUBTABLE') {
            subtable.fields.forEach(field => {
                var itemObj = {}
                itemObj.label = field.code
                itemObj.value = field.code
                itemObj.isDisabled = false
                items.push(itemObj)
            })
        }
    })
    return items
}


var popUpConfigTable = (tableName) => {

    var getFormLayout = () => {
        var connection = new kintoneJSSDK.Connection()
        var kintoneApp = new kintoneJSSDK.App(connection)

        kintoneApp.getFormLayout(kintone.app.getId(), true).then((rsp) => {
            console.log("🥶🥶🥶", rsp)

            var popupTableColumns = getTableColumns(rsp)
            var initialData2 = [{
                column: {
                    items: popupTableColumns,
                    value: '--------'
                },
                // filter function
                filter: {
                    items: [{
                        label: 'Cars',
                        value: 'Cars',
                        isDisabled: false
                    }, ],
                }
            }];
            var table = setTable(initialData2)
            console.log("🏓", table)

        }).catch((err) => {
            console.log(err);
        });
    }
    console.log("😬", getFormLayout())



    var setTable = (initialData2) => {

        var defaultRowData = JSON.parse(JSON.stringify(initialData2[0]))

        var overriddenRowData = JSON.parse(JSON.stringify(initialData2[0]))

        var table = new kintoneUIComponent.Table({

            data: initialData2,

            defaultRowData: defaultRowData,
            onRowAdd: function (e) {
                console.log('table.onAdd', e);
                return JSON.parse(JSON.stringify(overriddenRowData));
            },
            columns: [{
                    header: tableName + '\'s Column (Field Code)',
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
}

export {
    popUpConfigTable
}