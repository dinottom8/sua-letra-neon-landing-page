$(document).ready(function() {
    $(".logo").waypoint(function() {
        $("#secao2esquerda").addClass("animate__animated animate__fadeInLeft");
        $("#secao2direita").addClass("animate__animated animate__fadeInRight");
    })
})