export type TTaskState = {
    Tasks: TTaskPageState
}

export type TTaskPageState = {
    TasksList: TTaskList[]
}

export type TTaskList = {
    Id: number,
    Name: string
}