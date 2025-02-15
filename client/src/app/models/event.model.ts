export interface Event {
  id?: string;
  title: string;
  date: Date;
  location: string;
  description: string;
  status: string;
  feedback:string;
  assignedClient:string | null;
}
