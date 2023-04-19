import './index.html';
import './index.scss';

import {initReserve} from './modules/initReserve.js';
import {initService} from './modules/initService.js';
import {initSlider} from './modules/initSlider.js';


const init = () => {
	initSlider();
	initService();
	initReserve();
};
window.addEventListener('DOMContentLoaded', init);
