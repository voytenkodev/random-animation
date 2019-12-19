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
    function gorandom2() {

        random_color9 = list_colors[Math.floor(Math.random() * (len_colors))];
        random_color10 = list_colors[Math.floor(Math.random() * (len_colors))];
        random_color11 = list_colors[Math.floor(Math.random() * (len_colors))];
        random_color12 = list_colors[Math.floor(Math.random() * (len_colors))];


        random_text9 = list_text[Math.floor(Math.random() * (len_text))];
        random_text10 = list_text[Math.floor(Math.random() * (len_text))];
        random_text11 = list_text[Math.floor(Math.random() * (len_text))];
        random_text12 = list_text[Math.floor(Math.random() * (len_text))];


        // RANDOM HEIGHT


        random_height9 = (Math.floor(Math.random(h) * 1000) / 2) + 100 + "px"
        if (random_height9 > h - 200) {
            random_height9 = random_height9 / 2;
        }
        random_height10 = (Math.floor(Math.random(h) * 1000) / 2) + 100 + "px"
        if (random_height10 > h - 200) {
            random_height10 = random_height10 / 2;
        }
        random_height11 = (Math.floor(Math.random(h) * 1000) / 2) + 100 + "px"
        if (random_height11 > h - 200) {
            random_height11 = random_height11 / 2;
        }
        random_height12 = (Math.floor(Math.random(h) * 1000) / 2) + 100 + "px"
        if (random_height12 > h - 200) {
            random_height12 = random_height12 / 2;
        }
        
        // RANDOM WIDTH 

        random_width9 = Math.floor(Math.random(w) * 1300) + "px"
        random_width10 = Math.floor(Math.random(w) * 1300) + "px"
        random_width11 = Math.floor(Math.random(w) * 1300) + "px"
        random_width12 = Math.floor(Math.random(w) * 1300) + "px"
        



        random_size9 = Math.floor(Math.random() * 4) + 1 + "em"
        random_size10 = Math.floor(Math.random() * 4) + 1 + "em"
        random_size11 = Math.floor(Math.random() * 4) + 1 + "em"
        random_size12 = Math.floor(Math.random() * 4) + 1 + "em"


        $("#random-text9").text(random_text9).css({
            "color": random_color9, "left": random_width9,
            "top": random_height9, "font-size": random_size9
        }).hide().delay(100).show('slow')
        $("#random-text10").text(random_text10).css({
            "color": random_color10, "left": random_width10,
            "top": random_height10, "font-size": random_size10
        }).hide().delay(100).show('slow')
        $("#random-text11").text(random_text11).css({
            "color": random_color11, "left": random_width11,
            "top": random_height11, "font-size": random_size11
        }).hide().delay(100).show('slow')
        $("#random-text12").text(random_text12).css({
            "color": random_color12, "left": random_width12,
            "top": random_height12, "font-size": random_size12
        }).hide().delay(100).show('slow')

    };


    setInterval(gorandom2, 4000);

});