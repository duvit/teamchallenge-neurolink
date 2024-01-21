export interface Specialist {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  location: string;
  photoLink: string;
  card: {
    id: number;
    price: number;
    rating: number;
    experience: number;
    specialization: boolean;
    description: string;
    photoLink: string;
    categories: string[];
  };
  role: ['USER', 'PSYCHOLOGIST'];
}
