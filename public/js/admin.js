$(document).ready(function(){
    
    function selectTab(id) {
        var others = document.getElementsByClassName("hide");
        for (var i = 0; i < others.length; i++) {
            others[i].style.display = "none";
        }
        var tab = document.getElementById(id);
        tab.style.display = "block";
    }

    $('#track-trips').on('click', () => {
        selectTab('track-trips-tab')
    });
    $('#block-user').on('click',() => {
        selectTab('block-user-tab')
    });
    $('#student-approval').on('click',() => {
        selectTab('student-approval-tab')
    });

    function dropdownStudentsList() {
        var input, filter, ul, li, a, i;
        input = document.getElementById("myInput");
        filter = input.value.toUpperCase();
        ul = document.getElementById("myUL");
        li = ul.getElementsByTagName("li");
        for (i = 0; i < li.length; i++) {
            a = li[i].getElementsByTagName("a")[0];
            if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
                li[i].style.display = "";
            }
            else {
                li[i].style.display = "none";
            }
        }
    }

    $('#myInput').on('keyup', () => {
        dropdownStudentsList();
    });
});

displayMessage = (resHTML) => {
   alert("done!!!");
}

$(".approve").click( function() {
    get1=$(this).parent().parent().children().children().children('span').text();
    var data = { AId : get1,Func:"approve"};
    var url = '/admin/approve';  
    adminRequest(data, url);

});
$(".disapprove").click( function() {
   get1=$(this).parent().parent().children().children().children('span').text();
    var data = { AId : get1,Func:"disapprove"};
    var url = '/admin/disapprove';  
    adminRequest(data, url);

});

adminRequest = (data, url) => {
    $.ajax({
        async: true,
        url:url,
        data:data,
        method:'POST',
        success:displayMessage,
        error:displayError
    });    
}