// import '../assets/css/style.css';
/* eslint-disable */

// function average(a: number, b: number, c: number): string {
// 	const avg: number = (a + b + c) / 3;
// 	return `Average is ${avg}`;
// }

// function average(a: number, b?: number, c?: number): string {
// 	if (b === undefined) {
// 		b = 0;
// 	}
// 	if (c === undefined) {
// 		c = 0;
// 	}
// 	const avg: number = (a + b + c) / 3;
// 	return `Average is ${avg}`;
// }

// function average(a: number, b: number = 0, c: number = 0): string {
// 	const avg: number = (a + b + c) / 3;
// 	return `Average is ${avg}`;
// }

function isString(arg: sn): arg is string {
	return !!(arg as any).blink;
}
//
type sn = string | number;

function average(a: string, b: number): string;
function average(a: number, b: string): string;
function average(a: number, b: number, c: number): string;
function average(...args: sn[]): string {
	let total: number = 0;
	for (let arg of args) {
		if (isString(arg)) {
			total += Number(arg);
			continue;
		}
		total += arg;
	}
	const avg: number = total / args.length;
	return `Average is ${avg}`;
}
//
// average(1, '2');
// average('1', 2);
// average(1);
// average(1, 2);
// average(1, 2);
// average(1, 2, 1, 2, 2);
// average(1, 2, 2, 43, 4, 2, 3, 4);
// average(1, '2', 3);
// const a: number = average(1, 2, 3);
//
// function test(show: true): { test: number; value: () => string };
// function test(show: false): { test: number };
// function test(show: boolean) {
// 	if (show) {
// 		return {
// 			test: 1,
// 			value: () => 'some text',
// 		};
// 	}
// 	return {
// 		test: 1,
// 	};
// }
//
// type IOverload = {
// 	(param: number): number[];
// 	(param: object): object[];
// };
//
// const overloadedArrowFunc: IOverload = (param: any) => {
// 	return [param, param];
// };
//
// let val = overloadedArrowFunc(4);

// function getFullName(this: { name: string; surname: string }) {
// 	return `${this.name} ${this.surname}`;
// }
//
// let account = {
// 	name: 'Ihor',
// 	surname: 'Nepipenko',
// 	getFullName,
// };
//
// account.getFullName();
//
// document.addEventListener<'click'>('click', getFullName.bind(account));
