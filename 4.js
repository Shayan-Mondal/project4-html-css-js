function dishoom(){
    let a = document.querySelector("#id1");
    let a1 = a.innerHTML;

    let dynamicObject = document.createElement('div');
    dynamicObject.innerHTML = `Dishoom${a1}`;
    dynamicObject.style.fontSize = "xx-large";

    let b = document.querySelector("#parent");
    b.insertBefore(dynamicObject,b.children[0]);
}

function thappad(){
    let a = document.querySelector("#id2");
    let a1 = a.innerHTML;

    let dynamicObject = document.createElement('div');
    dynamicObject.innerHTML = `Thappad${a1}`;

    let b = document.querySelector("#parent");
    b.insertBefore(dynamicObject,b.children[0]);
}