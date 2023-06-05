// document.getElementById("orderForm").addEventListener("submit", function(event) {
//   event.preventDefault();

//   // Get form values
//   var name = document.getElementById("name").value;
//   var email = document.getElementById("email").value;
//   var address = document.getElementById("address").value;

//   // Display order processing message
//   var orderBtn = document.getElementById("orderBtn");
//   orderBtn.disabled = true;
//   orderBtn.innerText = "Order in progress...";

//   // Simulate order processing (replace with your actual order processing code)
//   setTimeout(function() {
//     // Display order confirmation
//     orderBtn.innerText = "Order Complete!";
//     alert("Thank you for your order, " + name + "! Your order is being prepared and will be delivered to " + address + " soon.");
//   }, 3000);
// });

// document.getElementById("orderForm").addEventListener("submit", function(event) {
//   event.preventDefault();

//   // Get form values
//   var name = document.getElementById("name").value;
//   var email = document.getElementById("email").value;
//   var address = document.getElementById("address").value;

//   // Display order processing message
//   var orderBtn = document.getElementById("btn2");
//   orderBtn.disabled = true;
//   orderBtn.innerText = "Order in progress...";

//   // Simulate order processing (replace with your actual order processing code)
//   setTimeout(function() {
//     // Display order confirmation
//     btn2.innerText = "Order Complete!";
//     alert("Thank you for your order, " + name + "! Your order is being prepared and will be delivered to " + address + " soon.");
//     // Reset the form
//     document.getElementById("orderForm").reset();
//     orderBtn.disabled = false;
//     orderBtn.innerText = "Order Now";
//   }, 5000);
// });

document.getElementById("orderForm").addEventListener("submit", function(event) {
  event.preventDefault();

  // Get form values
  var nameInput = document.getElementById("name");
  var emailInput = document.getElementById("email");
  var addressInput = document.getElementById("address");
  var orderBtn = document.getElementById("btn2");

  var name = nameInput.value;
  var email = emailInput.value;
  var address = addressInput.value;

  // Display order processing message
  orderBtn.disabled = true;
  orderBtn.innerText = "Order in progress...";

  // Simulate order processing (replace with your actual order processing code)
  setTimeout(function() {
    // Display order confirmation
    orderBtn.innerText = "Order Complete!";
    alert("Thank you for your order, " + name + "! Your order is being prepared and will be delivered to " + address + " soon.");
    
    // Reset the form
    document.getElementById("orderForm").reset();
    orderBtn.disabled = false;
    orderBtn.innerText = "Order Now";

    // Clear input values
    nameInput.value = "";
    emailInput.value = "";
    addressInput.value = "";
  }, 5000);
});







