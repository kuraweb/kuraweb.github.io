Visibility.onVisible(function() {
    setTimeout(function() {
        $(".roxo").addClass("animated bounceIn");
    }, 500);

    setTimeout(function() {
        $(".amarelo").addClass("animated bounceIn");
    }, 550);

    setTimeout(function() {
        $(".azul").addClass("animated bounceIn");
    }, 600);

    setTimeout(function() {
        $(".vermelho").addClass("animated bounceIn");
    }, 650);

    setTimeout(function() {
        $(".nome-kefera").addClass("animated fadeInUp");
    }, 1000);

    setTimeout(function() {
        $(".logo-filme, .sinopse, .container-imgs").addClass("animated fadeInUp");
    }, 1600);

    setTimeout(function() {
        $("nav, footer").addClass("animated fadeIn");
    }, 2500);
});
