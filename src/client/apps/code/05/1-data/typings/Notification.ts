export enum NotificationType {
    Default = '',
    Info = 'info',
    Success = 'success',
    Warning = 'warning',
    Danger = 'danger',
}

export interface Notification {
    content: string;
    type: NotificationType;
}
