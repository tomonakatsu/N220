

/*function setup(){

    for(let i = 0; i < 10; i++){
        for(var j = 0; j < 100; j++){
            thisarr[i] = Math.random() * 100;
            console.log(thisarr[i]);
        }
    }

    for(let i =0; i<50; i++){
        let x = Math.random() * thisarr.length;
        newarr[i] = thisarr[x];

    }
}*/

function setup(){
    var thisarr = [];
    var newarr = [];

    for(let i = 0; i < 10; i++){
        for(var j = 0; j < 100; j++){
            thisarr[i] = Math.random() * 100;

            if(thisarr > 50){
                newarr[i] = thisarr.splice(i, 1)
                console.log(newarr[i]);
            }
        }
    }
}

//splice(position, num of element)