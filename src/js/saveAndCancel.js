import Swal from 'sweetalert2';

var handleSaveButton = (dataObj) => {
  console.log("save button")

  var data = dataObj.getValue();
  console.log("👾", data)
  var dataJSON = JSON.stringify(data);
  console.log("👾👾👾👾", dataJSON)
  var config = {
    dataObj: dataJSON
  };

  kintone.plugin.app.setConfig(config, function () {
    console.log("this should set your config")
  })
}

var handleCancelButton = () => {
  console.log("cancel button")
  Swal.fire({
    title: '<strong>Cancel</strong>',
    html: 'Your changes were not saved',
    type: 'warning',
    confirmButtonText: 'Back to App Settings'
  // }).then(function () {
  //   window.location.href = '/k/admin/app/flow?app=' + kintone.app.getId() + '#section=settings';
  })
};

export {
  handleSaveButton,
  handleCancelButton
}