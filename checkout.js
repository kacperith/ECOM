// JavaScript for Checkout Page
document.getElementById("checkout-form").addEventListener("submit", function(e) {
    e.preventDefault();
  
    // Form data validation (simple)
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const address = document.getElementById("address").value;
    const paymentMethod = document.getElementById("payment").value;
  
    if (name && email && address && paymentMethod) {
      alert("Thank you for your purchase! You will receive a confirmation email soon.");
      // You can implement actual payment integration here
      window.location.href = "index.html";  // Redirect to homepage after submission
    } else {
      alert("Please fill in all the fields.");
    }
  });
  