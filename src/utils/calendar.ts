// Calendar generation utility for Nikkah and Valima

export const downloadIcsCalendar = () => {
  const eventDetails = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Mohammed Waqas & Asma Shajer//Wedding Invitation//EN',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'BEGIN:VEVENT',
    'SUMMARY:Nikkah & Valima — Mohammed Waqas & Asma Shajer',
    'DESCRIPTION:Royal Wedding of Mohammed Waqas (s/o Janab Natamkar Saifullah) & Asma Shajer (d/o Janab Asghar Ali). Nikkah at 11:45 AM, Valima after Zuhar Salah.',
    'DTSTART:20261231T061500Z', // 11:45 AM IST is 06:15 UTC
    'DTEND:20261231T123000Z',   // 6:00 PM IST
    'LOCATION:Chennai / Tamil Nadu, India',
    'STATUS:CONFIRMED',
    'END:VEVENT',
    'END:VCALENDAR',
  ].join('\r\n');

  const blob = new Blob([eventDetails], { type: 'text/calendar;charset=utf-8' });
  const link = document.createElement('a');
  link.href = window.URL.createObjectURL(blob);
  link.setAttribute('download', 'Waqas_Asma_Wedding_31Dec2026.ics');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export const getGoogleCalendarUrl = () => {
  const title = encodeURIComponent('Nikkah & Valima — Mohammed Waqas & Asma Shajer');
  const details = encodeURIComponent(
    'Cordially invited to the Nikkah (11:45 AM) & Valima (12:00 PM onwards) of Mohammed Waqas (s/o Janab Natamkar Saifullah) and Asma Shajer (d/o Janab Asghar Ali).'
  );
  const location = encodeURIComponent('Nikkah & Valima Venues, Tamil Nadu, India');
  // 31 Dec 2026 11:45 AM IST = 20261231T061500Z, to 20261231T123000Z
  const dates = '20261231T061500Z/20261231T123000Z';
  return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${dates}&details=${details}&location=${location}`;
};
