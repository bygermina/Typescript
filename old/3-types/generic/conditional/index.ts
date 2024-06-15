// import '../assets/css/style.css';
/* eslint-disable */

// T extends U ? X: Y;

// type nonUndefined<T> = T extends undefined | string | number ? never : T;
//
// type SNBU = string | number | boolean | undefined;
//
// let a: nonUndefined<SNBU> = true;
//
// let e: Exclude<any, any>;

interface IHydrantA {
	name: string;
	type: 'A';
}

//
// interface IHydrantB {
// 	name: string;
// 	type: 'B';
// }
//
// interface IHydrantC {
// 	name: string;
// 	type: 'C';
// }
//
// type Hydrant = IHydrantA | IHydrantB | IHydrantC;
//
// function resetHydrants(_hydrant: Hydrant) {}
//
// function bSet(_hydrant: Exclude<Hydrant, IHydrantA | IHydrantC>) {}
//
// let h: IHydrantB = {
// 	name: 'AL-52',
// 	type: 'B',
// };
// let hc: IHydrantC = {
// 	name: 'CL-52',
// 	type: 'C',
// };
//
// resetHydrants(hc);
// bSet(hc);

// type cbArr = [() => number, () => void];
// let arr: cbArr = [() => 1, () => {}];
//
// type FirstTupleElReturnType<T> = T extends [ infer U, ...unknown[]]
// 	? U extends (...args: unknown[]) => infer R
// 		? R
// 		: never
// 	: never;
//
// const v: FirstTupleElReturnType<typeof arr> = {
// 	name: 'AL-44',
// 	type: 'A',
// };

// type FunctionParamsAndReturnType<T extends Function> = T extends (
// 	...args: [infer U, infer Y]
// ) => infer R
// 	? U | Y | R  // string | boolean
// 	: never;

// type OnlyNonFunction<T> = T extends Function ? never : T;
//
// type FunctionParamsAndReturnType<T extends Function> = T extends (...args: infer Args) => infer R
// 	? // ? OnlyNonFunction<Args[keyof Args]> | R
// 	  OnlyNonFunction<Args[Exclude<keyof Args, 'length'>]> | R
// 	: never;
//
// function fn(_a: string, _s: boolean) {
// 	return 'str';
// }
//
// const v: FunctionParamsAndReturnType<typeof fn> = null;

type FlattenType<T> = T extends Array<infer U> ? FlattenType<U> : T;

function deepFlatten<Z extends unknown[]>(_arr: Z): FlattenType<Z>[] {
	throw new Error();
}

const arr1: number[] = deepFlatten([1, 2, 3]);
const arr2: number[] = deepFlatten([1, [2, 3, 4], 3]);
const arr4: number[] = deepFlatten([1, [2, 3, 4], [[1], [[2]]]]);

// type RequireOrOmit<T extends boolean, U, P extends keyof U> = T extends true
// 	? Required<U>
// 	: Omit<U, P>;
//
// interface ITestResult {
// 	test: number;
// 	value?: () => string;
// }
//
// type Fn<T extends boolean, U, F extends keyof U> = (show: T) => RequireOrOmit<T, U, F>;
//
// function test<T extends boolean>(show: T) {
// 	type Result = RequireOrOmit<T, ITestResult, 'value'>;
// 	if (show) {
// 		return {
// 			test: 1,
// 			value: () => 'some text',
// 		} as Result;
// 	}
// 	return {
// 		test: 1,
// 	} as Result;
// }
//
// const fn1: Fn<boolean, ITestResult, 'value'> = (show: true) => {
// 	if (show) {
// 		return {
// 			test: 1,
// 			value: () => 'some text',
// 		};
// 	}
// 	return {
// 		test: 1,
// 	};
// };
//
// // test(true);
// // test(false);
// fn1(true).test;
// fn1(false).test;
//
// /*
//  {
//  test: number
//  value?: Function
//  }
//  */
