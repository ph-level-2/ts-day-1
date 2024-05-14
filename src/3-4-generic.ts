// type  generic
type G<T> = T;
const names: G<number> = 75;

// interface generic
interface I<T> {
	name: T;
}
const myData: I<string> = {
	name: 'Abdur Shobur',
};

// function generic
function get<T>(data: T): T {
	return data;
}
function test3<T>(data: T): T {
	return data;
}
