// import '../assets/css/style.css';
// interface IUserAccount {
// 	name: string;
// 	age: number;
// }
// type AnimationType = 'ease';
// type AnimationDirection = 'in' | 'out';
// interface IAnimationOptions {
// 	delay: number;
// 	type: `${AnimationType}-${AnimationDirection}`;
// }

// enum AnimationEnum {
// 	EASE_IN = 'ease-in',
// 	EASE_OUT = 'ease-out',
// }
//
// interface IAnimationOptions {
// 	delay: number;
// 	type: AnimationEnum;
// }
//
// function animation(options: IAnimationOptions) {
// 	if (options.type === AnimationEnum.EASE_OUT) {
// 	}
// }
//
// animation({ delay: 1000, type: AnimationEnum.EASE_IN });

// interface IFact {
// 	factId: number;
// 	userTo: string;
// 	value: boolean;
// }
//
// let obj = {
// 	factId: 1,
// 	userTo: 'Ihor',
// 	value: true,
// };
//
// const dataList: { action: string; data: IFact }[] = [];
//
// const uniqueValue = (): keyof IFact => {
// 	// 'factId' | 'userTo' | 'value'
// 	return 'factId';
// };
//
// const v: IFact[keyof IFact] = true;
//
// dataList.map((item) => {
// 	if (item.data[uniqueValue()] === 2) {
// 		//....
// 	}
// 	return item;
// });
//
// const values = Object.keys(AnimationEnum).map((key) => {
// 	return AnimationEnum[key as keyof typeof AnimationEnum];
// });
//
// console.log(values);
