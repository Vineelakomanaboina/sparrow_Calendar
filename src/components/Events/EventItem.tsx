import React from 'react';
import { Event } from '../../types';
import { formatEventTime } from '../../utils/dateUtils';

interface EventItemProps {
  event: Event;
}

const EventItem: React.FC<EventItemProps> = ({ event }) => {
  const startTime = formatEventTime(event.startTime);

  return (
    <div 
      className="p-2 rounded text-sm bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
      title={`${event.title} (${startTime} - ${formatEventTime(event.endTime)})`}
    >
      <div className="flex flex-col gap-1">
        <div className="text-xs text-gray-600">{startTime}</div>
        <div className="font-medium text-gray-900 truncate">
          {event.title}
        </div>
      </div>
    </div>
  );
};

export default EventItem