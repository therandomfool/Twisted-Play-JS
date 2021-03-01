let pos = [];
let block1;
let block2;
let block3;
let block4;
let block5;
let block6;
let block7;
let block8;
let block9;
let block10;
let block11;
let block12;
let block13;
let block14;
let block15;
let block16;
// let win = 0;
let tok = 0;
let credits = 100;
let turn = 0;
let winCredits = 0;
(() => {
    document.getElementById("credits").innerHTML = credits;
})();

let pos1 = document.getElementById('c1').innerHTML = 'X';
let pos2 = document.getElementById('c2').innerHTML = 'X';
let pos3 = document.getElementById('c3').innerHTML = 'X';
let pos4 = document.getElementById('c4').innerHTML = 'X';
let pos5 = document.getElementById('c5').innerHTML = 'X';
let pos6 = document.getElementById('c6').innerHTML = 'X';
let pos7 = document.getElementById('c7').innerHTML = 'X';
let pos8 = document.getElementById('c8').innerHTML = 'X';
let pos9 = document.getElementById('c9').innerHTML = 'X';

function cashOut() {
    credits += winCredits;
    winCredits = 0;
    (() => {
        document.getElementById("credits").innerHTML = credits;
    })();
    document.getElementById("win").innerHTML = winCredits;
    (() => {
        // document.getElementById("text").innerHTML = "Play is Over";
        setTimeout(function () {

            turn = 0;
            document.getElementById("text").innerHTML = turn;
            pos1 = document.getElementById('c1').innerHTML = 'X';
            pos1 = document.getElementById('c1').style.background = "white";
            pos1 = document.getElementById('c1').classList.remove('hold');

            pos2 = document.getElementById('c2').innerHTML = 'X';
            pos2 = document.getElementById('c2').style.background = "white";
            pos2 = document.getElementById('c2').classList.remove('hold');

            pos3 = document.getElementById('c3').innerHTML = 'X';
            pos3 = document.getElementById('c3').style.background = "white";
            pos3 = document.getElementById('c3').classList.remove('hold');

            pos4 = document.getElementById('c4').innerHTML = 'X';
            pos4 = document.getElementById('c4').style.background = "white";
            pos4 = document.getElementById('c4').classList.remove('hold');

            pos5 = document.getElementById('c5').innerHTML = 'X';
            pos5 = document.getElementById('c5').style.background = "white";
            pos5 = document.getElementById('c5').classList.remove('hold');

            pos6 = document.getElementById('c6').innerHTML = 'X';
            pos6 = document.getElementById('c6').style.background = "white";
            pos6 = document.getElementById('c6').classList.remove('hold');

            pos7 = document.getElementById('c7').innerHTML = 'X';
            pos7 = document.getElementById('c7').style.background = "white";
            pos7 = document.getElementById('c7').classList.remove('hold');

            pos8 = document.getElementById('c8').innerHTML = 'X';
            pos8 = document.getElementById('c8').style.background = "white";
            pos8 = document.getElementById('c8').classList.remove('hold');

            pos9 = document.getElementById('c9').innerHTML = 'X';
            pos9 = document.getElementById('c9').style.background = "white";
            pos9 = document.getElementById('c9').classList.remove('hold');
        }, 500);
    })();
    block1 = false;
    block2 = false;
    block3 = false;
    block4 = false;
    block5 = false;
    block6 = false;
    block7 = false;
    block8 = false;
    block9 = false;
    block10 = false;
    block11 = false;
    block12 = false;
    block13 = false;
    block14 = false;
    block15 = false;
    block16 = false;
}



function generate() {
    credits += winCredits;
    winCredits = 0;
    document.getElementById("credits").innerHTML = credits;
    document.getElementById("win").innerHTML = winCredits;
    block1 = false;
    block2 = false;
    block3 = false;
    block4 = false;
    block5 = false;
    block6 = false;
    block7 = false;
    block8 = false;
    block9 = false;
    block10 = false;
    block11 = false;
    block12 = false;
    block13 = false;
    block14 = false;
    block15 = false;
    block16 = false;
    // turn++
    if (turn < 3) {
        getRandomNumber();
        checkWinner();
        console.log(block1, block2, block3, block4, block5, block6, block7, block8, block9, block10, block11, block12, block13, block14, block15, block16)

        credits = credits - 9;
        (() => {
            document.getElementById("credits").innerHTML = credits;
        })();
        (() => {
            document.getElementById("text").innerHTML = turn;
        })();
        if (turn === 2) {

            document.getElementById("text").innerHTML = "TURN OVER. HIT CONTINUE BUTTON TO REPLAY";
        }
    }
}

