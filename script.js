body {
    font-family: 'Arial', sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f5f5f5;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
}

h1 {
    text-align: center;
    color: #333;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
}

.logo-img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
}

.logo-heading {
    text-align: center;
    color: #444;
    margin-bottom: 30px;
}

.menu-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 20px;
    margin-bottom: 30px;
}

.menu-card {
    background-color: white;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
    cursor: pointer;
}

.menu-card:hover {
    transform: translateY(-5px);
}

.menu-card img {
    width: 100%;
    height: 150px;
    object-fit: contain;
    padding: 10px;
    background-color: #f9f9f9;
}

.details {
    padding: 15px;
}

.item-name {
    font-weight: bold;
    font-size: 1.1em;
    margin-bottom: 5px;
}

.price {
    color: #e53935;
    font-weight: bold;
    margin-bottom: 10px;
}

.quantity-selector {
    display: flex;
    align-items: center;
    margin-top: 10px;
}

.quantity-btn {
    width: 30px;
    height: 30px;
    background-color: #f0f0f0;
    border: 1px solid #ddd;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color 0.2s;
}

.quantity-btn:hover {
    background-color: #e0e0e0;
}

.quantity-input {
    width: 40px;
    height: 30px;
    text-align: center;
    margin: 0 5px;
    border: 1px solid #ddd;
    border-radius: 4px;
}

.submit-btn {
    display: block;
    width: 200px;
    margin: 30px auto;
    padding: 12px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s;
    grid-column: 1 / -1;
}

.submit-btn:hover {
    background-color: #45a049;
}

.order-summary {
    background-color: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    display: none;
}

.order-summary h2 {
    margin-top: 0;
    color: #333;
}

#selectedItems {
    list-style-type: none;
    padding: 0;
}

#selectedItems li {
    padding: 8px 0;
    border-bottom: 1px solid #eee;
}

.total {
    margin-top: 20px;
    font-weight: bold;
}

.total div {
    margin-bottom: 8px;
}

.back-btn {
    display: inline-block;
    margin-top: 15px;
    padding: 8px 15px;
    background-color: #f0f0f0;
    color: #333;
    text-decoration: none;
    border-radius: 5px;
    transition: background-color 0.3s;
}

.back-btn:hover {
    background-color: #e0e0e0;
}
