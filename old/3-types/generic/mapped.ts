// import '../assets/css/style.css';
/* eslint-disable */

// { [P in keyof T ]: X}

// interface IPerson {
// 	readonly name: string;
// 	readonly age: number;
// 	info: {
// 		readonly male: boolean;
// 	};
// 	subjects?: string[];
// }

// let p: Partial<any>
//
// type NotReadOnlyAndNonOptional<T> = {
// 	-readonly [Ppp in keyof T]-?: T[Ppp] extends object ? NotReadOnlyAndNonOptional<T[Ppp]> : T[Ppp];
// };
//
// let p: NotReadOnlyAndNonOptional<IPerson> = {
// 	name: 'Ihor',
// 	age: 35,
// 	info: {
// 		male: true,
// 	},
// 	subjects: ['ts'],
// };
//
// p.name = 'sd';
// p.info.male = false;

// type RemoveKeyByValueTypeAndUnion<T, E> = {
// 	[P in keyof T]: T[P] extends E ? never : T[P];
// }[keyof T];
/*

name => string {male: boolean} => name
...
info => {male: boolean} {male: boolean} => never
...

{
name: name // string
age: age // number
info: never
subjects: subjects // string[]
}[keyof T]
name | age | subjects  | never
string | number | string[]
 */

// interface IPerson1 {
// 	readonly name: string;
// 	readonly age: number;
// 	info: never;
// 	subjects?: string[];
// }

// type RemoveKeyByValueTypeAndUnion<T, E> = {
// 	[P in keyof T as Exclude<P, E>]: T[P];
// };
//
// const k: RemoveKeyByValueTypeAndUnion<IPerson, 'name' | 'subjects'> = {
// 	name: 'Ihor',
// 	age: 35,
// 	info: {
// 		male: true,
// 	},
// 	subjects: ['ts'],
// };

// type CapitalizedKeysAndGetter<T> = {
// 	[P in keyof T as `get${Capitalize<string & P>}`]: () => T[P]
// }
//
// const getPerson: CapitalizedKeysAndGetter<IPerson> = {
// 	getName: () => 'Ihor',
// 	getAge: () => 35,
// 	getInfo: () => ({ male: true }),
// 	getSubjects: () => ['ts']
// }

// type TypedObject<T, U extends string> = {
// 	[P in keyof T as `${U & string}${P & string}`]: T[P];
// };

// type TypeObject<T extends Record<string, any>, U extends string> = {
// 	[P in keyof T  as `${U}${P&string}`]: T[P];
// }

// const createSimpleReducer = <T extends string>(name: T) => {
// 	const obj = {
// 		Pending: () => {
// 			return 1;
// 		},
// 		Success: () => {
// 			return 's';
// 		},
// 		Fail: () => {
// 			return true;
// 		},
// 	};
// 	const result: { [key: string]: Function } = {};
// 	for (const [key, value] of Object.entries(obj)) {
// 		result[`${name}${key}`] = value;
// 	}
// 	return result as TypedObject<typeof obj, T>;
// };
//
// const v: number = createSimpleReducer('products').;
//
// function updatePerson(person: Partial<IPerson>){
// 	return person;
// }
//
// updatePerson({
// 	name: 'Pavel',
// 	age: 24
// })
