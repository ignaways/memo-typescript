export interface TaskState {
  data: {
    id: string;
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
  id: string;
  title: string;
  description: string;
  time: string;
  date: string;
  status: boolean;
  color: string;
}
