let pos = [];


let pos1 = document.getElementById('c1').innerHTML = 0;
let pos2 = document.getElementById('c2').innerHTML = 0;
let pos3 = document.getElementById('c3').innerHTML = 0;
let pos4 = document.getElementById('c4').innerHTML = 0;
let pos5 = document.getElementById('c5').innerHTML = 0;
let pos6 = document.getElementById('c6').innerHTML = 0;
let pos7 = document.getElementById('c7').innerHTML = 0;
let pos8 = document.getElementById('c8').innerHTML = 0;
let pos9 = document.getElementById('c9').innerHTML = 0;

function generate() {
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
                    pos[i] = Math.floor(Math.random() * 9+1);
                    pos1 = document.getElementById('c1').innerHTML = pos[1];
                }
                break;
            case 2:
                let temp2 = document.getElementById('c2')
                if (temp2.classList.contains('hold')) {
                    pos2 = document.getElementById('c2').innerHTML = pos[2];
                } else {
                    pos[i] = Math.floor(Math.random() * 9+1);
                    pos2 = document.getElementById('c2').innerHTML = pos[2];
                }
                break;
            case 3:
                let temp3 = document.getElementById('c3')
                if (temp3.classList.contains('hold')) {
                    pos3 = document.getElementById('c3').innerHTML = pos[3];
                } else {
                    pos[i] = Math.floor(Math.random() * 9+1);
                    pos3 = document.getElementById('c3').innerHTML = pos[3];
                }
                break;
            case 4:
                let temp4 = document.getElementById('c4')
                if (temp4.classList.contains('hold')) {
                    pos4 = document.getElementById('c4').innerHTML = pos[4];
                } else {
                    pos[i] = Math.floor(Math.random() * 9+1);
                    pos4 = document.getElementById('c4').innerHTML = pos[4];
                }
                break;
            case 5:
                let temp5 = document.getElementById('c5')
                if (temp5.classList.contains('hold')) {
                    pos5 = document.getElementById('c5').innerHTML = pos[5];
                } else {
                    pos[i] = Math.floor(Math.random() * 9+1);
                    pos5 = document.getElementById('c5').innerHTML = pos[5];
                }
                break;
            case 6:
                let temp6 = document.getElementById('c6')
                if (temp6.classList.contains('hold')) {
                    pos6 = document.getElementById('c6').innerHTML = pos[6];
                } else {
                    pos[i] = Math.floor(Math.random() * 9+1);
                    pos6 = document.getElementById('c6').innerHTML = pos[6];
                }
                break;
            case 7:
                let temp7 = document.getElementById('c7')
                if (temp7.classList.contains('hold')) {
                    pos7 = document.getElementById('c7').innerHTML = pos[7];
                } else {
                    pos[i] = Math.floor(Math.random() * 9+1);
                    pos7 = document.getElementById('c7').innerHTML = pos[7];
                }
                break;
            case 8:
                let temp8 = document.getElementById('c8')
                if (temp8.classList.contains('hold')) {
                    pos8 = document.getElementById('c8').innerHTML = pos[8];
                } else {
                    pos[i] = Math.floor(Math.random() * 9+1);
                    pos8 = document.getElementById('c8').innerHTML = pos[8];
                }
                break;
            case 9:
                let temp9 = document.getElementById('c9')
                if (temp9.classList.contains('hold')) {
                    pos9 = document.getElementById('c9').innerHTML = pos[9];
                } else {
                    pos[i] = Math.floor(Math.random() * 9+1);
                    pos9 = document.getElementById('c9').innerHTML = pos[9];
                }
                break;

        }


    }
}

function holdNumber(clicked_id) {
    let element = document.getElementById(clicked_id);

    if (document.getElementById(clicked_id).style.background == "gold") {
        document.getElementById(clicked_id).style.background = "white"
        element.classList.toggle('hold')
    } else {
        document.getElementById(clicked_id).style.background = "gold"
        element.classList.toggle('hold')
    }

    ;
}