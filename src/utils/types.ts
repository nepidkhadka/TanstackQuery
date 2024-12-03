export interface Student {
  id: string; // Unique identifier for the student
  createdAt: string; // ISO date string
  studentName: string; // Name of the student
  avatar: string; // URL to the student's avatar image
  studentEmail: string; // Email address of the student
  phoneNumber: string; // Phone number of the student
}

export interface Product {
  id: number;
  title: string;
  image: string;
  price: number;
  description: string;
  brand: string;
  model: string;
  color: string;
  category: string;
  discount: number;
}
