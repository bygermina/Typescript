// declare type MethodDecorator = <T>(target: Object, propertyKey: string | symbol, descriptor: TypedPropertyDescriptor<T>) => TypedPropertyDescriptor<T> | void;
import 'reflect-metadata';

export function LogInput(
	target: any,
	key: string,
	descriptor: PropertyDescriptor,
): PropertyDescriptor {
	const originalValue = descriptor.value;
	return {
		...descriptor,
		value(e: Event) {
			const value: string = (e.target as HTMLInputElement).value;
			console.log(`Input value in method ${key} of ${target.constructor.name} equal to ${value}`);
			return originalValue.call(this, e);
		},
	};
}

export function Debounce(ms: number) {
	let timeId: number | null;
	return (_target: any, _key: string, descriptor: PropertyDescriptor): PropertyDescriptor => {
		const originalValue = descriptor.value;
		return {
			...descriptor,
			value(e: Event) {
				if (timeId) {
					clearTimeout(timeId);
				}
				timeId = window.setTimeout(() => {
					originalValue.call(this, e);
				}, ms);
			},
		};
	};
}

export function SavePersistence(target: any, key: string) {
	const localKey = `ts250921_${target.constructor.name}_${key}`;
	const getter = () => {
		return localStorage.getItem(localKey);
	};

	const setter = (newValue: string) => {
		return localStorage.setItem(localKey, newValue);
	};

	Object.defineProperty(target, key, {
		get: getter,
		set: setter,
		enumerable: true,
		configurable: true,
	});
}

export function CheckTypeInRuntime(_target: any, _key: string) {
	const { name: type } = Reflect.getMetadata('design:type', _target, _key);
	let value: any;
	Object.defineProperty(_target, _key, {
		get(): any {
			return value;
		},
		set(v: any) {
			const realType = typeof v;
			const expectedType = type.toLowerCase();
			if (realType !== expectedType) {
				throw new Error(`Type of ${_key} is not ${expectedType}. You tried to set ${realType}`);
			}
			value = v;
		},
	});
	console.log();
}

const RANGE_KEY = 'design:RANGE_KEY';

export function RangeV(min: number, max: number) {
	return (target: any, key: string, index: number) => {
		const existingRange = Reflect.getMetadata(RANGE_KEY, target, key) ?? {};
		existingRange[index] = [min, max];
		Reflect.defineMetadata(RANGE_KEY, existingRange, target, key);
	};
}

export function Validate(_target: any, _key: string, descriptor: PropertyDescriptor): void {
	const originalValue = descriptor.value;
	descriptor.value = function (...args: any[]) {
		const existingRange = Reflect.getMetadata(RANGE_KEY, _target, _key) ?? {};
		for (const [paramIndex, range] of Object.entries(existingRange)) {
			const [min, max] = range as [number, number];
			const numParamIndex = Number(paramIndex);
			const paramValue = args[numParamIndex];
			if (paramValue < min || paramValue > max) {
				throw new Error(`Error in ${_target.constructor.name} instance.
				  Parameter of method ${_key} on position ${numParamIndex + 1} out of range [${min}, ${max}].
				  Current value ${paramValue}
				`);
			}
		}
		return originalValue.call(this, ...args);
	};
}