function getRandomNumber() {
    for (let i = 1; i < 10; i++) {

        // if(document.getElementsByClassName != 'hold'){
        //     pos[i] = Math.floor(Math.random() * 9);
        //     pos[i] = Math.floor(Math.random() * 9);

        // }


        let temp;
        switch (i) {
            case 1:
                let temp1 = document.getElementById('c1')
                if (temp1.classList.contains('hold')) {
                    pos1 = document.getElementById('c1').innerHTML = pos[1];
                } else {
                    pos[i] = Math.floor(Math.random() * 9 + 1);
                    pos1 = document.getElementById('c1').innerHTML = pos[1];
                }
                console.log(pos1)
                break;
            case 2:
                let temp2 = document.getElementById('c2')
                if (temp2.classList.contains('hold')) {
                    pos2 = document.getElementById('c2').innerHTML = pos[2];
                } else {
                    pos[i] = Math.floor(Math.random() * 9 + 1);
                    pos2 = document.getElementById('c2').innerHTML = pos[2];
                }
                break;
            case 3:
                let temp3 = document.getElementById('c3')
                if (temp3.classList.contains('hold')) {
                    pos3 = document.getElementById('c3').innerHTML = pos[3];
                } else {
                    pos[i] = Math.floor(Math.random() * 9 + 1);
                    pos3 = document.getElementById('c3').innerHTML = pos[3];
                }
                break;
            case 4:
                let temp4 = document.getElementById('c4')
                if (temp4.classList.contains('hold')) {
                    pos4 = document.getElementById('c4').innerHTML = pos[4];
                } else {
                    pos[i] = Math.floor(Math.random() * 9 + 1);
                    pos4 = document.getElementById('c4').innerHTML = pos[4];
                }
                break;
            case 5:
                let temp5 = document.getElementById('c5')
                if (temp5.classList.contains('hold')) {
                    pos5 = document.getElementById('c5').innerHTML = pos[5];
                } else {
                    pos[i] = Math.floor(Math.random() * 9 + 1);
                    pos5 = document.getElementById('c5').innerHTML = pos[5];
                }
                break;
            case 6:
                let temp6 = document.getElementById('c6')
                if (temp6.classList.contains('hold')) {
                    pos6 = document.getElementById('c6').innerHTML = pos[6];
                } else {
                    pos[i] = Math.floor(Math.random() * 9 + 1);
                    pos6 = document.getElementById('c6').innerHTML = pos[6];
                }
                break;
            case 7:
                let temp7 = document.getElementById('c7')
                if (temp7.classList.contains('hold')) {
                    pos7 = document.getElementById('c7').innerHTML = pos[7];
                } else {
                    pos[i] = Math.floor(Math.random() * 9 + 1);
                    pos7 = document.getElementById('c7').innerHTML = pos[7];
                }
                break;
            case 8:
                let temp8 = document.getElementById('c8')
                if (temp8.classList.contains('hold')) {
                    pos8 = document.getElementById('c8').innerHTML = pos[8];
                } else {
                    pos[i] = Math.floor(Math.random() * 9 + 1);
                    pos8 = document.getElementById('c8').innerHTML = pos[8];
                }
                break;
            case 9:
                let temp9 = document.getElementById('c9')
                if (temp9.classList.contains('hold')) {
                    pos9 = document.getElementById('c9').innerHTML = pos[9];
                } else {
                    pos[i] = Math.floor(Math.random() * 9 + 1);
                    pos9 = document.getElementById('c9').innerHTML = pos[9];
                }
                break;

        }


    }
}



function holdNumber(clicked_id) {
    let element = document.getElementById(clicked_id);

    if (document.getElementById(clicked_id).style.background === "blue") {
        document.getElementById(clicked_id).style.background = "gold"
        element.classList.add('hold')
    } else if (document.getElementById(clicked_id).style.background === "gold") {
        document.getElementById(clicked_id).style.background = "white"
        element.classList.remove('hold');
    } else {
        document.getElementById(clicked_id).style.background = "gold"
        element.classList.add('hold')
    }

    ;
}



