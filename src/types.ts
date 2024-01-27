export enum TaskStatus {
    PENDING = "PENDING",
    IN_PROGRESS = "IN_PROGRESS",
    DONE = "DONE",
}

export interface Task {
    id?: string,
    title?: string,
    description?: string,
    status?: TaskStatus
}

export interface Complete {
    status?: "DONE"
}