const counter = document.getElementById("counter");
const counterKey = document.querySelector("meta[name=\"counter\"]").content;

const url = `https://counter.darenliang.com/hit/${counterKey}`;

generateAnchor = text => `<a href="${url}">${text}</a>.`;
counter.innerHTML = generateAnchor("Loading hits");

fetch(url)
    .then(data => data.json())
    .then(response => {
        counter.innerHTML = generateAnchor(`${response.value} hits`);
    })
    .catch(_ => {
        counter.innerHTML = generateAnchor("500 Internal Server Error");
    });
