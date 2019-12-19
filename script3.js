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
    function gorandom3() {

        random_color13 = list_colors[Math.floor(Math.random() * (len_colors))];
        random_color14 = list_colors[Math.floor(Math.random() * (len_colors))];
        random_color15 = list_colors[Math.floor(Math.random() * (len_colors))];
        random_color16 = list_colors[Math.floor(Math.random() * (len_colors))];


        random_text13 = list_text[Math.floor(Math.random() * (len_text))];
        random_text14 = list_text[Math.floor(Math.random() * (len_text))];
        random_text15 = list_text[Math.floor(Math.random() * (len_text))];
        random_text16 = list_text[Math.floor(Math.random() * (len_text))];


        // RANDOM HEIGHT


        random_height13 = (Math.floor(Math.random(h) * 1000) / 2) + 100 + "px"
        if (random_height13 > h - 200) {
            random_height13 = random_height13 / 2;
        }
        random_height14 = (Math.floor(Math.random(h) * 1000) / 2) + 100 + "px"
        if (random_height14 > h - 200) {
            random_height14 = random_height14 / 2;
        }
        random_height15 = (Math.floor(Math.random(h) * 1000) / 2) + 100 + "px"
        if (random_height15 > h - 200) {
            random_height15 = random_height15 / 2;
        }
        random_height16 = (Math.floor(Math.random(h) * 1000) / 2) + 100 + "px"
        if (random_height16 > h - 200) {
            random_height16 = random_height16 / 2;
        }
        
        // RANDOM WIDTH 

        random_width13 = Math.floor(Math.random(w) * 1300) + "px"
        random_width14 = Math.floor(Math.random(w) * 1300) + "px"
        random_width15 = Math.floor(Math.random(w) * 1300) + "px"
        random_width16 = Math.floor(Math.random(w) * 1300) + "px"
        



        random_size13 = Math.floor(Math.random() * 4) + 1 + "em"
        random_size14 = Math.floor(Math.random() * 4) + 1 + "em"
        random_size15 = Math.floor(Math.random() * 4) + 1 + "em"
        random_size16 = Math.floor(Math.random() * 4) + 1 + "em"


        $("#random-text13").text(random_text13).css({
            "color": random_color13, "left": random_width13,
            "top": random_height13, "font-size": random_size13
        }).hide().delay(100).show('slow')
        $("#random-text14").text(random_text14).css({
            "color": random_color14, "left": random_width14,
            "top": random_height14, "font-size": random_size14
        }).hide().delay(100).show('slow')
        $("#random-text15").text(random_text15).css({
            "color": random_color15, "left": random_width15,
            "top": random_height15, "font-size": random_size15
        }).hide().delay(100).show('slow')
        $("#random-text16").text(random_text12).css({
            "color": random_color16, "left": random_width16,
            "top": random_height16, "font-size": random_size16
        }).hide().delay(100).show('slow')

    };


    setInterval(gorandom3, 4000);

});