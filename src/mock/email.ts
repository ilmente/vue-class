import { generateEmails } from '@lambda/emails';
import omit from 'lodash/omit';
import { Email, EmailInfo, EmailStatus } from '../client/apps/code/05/1-data/typings/Email';

export const infoArray: EmailInfo[] = generateEmails(3).map((email: Email) => omit(email, 'content'));
export const singleEmail: Email = generateEmails(1)[0];

export const staticInfoArray: EmailInfo[] = [
    {
        id: 'f0d2b891-7f07-485a-abc0-08280fc24bac',
        sender: 'Nikki_Brekke@example.org',
        subject: 'Gorgeous Rubber Chicken',
        timestamp: 'Wed Mar 03 2021 20:30:50 GMT+0100 (Central European Standard Time)',
        status: EmailStatus.READ,
    },
    {
        id: 'e42be0fb-e63e-450c-9de5-f0f1c2367a85',
        sender: 'Emmanuel_Lemke65@example.org',
        subject: 'Handcrafted Rubber Salad',
        timestamp: 'Wed Mar 03 2021 12:38:01 GMT+0100 (Central European Standard Time)',
        status: EmailStatus.UNREAD,
    },
    {
        id: 'a7aca6ec-9b50-4e5a-93cf-7019b0b53859',
        sender: 'Daphney_Ledner13@example.com',
        subject: 'Small Soft Bike',
        timestamp: 'Wed Mar 03 2021 20:14:57 GMT+0100 (Central European Standard Time)',
        status: EmailStatus.SPAM,
    }
];

export const staticSingleEmail: Email = {
    id: 'f0d2b891-7f07-485a-abc0-08280fc24bac',
    sender: 'Nikki_Brekke@example.org',
    subject: 'Gorgeous Rubber Chicken',
    timestamp: 'Wed Mar 03 2021 20:30:50 GMT+0100 (Central European Standard Time)',
    content: 'Labore perspiciatis adipisci accusantium maiores quia sed. Et illum dolor. Possimus itaque ex reiciendis occaecati veniam. Odio dolorum veniam quidem. Tenetur quibusdam est dolor perspiciatis. Rerum neque ut non.\n' +
        ' \rConsequatur quas est ipsam mollitia harum doloremque fugiat expedita. Impedit culpa dolorum occaecati. Culpa quaerat qui cupiditate et voluptatum esse delectus.\n' +
        ' \rNisi alias itaque deleniti possimus ut necessitatibus ratione molestiae vero. Quaerat sapiente voluptas officiis. Nulla eos dolorem voluptatem beatae est. Expedita illum ea impedit corporis totam reprehenderit et cum officiis.',
    status: EmailStatus.READ,
};
