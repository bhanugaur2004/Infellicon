function toggleMenu(title) {
    const menuItems = title.nextElementSibling;
  
    if (menuItems.style.display === 'block') {
      menuItems.style.display = 'none';
      title.classList.remove('active');
    } else {
      menuItems.style.display = 'block';
      title.classList.add('active');
    }
  }


  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');
  const currentDate = `${year}-${month}-${day}`;
  document.getElementById("dateInput").value = currentDate;