export interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  tags: string[];
  registrationLink?: string;
  capacity?: number;
  registeredCount?: number;
}
