
//DADOS PARA CRIAR O FEEDBACK NO BANCO
export interface FeedbackCreateDate {
    name: string;
    email: string;
    type: string;
    comment: string;
    screenshot?: string;
    datatual?: string;
}


//CRIANDO O DADO NO DB
export interface FeedbackRepository {
    create: (date: FeedbackCreateDate) => Promise<void>;
}