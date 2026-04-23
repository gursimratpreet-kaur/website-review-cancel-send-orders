/*  Name : Gursimratpreet Kaur
Student ID: 991845418 
Assignment-4
Date Completed: April 5, 2026*/
document.addEventListener("DOMContentLoaded" , set);
const form = document.forms[0];
const reviewOrder = document.getElementById("review");
const addOrder = document.getElementById("add");
const cancelOrder = document.getElementById("cancel");
const sendOrder = document.getElementById("send");

const tId = form.txtID;
const tName = form.txtName;
const city = form.txtCity;
const payment = form.radPay;
const shipment = form.shipMethod;
const tDisplay = form.summary;


//so that add button is diabled at the beginning
function set(){
    addOrder.disabled = true;
    cancelOrder.disabled = true;
}
reviewOrder.addEventListener("click" , display);


//To display data in the textarea on clicking review
function display(){
    let data = "";
    if(tId.value === ""){
        alert("Enter ID!");
        tId.focus();
    }
    else{
        data+=tId.value;
        if(tName.value === ""){
            alert('Enter Name!');
            tName.focus();
        }
        else{
            data = data + "\n" + tName.value;
            if(city.value === ""){
                alert("Enter a City!");
                city.focus();
            }
            else{
                data = data +"\n" + city.value + "\n" + payment.value + "\n" + shipment.value;
                tDisplay.value = data;
                reviewOrder.disabled = true;
                addOrder.disabled = false;
                cancelOrder.disabled = false;
            }
        }
    }   
}

//Creating shipment objects
class Shipment{
    constructor(id){
        this.id = id;
    }
    setName(name){
        this.name = name;
    }
    setCity(city){
        this.city = city;
    }
    setPayment(payMethod){
        this.payment = payMethod;
    }
    setShipment(shipMethod){
        this.shipment = shipMethod;
    }
}
let shipmentDetails = [];

//Adding orders
addOrder.addEventListener("click" , createOrder);
function createOrder(){
    const one = new Shipment(tId.value);
    one.setName(tName.value);
    one.setCity(city.value);


    one.setPayment(payment.value);

    one.setShipment(shipment.value);
    shipmentDetails.push(one);

    addOrder.disabled = true;
    reviewOrder.disabled = false;
    tId.value = "";
    tName.value = "";
    city.value = "";
    tDisplay.value = "";
}

cancelOrder.addEventListener("click" , cancel);
function cancel(){
    tId.value = "";
    tName.value = "";
    city.value = "";
    tDisplay.value = "";
    reviewOrder.disabled = false;
    addOrder.disabled = true;
}


//To send orders to the next page
sendOrder.addEventListener("click" , send);
function send(){
    if(shipmentDetails.length === 0){
        alert("No data available");
    }
    else{
        const transform = JSON.stringify(shipmentDetails);
        window.sessionStorage.setItem("list" , transform);
        location.replace("Content/DisplayTable.html")
    }   
}