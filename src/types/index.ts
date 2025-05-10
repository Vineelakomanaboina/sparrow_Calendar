export interface Event {
  id: string;
  title: string;
  date: string; // YYYY-MM-DD
  startTime: string; // HH:MM
  endTime: string; // HH:MM
  description?: string;
  color?: string;
}

export type EventsByDate = {
  [date: string]: Event[];
};