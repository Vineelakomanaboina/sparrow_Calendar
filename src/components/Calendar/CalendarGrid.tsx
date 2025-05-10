import React from 'react';
import CalendarDay from './CalendarDay';
import { getCalendarDays, formatDateKey } from '../../utils/dateUtils';
import { EventsByDate } from '../../types';

interface CalendarGridProps {
  currentDate: Date;
  eventsByDate: EventsByDate;
}

const DAYS_OF_WEEK = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];

const CalendarGrid: React.FC<CalendarGridProps> = ({ currentDate, eventsByDate }) => {
  const days = getCalendarDays(currentDate);
  
  return (
    <div className="flex-1">
      <div className="grid grid-cols-7 border-b border-gray-200">
        {DAYS_OF_WEEK.map((day, index) => (
          <div 
            key={day} 
            className={`py-3 text-center text-sm font-medium ${
              index === 4 ? 'text-red-500' : 'text-gray-500'
            }`}
          >
            {day}
          </div>
        ))}
      </div>
      
      <div className="grid grid-cols-7">
        {days.map((day) => {
          const dateKey = formatDateKey(day);
          const dayEvents = eventsByDate[dateKey] || [];
          
          return (
            <CalendarDay 
              key={dateKey} 
              date={day}
              currentMonth={currentDate}
              events={dayEvents}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CalendarGrid