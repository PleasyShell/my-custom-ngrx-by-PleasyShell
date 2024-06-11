import { TAddTask } from "../tasks-modal.state";

export const resetInitAddTaskModalState: TAddTask = {
    isOpen: false,
    Content: {
        Id: 0,
        Name: '',
        Surname: ''
    }
}