function checkWinner() {
    // Straight winner in position 1 thru 3

    if ((pos1 + 1 === pos2 && pos2 + 1 === pos3) ||
        (pos1 + 1 === pos3 && pos1 - 1 === pos2) ||
        (pos1 + 1 === pos3 && pos3 + 1 === pos2) ||
        (pos1 - 1 === pos2 && pos2 - 1 === pos3) ||

        (pos1 - 1 === pos2 && pos1 + 1 === pos3) ||
        (pos1 - 1 === pos3 && pos3 - 1 === pos2) ||
        (pos1 + 1 === pos2 && pos1 - 1 === pos3) ||
        (pos1 + 1 === pos3 && pos1 - 1 === pos2)) {


        winCredits += 5;
        document.getElementById("win").innerHTML = winCredits;

        document.getElementById('c1').style.background = "blue"
        timer()
        document.getElementById('c1').style.WebkitTransform = "rotate(1080deg)"
        timer()
        document.getElementById('c1').style.background = "white"
        // document.getElementById('c1').classList.add('hold')
        document.getElementById('c2').style.background = "blue"
        timer()
        document.getElementById('c2').style.WebkitTransform = "rotate(-1080deg)"
        timer()
        document.getElementById('c2').style.background = "white"
        // document.getElementById('c2').classList.add('hold')
        document.getElementById('c3').style.background = "blue"
        timer()
        document.getElementById('c3').style.WebkitTransform = "rotate(1080deg)"
        timer()
        document.getElementById('c3').style.background = "white"
        // document.getElementById('c3').classList.add('hold')



        block1 = true;
    }

    // Straight winner in position 4 thru 6 *block2
    if ((pos4 + 1 === pos5 && pos5 + 1 === pos6) ||
        (pos4 + 1 === pos6 && pos4 - 1 === pos5) ||
        (pos4 + 1 === pos6 && pos6 + 1 === pos5) ||
        (pos4 - 1 === pos5 && pos5 - 1 === pos6) ||

        (pos4 - 1 === pos5 && pos4 + 1 === pos6) ||
        (pos4 - 1 === pos6 && pos6 - 1 === pos5) ||
        (pos4 + 1 === pos5 && pos4 - 1 === pos6) ||
        (pos4 + 1 === pos6 && pos4 - 1 === pos5)) {

        (() => {
            winCredits += 5;
            document.getElementById("win").innerHTML = winCredits;
        })();
        document.getElementById('c4').style.background = "blue"
        timer()
        document.getElementById('c4').style.WebkitTransform = "rotate(1080deg)"
        timer()
        document.getElementById('c4').style.background = "white"
        // document.getElementById('c4').classList.add('hold')
        document.getElementById('c5').style.background = "blue"
        timer()
        document.getElementById('c5').style.WebkitTransform = "rotate(-1080deg)"
        timer()
        document.getElementById('c5').style.background = "white"
        // document.getElementById('c5').classList.add('hold')
        document.getElementById('c6').style.background = "blue"
        timer()
        document.getElementById('c6').style.WebkitTransform = "rotate(1080deg)"
        timer()
        document.getElementById('c6').style.background = "white"
        // document.getElementById('c6').classList.add('hold')
        block2 = true;

    }
    // Straight winner in position 7 thru 9 *block3
    if ((pos7 + 1 === pos8 && pos8 + 1 === pos9) ||
        (pos7 + 1 === pos9 && pos7 - 1 === pos8) ||
        (pos7 + 1 === pos9 && pos9 + 1 === pos8) ||
        (pos7 - 1 === pos8 && pos8 - 1 === pos9) ||

        (pos7 - 1 === pos8 && pos7 + 1 === pos9) ||
        (pos7 - 1 === pos9 && pos9 - 1 === pos8) ||
        (pos7 + 1 === pos8 && pos7 - 1 === pos9) ||
        (pos7 + 1 === pos9 && pos7 - 1 === pos8)) {

        (() => {
            winCredits += 5;
            document.getElementById("win").innerHTML = winCredits;

        })();
        document.getElementById('c7').style.background = "blue";
        document.getElementById('c7').style.WebkitTransform = "rotate(1080deg)"
        document.getElementById('c7').style.background = "white"
        // document.getElementById('c7').classList.add('hold');
        document.getElementById('c8').style.background = "blue";
        document.getElementById('c8').style.WebkitTransform = "rotate(-1080deg)"
        document.getElementById('c8').style.background = "white"
        // document.getElementById('c8').classList.add('hold');
        document.getElementById('c9').style.background = "blue";
        document.getElementById('c9').style.WebkitTransform = "rotate(1080deg)";
        document.getElementById('c9').style.background = "white";
        // document.getElementById('c9').classList.add('hold');
        // block3 = true;

    }
    // Straight winner in diagonal position 1 , 5,  9 *block4
    if ((pos1 + 1 === pos5 && pos5 + 1 === pos9) ||
        (pos1 + 1 === pos9 && pos1 - 1 === pos5) ||
        (pos1 + 1 === pos9 && pos9 + 1 === pos5) ||
        (pos1 - 1 === pos5 && pos5 - 1 === pos9) ||
        // ?
        (pos1 - 1 === pos5 && pos1 + 1 === pos9) ||
        // ****
        (pos1 - 1 === pos9 && pos9 - 1 === pos5) ||
        (pos1 + 1 === pos5 && pos1 - 1 === pos9) ||
        (pos1 + 1 === pos9 && pos1 - 1 === pos5)) {

        (() => {
            winCredits += 5;
            document.getElementById("win").innerHTML = winCredits;

        })();
        document.getElementById('c1').style.background = "blue"
        timer()
        document.getElementById('c4').style.WebkitTransform = "rotate(1080deg)"
        timer()
        document.getElementById('c4').style.background = "white"
        // document.getElementById('c1').classList.add('hold')
        document.getElementById('c5').style.background = "blue"
        timer()
        document.getElementById('c4').style.WebkitTransform = "rotate(-1080deg)"
        timer()
        document.getElementById('c4').style.background = "white"
        // document.getElementById('c5').classList.add('hold')
        document.getElementById('c9').style.background = "blue"
        timer()
        document.getElementById('c4').style.WebkitTransform = "rotate(1080deg)"
        timer()
        document.getElementById('c4').style.background = "white"
        // document.getElementById('c9').classList.add('hold')
        block4 = true;

    }
    // Straight winner in diagonal position 3, 5,  7 *block5
    if ((pos3 + 1 === pos5 && pos5 + 1 === pos7) ||
        (pos3 + 1 === pos7 && pos3 - 1 === pos5) ||
        (pos3 + 1 === pos7 && pos7 + 1 === pos5) ||
        (pos3 - 1 === pos5 && pos5 - 1 === pos7) ||

        (pos3 - 1 === pos5 && pos3 + 1 === pos7) ||
        (pos3 - 1 === pos7 && pos7 - 1 === pos5) ||
        (pos3 + 1 === pos5 && pos3 - 1 === pos7) ||
        (pos3 + 1 === pos7 && pos3 - 1 === pos5)) {

        (() => {
            winCredits += 5;
            document.getElementById("win").innerHTML = winCredits;

        })();
        document.getElementById('c3').style.background = "blue"
        timer()
        document.getElementById('c3').style.WebkitTransform = "rotate(1080deg)"
        timer()
        document.getElementById('c3').style.background = "white"
        // document.getElementById('c3').classList.add('hold')
        document.getElementById('c5').style.background = "blue"
        timer()
        document.getElementById('c5').style.WebkitTransform = "rotate(-1080deg)"
        timer()
        document.getElementById('c5').style.background = "white"
        // document.getElementById('c5').classList.add('hold')
        document.getElementById('c7').style.background = "blue"
        timer()
        document.getElementById('c7').style.WebkitTransform = "rotate(1080deg)"
        timer()
        document.getElementById('c7').style.background = "white"
        // document.getElementById('c7').classList.add('hold')
        block5 = true;

    }
    // Straight winner in vertical position 1, 4,  7 *block6
    if ((pos1 + 1 === pos4 && pos4 + 1 === pos7) ||
        (pos1 + 1 === pos7 && pos1 - 1 === pos4) ||
        (pos1 + 1 === pos7 && pos7 + 1 === pos4) ||
        (pos1 - 1 === pos4 && pos4 - 1 === pos7) ||

        (pos1 - 1 === pos4 && pos1 + 1 === pos7) ||
        (pos1 - 1 === pos7 && pos7 - 1 === pos4) ||
        (pos1 + 1 === pos4 && pos1 - 1 === pos7) ||
        (pos1 + 1 === pos7 && pos1 - 1 === pos4)) {

        (() => {
            winCredits += 5;
            document.getElementById("win").innerHTML = winCredits;

        })();
        document.getElementById('c1').style.background = "blue"
        document.getElementById('c1').style.WebkitTransform = "rotate(1080deg)"
        timer()
        document.getElementById('c1').style.background = "white"
        timer()
        // document.getElementById('c1').classList.add('hold')
        document.getElementById('c4').style.background = "blue"
        timer()
        document.getElementById('c4').style.WebkitTransform = "rotate(-1080deg)"
        timer()
        document.getElementById('c4').style.background = "white"
        // document.getElementById('c4').classList.add('hold')
        document.getElementById('c7').style.background = "blue"
        timer()
        document.getElementById('c7').style.WebkitTransform = "rotate(1080deg)"
        timer()
        document.getElementById('c7').style.background = "white"
        // document.getElementById('c7').classList.add('hold')

        block6 = true;
    }
    // Straight winner in vertical position 2, 5,  8 *block7
    if ((pos2 + 1 === pos5 && pos5 + 1 === pos8) ||
        (pos2 + 1 === pos8 && pos2 - 1 === pos5) ||
        (pos2 + 1 === pos8 && pos8 + 1 === pos5) ||
        (pos2 - 1 === pos5 && pos5 - 1 === pos8) ||

        (pos2 - 1 === pos5 && pos2 + 1 === pos8) ||
        (pos2 - 1 === pos8 && pos8 - 1 === pos5) ||
        (pos2 + 1 === pos5 && pos2 - 1 === pos8) ||
        (pos2 + 1 === pos8 && pos2 - 1 === pos5)) {

        (() => {
            winCredits += 5;
            document.getElementById("win").innerHTML = winCredits;

        })();
        document.getElementById('c2').style.background = "blue";
        timer()
        document.getElementById('c2').style.WebkitTransform = "rotate(1080deg)"
        timer()
        document.getElementById('c2').style.background = "white"
        // document.getElementById('c2').classList.add('hold');
        document.getElementById('c5').style.background = "blue";
        timer()
        document.getElementById('c5').style.WebkitTransform = "rotate(-1080deg)"
        timer()
        document.getElementById('c5').style.background = "white"
        // document.getElementById('c5').classList.add('hold');
        document.getElementById('c8').style.background = "blue";
        timer()
        document.getElementById('c8').style.WebkitTransform = "rotate(1080deg)"
        timer()
        document.getElementById('c8').style.background = "white"
        // document.getElementById('c8').classList.add('hold');

        block7 = true;
    }
    // Straight winner in vertical position 3, 6,  9 *block8
    if ((pos3 + 1 === pos6 && pos6 + 1 === pos9) ||
        (pos3 + 1 === pos9 && pos3 - 1 === pos6) ||
        (pos3 + 1 === pos9 && pos9 + 1 === pos6) ||
        (pos3 - 1 === pos6 && pos6 - 1 === pos9) ||

        (pos3 - 1 === pos6 && pos3 + 1 === pos9) ||
        (pos3 - 1 === pos9 && pos9 - 1 === pos6) ||
        (pos3 + 1 === pos6 && pos3 - 1 === pos9) ||
        (pos3 + 1 === pos9 && pos3 - 1 === pos6)) {

        (() => {
            winCredits += 5;
            document.getElementById("win").innerHTML = winCredits;

        })();
        document.getElementById('c3').style.background = "blue";
        timer()
        document.getElementById('c3').style.WebkitTransform = "rotate(1080deg)"
        timer()
        document.getElementById('c3').style.background = "white"
        // document.getElementById('c3').classList.add('hold');
        document.getElementById('c6').style.background = "blue";
        timer()
        document.getElementById('c6').style.WebkitTransform = "rotate(-1080deg)"
        timer()
        document.getElementById('c6').style.background = "white"
        // document.getElementById('c6').classList.add('hold');
        document.getElementById('c9').style.background = "blue";
        timer()
        document.getElementById('c9').style.WebkitTransform = "rotate(1080deg)"
        timer()
        document.getElementById('c9').style.background = "white"
        // document.getElementById('c9').classList.add('hold');
        block8 = true;

    }

    // Three of a kind in horizontal 1,2,3 positions *block9
    if ((pos1 === pos2 && pos2 === pos3)) {

        (() => {
            winCredits += 30;
            document.getElementById("win").innerHTML = winCredits;
        })();
        document.getElementById('c1').style.background = "blue";
        timer()
        document.getElementById('c1').style.WebkitTransform = "rotate(1080deg)"
        timer()
        document.getElementById('c1').style.background = "white"
        // document.getElementById('c1').classList.add('hold');
        document.getElementById('c2').style.background = "blue";
        timer()
        document.getElementById('c2').style.WebkitTransform = "rotate(-1080deg)"
        timer()
        document.getElementById('c2').style.background = "white"
        // document.getElementById('c2').classList.add('hold');
        document.getElementById('c3').style.background = "blue";
        timer()
        document.getElementById('c3').style.WebkitTransform = "rotate(1080deg)"
        timer()
        document.getElementById('c3').style.background = "white"
        // document.getElementById('c3').classList.add('hold');
        block9 = true;
    }

    // Three of a kind in horizontal 4,5,6 positions *block10
    if ((pos4 === pos5 && pos5 === pos6)) {

        (() => {
            winCredits += 30;
            document.getElementById("win").innerHTML = winCredits;
        })();
        document.getElementById('c4').style.background = "blue";
        timer()
        document.getElementById('c4').style.WebkitTransform = "rotate(1080deg)"
        timer()
        document.getElementById('c4').style.background = "white"
        // document.getElementById('c4').classList.add('hold');
        document.getElementById('c5').style.background = "blue";
        timer()
        document.getElementById('c5').style.WebkitTransform = "rotate(-1080deg)"
        timer()
        document.getElementById('c5').style.background = "white"
        // document.getElementById('c5').classList.add('hold');
        document.getElementById('c6').style.background = "blue";
        timer()
        document.getElementById('c6').style.WebkitTransform = "rotate(1080deg)"
        timer()
        document.getElementById('c6').style.background = "white"
        // document.getElementById('c6').classList.add('hold');
        block10 = true;
    }
    // Three of a kind in horizontal 7,8,9 positions *block11
    if ((pos7 === pos8 && pos8 === pos9)) {

        (() => {
            winCredits += 30;
            document.getElementById("win").innerHTML = winCredits;
        })();
        document.getElementById('c7').style.background = "blue";
        timer()
        document.getElementById('c7').style.WebkitTransform = "rotate(1080deg)"
        timer()
        document.getElementById('c7').style.background = "white"
        // document.getElementById('c7').classList.add('hold');
        document.getElementById('c8').style.background = "blue";
        timer()
        document.getElementById('c8').style.WebkitTransform = "rotate(-1080deg)"
        timer()
        document.getElementById('c8').style.background = "white"
        // document.getElementById('c8').classList.add('hold');
        document.getElementById('c9').style.background = "blue";
        timer()
        document.getElementById('c9').style.WebkitTransform = "rotate(1080deg)"
        timer()
        document.getElementById('c9').style.background = "white"
        // document.getElementById('c9').classList.add('hold');
        block11 = true;
    }
    // Three of a kind in horizontal 1,5,9 positions *block12
    if ((pos1 === pos5 && pos5 === pos9)) {

        (() => {
            winCredits += 30;
            document.getElementById("win").innerHTML = winCredits;
        })();
        document.getElementById('c1').style.background = "blue";
        timer()
        document.getElementById('c1').style.WebkitTransform = "rotate(1080deg)"
        timer()
        document.getElementById('c1').style.background = "white"
        // document.getElementById('c1').classList.add('hold');
        document.getElementById('c5').style.background = "blue";
        timer()
        document.getElementById('c5').style.WebkitTransform = "rotate(1080deg)"
        timer()
        document.getElementById('c5').style.background = "white"
        // document.getElementById('c5').classList.add('hold');
        document.getElementById('c9').style.background = "blue";
        timer()
        document.getElementById('c9').style.WebkitTransform = "rotate(1080deg)"
        timer()
        document.getElementById('c9').style.background = "white"
        // document.getElementById('c9').classList.add('hold');
        block12 = true;
    }
    // Three of a kind in horizontal 3,5,7 positions *block13
    if ((pos3 === pos5 && pos5 === pos7)) {

        (() => {
            winCredits += 30;
            document.getElementById("win").innerHTML = winCredits;
        })();
        document.getElementById('c3').style.background = "blue";
        timer()
        document.getElementById('c3').style.WebkitTransform = "rotate(1080deg)"
        timer()
        document.getElementById('c3').style.background = "white"
        // document.getElementById('c3').classList.add('hold');
        document.getElementById('c5').style.background = "blue";
        timer()
        document.getElementById('c5').style.WebkitTransform = "rotate(-1080deg)"
        timer()
        document.getElementById('c5').style.background = "white"
        // document.getElementById('c5').classList.add('hold');
        document.getElementById('c7').style.background = "blue";
        timer()
        document.getElementById('c7').style.WebkitTransform = "rotate(1080deg)"
        timer()
        document.getElementById('c7').style.background = "white"
        // document.getElementById('c7').classList.add('hold');
        block13 = true;
    }
    // Three of a kind in horizontal 1,4,7 positions *block14
    if ((pos1 === pos4 && pos4 === pos7)) {

        (() => {
            winCredits += 30;
            document.getElementById("win").innerHTML = winCredits;
        })();
        document.getElementById('c1').style.background = "blue";
        timer()
        document.getElementById('c1').style.WebkitTransform = "rotate(1080deg)"
        timer()
        document.getElementById('c1').style.background = "white"
        // document.getElementById('c1').classList.add('hold');
        document.getElementById('c4').style.background = "blue";
        timer()
        document.getElementById('c4').style.WebkitTransform = "rotate(-1080deg)"
        timer()
        document.getElementById('c4').style.background = "white"
        // document.getElementById('c4').classList.add('hold');
        document.getElementById('c7').style.background = "blue";
        timer()
        document.getElementById('c7').style.WebkitTransform = "rotate(1080deg)"
        timer()
        document.getElementById('c7').style.background = "white"
        // document.getElementById('c7').classList.add('hold');
        block14 = true;
    }
    // Three of a kind in horizontal 2,5,8 positions *block15
    if ((pos2 === pos5 && pos5 === pos8)) {

        (() => {
            winCredits += 30;
            document.getElementById("win").innerHTML = winCredits;
        })();
        document.getElementById('c2').style.background = "blue";
        timer()
        
        // document.getElementById('c2').classList.add('hold');
        document.getElementById('c5').style.background = "blue";
        timer()
        
        // document.getElementById('c5').classList.add('hold');
        document.getElementById('c8').style.background = "blue";
        timer()
        
        // document.getElementById('c8').classList.add('hold');
        block15 = true;
    }
    // Three of a kind in vertical 3,6,9 positions *block16
    if ((pos3 === pos6 && pos6 === pos9)) {

        (() => {
            winCredits += 30;
            document.getElementById("win").innerHTML = winCredits;
        })();
        document.getElementById('c3').style.background = "blue";
        timer()
        
        // document.getElementById('c3').classList.add('hold');
        document.getElementById('c6').style.background = "blue";
        timer()
        
        // document.getElementById('c6').classList.add('hold');
        document.getElementById('c9').style.background = "blue";
        timer()
        
        // document.getElementById('c9').classList.add('hold');
        block16 = true;
    }
}

function timer() {

    setTimeout(function () {
        document.getElementById('c1').style.background = "white"
        document.getElementById('c2').style.background = "white"
        document.getElementById('c3').style.background = "white"
        document.getElementById('c4').style.background = "white"
        document.getElementById('c5').style.background = "white"
        document.getElementById('c6').style.background = "white"
        document.getElementById('c7').style.background = "white"
        document.getElementById('c8').style.background = "white"
        document.getElementById('c9').style.background = "white"
    }, 1000);
}