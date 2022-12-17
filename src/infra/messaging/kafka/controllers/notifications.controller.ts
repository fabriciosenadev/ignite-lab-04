import { SendNotification } from '@application/use-cases/send-notification';
import { Controller } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';

/**
 * controller to be used as 'notificator' to kafka
 */

interface ISendNotificationPaylod {
  content: string;
  category: string;
  recipientId: string;
}

@Controller()
export class NotificationsController {
    constructor(private sendNotification:SendNotification) {}

  @EventPattern('notifications.send-notification') // receive topic name
  async handleSendNotification(
    @Payload() { content, category, recipientId }: ISendNotificationPaylod,
  ) {
    await this.sendNotification.execute({
        content,
        category,
        recipientId
    });
  }
}
