function register(){
    const name = document.querySelector("#name");
    const addhar = document.querySelector("#addhar");
    const vehicle = document.querySelector("#vehicle");
    const bookStartDate = document.querySelector("#bookstartdate");
    const bookEndDate = document.querySelector("#bookenddate");
    
    let info = `
    <div>
    <span>${name.value}</span>
    <span>${addhar.value}</span>
    <span>${vehicle.value}</span>
    <span>${bookStartDate.value}</span>
    <span>${bookEndDate.value}</span>
    <span style="margin-left: 16px; cursor: pointer;">&#10060;</span>
    </div>`;

    let dynamicObject  = document.createElement("template");
    dynamicObject.innerHTML = info;

    let parent  = document.querySelector("#parent");
    parent.insertBefore(dynamicObject.content,parent.firstChild);

    const form  = document.querySelector("#formm");
    form.reset();

    
}