import Mail from '../../lib/Mail';

class SubscriptionCancellationMail {
  get key() {
    return 'SubscriptionCancellationMail';
  }

  async handle({ data }) {
    const { meetup, user } = data;

    Mail.sendMail({
      to: `${meetup.User.name} <${meetup.User.email}>`,
      subject: `[${meetup.title}] - Subscription cancellation`,
      template: 'subscriptionCancellation',
      context: {
        organizer: meetup.User.name,
        meetup: meetup.title,
        user: user.name,
        email: user.email,
      },
    });
  }
}

export default new SubscriptionCancellationMail();
