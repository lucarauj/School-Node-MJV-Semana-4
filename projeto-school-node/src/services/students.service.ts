import { Student } from "../models/studant.model";

class StudentsService {
    students: Array<Student> = [
        {
           name: 'Lucas Martins',
           email: 'lucas@gmail.com',
           document: '16825981013',
           password: '123',
           age: 25,
           phone: '37991132424'
        },
        {
           name: 'Jeferson Araujo',
           email: 'jeferson@gmail.com',
           document: '63895961035',
           password: '123',
           age: 22
        }
   ];

   getAll() {
    return this.students;
   }

   getByDocument(document: string) {
    const studant = this.students.find((std) => std.document === document);
    return studant;
   }

   create(student: Student) {
    this.students.push(student);
   }

   remove(document: string) {
    const studentIndex = this.students.findIndex((std) => std.document === document);
    if(studentIndex === -1) {
        throw new Error('Estudante não encontrado!');
    }
    this.students.splice(studentIndex, 1);    
   }

   update(document: string, student: Student) {
    const studentIndex = this.students.findIndex((std) => std.document === document);
    if(studentIndex === -1) {
        throw new Error('Estudante não encontrado!');
    }
    this.students[studentIndex] = student;
   }

}

export default new StudentsService();