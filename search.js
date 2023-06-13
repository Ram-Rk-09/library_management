const orders = [
    { id: 1, customer: 'Rithu', product: ' Java', total: 100 },
    { id: 2, customer: 'Rk', product: 'C++', total: 150 },
    { id: 3, customer: 'Sanjay', product: 'C', total: 200 },
    { id: 4, customer: 'Yuvan', product: 'Python', total: 250 },
    { id: 5, customer: 'Balaji', product: 'React', total: 220 },
    { id: 6, customer: 'Praveen', product: 'Angular', total: 300 },
    { id: 7, customer: 'Karthi', product: 'JAVA SCRIPT', total: 340 },
    { id: 8, customer: 'Logu', product: 'HTML', total: 2800 },
    { id: 9, customer: 'Sowraj', product: 'CSS', total: 320 },
    { id: 10, customer: 'Chandeesh', product: 'OS', total: 310 },
    { id: 11, customer: 'Tharun', product: 'DBMS', total: 200 },
    { id: 12, customer: 'Raghul', product: 'OOPS', total: 200 },
    { id: 13, customer: 'Akilan', product: 'Data Structure', total: 200 },
    { id: 14, customer: 'Ira', product: 'LEO', total: 1000 },
    { id: 15, customer: 'Ram', product: 'Master', total: 500 },
    { id: 16, customer: 'Nimmi', product: 'Vikram', total: 700 },
    { id: 17, customer: 'Ammu', product: 'Kaithi', total: 250 },
    { id: 18, customer: 'Renish', product: 'RRR', total: 300 },
    { id: 19, customer: 'ADMIN', product: 'DEVREV', total: 25000 },
  ];
  
  const searchInput = document.getElementById('search-input');
  const searchButton = document.getElementById('search-button');
  const resultsContainer = document.getElementById('results-container');
  

  searchButton.addEventListener('click', handleSearch);
  
  function handleSearch() {
    const searchValue = searchInput.value.toLowerCase();
  
  
    const filteredOrders = orders.filter(order => {
      const { id, customer, product } = order;
      return (
        id.toString().includes(searchValue) ||
        customer.toLowerCase().includes(searchValue) ||
        product.toLowerCase().includes(searchValue)
      );
    });
  
    
    displayResults(filteredOrders);
  }
  
  function displayResults(orders) {
    
    resultsContainer.innerHTML = '';
  
    if (orders.length === 0) {
      const message = document.createElement('p');
      message.textContent = 'No Books found.';
      resultsContainer.appendChild(message);
    } else {
      orders.forEach(order => {
        const orderCard = document.createElement('div');
        orderCard.classList.add('order');
        
        const title = document.createElement('div');
        title.classList.add('title');
        title.textContent = `Order #${order.id}`;
        orderCard.appendChild(title);
        
        const info = document.createElement('div');
        info.classList.add('info');
        info.textContent = `Customer: ${order.customer} - Product: ${order.product} - Total: Rs.${order.total}`;
        orderCard.appendChild(info);
        
        resultsContainer.appendChild(orderCard);
      });
    }
  }
  