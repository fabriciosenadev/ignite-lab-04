import { InMemoryNotificationsRepository } from "../../../test/repositories/in-memory-notifications-repostiory";
import { Notification } from "../entities/notification";
import { SendNotification } from "./send-notification"

describe('Send Notification', () => {
    it('should be able to send a notification', async () => {
        const notificationsRepository = new InMemoryNotificationsRepository();
        const sendNotification = new SendNotification(notificationsRepository);

        const {notification } = await sendNotification.execute({
            content: 'This is a notification',
            category: 'social',
            recipientId: 'example-recipient-id'
        });

        console.log(notificationsRepository.notifications);        

        expect(notificationsRepository.notifications).toBeTruthy();
        expect(notificationsRepository.notifications[0]).toEqual(notification); 
    })
})