import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

const Calendar = () => {
  return (
    <div>
      <h1 className="text-2xl">Calendar</h1>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        events={[
          { title: 'event 1', date: '2024-06-01' },
          { title: 'event 2', date: '2024-06-02' },
        ]}
      />
    </div>
  );
};

export default Calendar;
