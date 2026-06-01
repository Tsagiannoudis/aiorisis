import { classes } from './ClassOfStudioData';

export const scheduleStartHour = 9;
export const scheduleEndHour = 23;
export const minutesPerRow = 15;

export function timeToMinutes(time: string) {
  const [hours, minutes] = time.split(':').map(Number);
  return hours * 60 + minutes;
}

export function getGridRowStart(time: string) {
  return (
    Math.floor(
      (timeToMinutes(time) - scheduleStartHour * 60) / minutesPerRow
    ) + 2
  );
}

export function getGridRowSpan(start: string, end: string) {
  return Math.max(
    1,
    Math.ceil((timeToMinutes(end) - timeToMinutes(start)) / minutesPerRow)
  );
}

export const totalRows =
  ((scheduleEndHour - scheduleStartHour) * 60) / minutesPerRow;

export const days = [
  'Δευτέρα',
  'Τρίτη',
  'Τετάρτη',
  'Πέμπτη',
  'Παρασκευή',
  'Σάββατο',
  'Κυριακή',
] as const;

type Day = typeof days[number];

export const classRooms = [
  'Αίθουσα Α',
  'Αίθουσα Β',
] as const;

export interface ScheduleEntry {
  day: Day;
  start: string;
  end: string;
  className: string;
  level: string;
  classRoom: string;
}

