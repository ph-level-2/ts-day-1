// union
type first = {
	name: string;
};
type second = {
	name: string;
	exp: string;
	yr: number;
	job: 'new' | 'best';
};

const newDev: first | second = {
	name: 'sdf',
	exp: 'sdf',
	yr: 324,
	job: 'best',
};

type first2 = {
	name: string;
};
type second2 = first2 & {
	exp: string;
	yr: number;
};

const newDev2: second2 = {
	name: 'dev2',
	exp: '2 x ',
	yr: 324,
};

// enum is not good
enum Level {
	one = 'one',
	two = 'two',
}

type third = {
	name: string;
	age: number;
};

type four = third & {
	from: string;
	company: string;
};

const uData: four = {
	age: 23,
	name: 'String',
	company: 'sdf',
	from: 'sdf',
};

// enum type
enum m2 {
	one = 'one',
}
