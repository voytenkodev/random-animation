list_colors = ['red', 'green', 'blue', 'yellow', 'white', 'orange', 'purple', 'whitespace', 'pink', 'brown', 'gray', 'crimson', 'gold',
    'lime', 'springgreen', 'darkcyan', 'aqua', 'navy', 'orangered']
list_text = ['Developers!', 'Web-development', 'JavaScript', 'PHP', 'WordPress',
    'while(true){...}', 'Backend', 'Nice try', 'git push', 'Fronted', 'Love coding', ]

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
        random_color4 = list_colors[Math.floor(Math.random() * (len_colors))];
        random_color5 = list_colors[Math.floor(Math.random() * (len_colors))];
        random_color6 = list_colors[Math.floor(Math.random() * (len_colors))];
        random_color7 = list_colors[Math.floor(Math.random() * (len_colors))];
        random_color8 = list_colors[Math.floor(Math.random() * (len_colors))];
        random_color9 = list_colors[Math.floor(Math.random() * (len_colors))];
        random_color10 = list_colors[Math.floor(Math.random() * (len_colors))];
        random_color11 = list_colors[Math.floor(Math.random() * (len_colors))];
        random_color12 = list_colors[Math.floor(Math.random() * (len_colors))];

        random_text = list_text[Math.floor(Math.random() * (len_text))];
        random_text1 = list_text[Math.floor(Math.random() * (len_text))];
        random_text2 = list_text[Math.floor(Math.random() * (len_text))];
        random_text3 = list_text[Math.floor(Math.random() * (len_text))];
        random_text4 = list_text[Math.floor(Math.random() * (len_text))];
        random_text5 = list_text[Math.floor(Math.random() * (len_text))];
        random_text6 = list_text[Math.floor(Math.random() * (len_text))];
        random_text7 = list_text[Math.floor(Math.random() * (len_text))];
        random_text8 = list_text[Math.floor(Math.random() * (len_text))];
        random_text9 = list_text[Math.floor(Math.random() * (len_text))];
        random_text10 = list_text[Math.floor(Math.random() * (len_text))];
        random_text11 = list_text[Math.floor(Math.random() * (len_text))];
        random_text12 = list_text[Math.floor(Math.random() * (len_text))];


        // RANDOM HEIGHT
        random_height = (Math.floor(Math.random(h) * 1000) / 2) + "px"
        if (random_height > h - 200) {
            random_height = random_height / 2;
        }
        random_height1 = (Math.floor(Math.random(h) * 1000) / 2) + "px"
        if (random_height1 > h - 200) {
            random_height1 = random_height1 / 2;
        }
        random_height2 = (Math.floor(Math.random(h) * 1000) / 2) + "px"
        if (random_height2 > h - 200) {
            random_height2 = random_height2 / 2;
        }
        random_height3 = (Math.floor(Math.random(h) * 1000) / 2) + "px"
        if (random_height3 > h - 200) {
            random_height3 = random_height3 / 2;
        }
        random_height4 = (Math.floor(Math.random(h) * 1000) / 2) + "px"
        if (random_height4 > h - 200) {
            random_height4 = random_height4 / 2;
        }
        random_height5 = (Math.floor(Math.random(h) * 1000) / 2) + "px"
        if (random_height5 > h - 200) {
            random_height5 = random_height5 / 2;
        }
        random_height6 = (Math.floor(Math.random(h) * 1000) / 2) + "px"
        if (random_height6 > h - 200) {
            random_height6 = random_height6 / 2;
        }
        random_height7 = (Math.floor(Math.random(h) * 1000) / 2) + "px"
        if (random_height7 > h - 200) {
            random_height7 = random_height7 / 2;
        }
        random_height8= (Math.floor(Math.random(h) * 1000) / 2) + "px"
        if (random_height8 > h - 200) {
            random_height8 = random_height8 / 2;
        }
        random_height9 = (Math.floor(Math.random(h) * 1000) / 2) + "px"
        if (random_height9 > h - 200) {
            random_height9 = random_height9 / 2;
        }
        random_height10 = (Math.floor(Math.random(h) * 1000) / 2) + "px"
        if (random_height10 > h - 200) {
            random_height10 = random_height10 / 2;
        }
        random_height11 = (Math.floor(Math.random(h) * 1000) / 2) + "px"
        if (random_height11 > h - 200) {
            random_height11 = random_height11 / 2;
        }
        random_height12 = (Math.floor(Math.random(h) * 1000) / 2) + "px"
        if (random_height12 > h - 200) {
            random_height12 = random_height12 / 2;
        }
        
        // RANDOM WIDTH 
        random_width = Math.floor(Math.random(w) * 1000) + "px"
        if (random_width > w - 200) {
            random_width = random_width / 2;
        }
        random_width1 = Math.floor(Math.random(w) * 1000) + "px"
        if (random_width1 > w - 200) {
            random_width1 = random_width1 / 2;
        }
        random_width2 = Math.floor(Math.random(w) * 1000) + "px"
        if (random_width2 > w - 200) {
            random_width2 = random_width2 / 2;
        }
        random_width3 = Math.floor(Math.random(w) * 1000) + "px"
        if (random_width3 > w - 200) {
            random_width3 = random_width3 / 2;
        }
        random_width4 = Math.floor(Math.random(w) * 1000) + "px"
        if (random_width4 > w - 200) {
            random_width4 = random_width4 / 2;
        }
        random_width5 = Math.floor(Math.random(w) * 1000) + "px"
        if (random_width5 > w - 200) {
            random_width5 = random_width5 / 2;
        }
        random_width6 = Math.floor(Math.random(w) * 1000) + "px"
        if (random_width6 > w - 200) {
            random_width6 = random_width6 / 2;
        }
        random_width7 = Math.floor(Math.random(w) * 1000) + "px"
        if (random_width7 > w - 200) {
            random_width7 = random_width7 / 2;
        }
        random_width8 = Math.floor(Math.random(w) * 1000) + "px"
        if (random_width8 > w - 200) {
            random_width8 = random_width8 / 2;
        }
        random_width9 = Math.floor(Math.random(w) * 1000) + "px"
        if (random_width9 > w - 200) {
            random_width9 = random_width9 / 2;
        }
        random_width10 = Math.floor(Math.random(w) * 1000) + "px"
        if (random_width10 > w - 200) {
            random_width10 = random_width10 / 2;
        }
        random_width11 = Math.floor(Math.random(w) * 1000) + "px"
        if (random_width11 > w - 200) {
            random_width11 = random_width11 / 2;
        }
        random_width12 = Math.floor(Math.random(w) * 1000) + "px"
        if (random_width12 > w - 200) {
            random_width12 = random_width12 / 2;
        }



        random_size = Math.floor(Math.random() * 4) + "em"
        random_size1 = Math.floor(Math.random() * 4) + "em"
        random_size2 = Math.floor(Math.random() * 4) + "em"
        random_size3 = Math.floor(Math.random() * 4) + "em"
        random_size4 = Math.floor(Math.random() * 4) + "em"
        random_size5 = Math.floor(Math.random() * 4) + "em"
        random_size6 = Math.floor(Math.random() * 4) + "em"
        random_size7 = Math.floor(Math.random() * 4) + "em"
        random_size8 = Math.floor(Math.random() * 4) + "em"
        random_size9 = Math.floor(Math.random() * 4) + "em"
        random_size10 = Math.floor(Math.random() * 4) + "em"
        random_size11 = Math.floor(Math.random() * 4) + "em"
        random_size12 = Math.floor(Math.random() * 4) + "em"




        $("#random-text").text(random_text).css({
            "color": random_color, "left": random_width,
            "top": random_height, "font-size": random_size
        }).hide().delay(500).show('slow')

        $("#random-text1").text(random_text1).css({
            "color": random_color1, "left": random_width1,
            "top": random_height1, "font-size": random_size1
        }).hide().delay(800).show('slow')
        $("#random-text2").text(random_text2).css({
            "color": random_color2, "left": random_width2,
            "top": random_height2, "font-size": random_size2
        }).hide().delay(1300).show('slow')

        $("#random-text3").text(random_text3).css({
            "color": random_color3, "left": random_width3,
            "top": random_height3, "font-size": random_size3
        }).hide().delay(1500).show('slow')
        $("#random-text4").text(random_text4).css({
            "color": random_color4, "left": random_width4,
            "top": random_height4, "font-size": random_size4
        }).hide().delay(1800).show('slow')

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
        }).hide().delay(2000).show('slow')

        $("#random-text9").text(random_text9).css({
            "color": random_color9, "left": random_width9,
            "top": random_height9, "font-size": random_size9
        }).hide().delay(2200).show('slow')
        $("#random-text10").text(random_text10).css({
            "color": random_color10, "left": random_width10,
            "top": random_height10, "font-size": random_size10
        }).hide().delay(2500).show('slow')
        $("#random-text11").text(random_text11).css({
            "color": random_color11, "left": random_width11,
            "top": random_height11, "font-size": random_size11
        }).hide().delay(2800).show('slow')
        $("#random-text12").text(random_text12).css({
            "color": random_color12, "left": random_width12,
            "top": random_height12, "font-size": random_size12
        }).hide().delay(3000).show('slow')


        

    };


    setInterval(gorandom, 4500);

});