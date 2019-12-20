list_colors = ['red', 'green', 'blue', 'yellow', 'white', 'orange', 'purple', 'whitespace', 'pink',
    'brown', 'gray', 'crimson', 'gold', 'lime', 'springgreen', 'darkcyan', 'aqua', 'navy', 'orangered']
list_text = ['Developers!', 'Web-development', 'JavaScript', 'PHP', 'WordPress',
    'while(true){...}', 'Backend', 'Nice try', 'git push', 'Fronted', 'Love coding', 'databases',
    'HTML5', 'CSS3', 'phpMyAdmin', 'MySQL', 'Python', 'Django', 'SQLite3']
len_text = list_text.length;
len_colors = list_colors.length;
list_final = []
var h = $('#section-animation').height();
var w = $('#section-animation').width();
function go() {
    random_text = list_text[Math.floor(Math.random() * (len_text) + 1)];
    random_color = list_colors[Math.floor(Math.random() * (len_colors))];
    random_width = Math.floor(Math.random(w) * 1050) + 50 + "px"
    random_height = (Math.floor(Math.random(h) * 1100) / 2) + 50 + "px"
    if (random_height > h - 200) {
        random_height = random_height / 2;
    }
    random_size = Math.floor(Math.random() * 4) + 1 + "em"
}
$(document).ready(function () {
    function gorandom() {
        go()
        $("#random-text").text(random_text).css({
            "color": random_color, "left": random_width,
            "top": random_height, "font-size": random_size
        }).hide().delay(100).show('slow').delay(200).hide('slow')
    };
    setInterval(gorandom, 1200)
    function gorandom1() {
        go()
        $("#random-text1").text(random_text).css({
            "color": random_color, "left": random_width,
            "top": random_height, "font-size": random_size
        }).hide().delay(100).show('slow').delay(200).hide('slow')
    };
    setInterval(gorandom1, 1400)
    function gorandom2() {
        go()
        $("#random-text2").text(random_text).css({
            "color": random_color, "left": random_width,
            "top": random_height, "font-size": random_size
        }).hide().delay(100).show('slow').delay(200).hide('slow')
    };
    setInterval(gorandom2, 1600)
    function gorandom3() {
        go()
        $("#random-text3").text(random_text).css({
            "color": random_color, "left": random_width,
            "top": random_height, "font-size": random_size
        }).hide().delay(100).show('slow').delay(200).hide('slow')
    };
    setInterval(gorandom3, 1800)
    function gorandom4() {
        go()
        $("#random-text4").text(random_text).css({
            "color": random_color, "left": random_width,
            "top": random_height, "font-size": random_size
        }).hide().delay(100).show('slow').delay(200).hide('slow')
    };
    setInterval(gorandom4, 2000)
    function gorandom5() {
        go()
        $("#random-text5").text(random_text).css({
            "color": random_color, "left": random_width,
            "top": random_height, "font-size": random_size
        }).hide().delay(100).show('slow').delay(200).hide('slow')
    };
    setInterval(gorandom5, 2200)
    function gorandom6() {
        go()
        $("#random-text6").text(random_text).css({
            "color": random_color, "left": random_width,
            "top": random_height, "font-size": random_size
        }).hide().delay(100).show('slow').delay(200).hide('slow')
    };
    setInterval(gorandom6, 2400)
    function gorandom7() {
        go()
        $("#random-text7").text(random_text).css({
            "color": random_color, "left": random_width,
            "top": random_height, "font-size": random_size
        }).hide().delay(100).show('slow').delay(200).hide('slow')
    };
    setInterval(gorandom7, 2500)
    function gorandom8() {
        go()
        $("#random-text8").text(random_text).css({
            "color": random_color, "left": random_width,
            "top": random_height, "font-size": random_size
        }).hide().delay(100).show('slow').delay(200).hide('slow')
    };
    setInterval(gorandom8, 2600)
    function gorandom9() {
        go()
        $("#random-text9").text(random_text).css({
            "color": random_color, "left": random_width,
            "top": random_height, "font-size": random_size
        }).hide().delay(100).show('slow').delay(200).hide('slow')
    };
    setInterval(gorandom9, 2700)
    function gorandom10() {
        go()
        $("#random-text10").text(random_text).css({
            "color": random_color, "left": random_width,
            "top": random_height, "font-size": random_size
        }).hide().delay(100).show('slow').delay(200).hide('slow')
    };
    setInterval(gorandom10, 2800)
    function gorandom11() {
        go()
        $("#random-text11").text(random_text).css({
            "color": random_color, "left": random_width,
            "top": random_height, "font-size": random_size
        }).hide().delay(100).show('slow').delay(200).hide('slow')
    };
    setInterval(gorandom11, 2900)

});
