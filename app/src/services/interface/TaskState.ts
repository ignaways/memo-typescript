export interface TaskState {
  data: {
    id: number;
    title: string;
    description: string;
    time: string;
    date: string;
    status: boolean;
    color: string;
  }[];
  isLoading: boolean;
  isError: boolean;
}

export interface Data {
  _id: string;
  title: string;
  description: string;
  time: string;
  date: string;
  status: boolean;
  color: string;
}
