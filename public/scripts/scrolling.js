window.addEventListener('DOMContentLoaded', () => {
  const mainMenuList = document.getElementById('main-menu-list');

  const addMenuItem = itemText => {
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', '#')
    linkElement.setAttribute('class', 'pure-menu-link');
    linkElement.appendChild(document.createTextNode(itemText));

    const listElement = document.createElement('li');
    listElement.setAttribute('class', 'menu-item pure-menu-item');
    listElement.appendChild(linkElement);

    mainMenuList.appendChild(listElement);
  }

  for (let i = 0; i < 10; i++) {
    addMenuItem('<< Extra Item >>');
    addMenuItem('<< For Scrolling >>');
  }
});
