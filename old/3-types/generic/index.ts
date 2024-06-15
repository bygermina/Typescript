// import '../assets/css/style.css';
/* eslint-disable */

// function fn(a: any, b:any){
//
// }
//
// fn(1, 2);
// fn(1, ()=>{})

// interface/types/fn/class
// interface IInfo {
// 	male: boolean;
// }
//
// interface IAcc<Info extends IInfo = IInfo, Id extends string | number = string> {
interface IAcc<Info, Id extends string | number = string> {
	id: Id;
	name: string;
	info: Info;
}

let user: IAcc<{ male: boolean; subjects: string[] }> = {
	id: '123qsd',
	name: 'Eugene',
	info: {
		male: true,
		subjects: ['ts'],
	},
};

// let admin: IAcc<{ male: boolean }, string> = {
// let admin: IAcc<() => void, string> = {
// 	id: '1',
// 	name: 'Eugene',
// 	info: () => {},
// };
// //
// let arr: Array<number> = [1, 2, 3];

// interface IA {
// 	a: string;
// }
//
// interface IAA {
// 	a: string;
// }
//
// class A {
// 	a = 1;
// }
//
// class B {
// 	a = 1;
// }
//
// let a: A = new B();

interface IUser {
	name: string;
	age: number;
}

interface IProduct {
	name: string;
	price: number;
}

interface IState {
	user: IUser;
	products: IProduct[];
	favorites: IProduct[];
}

const state: IState = {
	user: { name: 'Ihor', age: 35 },
	products: [
		{ name: 'IPhone 8', price: 100 },
		{ name: 'IPhone XR', price: 150 },
	],
	favorites: [
		{ name: 'IPhone 8', price: 100 },
		{ name: 'IPhone XR', price: 150 },
	],
};

// type TName<T>
// interface IName<>
// class CName<> {}
// <K extends keyof S>(state: S, field: K)

// type Select<S> = <K extends keyof S>(state: S, field: K) => S[K];
//
// const select: Select<IState> = (storeState, field) => storeState[field];
//
// const user1: IUser = select(state, 'user');
// const products: IProduct[] = select(state, 'favorites');
//
// const a =
// 	<T extends Function>(cb: T) =>
// 	(...args: any[]) =>
// 		cb(...args);
// a(1);
