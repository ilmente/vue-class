export enum EmailStatus {
    UNREAD = 'unread',
    READ = 'read',
    SPAM = 'spam',
}

export interface EmailInfo {
    id: string;
    sender: string;
    subject: string;
    timestamp: string;
    status: EmailStatus;
}

export interface Email extends EmailInfo {
    content: string;
}
