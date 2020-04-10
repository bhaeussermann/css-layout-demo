window.addEventListener('DOMContentLoaded', () => {
  for (const tabElement of document.getElementsByClassName('tab')) {
    tabElement.addEventListener('click', function() {
      setActiveTab(this);
    });
  }
});

function setActiveTab(activeTabElement) {
  const tabsElement = activeTabElement.parentElement;
  for (const childTab of tabsElement.children) {
    childTab.classList.remove('tab-active');
    const tabContentElement = document.getElementById(childTab.getAttribute('data-tab-id'));
    tabContentElement.classList.remove('tab-content-active');
  }

  activeTabElement.classList.add('tab-active');
  const activeTabContentElement = document.getElementById(activeTabElement.getAttribute('data-tab-id'));
  activeTabContentElement.classList.add('tab-content-active');
}
