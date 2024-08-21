document.addEventListener('DOMContentLoaded', function() {
  function test(){
    const preloader = document.querySelector('.preloader');
    const itemContainer = document.querySelector('.item-container');
    preloader.style.display = 'flex';
    setTimeout(() => {
        preloader.style.display = 'none';
        itemContainer.style.display = 'flex';
    }, 1000);
    
  }
  fetch('https://backend-ax01.onrender.com/items')
  // fetch('http://localhost:3000/items')
      .then(response => response.json())
      .then(data => {console.log(data);
        const itemContainer = document.querySelector('.item-container');
        itemContainer.innerHTML = '';
        data.forEach(item => {
          const itemDiv = document.createElement('div');
          itemDiv.classList.add('item');
          // itemDiv.onclick = () => selectItem(item.Product_Name, item.Specificaton, item.Price, item.Image_url);
          const itemImage = document.createElement('img');
          // itemImage.src =item.image_url;
          itemImage.src ="alt_img.png";
          itemImage.alt = item.p_name;
          const itemName = document.createElement('h3');
          itemName.textContent = item.p_name;
          const itemSpecification = document.createElement('p');
          itemSpecification.textContent = `Specification: ${item.specs}`;
          const itemRate = document.createElement('p');
          itemRate.textContent = `Rate: ${item.cost}`;
          const itemloc = document.createElement('p');
          itemloc.textContent=item.loc;
          itemDiv.appendChild(itemImage);
          itemDiv.appendChild(itemName);
          itemDiv.appendChild(itemSpecification);
          itemDiv.appendChild(itemRate);
          itemDiv.appendChild(itemloc);
          itemContainer.appendChild(itemDiv);
        });
        test();
}).catch(error => console.error('Error fetching items:', error));
});