import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function CalendarView({ tasks }) {
  const [date, setDate] = useState(new Date());

  const onChange = (date) => {
    setDate(date);
  };

  return (
    <div>
      <Calendar value={date} onChange={onChange} />
      <ul>
        {tasks
          .filter(task => new Date(task.dueDate).toDateString() === date.toDateString())
          .map(task => (
            <li key={task.title}>{task.title} - {task.dueDate}</li>
          ))
        }
      </ul>
    </div>
  );
}

export default CalendarView;
