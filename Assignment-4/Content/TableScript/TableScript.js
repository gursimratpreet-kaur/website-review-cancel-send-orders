/*  Name : Gursimratpreet Kaur
Student ID: 991845418 
Assignment-4
Date Completed: April 5, 2026*/
document.addEventListener("DOMContentLoaded" , displayTables);

const returnbtn = document.getElementById("return");
const theTable = document.getElementById("firstTable");

//To return to home page
returnbtn.addEventListener("click" , returnHome);
function returnHome(){
    location.replace("../index.html");
}
let shipmentDetails = [];

//Craeting table for orders
function displayTables(){
    const shipments = window.sessionStorage.getItem("list");
    shipmentDetails = JSON.parse(shipments);

    let tableData = "<tr><th>ID</th><th>Name</th><th>City</th><th>Pay</th><th>Ship</th></tr>";

    for(let record of shipmentDetails){
        
        tableData = tableData + "<tr>" + "<td>" + record.id + "</td>" + "<td>" + record.name + "</td>" + 
        "<td>" + record.city + "</td>" + "<td>" + record.payment + "</td>" + "<td>" + record.shipment + "</td>" +
        "</tr>"; 
        theTable.innerHTML = tableData;
    }

}
