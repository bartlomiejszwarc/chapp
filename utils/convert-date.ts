import {format} from 'date-fns';

type DateDisplayType = 'minimal' | 'short' | 'full';
export default function convertDate(date: Date, type: DateDisplayType) {
  if (type === 'minimal') return format(date, 'd.LL');
  if (type === 'short') return format(date, 'LLL d');
  if (type === 'full') return format(date, 'LLLL d yyy');
}
