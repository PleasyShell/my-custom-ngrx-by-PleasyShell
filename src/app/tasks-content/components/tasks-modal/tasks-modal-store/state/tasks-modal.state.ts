export type TAddTaskModalState = {
    Modal: TAddTask
}

export type TAddTask = {
    isOpen: boolean,
    Content: TAddTaskContent
}

export type TAddTaskContent = {
    Id: number,
    Name: string,
    Surname: string
}