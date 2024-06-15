// import '../assets/css/style.css';
/* eslint-disable */
type TUser = {
	firstName: string;
	age: number;
	info?: TInfo;
};
type TInfo = {
	male: true;
};
let user2 = {
	firstName: 'Ihor',
	age: 35,
	info: {
		male: true,
	},
};

// user.age = 24;
//
let info: typeof user2['info'] = {
	male: false,
};

// let userHash: {
// 	[id: symbol]: typeof user;
// };
//
// userHash = {
// 	'123aasdasd123123asda': user,
// 	'11231asdasd123123': user,
// };

// let data: {
// 	[key: `data-${string}`]: number
// } = {
// 	'data-time': 1,
// 	'data-user': 1,
// 	'data-somevalue': 1,
// }

let user = {
	firstName: 'Ihor',
	age: 35,
	info: {
		male: true,
	},
} as const;

user = {
	firstName: 'Ihor',
	age: 35,
	info: {
		male: true,
	},
};

type TUserWithoutConst = {
	firstName: string;
	age: number;
	info?: TInfo;
};
type TUserWitConst = {
	readonly firstName: 'Ihor';
	readonly age: 35;
	readonly info: {
		readonly male: true;
	};
};

// let u1: typeof user = {
// 	firstName: 'Ihor',
// 	age: 35,
// 	info: {
// 		male: true,
// 	},
// };
//
// u1.firstName = 'Ihor';
// u1.info.male = false;
