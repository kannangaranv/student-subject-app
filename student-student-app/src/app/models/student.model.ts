export interface Student {
    id: string;
    name: string;
    dateOfBirth: Date;
    age: number;
    address: string;
}
export interface AddUpdateStudentRequest {
    name: string;
    dateOfBirth: Date;
    age: number;
    address: string;
}