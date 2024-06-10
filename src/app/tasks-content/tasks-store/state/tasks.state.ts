export type TTaskState = {
    Tasks: TTaskPageState
}

export type TTaskPageState = {
    TasksList: TTaskList[],
    isOpenModal: boolean
}

export type TTaskList = {
    Id: number,
    Name: string
}