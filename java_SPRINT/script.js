// Test console.log()
console.log("Hello, this is the JavaScript file!");


console.log("Testing console.log() statement.");

fetch("data.json")
    .then(response => response.json())
    .then(data => {
        // Step 4: Iterate over records and display key-value pair
        data.forEach(item => {
            console.log(item.name); // Displaying name for testing
            displayData(item); // Step 5: Display data in HTML
        });
    })
    .catch(error => console.error("Error fetching JSON:", error));



function getNameDescription(name) {
    return `Name: ${name}`;
}

function getAgeDescription(age) {
    return `Age: ${age}`;
}

function getAddressDescription(address) {
    return `Address: ${address.street}, ${address.city}, ${address.country}`;
}

function displayData(data) {
    const jsonDataDiv = document.getElementById("jsonData");
    const dataDescription = `
        <p>${getNameDescription(data.name)}</p>
        <p>${getAgeDescription(data.age)}</p>
        <p>${getAddressDescription(data.address)}</p>
        <hr>
    `;
    jsonDataDiv.innerHTML += dataDescription;
}
