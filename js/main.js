$(document).ready(function(){
    $('.messenger').click(function() {
        $('.toggle-class').toggle();
    });
    $('.close').click(function() {
        $('.toggle-class').hide();
    });
});

function closeDiv(id) {
    var closeBtn = document.getElementById(id);
    closeBtn.style.display = "none";
}

function hidde_show(id) {
    var chatBox = document.getElementById(id);
    if(chatBox.style.display == "block") {
        chatBox.style.display = "none";
    } else {
        chatBox.style.display = "block";
    }
}

