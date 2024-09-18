var time= new Date().getHours()
var greeting;//global variable
    if (time<12){
        greeting=("Good Morning");
    }

    else if (time<16){
        greeting=("Good Day");
    }
        

    else {
        greeting=("Good Evening");
    }

console.log(greeting);
