function addEvents(events){
    const parentSection = document.createElement("section");
    parentSection.classList.add("parent");
    eventContainer.appendChild(parentSection);

    const childDiv = document.createElement("div");
    childDiv.classList.add("childText");
    parentSection.appendChild(childDiv);

    childText.innerHTML = 
    `
    <h1>$events.title</h1>
    <p1>Description</p1>
    <p1>Date</p1>
    <p1>Time</p1>
    `
}
