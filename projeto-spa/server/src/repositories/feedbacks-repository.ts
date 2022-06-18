
export interface FeedbackCreateData {
    name : string,
    email : string,
    type: string;
    comment: string;
    screenshot?: string;
}


export interface FeedbacksRepository{
    create: (date: FeedbackCreateData) => Promise<void>;
}