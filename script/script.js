var feature, i;
feature = document.querySelectorAll(".pf-feature");
for (i = 0; i < 12; i++) {
    if ((i + 1) % 3 == 0) {
        feature[i].setAttribute("id", "pf-feature-third");
    }
}

$(document).ready(function () {
    $(".modal").modal();
    $(".parallax").parallax();
    $(".sidenav").sidenav();
    $(".slider").slider({ full_width: true });
    $(".myreviews").carousel({
        numVisible: 7,
        shift: 55,
        padding: 55,
    });
});

function toggleModal() {
    var instance = M.Modal.getInstance($("#modal3"));
    instance.open();
}
