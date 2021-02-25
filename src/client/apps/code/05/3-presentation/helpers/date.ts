import { formatRelative } from 'date-fns';

export const getRelativeDate = (date?: string): string => date 
    ? formatRelative(new Date(date), new Date())
    : '---';
