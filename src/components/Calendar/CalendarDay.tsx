import React from 'react';
import { format } from 'date-fns';
import { Event } from '../../types';
import EventItem from '../Events/EventItem';
import { isToday, isCurrentMonth } from '../../utils/dateUtils';

interface CalendarDayProps {
  date: Date;
  currentMonth: Date;
  events: Event[];
}

const CalendarDay: React.FC<CalendarDayProps> = ({ date, currentMonth, events }) => {
  const dayNumber = format(date, 'd');
  const isCurrentDay = isToday(date);
  const belongsToCurrentMonth = isCurrentMonth(date, currentMonth);
  
  const sortedEvents = [...events].sort((a, b) => {
    return a.startTime.localeCompare(b.startTime);
  });

  return (
    <div 
      className={`min-h-[140px] p-3 border-r border-b border-gray-200 ${
        belongsToCurrentMonth ? 'bg-white' : 'bg-gray-50'
      }`}
    >
      <div className="flex justify-between items-start">
        <div
          className={`flex items-center justify-center w-8 h-8 rounded-full text-sm font-medium ${
            isCurrentDay 
              ? 'bg-blue-600 text-white' 
              : belongsToCurrentMonth 
                ? 'text-gray-900' 
                : 'text-gray-400'
          }`}
        >
          {dayNumber}
        </div>
      </div>
      
      <div className="mt-2 space-y-1">
        {sortedEvents.map(event => (
          <EventItem key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
};

export default CalendarDay