function emoji(currentobj , message ){
   
    let a1 = currentobj.innerHTML;

    let dynamicObject = document.createElement('div');
    dynamicObject.innerHTML = `${message}${a1}`;
    dynamicObject.style.fontSize = "xx-large";

    let b = document.querySelector("#parent");
    b.insertBefore(dynamicObject,b.children[0]);
}

