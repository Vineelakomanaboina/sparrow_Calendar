import React from 'react';
import { format } from 'date-fns';
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon } from 'lucide-react';

interface CalendarHeaderProps {
  currentDate: Date;
  onPrevMonth: () => void;
  onNextMonth: () => void;
  onAddEvent?: () => void;
}

const CalendarHeader: React.FC<CalendarHeaderProps> = ({
  currentDate,
  onPrevMonth,
  onNextMonth,
  onAddEvent,
}) => {
  const formattedMonth = format(currentDate, "MMM' 'yyyy");

  return (
    <div className="flex justify-between items-center px-6 py-4">
      <div className="flex items-center gap-6">
        <h1 className="text-3xl font-bold text-gray-900">{formattedMonth}</h1>
        <div className="flex items-center gap-2">
          <button
            onClick={onPrevMonth}
            className="p-1 hover:bg-gray-100 rounded-full transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={onNextMonth}
            className="p-1 hover:bg-gray-100 rounded-full transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
      
      <div className="flex items-center gap-4">
        <CalendarIcon className="w-5 h-5 text-gray-600" />
        <span className="text-sm text-gray-500">:</span>
        {onAddEvent && (
          <button
            onClick={onAddEvent}
            className="px-4 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg hover:bg-gray-800"
          >
            Add event
          </button>
        )}
      </div>
    </div>
  );
};

export default CalendarHeader