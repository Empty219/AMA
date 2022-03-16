window.addEventListener("DOMContentLoaded", function () {
  // get the form elements defined in your form HTML above

  var form = document.getElementById("my-form");
  // var button = document.getElementById("my-form-button");
  var status = document.getElementById("status");
  var delayInMilliseconds = 9000;
  // Success and Error functions for after the form is submitted


  function success() {
    form.reset();
    status.classList.add("success");
    status.innerHTML = "Phiếu đăng ký đã được gửi! Nhân viên tư vấn của AMA sẽ liên lạc với bạn trong vòng 24 giờ.";
   
  }

  function error() {
  
    status.classList.add("error");
    status.innerHTML = "Úiii! Có một vấn đề. Bạn cần điền đầy đủ thông tin!";
   
  setTimeout(function(){
    window.location.reload(1);
 }, 4000);
  }

  // handle the form submission event

  form.addEventListener("submit", function (ev) {
    ev.preventDefault();
    var data = new FormData(form);
    ajax(form.method, form.action, data, success, error);
  });
});

// helper function for sending an AJAX request

function ajax(method, url, data, success, error) {
  var xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.setRequestHeader("Accept", "application/json");
  xhr.onreadystatechange = function () {
    if (xhr.readyState !== XMLHttpRequest.DONE) return;
    if (xhr.status === 200) {
      success(xhr.response, xhr.responseType);
    } else {
      error(xhr.status, xhr.response, xhr.responseType);
    }
  };
  xhr.send(data);
}