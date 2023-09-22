export interface Specialist {
  id: number;
  name: string;
  surName: string;
  email: string;
  password: string;
  phone: string;
  price: number;
  location: string;
  online: boolean;
  offline: boolean;
  experience: number;
  rating: number;
  description: string;
  categories: string[];
  areas: string[];
  photoLink: string;
}
