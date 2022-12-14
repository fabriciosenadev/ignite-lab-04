import { Notification } from "../../src/application/entities/notification";
import { NotificationsRepository } from "../../src/application/repositories/notifications-repository";

// inMemory database 
const notifications: Notification[] = [];

// repository mock
export class InMemoryNotificationsRepository implements NotificationsRepository {
    // inMemory database 
    public notifications: Notification[] = [];

    async create(notification: Notification) {
            this.notifications.push(notification)        
    }
}