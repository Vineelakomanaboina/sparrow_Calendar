import React, { useState } from 'react';
import { addMonths, subMonths } from 'date-fns';
import CalendarHeader from './CalendarHeader';
import CalendarGrid from './CalendarGrid';
import { getEventsByDate } from '../../data/events';

const Calendar: React.FC = () => {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const eventsByDate = getEventsByDate();
  
  const handlePrevMonth = () => {
    setCurrentDate(prevDate => subMonths(prevDate, 1));
  };
  
  const handleNextMonth = () => {
    setCurrentDate(prevDate => addMonths(prevDate, 1));
  };
  
  const handleAddEvent = () => {
    // This would open an event creation modal in a real application
    alert('Add event functionality would open a modal in a real application.');
  };
  
  return (
    <div className="flex flex-col">
      <CalendarHeader 
        currentDate={currentDate}
        onPrevMonth={handlePrevMonth}
        onNextMonth={handleNextMonth}
        onAddEvent={handleAddEvent}
      />
      <div className="p-4 text-sm text-gray-600">
        Here all your planned events. You will find information for each event as well you can planned new one.
      </div>
      <CalendarGrid 
        currentDate={currentDate}
        eventsByDate={eventsByDate}
      />
    </div>
  );
};

export default Calendar;