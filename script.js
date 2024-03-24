document.addEventListener('DOMContentLoaded', () => {
    applyFilter('all'); // Відразу показати всі картки при завантаженні сторінки
    setTimeout(() => {
      showModal('subscriptionModal');
    }, 5000);
  });
  
  const data = [
    { id: 1, category: 'category1', description: 'Опис 1', image: 'drink2.webp', price: 1000 },
    { id: 2, category: 'category2', description: 'Опис 2', image: 'image.webp', price: 10 },
    { id: 3, category: 'category1', description: 'Опис 3', image: 'drink3.webp', price: 110 },
    { id: 4, category: 'category2', description: 'Опис 4', image: 'drink4.webp', price: 120 },
    { id: 5, category: 'category1', description: 'Опис 5', image: 'drink5.webp', price: 90 },
    { id: 6, category: 'category2', description: 'Опис 6', image: 'image.webp', price: 150 },
    { id: 7, category: 'category1', description: 'Опис 7', image: 'image.webp', price: 100 },
    { id: 8, category: 'category2', description: 'Опис 8', image: 'drink4.webp', price: 100 },
    { id: 9, category: 'category1', description: 'Опис 9', image: 'drink3.webp', price: 300 },
    { id: 10, category: 'category2', description: 'Опис 10', image: 'drink2.webp', price: 100 },
  ];
  
  function applyFilter(category) {
    const container = document.getElementById('cardsContainer');
    container.innerHTML = '';
    
    const filteredData = category === 'all' ? data : data.filter(item => item.category === category);
    
    filteredData.forEach(item => {
      const card = document.createElement('div');
      card.classList.add('card');
      card.innerHTML = `
          <img src="${item.image}" alt="Image ${item.id}" style="width:100%; height:auto;">
          <h4>Картка ${item.id}</h4>
          <p>${item.description}</p>
          <p class="price">Ціна: ${item.price} грн</p>
          <button onclick="addToCart(${item.id})">Додати в кошик</button>
      `;
      container.appendChild(card);
  });
  

}
  
  // Решта функцій залишаються без змін
  
  
  function showModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = 'flex';
    if (modalId === 'advertisementModal') {
      setTimeout(() => {
        document.getElementById('closeAdBtn').disabled = false;
      }, 5000); // Зробіть кнопку закриття активною через 5 секунд
    }
  }
  
  function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = 'none';
  }
  
  function subscribe() {
    // Логіка підписки
    closeModal('subscriptionModal');
    // Показати повідомлення про подяку за приєднання
  }
  
  // Викликати showModal('advertisementModal') на певній події, наприклад, після прокрутки сторінки на 50% або після 10 секунд на сайті.
  
  const cart = {};

function addToCart(itemId) {
    const item = data.find(item => item.id === itemId);
    if (cart[itemId]) {
        cart[itemId].quantity += 1; // Збільшуємо кількість, якщо товар вже в кошику
    } else {
        cart[itemId] = { ...item, quantity: 1 }; // Додаємо новий товар з кількістю 1
    }
    updateCartModal();
}

function toggleCart() {
  const modal = document.getElementById('cartModal');
  modal.style.display = modal.style.display === 'flex' ? 'none' : 'flex';
  updateCartModal();
}

function removeFromCart(itemId) {
    if (cart[itemId] && cart[itemId].quantity > 1) {
        cart[itemId].quantity -= 1; // Зменшуємо кількість
    } else {
        delete cart[itemId]; // Видаляємо товар з кошика
    }
    updateCartModal();
}

function updateCartModal() {
    const container = document.getElementById('cartItemsContainer');
    container.innerHTML = ''; // Очистити контейнер перед додаванням нових елементів
    let total = 0;
    Object.values(cart).forEach(item => {
        const itemTotalPrice = item.price * item.quantity;
        total += itemTotalPrice;
        const itemElement = document.createElement('div');
        itemElement.innerHTML = `
            <img src="${item.image}" alt="Image ${item.id}" style="width:50px; height:auto;">
            <span>${item.description}</span>
            <span class="price">${item.price} грн</span>
            <span class="quantity">Кількість: 
                <button onclick="removeFromCart(${item.id})">-</button>
                ${item.quantity}
                <button onclick="addToCart(${item.id})">+</button>
            </span>
        `;
        container.appendChild(itemElement);
    });

    // Додати елемент для відображення загальної суми
    const totalElement = document.createElement('div');
    totalElement.innerHTML = `<strong>Загальна сума: ${total} грн</strong>`;
    totalElement.classList.add('total');
    container.appendChild(totalElement);
}

// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if ((document.body.scrollTop > document.body.scrollHeight / 2) || (document.documentElement.scrollTop > document.documentElement.scrollHeight / 2)) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  window.scrollTo({top: 0, behavior: 'smooth'});
}