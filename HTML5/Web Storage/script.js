// local storage

let result1=document.getElementById("result1");
let result2=document.getElementById("result2");

if (typeof Storage != "undefined") {
    // method 1 -set item
    localStorage.setItem("name","webgod");
    // method2
    let age;
    localStorage.age="20"   
    console.log(localStorage);

    // method1 -get item
    result1.innerHTML=localStorage.getItem("name");
    // method2
    result2.innerHTML=localStorage.age;

    // remove item
    localStorage.removeItem("age");
    console.log(localStorage);

    
} else {
    
}

// session storage
let result3=document.getElementById("result3");

if(typeof(Storage)!="undefined") {
    // setitem
    sessionStorage.setItem("hobbies","painting");
    console.log(sessionStorage);
    
    // getitem
    result3.innerHTML=sessionStorage.getItem("hobbies");

    // removeitem
    sessionStorage.removeItem("hobbies");
    console.log(sessionStorage);

}

else{

}

