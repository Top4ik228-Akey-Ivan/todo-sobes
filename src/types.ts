export interface ITodo {
    id: number;
    title: string;
    description: string;
    status: 'pending' | 'in progress' | 'done'
}

export type filterStatus = 'all' | 'pending' | 'in progress' | 'done'