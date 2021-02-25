import { formatRelative } from 'date-fns';

export const getRelativeDate = (date: string): string => formatRelative(new Date(date), new Date())
