export interface Todo {
  id: string;
  title: string;
  done: boolean;
  state?: LoadingState;
}

export enum LoadingState {
  pending,
  success,
  fail
}
