/* Teacher Interface */
interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: unknown;
}

/* Directors Interface (extends Teacher Interface) */
interface Directors extends Teacher {
    numberOfReports: number;
}

/* printTeacher function */
function printTeacher (firstName: string, lastName: string): string {
    return `${firstName[0]}. ${lastName}`
}

/* Interface for printTeacer function */
interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

/* Interface for Class description */
interface StudentClassInterface{
    firstName: string;
    lastName: string;
    workOnHomework(): string;
    displayName(): string;
}

/* StudentClass class */
class StudentClass implements StudentClassInterface {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    workOnHomework(): string{
        return 'Currently working'
    }

    displayName(): string {
        return `${this.firstName}`
    }
}

/* Test Teacher interface */
const teacher3: Teacher = {
    firstName: 'Jeremy',
    fullTimeEmployee: false,
    lastName: 'Daniels',
    location: 'London',
    contract: false,
};
console.log(`testing Teacher interface:\n`, teacher3)

/* Test Director interface */
const director1: Directors = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'Carlifonia',
    fullTimeEmployee: true,
    numberOfReports: 12,
};
console.log(`testing Directors interface:\n`, director1);

/* Test PrintTeacher function */
console.log('test printTeacher Function: \n', printTeacher('Anne', 'Jose'))

/* Test StudentClass class */
const student1 = new StudentClass('James', 'Brown')
console.log(`testing StudentClass class:\n`, student1);
console.log(student1.displayName())
console.log(student1.workOnHomework())
