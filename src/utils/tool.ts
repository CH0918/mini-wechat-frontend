import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import relativeTime from 'dayjs/plugin/relativeTime';
import isToday from 'dayjs/plugin/isToday';
import isYesterday from 'dayjs/plugin/isYesterday';

dayjs.extend(relativeTime);
dayjs.extend(isToday);
dayjs.extend(isYesterday);
dayjs.locale('zh-cn');

export function formatChatTime(timestamp: number): string {
  const date = dayjs(timestamp);
  const now = dayjs();

  if (date.isToday()) {
    return date.format('HH:mm');
  }

  if (date.isYesterday()) {
    return '昨天';
  }

  if (date.isSame(now, 'week')) {
    return date.format('dddd');
  }

  if (date.isSame(now, 'year')) {
    return date.format('M月D日');
  }

  return date.format('YYYY年M月D日');
}
