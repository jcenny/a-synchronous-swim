(function () {

  const serverUrl = 'http://127.0.0.1:3000';

  //
  // TODO: build the swim command fetcher here
  var getMessageFromServer = function () {
    $.ajax({
      type: 'GET',
      data: {},
      url: serverUrl,
      contentType: 'application/json',
      success: (data) => {
        console.log('success arrowkeyarray')
        console.log(data)
        var parseData = JSON.parse(data);
        parseData.forEach((element) => {
          SwimTeam.move(element)})
       // getMessageFromServer();
      },
      error: function(data) {
        console.log('failed')
      }
    });
  }
  getMessageFromServer();
  //setInterval(getMessageFromServer, 2000);
  //

  var getBackgroundImageFileFromServer = function () {
    $.ajax({
      type: 'GET',
      data: {},
      url: "http://127.0.0.1:3000/background.jpg",
      contentType: 'image',
      success: (data) => {
        console.log('Image success')
        console.log(data)
        $('.background').css('background-image', 'url('+data+')');
      },
      error: function(data) {
        console.log('failed image')
      }
    });
  }
  getBackgroundImageFileFromServer();



  /////////////////////////////////////////////////////////////////////
  // The ajax file uplaoder is provided for your convenience!
  // Note: remember to fix the URL below.
  /////////////////////////////////////////////////////////////////////


  const ajaxFileUplaod = (file) => {
    var formData = new FormData();
    formData.append('file', file);
    $.ajax({
      type: 'POST',
      data: formData,
      url: serverUrl,
      cache: false,
      contentType: false,
      processData: false,
      success: () => {
        // reload the page
        window.location = window.location.href;
      }
    });
  };

  $('form').on('submit', function (e) {
    e.preventDefault();

    var form = $('form .file')[0];

    if (form.files.length === 0) {
      console.log('No file selected!');
      return;
    }

    var file = form.files[0];
    if (file.type !== 'image/jpeg') {
      console.log('Not a jpg file!');
      return;
    }

    ajaxFileUplaod(file);
  });

})();
