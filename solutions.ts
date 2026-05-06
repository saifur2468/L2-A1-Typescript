// Problem 1 

function filterEvenNumbers(numbers: number[]): number[] {
    return numbers.filter((num) => num % 2 == 0);
}

const input = [1, 2, 3, 4, 5, 6];
const result = filterEvenNumbers(input);
console.log(result);


// problem 2 

function reverseString(str: string): string {
    return str.split("").reverse().join("");
}

console.log(reverseString("typescript"));




// problem 3 
type StringOrNumber = string | number;

function checkType(value: StringOrNumber): "string" | "Number" {
    if (typeof value === "string") {
        return "string";
    } else {
        return "Number";
    }
}

// Sample Inputs
// console.log(checkType("Hello")); 
console.log(checkType(42));




// problem 4 


function getproperty<T, k extends keyof T>(
    Obj: T, key: k
): T[K] {
    return Obj[key]
}

const user = { id: 1, name: "john Doe", age: 21 };
console.log(getproperty(user, "name"));




// problem 5 

interface Book {
    title: string;
    author: string;
    publishedYear: number;
}

function toggleReadStatus(book: Book): Book & { isRead: boolean } {
    return {
        ...book,
        isRead: true,
    };
}

// Sample Input
const myBook: Book = {
    title: "TypeScript Guide",
    author: "Jane Doe",
    publishedYear: 2024,
};

console.log(toggleReadStatus(myBook));





// problem 6 


class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}


class Student extends Person {
  grade: string;

  constructor(name: string, age: number, grade: string) {
    super(name, age);
    this.grade = grade;
  }

  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
  }
}


const student = new Student("Alice", 20, "A");
console.log(student.getDetails());