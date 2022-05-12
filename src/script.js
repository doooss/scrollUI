// dom select
const wrapper = document.querySelector('.wrapper');
const page1 = document.getElementById('page_1');
const page2 = document.getElementById('page_2');
const page3 = document.getElementById('page_3');
const page4 = document.getElementById('page_4');
const page5 = document.getElementById('page_5');

const offSetHeights = [page1.offsetHeight, page2.offsetHeight, page3.offsetHeight, page4.offsetHeight];
const heightCoordinates = [0];

offSetHeights.reduce((acc, cur) => {
  heightCoordinates.push(acc + cur);
  return acc + cur;
}, 0);

let [currentPage, startPage, endPage] = [1, 1, 5];

const goPage = (page) => {
  wrapper.scrollTo({ top: heightCoordinates[page - 1] });
};

const nextPage = () => {
  if (currentPage === endPage) return;
  currentPage++;
  goPage(currentPage);
};

const prevPage = () => {
  if (currentPage === startPage) return;
  currentPage--;
  goPage(currentPage);
};

wrapper.addEventListener('scroll', () => {
  const scrollTop = wrapper.scrollTop;
  if (scrollTop < heightCoordinates[1]) {
    currentPage = 1;
  } else if (scrollTop < heightCoordinates[2]) {
    currentPage = 2;
  } else if (scrollTop < heightCoordinates[3]) {
    currentPage = 3;
  } else if (scrollTop < heightCoordinates[4]) {
    currentPage = 4;
  } else {
    currentPage = 5;
  }
  switch (currentPage) {
    case 1:
      wrapper.style.background = 'blue';
      break;
    case 2:
      wrapper.style.background = 'yellow';
      break;
    case 3:
      wrapper.style.background = 'darkcyan';
      break;
    case 4:
      wrapper.style.background = 'purple';
      break;
    case 5:
      wrapper.style.background = 'darkslateblue';
      break;
    default:
      break;
  }
});

let [startY, endY] = 0;

window.addEventListener('touchstart', (e) => {
  startY = e.changedTouches[0].clientY;
});

window.addEventListener('touchend', (e) => {
  endY = e.changedTouches[0].clientY;
  if (endY - startY < 0) {
    nextPage();
  } else {
    prevPage();
  }
});
