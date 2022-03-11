$(document).ready(function() {
    // var btnUpdate = $('#btnUpdate');
    // Check Email
    $.validator.addMethod("checkEmail", function(value, element) {
        return this.optional(element) || /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(value);
    }, 'Vui lòng nhập đúng định dạng email.');
    // Check Phone
    $.validator.addMethod("checkPhone", function(value, element) {
        return this.optional(element) || /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(value);
    }, 'Vui lòng nhập đúng định dạng điện thoại.');
    
    //Select Check
    $.validator.addMethod('selectCheck', function(value) {
        return (value != '');
    }, "Vui lòng chọn giới tính ");
    var url = new URL(window.location.href);
    // lấy endpoint page của url
    var id = url.searchParams.get('id');
    $gender = $('#gender  option:selected').text()==='Nam'?0:1;
    $student_status = $('#student_status  option:selected').text()==='Đang học'?0:1;
    
    $.ajax({
        url: BASE_URL+API_SINGLE+id,
        method: 'GET',
        dataType: 'json',
        success: function(data) {
            
            $.each(data.myArray, function(key, value) {
                $('#profile_code').val(value.profile_code);
                $('#student_code').val(value.student_code);
                $('#firstname').val(value.firstname);
                $('#lastname').val(value.lastname);
                $('#gender').val($gender);
                // console.log($('#gender').val())
                $('#date_of_birth').val(value.date_of_birth);
                $('#place_of_birth').val(value.place_of_birth);
                $('#race').val(value.race);
                $('#religion').val(value.religion);
                $('#phone').val(value.phone);
                $('#email').val(value.email);
                $('#date_range').val(value.date_range);
                $('#place_issue').val(value.place_issue);
                $('#address').val(value.address);
                $('#identity_number').val(value.identity_number);
                $('#student_status').val($student_status);
                $('#note').val(value.note);

            })
            
        }
    })
    $("#form").validate({
        submitHandler: function() {
            $.ajax({
                url: BASE_URL +API_UPDATE+id,
                method: 'POST',
                dataType: 'json',
                data: {
                    profile_code: $('#profile_code').val(),
                    student_code: $('#student_code').val(),
                    firstname: $('#firstname').val(),
                    lastname: $('#lastname').val(),
                    gender: $('#gender').val(),
                    date_of_birth: $('#date_of_birth').val(),
                    place_of_birth: $('#place_of_birth').val(),
                    race: $('#race').val(),
                    religion: $('#religion').val(),
                    phone: $('#phone').val(),
                    email: $('#email').val(),
                    date_range: $('#date_range').val(),
                    place_issue: $('#place_issue').val(),
                    address: $('#address').val(),
                    identity_number: $('#identity_number').val(),
                    student_status: $('#student_status').val(),
                    note: $('#note').val(),
                },
                beforeSend: function(request) {
                    request.setRequestHeader("Authorization", "Bearer " + localStorage.getItem('result'));
                    console.log(localStorage.getItem('result'));
                },
                success: function(data) {
                    console.log(JSON.stringify(data));
                    $(location).attr("href", "../../website/client/index.html");
                    // window.open('../../index.html');
                },
            });
        },
        rules: {
            "profile_code": {
                required: true,
            },
            "student_code": {
                required: true,
                minlength: 2
            },
            "firstname": {
                required: true,
            },
            "lastname": {
                required: true,
            },
            "date_of_birth": {
                required: true,
            },
            "place_of_birth": {
                required: true,
            },
            "email": {
                required: true,
                checkEmail: true,
            },
            "phone": {
                checkPhone: true,
                required: true,
            },
            "gender": {
                selectCheck: true,
            }
        },
        messages: {
            "profile_code": {
                required: "Bắt buộc nhập mã hồ sơ",
            },
            "student_code": {
                required: "Bắt buộc nhập mã sinh viên",
                minlength: "Hãy nhập ít nhất 2 ký tự"
            },
            "firstname": {
                required: "Bắt buộc nhập mã sinh viên",
            },
            "lastname": {
                required: "Bắt buộc nhập họ đệm",
            },
            "date_of_birth": {
                required: "Bắt buộc nhập ngày sinh",
            },
            "place_of_birth": {
                required: "Bắt buộc nhập nơi sinh",
            },
            "email": {
                required: "Bắt buộc nhập email",
            },
            "phone": {
                required: "Bắt buộc nhập số điện thoại",
            },
            "gender": {
                required: "Vui lòng chọn giới tính "
            }
        }
    });
});