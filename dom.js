//  var a = document.getElementById("head1");

//  console.log(a);

//  a.innerHTML='hi'
//  a.style.color='red'



// var b = document.getElementsByClassName("sample");

// console.log(b);
// b[0].innerHTML= "good moring";
// b[2].style.color ="green";



// var c = document.getElementsByTagName("p");

// console.log(c)
// c[0].innerHTML = "welcome to clt";

// c[1].style.color = "blue";



// var d = document.getElementsByName("text")[0];
// console.log(d);

// var e = document.getElementById("head2");

// function msg(){
//     e.innerHTML = "hello " + d.value;

// }

var d = document.getElementsByName("text")[0];

console.log(d);

var e = document.getElementById("head");

function oddoreven(){

    if (d.value % 2 == 0){

        e.innerHTML = "Even";

    }

    else{
        e.innerHTML = "Odd";
    }

}
