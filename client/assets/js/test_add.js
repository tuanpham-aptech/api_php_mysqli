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

    $("#form").validate({
        submitHandler: function() {
            $profile_code = $('#profile_code').val();
            $student_code = $('#student_code').val();
            $firstname = $('#firstname').val();
            $lastname = $('#lastname').val();
            $gender = $('#gender').val();
            $date_of_birth = $('#date_of_birth').val();
            $place_of_birth = $('#place_of_birth').val();
            $race = $('#race').val();
            $religion = $('#religion').val();
            $phone = $('#phone').val();
            $email = $('#email').val();
            $date_range = $('#date_range').val();
            $place_issue = $('#place_issue').val();
            $address = $('#address').val();
            $identity_number = $('#identity_number').val();
            $student_status = $('#student_status').val();
            $note = $('#note').val();

            $.ajax({
                url: BASE_URL +API_CREATE,
                method: 'POST',
                dataType: 'json',
                data: {
                    profile_code: $profile_code,
                    student_code: $student_code,
                    firstname: $firstname,
                    lastname: $lastname,
                    gender: $gender,
                    date_of_birth: $date_of_birth,
                    place_of_birth: $place_of_birth,
                    race: $race,
                    religion: $religion,
                    phone: $phone,
                    email: $email,
                    date_range: $date_range,
                    place_issue: $place_issue,
                    address: $address,
                    identity_number: $identity_number,
                    student_status: $student_status,
                    note: $note,
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
    $('#btn-cancle').click(()=>{
        $(location).attr("href", "../../login.html");
    })
});