list_colors = ['red', 'green', 'blue', 'yellow', 'white', 'orange', 'purple', 'whitespace', 'pink', 
    'brown', 'gray', 'crimson', 'gold', 'lime', 'springgreen', 'darkcyan', 'aqua', 'navy', 'orangered']
list_text = ['Developers!', 'Web-development', 'JavaScript', 'PHP', 'WordPress',
    'while(true){...}', 'Backend', 'Nice try', 'git push', 'Fronted', 'Love coding', 'databases', 
    'HTML5', 'CSS3', 'phpMyAdmin', 'MySQL', 'Python', 'Django', 'SQLite3']

len_colors = list_colors.length;
len_text = list_text.length;

var h = $('#section-animation').height();
var w = $('#section-animation').width();

element = "#element"

$(document).ready(function () {
    function gorandom() {

        random_color = list_colors[Math.floor(Math.random() * (len_colors))];
        random_color1 = list_colors[Math.floor(Math.random() * (len_colors))];
        random_color2 = list_colors[Math.floor(Math.random() * (len_colors))];
        random_color3 = list_colors[Math.floor(Math.random() * (len_colors))];


        random_text = list_text[Math.floor(Math.random() * (len_text))];
        random_text1 = list_text[Math.floor(Math.random() * (len_text))];
        random_text2 = list_text[Math.floor(Math.random() * (len_text))];
        random_text3 = list_text[Math.floor(Math.random() * (len_text))];



        // RANDOM HEIGHT
        random_height = (Math.floor(Math.random(h) * 1000) / 2) + 100 + "px"
        if (random_height > h - 200) {
            random_height = random_height / 2;
        }
        random_height1 = (Math.floor(Math.random(h) * 1000) / 2) + 100 + "px"
        if (random_height1 > h - 200) {
            random_height1 = random_height1 / 2;
        }
        random_height2 = (Math.floor(Math.random(h) * 1000) / 2) + 100 + "px"
        if (random_height2 > h - 200) {
            random_height2 = random_height2 / 2;
        }
        random_height3 = (Math.floor(Math.random(h) * 1000) / 2) + 100 + "px"
        if (random_height3 > h - 200) {
            random_height3 = random_height3 / 2;
        }

        // RANDOM WIDTH 
        random_width = Math.floor(Math.random(w) * 1300) + "px"
        random_width1 = Math.floor(Math.random(w) * 1300) + "px"
        random_width2 = Math.floor(Math.random(w) * 1300) + "px"
        random_width3 = Math.floor(Math.random(w) * 1300) + "px"

        random_size = Math.floor(Math.random() * 4) + 1 + "em"
        random_size1 = Math.floor(Math.random() * 4) + 1 + "em"
        random_size2 = Math.floor(Math.random() * 4) + 1 + "em"
        random_size3 = Math.floor(Math.random() * 4) + 1 + "em"





        $("#random-text").text(random_text).css({
            "color": random_color, "left": random_width,
            "top": random_height, "font-size": random_size
        }).hide().show('slow')

        $("#random-text1").text(random_text1).css({
            "color": random_color1, "left": random_width1,
            "top": random_height1, "font-size": random_size1
        }).hide().show('slow')
        $("#random-text2").text(random_text2).css({
            "color": random_color2, "left": random_width2,
            "top": random_height2, "font-size": random_size2
        }).hide().show('slow')

        $("#random-text3").text(random_text3).css({
            "color": random_color3, "left": random_width3,
            "top": random_height3, "font-size": random_size3
        }).hide().show('slow')

    }

    setInterval(gorandom, 1500);

});