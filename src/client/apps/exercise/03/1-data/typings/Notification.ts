export enum NotificationType {
    Default = '',
    Info = 'info',
    Success = 'success',
    Danger = 'danger',
}

export interface Notification {
    content: string;
    type: NotificationType;
}
