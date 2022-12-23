const contents = document.querySelectorAll('.content');
const listItems = document.querySelectorAll('nav ul li');

listItems.forEach((item, idx) => {
  item.addEventListener('click', () => {
    hideActiveShow();

    item.classList.add('active');
    contents[idx].classList.add('show');
  });
});

function hideActiveShow() {
  contents.forEach((content) => {
    content.classList.remove('show');
  });

  listItems.forEach((item) => {
    item.classList.remove('active');
  });
}
