function like(){

    //Get the Object
    let cidRef = document.querySelector("#cid");

    //Converting String value to Integer for incrementing. 
    let currentValueStr = cidRef.innerHTML;
    //pareseInt is used for conversion String to Int.
    let currentValueInt = parseInt(currentValueStr);

    currentValueInt = currentValueInt + 1;

    //Update the object
    cidRef.innerHTML = currentValueInt;


}