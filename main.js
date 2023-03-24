// let grocerylist = document.getElementById("groceries")
// let cross = document.getElementById("cross");
// let userinput = document.getElementById("userinput");
// let all_items = document.getElementById("all_items")


// cross.addEventListener("click" , function(){

//     all_items.innerHTML ="";
//     document.getElementById("warning1").innerHTML="";
// })

// userinput.addEventListener("keydown",function(event){
//     if(event.key == "Enter"){

//         add_item();

//     }
// })



// function add_item(){

//     if(userinput.value == ""){
//         document.getElementById("warning1").innerHTML="write a name first";
//     }
//     else{
//         let h2 = document.createElement("h2");
// h2.innerHTML="_ " + userinput.value;
// h2.addEventListener("click" , function(){
// h2.style.textDecoration="line-through";
// })

// all_items.insertAdjacentElement("beforeend",h2);
// userinput.value=""

//     }
    


// }




let innerconta = document.getElementById("innerconta");
let userinput = document.getElementById("userinput");
let cross = document.getElementById("cross");
let all_items =document.getElementById("all_items");




userinput.addEventListener("keydown" ,function(event){

    if (event.key=="Enter"){
        additems();
    }
})

function additems(){

   if(userinput.value==""){
    
    document.getElementById("caus").style.display="block";
   
   }
    else{
        let h2 =document.createElement("h2");
        h2.innerHTML="- "+userinput.value;
         h2.style.cursor="pointer";
        h2.addEventListener("click",function (){
            h2.style.textDecoration="line-through";
           
        })
    
        all_items.insertAdjacentElement("beforeend",h2);
        userinput.value="";
        document.getElementById("caus").style.display="none";    }
    
}


cross.addEventListener("click" , function() {

    all_items.innerHTML="";
})
