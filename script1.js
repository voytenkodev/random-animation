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
    function gorandom1() {

        random_color4 = list_colors[Math.floor(Math.random() * (len_colors))];
        random_color5 = list_colors[Math.floor(Math.random() * (len_colors))];
        random_color6 = list_colors[Math.floor(Math.random() * (len_colors))];
        random_color7 = list_colors[Math.floor(Math.random() * (len_colors))];
        random_color8 = list_colors[Math.floor(Math.random() * (len_colors))];

        random_text4 = list_text[Math.floor(Math.random() * (len_text))];
        random_text5 = list_text[Math.floor(Math.random() * (len_text))];
        random_text6 = list_text[Math.floor(Math.random() * (len_text))];
        random_text7 = list_text[Math.floor(Math.random() * (len_text))];
        random_text8 = list_text[Math.floor(Math.random() * (len_text))];

        // RANDOM HEIGHT

        random_height4 = (Math.floor(Math.random(h) * 1000) / 2) + 100 + "px"
        if (random_height4 > h - 200) {
            random_height4 = random_height4 / 2;
        }
        random_height5 = (Math.floor(Math.random(h) * 1000) / 2) + 100 + "px"
        if (random_height5 > h - 200) {
            random_height5 = random_height5 / 2;
        }
        random_height6 = (Math.floor(Math.random(h) * 1000) / 2) + 100 + "px"
        if (random_height6 > h - 200) {
            random_height6 = random_height6 / 2;
        }
        random_height7 = (Math.floor(Math.random(h) * 1000) / 2) + 100 + "px"
        if (random_height7 > h - 200) {
            random_height7 = random_height7 / 2;
        }
        random_height8= (Math.floor(Math.random(h) * 1000) / 2) + 100 + "px"
        if (random_height8 > h - 200) {
            random_height8 = random_height8 / 2;
        }
        
        // RANDOM WIDTH 

        random_width4 = Math.floor(Math.random(w) * 1300) + "px"
        random_width5 = Math.floor(Math.random(w) * 1300) + "px"
        random_width6 = Math.floor(Math.random(w) * 1300) + "px"
        random_width7 = Math.floor(Math.random(w) * 1300) + "px"
        random_width8 = Math.floor(Math.random(w) * 1300) + "px"

        random_size4 = Math.floor(Math.random() * 4) + 1 + "em"
        random_size5 = Math.floor(Math.random() * 4) + 1 + "em"
        random_size6 = Math.floor(Math.random() * 4) + 1 + "em"
        random_size7 = Math.floor(Math.random() * 4) + 1 + "em"
        random_size8 = Math.floor(Math.random() * 4) + 1 + "em"

        $("#random-text4").text(random_text4).css({
            "color": random_color4, "left": random_width4,
            "top": random_height4, "font-size": random_size4
        }).hide().show('slow')

        $("#random-text5").text(random_text5).css({
            "color": random_color5, "left": random_width5,
            "top": random_height5, "font-size": random_size5
        })
        $("#random-text6").text(random_text6).css({
            "color": random_color6, "left": random_width6,
            "top": random_height6, "font-size": random_size6
        })

        $("#random-text7").text(random_text7).css({
            "color": random_color7, "left": random_width7,
            "top": random_height7, "font-size": random_size7
        })
        $("#random-text8").text(random_text8).css({
            "color": random_color8, "left": random_width8,
            "top": random_height8, "font-size": random_size8
        }).hide().delay(100).show('slow')
    }

    setInterval(gorandom1, 2500);

});