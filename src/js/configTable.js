var kintoneUIComponent = require('modules/@kintone/kintone-ui-component/dist/kintone-ui-component.min.js');
require('modules/@kintone/kintone-ui-component/dist/kintone-ui-component.min.css');

var setTable = (initialData) => {

    var defaultRowData = JSON.parse(JSON.stringify(initialData[0]))
    var overriddenRowData = JSON.parse(JSON.stringify(initialData[0]))

    var table = new kintoneUIComponent.Table({
        data: initialData,

        defaultRowData: defaultRowData,
        onRowAdd: function (e) {
            console.log('table.onAdd', e);
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
    })
    return table
};

export {
    setTable
}