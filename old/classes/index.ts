// import '../assets/css/style.css';
/* eslint-disable */
type sn = string | number;

interface IPoint {
	x: sn;
}

class BasePoint implements IPoint {
	#p = 1;

	public constructor(x: number, y: string);
	public constructor(x: string, y: number);
	public constructor(x: number, y: number, z: number);
	public constructor(
		public readonly x: sn,
		protected readonly y: sn,
		private readonly z?: number,
	) {}

	public sum(): number {
		return Number(this.x) + Number(this.y) + (this.z ?? 0) + this.#p;
	}
}

class Point extends Tagged(Timestamped(BasePoint)) {
	public constructor(x: number, y: number, z: number) {
		super(x, y, z);
	}

	public override sum(): number {
		return super.sum();
	}
}

const p = new Point(1, 2, 3);
console.log(p);

// class Singleton {
// 	private static instance: Singleton;
//
// 	private constructor() {}
//
// 	public static getInstance(): Singleton {
// 		if (!Singleton.instance) {
// 			Singleton.instance = new Singleton(); // Oo
// 		}
// 		return Singleton.instance;
// 	}
// }

// class Singleton {
// 	private static instance: Singleton;
//
// 	static {
//        console.log('before init once');
// 	   if(!Singleton.instance){
// 		Singleton.instance = new Singleton();  // Oo
// 	   }
// 	}
//
// 	constructor() {
// 		console.log('init');
// 		return Singleton.instance;
// 	}
// }
//
//
// const inst1 = new Singleton();
// const inst2 = new Singleton();
// const inst3 = new Singleton();
// const inst4 = new Singleton();
//
// console.log(inst1 === inst4);

type Constructable = new (...args: any[]) => any;

function Timestamped<BaseClass extends Constructable>(BC: BaseClass) {
	return class extends BC {
		public timestamp = Date.now();
	};
}

function Tagged<BaseClass extends Constructable>(BC: BaseClass) {
	return class extends BC {
		public tags = ['ts', 'js'];
	};
}

abstract class AbstractControl<T = string> {
	public abstract model: T;

	public abstract getModel(): T;

	public onFocus() {
		//document.querySelector('el');
	}

	public onBlur() {

	}
}

abstract class AbstractControlWithSet<T = string> extends AbstractControl<T> {
	public abstract setModel(value: T): void;
}

class MHSearch extends AbstractControl {
	public model = '';

	public override getModel(): string {
		return '';
	}
}

interface IDropDownItem {
	text: string;
	value: string;
}

class MHDropDown extends AbstractControlWithSet<IDropDownItem[]> {
	public model: IDropDownItem[] = [];

	public override getModel(): IDropDownItem[] {
		return [];
	}

	public override setModel(_value: IDropDownItem[]) {}
}
