export function formatDate(
  d: string | Date,
  today = new Date(),
  _isToday = isToday
) {
  const date = new Date(d);
  if (_isToday(date, today)) {
    const localeTime = date.toLocaleTimeString('ko-KR', {
      timeZone: 'Asia/Seoul',
    });

    return localeTime.substring(0, localeTime.length - 3);
  }

  return new Intl.DateTimeFormat('ko-KR', {
    dateStyle: 'short',
    timeStyle: 'short',
    timeZone: 'Asia/Seoul',
  }).format(date);
}

export function isToday(date: Date, today = new Date()) {
  return date.toDateString() === today.toDateString();
}
