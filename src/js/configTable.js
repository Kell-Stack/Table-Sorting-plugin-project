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
                header: 'Table Field Code',
                cell: function () {
                    return kintoneUIComponent.createTableCell('dropdown', 'tableFieldCode')
                }
            }, 
        ]
    })
    return table
};

export {
    setTable
}