export type NotificationType = 'channel' | 'message'

export interface INotification {
    name: string;
    unread?: number;
    active?: boolean;  // online or offline users for dm
    type: NotificationType
}