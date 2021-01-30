



function generate(){
    
    function shuffle1(array) {
        var i = array.length,
        j = 0,
        temp;
    
        while (i--) {
    
            j = Math.floor(Math.random() * (i+1));
    
            // swap randomly chosen element with current element
            temp = array[i];
            array[i] = array[j];
            array[j] = temp;
            
            let pos1 = document.getElementById('c1').innerHTML = array[0];
            let pos2 = document.getElementById('c2').innerHTML = array[1];
           let pos3 = document.getElementById('c3').innerHTML = array[2];
           
          
        }
    
        return array;
    }
    function shuffle2(array) {
        var i = array.length,
            j = 0,
            temp;
            
        while (i--) {
            
            j = Math.floor(Math.random() * (i+1));
            
            // swap randomly chosen element with current element
            temp = array[i];
            array[i] = array[j];
            array[j] = temp;
    
            
           let pos4 = document.getElementById('c4').innerHTML = array[3];
           let pos5 = document.getElementById('c5').innerHTML = array[4];
           let pos6 = document.getElementById('c6').innerHTML = array[5];
            
        }
    
        return array;
    }
    function shuffle3(array) {
        var i = array.length,
        j = 0,
            temp;
    
            while (i--) {
                
                j = Math.floor(Math.random() * (i+1));
                
            // swap randomly chosen element with current element
            temp = array[i];
            array[i] = array[j];
            array[j] = temp;
    
            
            let pos7 = document.getElementById('c7').innerHTML = array[6];
            let pos8 = document.getElementById('c8').innerHTML = array[7];
            let pos9 = document.getElementById('c9').innerHTML = array[8];
        }
        
        return array;
    }
    
    var ranNums = shuffle1([1,2,3,4,5,6,7,8,9]);
    var ranNums = shuffle2([1,2,3,4,5,6,7,8,9]);
    var ranNums = shuffle3([1,2,3,4,5,6,7,8,9]);
}


function match(){

}