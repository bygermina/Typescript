// import '../assets/css/style.css';
/* eslint-disable */
/**let/const*/
let period = 1;
const acc = {
	name: 'Ihor',
	age: 35,
};

/*spread**/

let person = { ...acc };
let dates = [...[1, 2, 3]];

/**destructuring */
let { name: firstName } = acc;
let [firstDate] = dates;

/**template str*/
// interface IAcc {
// 	name: string;
// 	age: number
// }

function userMassage([start, end]: TemplateStringsArray, { name }: typeof person): string {
	return `${start}${name}${end}`;
}

console.log(userMassage`Good day, ${person} !!`);

/**for of**/
for (const d of dates) {
	console.log(d);
}

/* arrow**/
const sum = (a: number, b: number) => a + b;

/* class**/
class Point {
	public x = 1;
	public y = 1;

	public sum() {
		return this.x + this.y;
	}
}

/** Chaining**/
let user: any = {};
let male = user?.info?.male;

/** ?? **/
let admin;
let p = admin ?? user;

let a = dates.includes(12);
