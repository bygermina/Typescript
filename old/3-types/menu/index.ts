import '../assets/css/style.css';
/* eslint-disable */
// interface IJQ {
// 	html: () => string;
// }
// declare function $(selector: string): IJQ;
// declare const vk: any;

import { generateMenu } from './menu';
import { list } from './menu/data';

$('.menu')
	.html(generateMenu(list))
	.on('click', (e: Event) => {
		const el: HTMLElement = e.target as HTMLElement;
		if (!el.classList.contains('title')) {
			return;
		}
		const parentLi: HTMLLIElement = el.parentElement as HTMLLIElement;
		parentLi.classList.toggle('menu-open');
	});
// const navMenu: HTMLDivElement = document.querySelector('.menu') as HTMLDivElement;
// navMenu.innerHTML = generateMenu(list);
// navMenu.addEventListener('click', (e: MouseEvent) => {
// 	const el: HTMLElement = e.target as HTMLElement;
// 	if (!el.classList.contains('title')) {
// 		return;
// 	}
// 	const parentLi: HTMLLIElement = el.parentElement as HTMLLIElement;
// 	parentLi.classList.toggle('menu-open');
// });
