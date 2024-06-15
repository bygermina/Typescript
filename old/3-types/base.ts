// import '../assets/css/style.css';
// interface IUserAccount {
// 	name: string;
// 	age: number;
// }

//
// let user: IUserAccount = { name: 'Ihor', age: 35 };

// let user = { name: 'Ihor', age: 35 };
//
// let p: IUserAccount = user;

// let a: HTMLElement;
// class P {
// 	public x = 1;
//
// 	private y = 1;
//
// 	public constructor() {
// 		console.log(this.y);
// 	}
// }
//
// //
// const p: P = { x: 2, y: 1 };
//
// for (let k in IUserAccount) {
// }
/* eslint-disable */
let n: number = 1;
n = 0x0201;
n = NaN;
n = Infinity;
n.toFixed();

let str: string = 's';

let b: boolean = true;

let nill: null = null;
let und: undefined = undefined;

let bInt: bigint = 4n;

const key1 = Symbol('key1');
const key2: symbol = Symbol('key1');
const key3: symbol = Symbol('key1');

const strictObj = {
	[key1]: 1,
	[key2]: 2,
	[key3]: 3,
};

const v1 = strictObj[key1];
