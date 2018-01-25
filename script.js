$(document).ready(function() {
    function gradAnimation(red, green, blue, side, a, b, element) {
        let doGradT = true;
        let gradIntT = a;
        let gradIntB = b;
        setInterval(function() {
            if(doGradT) {
                gradIntT--;
                gradIntB++;
            } else if (!doGradT) {
                gradIntT++;
                gradIntB--;
            }
            switch(side) {
                case 'red':
                    $(element).css({
                        'background' : 'linear-gradient(rgb(' + gradIntT + ', '+ green +', '+ blue +'), rgb('+ gradIntB +', ' + green + ', '+ blue +')'
                    });
                break;
                case 'green':
                    $(element).css({
                        'background' : 'linear-gradient(rgb('+ red +', ' + gradIntT + ', '+ blue +'), rgb('+ red +', ' + gradIntB + ', '+ blue +')'
                    });
                break;
                case 'blue':
                    $(element).css({
                        'background' : 'linear-gradient(rgb(' + red + ', '+ green +', '+ gradIntT +'), rgb('+ red +', ' + green + ', '+ gradIntB +')'
                    });
                break;
            }
            if(gradIntT <= b && gradIntB >= a) {
                doGradT = false;
            } else if(gradIntT >= a && gradIntB <= b) {
                doGradT = true;
            }
        }, 8);
    }

    function imgAnimation_spin(element, degree, speed) {
        let i = 0;
        setInterval(function() {
            i += speed;
            $(element).css({
                transform : 'rotate('+ i + 'deg' + ')'
            });
            if(i >= degree) {
                i = 0;
            }
        }, 5);
    }
    function doShowcaseButtons() {
        let scrollInProg = false;
        const caseHeight = 959;
        const totalCases = 4; // Start from 0 (technically 2) 
        let scrollPos;
        function setPos(index) { scrollPos = $('.showcase').scrollTop(); }
        function cycleTo(element, to, duration) {
            scrollInProg = true;
            $(element).animate({
                scrollTop : '+=' + to + 'px'
            }, duration, 'swing', function() { scrollInProg = false; setPos(0); console.log(scrollPos); });
        }
        $('.showcase .downCycle').click(function() {
            if(!(scrollPos >= caseHeight*totalCases) && !(scrollInProg)) {
                cycleTo('.showcase', caseHeight, 1000);
            }
        });
        $('.showcase .upCycle').click(function() {
            if(!(scrollPos <= 0) && !(scrollInProg)) {
                cycleTo('.showcase', -caseHeight, 1000);
            }
        });
    }
    gradAnimation(255, 216, 0, 'green', 216, 148, '.showcase .case1');
    imgAnimation_spin('#donut img', 360, 0.05);
    gradAnimation(0, 255, 255, 'green', 255, 154, '.showcase .case2');
    gradAnimation(255, 0, 209, 'blue', 255, 209, '.showcase .case3');
    gradAnimation(255, 0, 0, 'red', 255, 155, '.showcase .case4');
    imgAnimation_spin('#lettuce img', 360, 0.05);
    gradAnimation(0, 255, 143, 'green', 255, 211, '.showcase .case5');
    imgAnimation_spin('#egg img', 360, 0.05);
    doShowcaseButtons();
})