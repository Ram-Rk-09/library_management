document.addEventListener("DOMContentLoaded", function() {
  const cartItems = document.getElementById("cart-items");
  const total = document.getElementById("total");
  const addButtons = document.getElementsByClassName("add-btn");

  let totalPrice = 0;

  Array.from(addButtons).forEach(function(button) {
    button.addEventListener("click", function() {
      const book = button.parentNode;
      const bookName = book.querySelector("h3").textContent.trim();
      const bookPrice = parseFloat(book.dataset.price);

      const cartItem = document.createElement("li");
      cartItem.innerHTML = `
        <div class="book-info">
          <h3>${bookName}</h3>
          
        </div>
        <button class="remove-btn">Remove</button>
      `;
      cartItems.appendChild(cartItem);

      

      const removeButton = cartItem.querySelector(".remove-btn");
      removeButton.addEventListener("click", function() {
        cartItems.removeChild(cartItem);
        totalPrice -= bookPrice;
        total.textContent = "Total: Rs." + totalPrice.toFixed(2);
      });
    });
  });

  const checkoutButton = document.getElementById("checkout-btn");
  checkoutButton.addEventListener("click", function() {
    alert("Thank you for your purchase!");
    cartItems.innerHTML = "";
    totalPrice = 0;
    total.textContent = "Total: RS.0";
  });
});
