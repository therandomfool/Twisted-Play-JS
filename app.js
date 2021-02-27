let pos = [];
let block1 = false;
let block2 = false;
let block3 = false;
let block4 = false;
let block5 = false;
let block6 = false;
let block7 = false;
let block8 = false;
let block9 = false;
let straight = 0;
let credits = 100;
(() => {
    document.getElementById("credits").innerHTML = credits;
})();

// let pos1 = document.getElementById('c1').innerHTML = 0;
// let pos2 = document.getElementById('c2').innerHTML = 0;
// let pos3 = document.getElementById('c3').innerHTML = 0;
// let pos4 = document.getElementById('c4').innerHTML = 0;
// let pos5 = document.getElementById('c5').innerHTML = 0;
// let pos6 = document.getElementById('c6').innerHTML = 0;
// let pos7 = document.getElementById('c7').innerHTML = 0;
// let pos8 = document.getElementById('c8').innerHTML = 0;
// let pos9 = document.getElementById('c9').innerHTML = 0;
let pos1 = document.getElementById('c1').innerHTML = 'X';
let pos2 = document.getElementById('c2').innerHTML = 'X';
let pos3 = document.getElementById('c3').innerHTML = 'X';
let pos4 = document.getElementById('c4').innerHTML = 'X';
let pos5 = document.getElementById('c5').innerHTML = 'X';
let pos6 = document.getElementById('c6').innerHTML = 'X';
let pos7 = document.getElementById('c7').innerHTML = 'X';
let pos8 = document.getElementById('c8').innerHTML = 'X';
let pos9 = document.getElementById('c9').innerHTML = 'X';

function generate() {
    credits--;
    (() => {
        document.getElementById("credits").innerHTML = credits;
    })();
    checkWinner();
    getRandomNumber();
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

    // if (document.getElementById(clicked_id).style.background == "blue") {
    //     element.classList.add('hold')
    // } else 
    if (document.getElementById(clicked_id).style.background == "gold") {
        document.getElementById(clicked_id).style.background = "white"
        element.classList.remove('hold')
    } else {
        document.getElementById(clicked_id).style.background = "gold"
        element.classList.add('hold')
    }

    ;
}



function checkWinner() {
    // Straight winner in position 1 thru 3

    if (block1 == true) {
        
    } else if ((pos1 + 1 == pos2 && pos2 + 1 == pos3) ||
        (pos1 + 1 == pos3 && pos3 + 1 == pos2) ||
        (pos1 - 1 == pos2 && pos2 - 1 == pos3) ||
        (pos1 - 1 == pos3 && pos3 - 1 == pos2) ||
        (pos1 + 1 == pos2 && pos1 - 1 == pos3) ||
        (pos1 + 1 == pos3 && pos1 - 1 == pos2)) {
        straight++;
        block1 = true;
        (() => {
            document.getElementById("straight").innerHTML = straight;
        })();
        document.getElementById('c1').style.background = "blue"
        document.getElementById('c1').classList.add('hold')
        document.getElementById('c2').style.background = "blue"
        document.getElementById('c2').classList.add('hold')
        document.getElementById('c3').style.background = "blue"
        document.getElementById('c3').classList.add('hold')
    }

    // Straight winner in position 4 thru 6
    if (block2 == true) {
        return;
    } else if ((pos4 + 1 == pos5 && pos5 + 1 == pos6) ||
        (pos4 + 1 == pos6 && pos6 + 1 == pos5) ||
        (pos4 - 1 == pos5 && pos5 - 1 == pos6) ||
        (pos4 - 1 == pos6 && pos6 - 1 == pos5) ||
        (pos4 + 1 == pos5 && pos4 - 1 == pos6) ||
        (pos4 + 1 == pos6 && pos4 - 1 == pos5)) {
        straight++;
        block2 = true;
        (() => {
            document.getElementById("straight").innerHTML = straight;
        })();
        document.getElementById('c4').style.background = "blue"
        document.getElementById('c4').classList.add('hold')
        document.getElementById('c5').style.background = "blue"
        document.getElementById('c5').classList.add('hold')
        document.getElementById('c6').style.background = "blue"
        document.getElementById('c6').classList.add('hold')
    }
    // Straight winner in position 7 thru 9 *block3
    if (block3 == true) {
        return;
    } else if ((pos7 + 1 == pos8 && pos8 + 1 == pos9) ||
        (pos7 + 1 == pos9 && pos9 + 1 == pos8) ||
        (pos7 - 1 == pos8 && pos8 - 1 == pos9) ||
        (pos7 - 1 == pos9 && pos9 - 1 == pos8) ||
        (pos7 + 1 == pos8 && pos7 - 1 == pos9) ||
        (pos7 + 1 == pos9 && pos7 - 1 == pos8)) {
        straight++;
        block3 = true;
        (() => {
            document.getElementById("straight").innerHTML = straight;
        })();
        document.getElementById('c7').style.background = "blue"
        document.getElementById('c7').classList.add('hold')
        document.getElementById('c8').style.background = "blue"
        document.getElementById('c8').classList.add('hold')
        document.getElementById('c9').style.background = "blue"
        document.getElementById('c9').classList.add('hold')
    }
}