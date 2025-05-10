import { Event, EventsByDate } from '../types';
import { format, addDays } from 'date-fns';

// Generate some dates relative to current date
const today = new Date();
const tomorrow = addDays(today, 1);
const nextWeek = addDays(today, 7);
const nextMonth = addDays(today, 30);

const todayStr = format(today, 'yyyy-MM-dd');
const tomorrowStr = format(tomorrow, 'yyyy-MM-dd');
const nextWeekStr = format(nextWeek, 'yyyy-MM-dd');
const nextMonthStr = format(nextMonth, 'yyyy-MM-dd');

export const events: Event[] = [
  {
    id: '1',
    title: 'Team Meeting',
    date: todayStr,
    startTime: '10:00',
    endTime: '11:30',
    description: 'Weekly team sync to discuss progress',
    color: '#4f46e5', // indigo
  },
  {
    id: '2',
    title: 'Lunch with Sarah',
    date: todayStr,
    startTime: '12:30',
    endTime: '13:30',
    description: 'Discuss new project opportunities',
    color: '#0891b2', // cyan
  },
  {
    id: '3',
    title: 'Client Call',
    date: todayStr,
    startTime: '15:00',
    endTime: '16:00',
    description: 'Product demo for potential client',
    color: '#7c3aed', // violet
  },
  {
    id: '4',
    title: 'Dentist Appointment',
    date: tomorrowStr,
    startTime: '09:00',
    endTime: '10:00',
    description: 'Regular checkup',
    color: '#059669', // emerald
  },
  {
    id: '5',
    title: 'Project Deadline',
    date: tomorrowStr,
    startTime: '17:00',
    endTime: '18:00',
    description: 'Submit final deliverables',
    color: '#dc2626', // red
  },
  {
    id: '6',
    title: 'Gym Workout',
    date: nextWeekStr,
    startTime: '07:00',
    endTime: '08:30',
    description: 'Personal training session',
    color: '#ea580c', // orange
  },
  {
    id: '7',
    title: 'Birthday Party',
    date: nextWeekStr,
    startTime: '19:00',
    endTime: '23:00',
    description: 'Celebrate at Riverside Restaurant',
    color: '#d946ef', // fuchsia
  },
  {
    id: '8',
    title: 'Tech Conference',
    date: nextMonthStr,
    startTime: '09:00',
    endTime: '18:00',
    description: 'Annual tech innovation summit',
    color: '#0891b2', // cyan
  },
  {
    id: '9',
    title: 'Flight to London',
    date: nextMonthStr,
    startTime: '14:30',
    endTime: '16:45',
    description: 'Business trip for client meeting',
    color: '#4f46e5', // indigo
  },
  {
    id: '10',
    title: 'Team Building',
    date: nextMonthStr,
    startTime: '10:00',
    endTime: '13:00',
    description: 'Outdoor activities and lunch',
    color: '#16a34a', // green
  },
  // Add some overlapping events to demonstrate handling
  {
    id: '11',
    title: 'Interview Candidate',
    date: todayStr,
    startTime: '10:30',
    endTime: '11:45',
    description: 'Senior developer position',
    color: '#f59e0b', // amber
  },
  {
    id: '12',
    title: 'Code Review',
    date: tomorrowStr,
    startTime: '09:30',
    endTime: '10:30',
    description: 'Review pull requests',
    color: '#8b5cf6', // purple
  }
];

// Organize events by date for easier lookup
export const getEventsByDate = (): EventsByDate => {
  const eventsByDate: EventsByDate = {};
  
  events.forEach(event => {
    if (!eventsByDate[event.date]) {
      eventsByDate[event.date] = [];
    }
    eventsByDate[event.date].push(event);
  });
  
  return eventsByDate;
};