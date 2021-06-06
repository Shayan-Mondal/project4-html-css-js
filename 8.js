function post(){
    let a = document.querySelector("#in1");

    if(a.value == ""){
        alert("Enter your post");
        return;
    }

    let b = `
        <div>
            <span>${a.value}</span>
            <mark>0</mark>
            <span onclick="like(this)" style="cursor: pointer;">&#128077;</span>
            <mark>0</mark>
            <span onclick="dislike(this)" style="cursor: pointer;" >&#128078;</span>
        </div>
    `;

    let dynamicObject = document.createElement('div');
    dynamicObject.innerHTML = b;

    let parent = document.querySelector("#parent");
    parent.insertBefore(dynamicObject,parent.children[2]);

    a.value = "";

}   
function like(currentObj){

   

    let counterObj = currentObj.previousElementSibling; //getting the counter value from the line above the button.
    let b = counterObj.innerHTML; //getting the value from html.

    let inInt = parseInt(b); //converting string into int.
    counterObj.innerHTML = inInt + 1;       //incrementing the count.
}
function dislike(currentObj){

   

    let counterObj = currentObj.previousElementSibling; //getting the counter value from the line above the button.
    let b = counterObj.innerHTML; //getting the value from html.

    let inInt = parseInt(b); //converting string into int.
    counterObj.innerHTML = inInt + 1;       //incrementing the count.
}

    