export const schedule: ScheduleEntry[] = [
    // Αίθουσα 1 Δευτέρα
  {
    day: 'Δευτέρα',
    start: '09:00',
    end: '10:00',
    className: 'Aerial Yoga',
    level: 'All Levels',
    classRoom: 'Αίθουσα Α',
  },
  {
    day: 'Δευτέρα',
    start: '10:15',
    end: '11:15',
    className: 'Vinyasa Flow Yoga',
    level: 'All Levels',
    classRoom: 'Αίθουσα Α',
  },
  {
    day: 'Δευτέρα',
    start: '11:30',
    end: '12:30',
    className: 'Aerial Yoga',
    level: 'All Levels',
    classRoom: 'Αίθουσα Α',
  },
  {
    day: 'Δευτέρα',
    start: '17:15',
    end: '18:45',
    className: 'Aerial Silks',
    level: 'Level 1,2',
    classRoom: 'Αίθουσα Α',
  },
  {
    day: 'Δευτέρα',
    start: '18:50',
    end: '19:50',
    className: 'Aerial Yoga',
    level: 'Level 2,3',
    classRoom: 'Αίθουσα Α',
  },
 {
    day: 'Δευτέρα',
    start: '20:00',
    end: '21:30',
    className: 'Aerial Silks',
    level: 'Advanced',
    classRoom: 'Αίθουσα Α',
  },
  // Αίθουσα Α Τρίτη
  {
    day: 'Τρίτη',
    start: '09:00',
    end: '10:00',
    className: 'Vinyasa Flow Yoga',
    level: 'All Levels',
    classRoom: 'Αίθουσα Α',
  },
  {
    day: 'Τρίτη',
    start: '10:15',
    end: '11:15',
    className: 'Aerial Yoga',
    level: 'All Levels',
    classRoom: 'Αίθουσα Α',
  },
  {
    day: 'Τρίτη',
    start: '11:30',
    end: '12:30',
    className: 'Vinyasa Flow Yoga',
    level: 'All Levels',
    classRoom: 'Αίθουσα Α',
  },
  {
    day: 'Τρίτη',
    start: '15:30',
    end: '17:00',
    className: 'Aerial Hoop',
    level: 'All Levels',
    classRoom: 'Αίθουσα Α',
  },
  {
    day: 'Τρίτη',
    start: '17:00',
    end: '18:30',
    className: 'Aerial Hoop',
    level: 'All Levels',
    classRoom: 'Αίθουσα Α',
  },
  {
    day: 'Τρίτη',
    start: '18:30',
    end: '20:00',
    className: 'Aerial Straps',
    level: 'Advanced',
    classRoom: 'Αίθουσα Α',
  },
  {
    day: 'Τρίτη',
    start: '20:00',
    end: '21:30',
    className: 'Aerial Straps',
    level: 'Level 2,3',
    classRoom: 'Αίθουσα Α',
  },
  {
    day: 'Τρίτη',
    start: '21:30',
    end: '23:00',
    className: 'Aerial Silks',
    level: 'Level 1,2',
    classRoom: 'Αίθουσα Α',
  },
  // Αίθουσα Α Τετάρτη
  {
    day: 'Τετάρτη',
    start: '09:00',
    end: '10:00',
    className: 'Aerial Yoga',
    level: 'All Levels',
    classRoom: 'Αίθουσα Α',
  },
  {
    day: 'Τετάρτη',
    start: '10:15',
    end: '11:15',
    className: 'Vinyasa Flow Yoga',
    level: 'All Levels',
    classRoom: 'Αίθουσα Α',
  },
  {
    day: 'Τετάρτη',
    start: '11:30',
    end: '12:30',
    className: 'Aerial Yoga',
    level: 'All Levels',
    classRoom: 'Αίθουσα Α',
  },
    {
    day: 'Τετάρτη',
    start: '16:45',
    end: '17:45',
    className: 'Aerial Yoga',
    level: 'Level 1',
    classRoom: 'Αίθουσα Α',
  },
  {
    day: 'Τετάρτη',
    start: '18:15',
    end: '19:30',
    className: 'Vinyasa Flow Yoga',
    level: 'Level 2,3',
    classRoom: 'Αίθουσα Α',
  },
  {
    day: 'Τετάρτη',
    start: '19:45',
    end: '21:15',
    className: 'Aerial Silks',
    level: 'Level 2,3',
    classRoom: 'Αίθουσα Α',
  },
      {
    day: 'Τετάρτη',
    start: '21:15',
    end: '22:15',
    className: 'Aerial Yoga',
    level: 'Level 3',
    classRoom: 'Αίθουσα Α',
  },
  // Αίθουσα Α Πέμπτη
   {
    day: 'Πέμπτη',
    start: '09:00',
    end: '10:00',
    className: 'Vinyasa Flow Yoga',
    level: 'All Levels',
    classRoom: 'Αίθουσα Α',
  },
  {
    day: 'Πέμπτη',
    start: '10:15',
    end: '11:15',
    className: 'Aerial Yoga',
    level: 'All Levels',
    classRoom: 'Αίθουσα Α',
  },
  {
    day: 'Πέμπτη',
    start: '11:30',
    end: '12:30',
    className: 'Vinyasa Flow Yoga',
    level: 'All Levels',
    classRoom: 'Αίθουσα Α',
  },
  {
    day: 'Πέμπτη',
    start: '17:00',
    end: '18:30',
    className: 'Flying Pole',
    level: 'All Levels',
    classRoom: 'Αίθουσα Α',
  },
  {
    day: 'Πέμπτη',
    start: '18:30',
    end: '20:00',
    className: 'Aerial Rope',
    level: 'Advanced',
    classRoom: 'Αίθουσα Α',
  },
  {
    day: 'Πέμπτη',
    start: '20:00',
    end: '21:30',
    className: 'Aerial Silks/Rope',
    level: 'Level 2,3',
    classRoom: 'Αίθουσα Α',
  },
  {
    day: 'Πέμπτη',
    start: '21:30',
    end: '23:00',
    className: 'Aerial Silks',
    level: 'Level 1,2',
    classRoom: 'Αίθουσα Α',
  },
    // Αίθουσα Α Παρασκευή
  {
    day: 'Παρασκευή',
    start: '09:00',
    end: '10:00',
    className: 'Aerial Yoga',
    level: 'All Levels',
    classRoom: 'Αίθουσα Α',
  },
  {
    day: 'Παρασκευή',
    start: '10:15',
    end: '11:15',
    className: 'Vinyasa Flow Yoga',
    level: 'All Levels',
    classRoom: 'Αίθουσα Α',
  },
  {
    day: 'Παρασκευή',
    start: '11:30',
    end: '12:30',
    className: 'Aerial Yoga',
    level: 'All Levels',
    classRoom: 'Αίθουσα Α',
  },
  {
    day: 'Παρασκευή',
    start: '16:45',
    end: '17:45',
    className: 'Aerial Yoga Kids',
    level: 'All Levels',
    classRoom: 'Αίθουσα Α',
  },
  {
    day: 'Παρασκευή',
    start: '18:00',
    end: '19:30',
    className: 'Flying Pole',
    level: 'Level 2',
    classRoom: 'Αίθουσα Α',
  },
  {
    day: 'Παρασκευή',
    start: '19:30',
    end: '21:00',
    className: 'Aerial Silks',
    level: 'Level 2',
    classRoom: 'Αίθουσα Α',
  },
  {
    day: 'Παρασκευή',
    start: '21:15',
    end: '22:45',
    className: 'Aerial Hoop',
    level: 'Level 2',
    classRoom: 'Αίθουσα Α',
  },
  // Αίθουσα Α Σάββατο
   {
    day: 'Σάββατο',
    start: '10:45',
    end: '12:15',
    className: 'Aerial Hoop',
    level: 'Level 1',
    classRoom: 'Αίθουσα Α',
  },
   {
    day: 'Σάββατο',
    start: '12:15',
    end: '13:15',
    className: 'Flexibility',
    level: 'All Levels',
    classRoom: 'Αίθουσα Α',
  },
  {
    day: 'Σάββατο',
    start: '13:15',
    end: '14:45',
    className: 'Aerial Hoop',
    level: 'Level 2',
    classRoom: 'Αίθουσα Α',
  },
  {
    day: 'Σάββατο',
    start: '15:00',
    end: '16:30',
    className: 'Flying Pole',
    level: 'All Levels',
    classRoom: 'Αίθουσα Α',
  },
    // Αίθουσα Β Δευτέρα
   {
    day: 'Δευτέρα',
    start: '15:40',
    end: '16:40',
    className: 'Aerial Yoga',
    level: 'Level 1',
    classRoom: 'Αίθουσα Β',
  },
  {
    day: 'Δευτέρα',
    start: '16:45',
    end: '17:45',
    className: 'Aerial Yoga Teens',
    level: 'All Levels',
    classRoom: 'Αίθουσα Β',
  },
  {
    day: 'Δευτέρα',
    start: '17:50',
    end: '18:50',
    className: 'Aerial Yoga',
    level: 'Level 1',
    classRoom: 'Αίθουσα Β',
  },
 {
    day: 'Δευτέρα',
    start: '19:00',
    end: '20:15',
    className: 'Vinyasa Flow Yoga',
    level: 'Level 2,3',
    classRoom: 'Αίθουσα Β',
  },
  {
    day: 'Δευτέρα',
    start: '20:20',
    end: '21:20',
    className: 'Aerial Yoga',
    level: 'All Levels',
    classRoom: 'Αίθουσα Β',
  },
    {
    day: 'Δευτέρα',
    start: '21:30',
    end: '22:30',
    className: 'Aerial Yoga',
    level: 'Level 2,3',
    classRoom: 'Αίθουσα Β',
  },
    // Αίθουσα Β Τρίτη
   {
    day: 'Τρίτη',
    start: '15:40',
    end: '16:40',
    className: 'Aerial Yoga',
    level: 'All Levels',
    classRoom: 'Αίθουσα Β',
  },
  {
    day: 'Τρίτη',
    start: '16:45',
    end: '17:45',
    className: 'Aerial Yoga Teens',
    level: 'All Levels',
    classRoom: 'Αίθουσα Β',
  },
  {
    day: 'Τρίτη',
    start: '17:50',
    end: '18:50',
    className: 'Aerial Yoga',
    level: 'Level 1',
    classRoom: 'Αίθουσα Β',
  },
 {
    day: 'Τρίτη',
    start: '19:00',
    end: '20:15',
    className: 'Vinyasa Flow Yoga',
    level: 'Level 1,2',
    classRoom: 'Αίθουσα Β',
  },
  {
    day: 'Τρίτη',
    start: '20:20',
    end: '21:20',
    className: 'Aerial Yoga',
    level: 'Level 1',
    classRoom: 'Αίθουσα Β',
  },
    {
    day: 'Τρίτη',
    start: '21:30',
    end: '22:30',
    className: 'Aerial Yoga',
    level: 'Level 1',
    classRoom: 'Αίθουσα Β',
  },
    // Αίθουσα Β Τετάρτη
   {
    day: 'Τετάρτη',
    start: '15:40',
    end: '16:40',
    className: 'Aerial Yoga',
    level: 'All Levels',
    classRoom: 'Αίθουσα Β',
  },
  {
    day: 'Τετάρτη',
    start: '16:45',
    end: '17:45',
    className: 'Aerial Yoga Kids',
    level: 'All Levels',
    classRoom: 'Αίθουσα Β',
  },
  {
    day: 'Τετάρτη',
    start: '17:50',
    end: '18:50',
    className: 'Aerial Yoga',
    level: 'Level 1',
    classRoom: 'Αίθουσα Β',
  },
 {
    day: 'Τετάρτη',
    start: '19:00',
    end: '20:15',
    className: 'Vinyasa Flow Yoga',
    level: 'Level 1,2',
    classRoom: 'Αίθουσα Β',
  },
  {
    day: 'Τετάρτη',
    start: '20:20',
    end: '21:20',
    className: 'Aerial Yoga',
    level: 'Level 2',
    classRoom: 'Αίθουσα Β',
  },
    {
    day: 'Τετάρτη',
    start: '21:30',
    end: '22:30',
    className: 'Aerial Yoga',
    level: 'Level 1',
    classRoom: 'Αίθουσα Β',
  },
    // Αίθουσα Β Πέμπτη
   {
    day: 'Πέμπτη',
    start: '15:40',
    end: '16:40',
    className: 'Aerial Yoga',
    level: 'All Levels',
    classRoom: 'Αίθουσα Β',
  },
  {
    day: 'Πέμπτη',
    start: '16:45',
    end: '17:45',
    className: 'Aerial Yoga Teens',
    level: 'All Levels',
    classRoom: 'Αίθουσα Β',
  },
  {
    day: 'Πέμπτη',
    start: '17:50',
    end: '18:50',
    className: 'Aerial Yoga',
    level: 'Level 1',
    classRoom: 'Αίθουσα Β',
  },
 {
    day: 'Πέμπτη',
    start: '19:00',
    end: '20:15',
    className: 'Vinyasa Flow Yoga',
    level: 'Level 1,2',
    classRoom: 'Αίθουσα Β',
  },
  {
    day: 'Πέμπτη',
    start: '20:20',
    end: '21:20',
    className: 'Aerial Yoga',
    level: 'Level 1',
    classRoom: 'Αίθουσα Β',
  },
    {
    day: 'Πέμπτη',
    start: '21:30',
    end: '22:30',
    className: 'Aerial Yoga',
    level: 'Level 2',
    classRoom: 'Αίθουσα Β',
  },
    // Αίθουσα Β Παρασκευή
   {
    day: 'Παρασκευή',
    start: '15:40',
    end: '16:40',
    className: 'Aerial Yoga',
    level: 'All Levels',
    classRoom: 'Αίθουσα Β',
  },
  {
    day: 'Παρασκευή',
    start: '16:45',
    end: '17:45',
    className: 'Aerial Yoga Teens',
    level: 'Level 1',
    classRoom: 'Αίθουσα Β',
  },
  {
    day: 'Παρασκευή',
    start: '17:50',
    end: '18:50',
    className: 'Aerial Yoga',
    level: 'Level 2,3',
    classRoom: 'Αίθουσα Β',
  },
 {
    day: 'Παρασκευή',
    start: '19:00',
    end: '20:15',
    className: 'Vinyasa Flow Yoga',
    level: 'All Levels',
    classRoom: 'Αίθουσα Β',
  },
  {
    day: 'Παρασκευή',
    start: '20:20',
    end: '21:20',
    className: 'Aerial Yoga',
    level: 'All Levels',
    classRoom: 'Αίθουσα Β',
  },
    {
    day: 'Παρασκευή',
    start: '21:30',
    end: '22:30',
    className: 'Aerial Yoga',
    level: 'All Levels',
    classRoom: 'Αίθουσα Β',
  },
    // Αίθουσα Β Σάββατο
   {
    day: 'Σάββατο',
    start: '10:00',
    end: '11:00',
    className: 'Vinyasa Flow Yoga',
    level: 'All Levels',
    classRoom: 'Αίθουσα Β',
  },
  {
    day: 'Σάββατο',
    start: '11:10',
    end: '12:10',
    className: 'Aerial Yoga',
    level: 'All Levels',
    classRoom: 'Αίθουσα Β',
  },
  {
    day: 'Σάββατο',
    start: '12:20',
    end: '13:20',
    className: 'Aerial Yoga',
    level: 'All Levels',
    classRoom: 'Αίθουσα Β',
  },
];

export const getClassByName = (className: string) =>
  classes.find((c) => c.className === className);