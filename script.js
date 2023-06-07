
document.getElementById("orderForm").addEventListener("submit", function(event) {
  event.preventDefault();

  // Get form values
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var address = document.getElementById("address").value;

  // Display order processing message
  var orderBtn = document.getElementById("btn2");
  orderBtn.disabled = true;
  orderBtn.innerText = "Order in progress...";

  // Simulate order processing (replace with your actual order processing code)
  setTimeout(function() {
    // Display order confirmation
    btn2.innerText = "Order Complete!";
    alert("Thank you for your order, " + name + "! Your order is being prepared and will be delivered to " + address + " soon.");
    // Reset the form
    document.getElementById("orderForm").reset();
    orderBtn.disabled = false;
    orderBtn.innerText = "Order Now";
  }, 5000);
});


//Random quotes api
var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

var response = fetch("https://api.quotable.io/random", requestOptions)
  .then(response => response.json())
  .then(data => {
    var quoteDiv = document.getElementById("quoteDiv");
    quoteDiv.innerHTML = data.content;
  })
  .catch(error => console.log('error', error));





