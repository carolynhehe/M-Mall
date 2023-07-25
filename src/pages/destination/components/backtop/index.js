import Backtop from 'components/backtop';

const backtopEl = document.querySelector('.backtop');
const scrollContainer = document.getElementById('destination-content');


new Backtop (backtopEl,100,scrollContainer.offsetHeight,scrollContainer);