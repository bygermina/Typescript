import '../assets/css/style.css';
import {
	CheckTypeInRuntime,
	Debounce,
	LogInput,
	SavePersistence,
	RangeV,
	Validate,
} from './decorators';
/* eslint-disable */

// function dec(fn){
// 	return fn1(...args){
// 		return  fn.call(this, ...args)
// 	}
// }

class SearchComponent {
	@CheckTypeInRuntime
	@SavePersistence
	public initialValue!: string;

	public constructor(private readonly inputEl: HTMLInputElement) {
		console.log(this.initialValue);
		this.inputEl.addEventListener<'input'>('input', this.onSearch.bind(this));
	}

	@Debounce(300)
	@LogInput
	private onSearch(_e: Event): void {
		this.initialValue = (_e.target as HTMLInputElement).value;
		this.updatePercentage(0, 40);
	}

	@Validate
	public updatePercentage(oldValue: number, @RangeV(30, 50) newValue: number) {
		console.log(oldValue, newValue);
	}
}

const inputEl: HTMLInputElement = document.querySelector('input') as HTMLInputElement;

const sc = new SearchComponent(inputEl);

setTimeout(() => {
	// (sc.initialValue as any) = 12;
	sc.updatePercentage(40, 89);
}, 7000);
