var kintoneUIComponent = require('modules/@kintone/kintone-ui-component/dist/kintone-ui-component.min.js');
require('modules/@kintone/kintone-ui-component/dist/kintone-ui-component.min.css');


var popUpConfigTable = () => {
    var initialData = [{
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

    // default row data of a table, this data will be used to create new row
    var defaultRowData = JSON.parse(JSON.stringify(initialData[0]))

    var overriddenRowData = JSON.parse(JSON.stringify(initialData[0]))

    var table = new kintoneUIComponent.Table({
        // initial table data
        data: initialData,
        // default row data on row add
        defaultRowData: defaultRowData,
        onRowAdd: function (e) {
            console.log('table.onAdd', e);
            // if onRowAdd does not return anything, defaultRowData will be used to create new table row
            // if below row data is returned, it will override defaultRowData to be used to create new table row
            return JSON.parse(JSON.stringify(overriddenRowData));
        },
        columns: [{
                header: 'Column',
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