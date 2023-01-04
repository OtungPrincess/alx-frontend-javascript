interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
}

interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
}

class Director implements DirectorInterface {
    workFromHome(): string {
        return 'Working from home';
    }

    getToWork(): string {
        return 'Getting a coffee break'
    }

    workDirectorTasks(): string {
        return 'Getting to director tasks'
    }

    getCoffeeBreak(): string {
        return 'Getting a coffee break'
    }
}

class Teacher implements TeacherInterface {
    workFromHome(): string {
        return 'Cannot work from home';
    }

    getCoffeeBreak(): string {
        return 'Cannot have a break'
    }

    workTeacherTasks(): string {
        return 'Getting to work'
    }

}

function createEmployee(salary: string | number): Director | Teacher {
    if (typeof salary === 'number' && salary < 500){
        return new Teacher()
    }
    return new Director()
}

console.log(createEmployee(200));
// Teacher
console.log(createEmployee(1000));
// Director
console.log(createEmployee('$500'));
// Director

/* Using Type Predicate to determine which object was passed as parameter */
function isDirector(employee: Director | Teacher): employee is Director{
    return (employee as Director).getToWork !== undefined;
}

function executeWork(employee: Director | Teacher): void {
    if (isDirector(employee)){
        console.log(employee.workDirectorTasks())
    } else {
        console.log(employee.workTeacherTasks())
    }
}

executeWork(createEmployee(200));
executeWork(createEmployee(1000));

/* Usage of String literal type */
type Subject = 'Math' | 'History'

function teachClass(subject: Subject): string {
    if (subject === 'Math') {
        return 'Teaching Math'
    } else {
        return 'Teaching History'
    }
}

console.log(teachClass('Math'))
console.log(teachClass('History')
