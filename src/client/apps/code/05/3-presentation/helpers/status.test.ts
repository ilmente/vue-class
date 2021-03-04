import { getStatusLabel, getStatusModifier } from './status';
import startCase from 'lodash/startCase';
import { EmailStatus } from '../../1-data/typings/Email';

test('getStatusLabel returns a string', () => {
    expect(getStatusLabel(EmailStatus.READ)).toBe(startCase(EmailStatus.READ));
})

test('getStatusModifier returns a string', () => {
    expect(getStatusModifier(EmailStatus.READ)).toBe('is-info is-light');
})
