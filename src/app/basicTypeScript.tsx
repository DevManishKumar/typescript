let variable = "hello";

// variable = 20;

let age = 18;

// age = "eighteen"

let ageWithType: number;

// ageWithType = "eighteen"
ageWithType = 18;

let testString: string;

let testBoolean: boolean;

let testStringOrNumber: string | number;

// ARRAY
let names = ["ram", "shayam", "man"];

// names.push(3)
names.push("raj");

let nums = [11, 22, 33];

// nums.push(true);
nums.push(44);

let testStringArray: string[];

// testStringArray = [1,2,3]
testStringArray = ["a", "b", "c"];

let testNumberArray: number[];

// testNumberArray = ['a','b','c']
testNumberArray = [1, 2, 3, 4, 5];

let testStringOrNumberArray: (string | number)[];

testStringOrNumberArray = [1, 2, 3, "a"];

// OBJECTS
let user = {
  username: "raj",
  age: 20,
  isAdmin: false,
};

user.username = "man";
// user.age = "man";
user.age = 22;

let userObject: {
  username: string;
  age: number;
  isAdmin: boolean;
};

userObject = {
  username: "ram",
  age: 22,
  isAdmin: true,
};

let userObject2: {
  username: string;
  age: number;
  isAdmin: boolean;
  phone?: string;
};

userObject2 = {
  username: "ram",
  age: 22,
  isAdmin: true,
};

userObject2 = {
  username: "ram",
  age: 22,
  isAdmin: true,
  phone: "+12323546",
};

// ANY

let testAny;

testAny = 12;
testAny = "hello";
testAny = true;
testAny = [true];
testAny = {};

let testAnyArray: any[];

// Functions
let sayHi = () => {
  console.log("Hi, Welcome");
};

let funcReturnString = (): string => {
  console.log("hi");
  return "hello";
};

let multiple = (num: number) => {
  return num * 2;
};

let multiple2 = (num: number): number => {
  return num * 2;
};

let multiple3 = (num: number): void => {
  //   return num * 2;
  // do something but don't return
};

let sum = (num1: number, num2: number, another?: number) => {
  return num1 + num2;
};

sum(2, 3);

let func = (user: { username: string; age: number; phone?: string }) => {
  console.log(user.username);
};

// TYPE ALIASES

type UserType = {
  username: string;
  age: number;
  phone?: string;
};

let batterFunc = (user: UserType) => {
  console.log(user.username);
};

type myFunc = (a: number, b: string) => void;

let write: myFunc = (num, str) => {
  console.log(num + " times " + str);
};

type UserTpye2 = {
  username: string;
  age: number;
  phone?: string;
  theme: "dark" | "light";
};

const userWithTheme: UserTpye2 = {
  username: "john",
  age: 43,
  theme: "dark"
};




// INTERFACES

interface IUser {
  username: string;
  age: number;
  email: string,
  phone?: string;
}

interface IEmpolyee extends IUser {
  employeeId:number
}


const emp: IEmpolyee = {
    username: "raj",
    email:"raj@gmail.com",
    age:32,
    employeeId: 3
}

const client: IUser = {
  username: "raj",
  email: "raj@gmail.com",
  age: 32,
};





// GENERICS

interface IAuthor {
    userId: number,
    username: string
}

interface ICategory {
    id: number,
    title: string
}

interface IPost {
    id: number;
    title:string;
    desc:string;
    extra: IAuthor[] | ICategory[];
    
}

interface IPostBetter<T> {
  id: number;
  title: string;
  desc: string;
  extra: T[];
}

const testMe : IPostBetter<String> = {
    id:1,
    title:"post title",
    desc: "desc",
    extra:["str","str2"]
}

interface IPostEvenBetter <T extends object> {
    id:1,
    title:"post title",
    desc: "desc",
    extra:T[]
}

const testMe2: IPostBetter<IAuthor> = {
  id: 1,
  title: "post title",
  desc: "desc",
  extra: [{userId:1, username:"raj"}],
};

const testMe3: IPostBetter<ICategory> = {
  id: 1,
  title: "post title",
  desc: "desc",
  extra: [{ id: 1, title: "raj" }],
};
