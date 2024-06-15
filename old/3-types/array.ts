// type TUser = {
// 	firstName: string;
// 	age: number;
// 	info?: TInfo;
// };
// type TInfo = {
// 	male: boolean;
// };
//
// let user2 = {
// 	firstName: 'Ihor',
// 	age: 35,
// 	info: {
// 		male: true,
// 	},
// };
//
// let users: readonly TUser[] = [user2, user2, user2];
//
// users.push(user2);
// users[100] = user2;
//
// // let uArr = [...users] as const;
// //
// // uArr.push(user2);
// // uArr[100] = user2;
//
// let user: readonly [string, TUser] = ['qweqweqweasd123', user2];
// let info: readonly [boolean] = [true];
//
// let person: [...typeof user, ...typeof info] = ['qweqweqweasd123', user2, true];
//
// person.push(user2);
// person.splice(2, 0, 's');
// person[100] = user2;
//
// let a = user[2];
