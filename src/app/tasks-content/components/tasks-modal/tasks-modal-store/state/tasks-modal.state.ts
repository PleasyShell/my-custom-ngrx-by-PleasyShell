export type TAddTaskModalState = {
    Modal: TAddTask
}

export type TAddTask = {
    isOpen: boolean,
    Content: TAddTaskContent
}

export type TAddTaskContent = {
    Id: 0,
    Name: string,
    Surname: string
}