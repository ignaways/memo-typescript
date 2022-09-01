export interface DummyState {
  data: {
    title: string,
    description: string,
    status: number, 
    deadline: any,
    theme: number
  }[]
} 

export const dummyMemo: DummyState = {
  data: [
    {
      title: "to do title",
      description: "lorem ipsum dolor sit amet",
      status: 1,
      deadline: "20 juli 2020",
      theme: 1
    }
  ]
}