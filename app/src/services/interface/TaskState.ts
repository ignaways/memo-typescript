export interface TaskState {
  data: {
    title: string,
    description: string,
    time:string,
    date:string,
    status: boolean,
    color: string
  }[],
  isLoading: boolean,
  isError: boolean
}