var kintoneUIComponent = require('modules/@kintone/kintone-ui-component/dist/kintone-ui-component.min.js');
require('modules/@kintone/kintone-ui-component/dist/kintone-ui-component.min.css');

var setTable = (items) => {


    var dropdown = new kintoneUIComponent.Dropdown({
        items: [{
                label: 'h-------',
                value: '----u----',
                isDisabled: false
            },
        ],
        value: '----😎----'
    });
    return dropdown
}

export {
    setTable
}