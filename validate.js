function validate(){
    var info = new Array();
    info[0] = document.getElementById('name').value;
    info[1] = document.getElementById('phone').value;
    info[2] = document.getElementById('email').value;
    info[3] = document.getElementById('address').value;
    info[4] = document.getElementById('birthdate').value;

    var error = new Array();
    error[0] = "<span style='color:red>Chưa nhập tên</span>";
    error[1] = "<span style='color:red>Chưa nhập số điện thoại</span>";
    error[2] = "<span style='color:red>Chưa nhập email</span>";
    error[3] = "<span style='color:red>Chưa nhập địa chỉ</span>";
    error[4] = "<span style='color:red>Chưa nhập ngày sinh</span>";

    var nearby = new Array("s-name", "s-phone", "s-email", "s-address", "s-birthdate");
    for (i in info) {
        var error = error[i];
        var p = nearby[i];
     
        if (info[i]=="") {
            document.getElementById(p).innerHTML = error;
        } else {
            document.getElementById(p).innerHTML = "OK!";
        }
    }

}