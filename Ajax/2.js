"use strict";

$(document).ready(function () {
  $("button").click(function () {
    // alert("Button clicked!");

    $.ajax({
      type: "GET",
      url: "https://restcountries.com/v3.1/all",
      success: function (data) {
        // console.log(data);
        //   console.log(data.flag.png,data.name.common);
        $.each(data, function (i, v) {
          console.log(i, v);
            console.log(v.flag.png, v.name.common);
            $('#row').append(`
                <div class='col-3 text-center'>
                <img src="${v.flags.png}" class='img-fluid'>
                <h4>${v.name.common}</h4>
                `)
        });
      },
      error: function () {
        var errormsg = console.log("Api Failed");
      },
    });
  });
});
