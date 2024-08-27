document.addEventListener('DOMContentLoaded', function() {
    const categorySelect = document.getElementById('category');
    const hiddenFields = document.querySelectorAll('.hidden-field');
    const productInput = document.getElementById('product');
    const suggestionsBox = document.getElementById('suggestions');
    const quantityField = document.getElementById('quantity').parentElement;
    const priceField = document.getElementById('price').parentElement;
    const locField = document.getElementById('loc').parentElement;
    const submitButton = document.querySelector('.submit-button');
    const closeButton = document.querySelector('.close-button');
    let products;
    //  fetch('http://localhost:3000/products')
    fetch('https://backend-ax01.onrender.com/products')
    .then(response => response.json())
    .then(data => {
        const uniqueCategories = new Set();
        data.forEach(item => {
            uniqueCategories.add(item.category);
        });
        uniqueCategories.forEach(category=>{
            const option=document.createElement('option');
            option.innerHTML=category;
            option.value=category;
            categorySelect.appendChild(option);
        });
        products=data;

    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });


    function checkFields() {
        if (productInput.value && document.getElementById('quantity').value && document.getElementById('price').value&& document.getElementById('loc').value) {
            submitButton.style.display = 'block';
        } else {
            submitButton.style.display = 'none';
        }
    }
    categorySelect.addEventListener('change', function() {
        if (categorySelect.value) {
            hiddenFields.forEach(field => field.style.display = 'block');
        } else {
            hiddenFields.forEach(field => field.style.display = 'none');
        }
        quantityField.style.display = 'none';
        priceField.style.display = 'none';
        locField.style.display = 'none';
        submitButton.style.display = 'none';
    });
    productInput.addEventListener('input', function() {
        const query = productInput.value.toLowerCase();
        const category = categorySelect.value;
        const filteredProducts = products.filter(product => 
            product.p_name.toLowerCase().includes(query) && 
            (category === '' || product.category === category)
        );

        suggestionsBox.innerHTML = '';
        if (filteredProducts.length > 0) {
            filteredProducts.forEach(product => {
                const suggestionItem = document.createElement('div');
                suggestionItem.classList.add('suggestion-item');
                suggestionItem.textContent = product.p_name;
                suggestionsBox.appendChild(suggestionItem);
                suggestionItem.addEventListener('click', function() {
                    productInput.value = product.p_name;
                    suggestionsBox.style.display = 'none';
                    quantityField.style.display = 'block';
                    priceField.style.display = 'block';
                    locField.style.display = 'block';
                    checkFields();
                });
            });
            suggestionsBox.style.display = 'block';
        } else {
            suggestionsBox.style.display = 'none';
        }
    });
    document.addEventListener('click', function(event) {
        if (!productInput.contains(event.target) && !suggestionsBox.contains(event.target)) {
            suggestionsBox.style.display = 'none';
        }
    });
    document.getElementById('quantity').addEventListener('input', checkFields);
    document.getElementById('price').addEventListener('input', checkFields);
    document.getElementById('loc').addEventListener('input', checkFields);
    closeButton.addEventListener('click', function() {
        window.location.href = 'index.html';
    });
});
const form = document.getElementById('productForm');
// form.action="http://localhost:3000/submit";
form.action='https://backend-ax01.onrender.com/submit'
form.method="POST"
document.addEventListener('DOMContentLoaded', () => {
    form.addEventListener('submit', async (event) => {
        event.preventDefault(); // Prevent the default form submission
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        data.seller_id = 1;
        console.log(data);
        try {
            const response = await fetch(form.action, {
                method: form.method,
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                alert('Form submitted successfully!');
            } else {
                alert('Failed to submit the form.');
            }
        } catch (error) {
            alert('An error occurred: ' + error.message);
        }
    });
});
