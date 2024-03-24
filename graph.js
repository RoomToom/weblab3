// Припускаємо, що cartData - це масив об'єктів з кошика, що містить назву та кількість кожного товару
// Наприклад: [{name: "Товар 1", quantity: 2}, {name: "Товар 2", quantity: 1}, ...]

document.addEventListener('DOMContentLoaded', () => {
    // Тут вам потрібно буде отримати дані з кошика, які можуть бути збережені у localStorage, cookies, або отримані через запит до сервера
    const cartData = [
        {name: "Товар 1", quantity: 2},
        {name: "Товар 3", quantity: 4},
        {name: "Товар 5", quantity: 3},
        {name: "Товар 6", quantity: 8},
        {name: "Товар 7", quantity: 6},
    ];
    
    const ctx = document.getElementById('popularityChart').getContext('2d');
    const labels = cartData.map(item => item.name);
    const data = {
        labels: labels,
        datasets: [{
            label: 'Популярність товару',
            data: cartData.map(item => item.quantity),
            backgroundColor: [
                'rgba(255, 99, 132, 1)', // для кожного товару можете задати свій колір
                'rgba(54, 162, 235, 1)',
                'rgba(0,255,0, 1)',
                'rgb(238, 130, 238)',
                'rgb(255, 165, 0)'
                // ...інші кольори...
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(0,255,0,0.3)',
                'rgb(238, 130, 238)',
                'rgb(255, 165, 0)'
                // ...інші кольори...
            ],
            borderWidth: 1
        }]
    };

    const popularityChart = new Chart(ctx, {
        type: 'pie', // або інший тип діаграми, наприклад, 'line', 'pie', тощо
        data: data,
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});
