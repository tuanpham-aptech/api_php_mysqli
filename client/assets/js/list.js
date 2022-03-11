$(document).ready(() => {
   // search 
    $("#btn_search").click((e) => {
        e.preventDefault();

        let name = $("#name").val();
        let profile_code = $("#profile_code").val();
        let student_code = $("#student_code").val();
        if (name || profile_code || student_code) {
            const refresh =
        window.location.protocol +"//" +window.location.host +window.location.pathname +
        "?firstname=" +name +"&profile_code=" +profile_code +"&student_code=" +student_code;
      window.history.pushState({ path: refresh }, "", refresh);
            $.ajax({
                method: 'GET',
                dataType: 'json',
                url: BASE_URL +API_FILTER+'?firstname='+name+"&profile_code="+profile_code+"&student_code="+student_code,
                beforeSend: function(request) {
                    request.setRequestHeader("Authorization", "Bearer " + localStorage.getItem('result'));
                    console.log(localStorage.getItem('result'));
                },
                success: function(data) {
                    // if(data.myArray){
                        $('#list_student tr').remove();
                        let results = data.myArray;
                        if(data.coutRow >0){
                            $(results).each(function(index, item) {
                                    $('#list_student').append($('<tr class="row-' + item.id + '">' + '<td>' + item.id + '</td>' + '<td>' + item.profile_code + '</td>' + '<td>' + item.student_code + '</td>' + '<td>' + item.firstname + '</td>' + '<td>' + item.lastname + '</td>' + '<td>' + item.gender + '</td>' + '<td>' + item.date_of_birth + '</td>' + '<td>' + item.place_of_birth + '</td>' + '<td>' + item.race + '</td>' + '<td>' + item.religion + '</td>' + '<td>' + item.phone + '</td>' + '<td>' + item.email + '</td>' + '<td>' + item.date_range + '</td>' + '<td>' + item.place_issue + '</td>' + '<td>' + item.address + '</td>' + '<td>' + item.identity_number + '</td>' + '<td>' + item.student_status + '</td>' + '<td>' + item.note + '</td>' + '<td>' +
                                        '<div class="editandtrash"><button id="btn_edit-' + item.id + '" class="btn_edit"> <i class="fa-solid fa-pen-to-square"></i> </button><button id="btn_delete-' + item.id + '" class = "delete_btn" > <i class = "fa-solid fa-trash"> </i> </button></div>' + '</td>' + '</tr>'));
                            });
                            $('#paginate').remove();
                            $('.show_message').html("");
                        }else{
                            $('#paginate').remove();
                            $('.show_message').html("Không có học sinh nào bạn vừa tìm !!!");
                        }
                },
            });
        }
    });
    // logout
    $('#btn_logout').click(function(){
        localStorage.removeItem('result');
        $(location).attr("href", "../../website/client/login.html");
    })
    // function delete
    function deleteStudent(id) {
        $.ajax({
            url: BASE_URL +API_DELETE+"?id=" + id,
            method: 'GET',
            dataType: 'json', // kiểu dữ liệu 
            beforeSend: function(request) {
                request.setRequestHeader("Authorization", "Bearer " + localStorage.getItem('result'));
                console.log(localStorage.getItem('result'));
            },
            success: function(data) {
                // hàm thực thi khi nhận dữ liệu được từ server
                console.log(data);
                alert("Bạn đã xoá bản ghi trên ");
                // getAllStudents();
                $(location).attr("href", "../../website/client/index.html");
            }

        });
    }

    $.ajax({
        url: BASE_URL +API_READ, // gửi dữ liệu sang trang read.php
        method: 'get', // phương thức gửi 
        dataType: 'json', // kiểu dữ liệu 
        beforeSend: function(request) {
            request.setRequestHeader("Authorization", "Bearer " + localStorage.getItem('result'));
            console.log(localStorage.getItem('result'));
        },
        data: {}, // dữ liệu sẽ dc gửi 
        success: function(data) { // hàm thực thi khi nhận dữ liệu được từ server 

            const results = data.myArray;
            const pages = data.pages;
            for(var pg=1;pg<=pages;pg++){
                $('#paginate').append($('<li id="'+pg+'" class="pg-item">' +pg+ '</li>'));
            }
        }
    }).then(() => {
        $(".delete_btn").click(function() {
            // console.log(this);
            let id = this.id.slice(11);
            deleteStudent(id);
        });
    })
    .then(() => {
        $('.btn_edit').click(function() {
            let id = this.id.slice(9);
            // console.log(id)
            window.location.href = "../../website/client/edit_student.html?id="+id;
        })
    }).then(()=>{
        $("#paginate li:nth-child(1)").css("color","#ff0084").css('border','none');
        $('#paginate li').click(function() {
            $('#paginate li').css('border','1px solid #ddd').css('color','#0063DC');
            $(this).css("color","#ff0084").css('border','none');
            let page_num = this.id;
            // console.log(page_num)
            $.ajax({
                url:BASE_URL +API_PAGINATION+'?page='+page_num, // gửi dữ liệu sang trang read.php
                method: 'get', // phương thức gửi 
                dataType: 'json', // kiểu dữ liệu 
                beforeSend: function(request) {
                    request.setRequestHeader("Authorization", "Bearer " + localStorage.getItem('result'));
                    console.log(localStorage.getItem('result'));
                },
                data: {}, // dữ liệu sẽ dc gửi 
                success: function(data) { // hàm thực thi khi nhận dữ liệu được từ server 
                    let results = data.myArray;
                    console.log(results);
                    $('#list_student tr').remove();
                    $(results).each(function(index, item) {
                        $('#list_student').append($('<tr class="row-' + item.id + '">' + '<td>' + item.id + '</td>' + '<td>' + item.profile_code + '</td>' + '<td>' + item.student_code + '</td>' + '<td>' + item.firstname + '</td>' + '<td>' + item.lastname + '</td>' + '<td>' + item.gender + '</td>' + '<td>' + item.date_of_birth + '</td>' + '<td>' + item.place_of_birth + '</td>' + '<td>' + item.race + '</td>' + '<td>' + item.religion + '</td>' + '<td>' + item.phone + '</td>' + '<td>' + item.email + '</td>' + '<td>' + item.date_range + '</td>' + '<td>' + item.place_issue + '</td>' + '<td>' + item.address + '</td>' + '<td>' + item.identity_number + '</td>' + '<td>' + item.student_status + '</td>' + '<td>' + item.note + '</td>' + '<td>' +
                            '<div class="editandtrash"><button id="btn_edit-' + item.id + '" class="btn_edit"> <i class="fa-solid fa-pen-to-square"></i> </button><button id="btn_delete-' + item.id + '" class = "delete_btn" > <i class = "fa-solid fa-trash"> </i> </button></div>' + '</td>' + '</tr>'));
                    });
                }
            });
        })
    })

     $.ajax({
        url: BASE_URL +API_READ, // gửi dữ liệu sang trang read.php
        method: 'get', // phương thức gửi 
        dataType: 'json', // kiểu dữ liệu 
        beforeSend: function(request) {
            request.setRequestHeader("Authorization", "Bearer " + localStorage.getItem('result'));
            console.log(localStorage.getItem('result'));
        },
        data: {}, // dữ liệu sẽ dc gửi 
        success: function(data) { // hàm thực thi khi nhận dữ liệu được từ server 

            const results = data.myArray;
            const pages = data.pages;
            // console.log(pages)
            $(results).each(function(index, item) {
                $('#list_student').append($('<tr  class="row-' + item.id + '">'
                + '<td>' + item.id + '</td>' 
                + '<td>' + item.profile_code + '</td>' 
                + '<td>' + item.student_code + '</td>' 
                + '<td>' + item.firstname + '</td>' 
                + '<td>' + item.lastname + '</td>'
                + '<td>' + (item.gender) + '</td>' 
                + '<td>' + item.date_of_birth + '</td>' 
                + '<td>' + item.place_of_birth + '</td>' 
                + '<td>' + item.race + '</td>' 
                + '<td>' + item.religion + '</td>' 
                + '<td>' + item.phone + '</td>' 
                + '<td>' + item.email + '</td>' 
                + '<td>' + item.date_range + '</td>' 
                + '<td>' + item.place_issue + '</td>' 
                + '<td>' + item.address + '</td>' 
                + '<td>' + item.identity_number + '</td>' 
                + '<td>' + item.student_status + '</td>' 
                + '<td>' + item.note + '</td>' 
                + '<td>' + '<div class="editandtrash"><button id="btn_edit-' + item.id + '" class="btn_edit"> <i class="fa-solid fa-pen-to-square"></i> </button><button id="btn_delete-' + item.id + '" class = "delete_btn"> <i class = "fa-solid fa-trash"></i></button></div>' + '</td>' + '</tr>'));
            });
        }
    }).then(() => {
        $(".delete_btn").click(function() {
            // console.log(this);
            let id = this.id.slice(11);
            deleteStudent(id);
        });
    }).then(() => {
        $('.btn_edit').click(function() {
            let id = this.id.slice(9);
            console.log(id)
            window.location.href = "../../website/client/edit_student.html?id="+id;
        })
    })
    
    .then(()=>{
        $("#paginate li:nth-child(1)").css("color","#ff0084").css('border','none');
        $('#paginate li').click(function() {
            $('#paginate li').css('border','1px solid #ddd').css('color','#0063DC');
            $(this).css("color","#ff0084").css('border','none');
            let page_num = this.id;
            // console.log(page_num)
            $.ajax({
                url:BASE_URL +API_PAGINATION+'?page='+page_num, // gửi dữ liệu sang trang read.php
                method: 'get', // phương thức gửi 
                dataType: 'json', // kiểu dữ liệu 
                beforeSend: function(request) {
                    request.setRequestHeader("Authorization", "Bearer " + localStorage.getItem('result'));
                    console.log(localStorage.getItem('result'));
                },
                data: {}, // dữ liệu sẽ dc gửi 
                success: function(data) { // hàm thực thi khi nhận dữ liệu được từ server 
                    let results = data.myArray;
                    console.log(results);
                    $('#list_student tr').remove();
                    $(results).each(function(index, item) {
                        $('#list_student').append($('<tr class="row-' + item.id + '">' + '<td>' + item.id + '</td>' + '<td>' + item.profile_code + '</td>' + '<td>' + item.student_code + '</td>' + '<td>' + item.firstname + '</td>' + '<td>' + item.lastname + '</td>' + '<td>' + item.gender + '</td>' + '<td>' + item.date_of_birth + '</td>' + '<td>' + item.place_of_birth + '</td>' + '<td>' + item.race + '</td>' + '<td>' + item.religion + '</td>' + '<td>' + item.phone + '</td>' + '<td>' + item.email + '</td>' + '<td>' + item.date_range + '</td>' + '<td>' + item.place_issue + '</td>' + '<td>' + item.address + '</td>' + '<td>' + item.identity_number + '</td>' + '<td>' + item.student_status + '</td>' + '<td>' + item.note + '</td>' + '<td>' +
                            '<div class="editandtrash"><button id="btn_edit-' + item.id + '" class="btn_edit"> <i class="fa-solid fa-pen-to-square"></i> </button><button id="btn_delete-' + item.id + '" class = "delete_btn" > <i class = "fa-solid fa-trash"> </i> </button></div>' + '</td>' + '</tr>'));
                    });
                }
            }).then(() => {
                $(".delete_btn").click(function() {
                    // console.log(this);
                    let id = this.id.slice(11);
                    deleteStudent(id);
                });
            }).then(() => {
                $('.btn_edit').click(function() {
                    let id = this.id.slice(9);
                    console.log(id)
                    window.location.href = "../../website/client/edit_student.html?id="+id;
                })
            })
        })
    }) 
});