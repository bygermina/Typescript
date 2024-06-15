// import '../assets/css/style.css';
/* eslint-disable */

/**Object*/
// interface IPoint {
// 	x: number;
// 	y: number;
// }
//
// type TPoint = {
// 	x: number;
// 	y: number;
// };
//
// let p: IPoint = {
// 	x: 1,
// 	y: 1,
// };

/*Function */

// interface ISum {
// 	(x: number, y: number): number;
// }
//
// type TSum =  (x: number, y: number)=> number ;
//
// let sum: TSum = (a: number, b: number) => {
// 	return a + b;
// };

/*Extend*/

interface IX {
	x: number;
}

interface IY {
	y: number;
}

type TX = {
	x: number;
};
type TY = {
	y: number;
};

type TPoint = TX & IX;

interface IPoint extends IX, TY {}

/*Implement*/

class Point implements IPoint {
	public x = 1;
	public y = 2;
	public z = 2;
}

type CB = () => number;

let ab: { a: { c: number } } & { b: string; a: { z: string } } = { a: { c: 1, z: 's' }, b: 's' };

interface IPoint {
	z: number;
}
