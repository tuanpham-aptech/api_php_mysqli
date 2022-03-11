$(document).ready(function() {
    // Check Email
    $.validator.addMethod("checkEmail", function(value, element) {
        return this.optional(element) || /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(value);
    }, 'Vui lòng nhập đúng định dạng email.');

    // console.log(BASE_URL + API_AUTHEN);
    $("#login_form").validate({
        submitHandler: function(form) {
            
            $.ajax({
                url: BASE_URL + API_AUTHEN,
                method: 'POST',
                // dataType: 'json',
                data: {
                    email: $('#email').val(),
                    password: $('#password').val(),
                },
                success: function(data) {
                    localStorage.setItem('result', data.token);
                    console.log('Okkk');
                    if(data.token){
                        alert('Đúng');
                        $(location).attr("href", "../../website/client/index.html");
                    }else{
                        alert('Bạn đăng nhập chưa chính xác ');
                    }
                },
                error: function(e){
                    console.log('Error: ' + e.message);
                }
            });
            var obj = JSON.parse(localStorage.getItem("result"));
            console.log(obj);
        },
        rules: {
            "email": {
                required: true,
                checkEmail: true,
            },
            "password": {
                required: true,
                minlength: 5
            }
        },
        messages: {
            "email": {
                required: "Bắt buộc nhập email",
            },
            "password": {
                required: "Bắt buộc nhập mật khẩu",
                minlength: "Hãy nhập ít nhất 5 ký tự"
            }
        }
    });
    // submitHandler();
});