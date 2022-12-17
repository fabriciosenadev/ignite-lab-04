import { Notification } from '@application/entities/notification';
import { NotificationsRepository } from '@application/repositories/notifications-repository';

// inMemory database
const notifications: Notification[] = [];

// repository mock
export class InMemoryNotificationsRepository
  implements NotificationsRepository
{
  // inMemory database
  public notifications: Notification[] = [];

  async findById(notificationId: string): Promise<Notification | null> {
    const notification = this.notifications.find(
      (item) => item.id === notificationId,
    );

    if (!notification) return null;

    return notification;
  }

  async findManyByRecipientId(recipientId: string): Promise<Notification[]> {
    return this.notifications.filter(
      (notification) => notification.recipientId === recipientId,
    );
  }

  async countManyByRecipientId(recipientId: string): Promise<number> {
    return this.notifications.filter(
      (notification) => notification.recipientId === recipientId,
    ).length;
  }

  async create(notification: Notification) {
    this.notifications.push(notification);
  }

  async save(notification: Notification): Promise<void> {
    const notificaitonIndex = this.notifications.findIndex(
      (item) => item.id === notification.id,
    );

    if (notificaitonIndex >= 0) {
      this.notifications[notificaitonIndex] = notification;
    }
  }
}
