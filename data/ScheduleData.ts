import type { LocalizedText } from "@/components/extraComponents/LocaleSwitchTranslate";
import { classes } from "./ClassOfStudioData";

/* =========================================================
   GRID CONFIG
========================================================= */

export const scheduleStartHour = 9;
export const scheduleEndHour = 23;
export const minutesPerRow = 15;

export function timeToMinutes(time: string) {
  const [hours, minutes] = time.split(":").map(Number);

  return hours * 60 + minutes;
}

export function getGridRowStart(time: string) {
  return (
    Math.floor(
      (timeToMinutes(time) - scheduleStartHour * 60) /
      minutesPerRow
    ) + 2
  );
}

export function getGridRowSpan(
  start: string,
  end: string
) {
  return Math.max(
    1,
    Math.ceil(
      (timeToMinutes(end) - timeToMinutes(start)) /
      minutesPerRow
    )
  );
}

export const totalRows =
  ((scheduleEndHour - scheduleStartHour) * 60) /
  minutesPerRow;

/* =========================================================
   DAYS
========================================================= */

export const days = [
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
  "sunday",
] as const;

export type Day = (typeof days)[number];

/* =========================================================
   ROOMS
========================================================= */

export const classRooms = [
  "room-a",
  "room-b",
] as const;

export type ClassRoom =
  (typeof classRooms)[number];

/* =========================================================
   LEVELS
========================================================= */

export const levels = [
  "all-levels",
  "level-1",
  "level-2",
  "level-3",
  "level-1-2",
  "level-2-3",
  "level-1-dot-2",
  "advanced",
] as const;

export type Level = (typeof levels)[number];

/* =========================================================
   CLASS IDS

   1  - Aerial Yoga
   2  - Aerial Yoga Kids
   3  - Aerial Yoga Teens
   4  - Aerial Silks
   5  - Aerial Rope
   6  - Aerial Straps
   7  - Flying Pole
   8  - Aerial Hoop
   9  - Vinyasa Flow Yoga
   10 - Flexibility
========================================================= */

export interface ScheduleEntry {
  day: Day;
  start: string;
  end: string;

  /*
   * Συνδέεται με το ClassOfStudioData.
   */
  classId: number;

  /*
   * Χρησιμοποιείται μόνο όταν θέλουμε διαφορετικό
   * όνομα από αυτό του ClassOfStudioData.
   *
   * Παράδειγμα:
   * Aerial Silks / Rope
   */
  displayName?: LocalizedText;

  level: Level;

  classRoom: ClassRoom;
}

/* =========================================================
   HELPERS
========================================================= */

export const getClassById = (classId: number) =>
  classes.find(
    (classData) => classData.id === classId
  );

/*
 * Μπορείς να το χρησιμοποιήσεις στα components:
 *
 * const classData = getScheduleClass(entry);
 */
export const getScheduleClass = (
  entry: ScheduleEntry
) => getClassById(entry.classId);

/* =========================================================
   SCHEDULE
========================================================= */

export const schedule: ScheduleEntry[] = [
  /* =======================================================
     ROOM A — MONDAY
  ======================================================= */

  {
    day: "monday",
    start: "10:15",
    end: "11:15",
    classId: 1,
    level: "all-levels",
    classRoom: "room-a",
  },

  {
    day: "monday",
    start: "17:00",
    end: "18:30",
    classId: 4,
    level: "level-1",
    classRoom: "room-a",
  },

  {
    day: "monday",
    start: "18:30",
    end: "20:00",
    classId: 4,
    level: "level-2",
    classRoom: "room-a",
  },

  {
    day: "monday",
    start: "20:00",
    end: "21:30",
    classId: 4,
    level: "advanced",
    classRoom: "room-a",
  },

  {
    day: "monday",
    start: "21:30",
    end: "23:00",
    classId: 4,
    level: "level-2-3",
    classRoom: "room-a",
  },

  /* =======================================================
     ROOM A — TUESDAY
  ======================================================= */

  {
    day: "tuesday",
    start: "09:00",
    end: "10:00",
    classId: 9,
    level: "all-levels",
    classRoom: "room-a",
  },

  {
    day: "tuesday",
    start: "10:15",
    end: "11:15",
    classId: 1,
    level: "all-levels",
    classRoom: "room-a",
  },

  {
    day: "tuesday",
    start: "15:30",
    end: "17:00",
    classId: 8,
    level: "all-levels",
    classRoom: "room-a",
  },

  {
    day: "tuesday",
    start: "17:00",
    end: "18:30",
    classId: 8,
    level: "all-levels",
    classRoom: "room-a",
  },

  {
    day: "tuesday",
    start: "18:30",
    end: "20:00",
    classId: 6,
    level: "advanced",
    classRoom: "room-a",
  },

  {
    day: "tuesday",
    start: "20:00",
    end: "21:30",
    classId: 6,
    level: "level-2-3",
    classRoom: "room-a",
  },

  {
    day: "tuesday",
    start: "21:30",
    end: "23:00",
    classId: 4,
    level: "level-1-2",
    classRoom: "room-a",
  },

  /* =======================================================
     ROOM A — WEDNESDAY
  ======================================================= */

  {
    day: "wednesday",
    start: "10:15",
    end: "11:15",
    classId: 1,
    level: "all-levels",
    classRoom: "room-a",
  },

  {
    day: "wednesday",
    start: "17:00",
    end: "18:30",
    classId: 4,

    /*
     * Στο αρχικό data είχες "Level 1.2".
     * Το κρατάω ως ξεχωριστό key για να μην
     * αλλάξουμε σιωπηλά τα δεδομένα.
     */
    level: "level-1-dot-2",

    classRoom: "room-a",
  },

  {
    day: "wednesday",
    start: "18:30",
    end: "19:45",
    classId: 9,
    level: "level-2-3",
    classRoom: "room-a",
  },

  {
    day: "wednesday",
    start: "20:00",
    end: "21:30",
    classId: 4,
    level: "level-2-3",
    classRoom: "room-a",
  },

  {
    day: "wednesday",
    start: "21:30",
    end: "22:30",
    classId: 1,
    level: "level-3",
    classRoom: "room-a",
  },

  /* =======================================================
     ROOM A — THURSDAY
  ======================================================= */

  {
    day: "thursday",
    start: "09:00",
    end: "10:00",
    classId: 9,
    level: "all-levels",
    classRoom: "room-a",
  },

  {
    day: "thursday",
    start: "10:15",
    end: "11:15",
    classId: 1,
    level: "all-levels",
    classRoom: "room-a",
  },

  {
    day: "thursday",
    start: "17:00",
    end: "18:30",
    classId: 7,
    level: "all-levels",
    classRoom: "room-a",
  },

  {
    day: "thursday",
    start: "18:30",
    end: "20:00",
    classId: 5,
    level: "advanced",
    classRoom: "room-a",
  },

  {
    day: "thursday",
    start: "20:00",
    end: "21:30",

    /*
     * Επειδή δεν υπάρχει ξεχωριστό class
     * "Aerial Silks/Rope", συνδέουμε το
     * πρόγραμμα με το Aerial Silks.
     */
    classId: 4,

    displayName: {
      el: "Aerial Silks/Rope",
      en: "Aerial Silks/Rope",
    },

    level: "level-2-3",
    classRoom: "room-a",
  },

  {
    day: "thursday",
    start: "21:30",
    end: "23:00",
    classId: 4,
    level: "level-1-2",
    classRoom: "room-a",
  },

  /* =======================================================
     ROOM A — FRIDAY
  ======================================================= */

  {
    day: "friday",
    start: "10:15",
    end: "11:15",
    classId: 1,
    level: "all-levels",
    classRoom: "room-a",
  },

  {
    day: "friday",
    start: "15:40",
    end: "16:40",
    classId: 1,
    level: "level-2",
    classRoom: "room-a",
  },

  {
    day: "friday",
    start: "16:45",
    end: "17:45",
    classId: 2,
    level: "all-levels",
    classRoom: "room-a",
  },

  {
    day: "friday",
    start: "18:00",
    end: "19:30",
    classId: 7,
    level: "level-2",
    classRoom: "room-a",
  },

  {
    day: "friday",
    start: "19:30",
    end: "21:00",
    classId: 4,
    level: "level-2",
    classRoom: "room-a",
  },

  {
    day: "friday",
    start: "21:15",
    end: "22:45",
    classId: 8,
    level: "level-2",
    classRoom: "room-a",
  },

  /* =======================================================
     ROOM A — SATURDAY
  ======================================================= */

  {
    day: "saturday",
    start: "10:45",
    end: "12:15",
    classId: 8,
    level: "level-1",
    classRoom: "room-a",
  },

  {
    day: "saturday",
    start: "12:15",
    end: "13:15",
    classId: 10,
    level: "all-levels",
    classRoom: "room-a",
  },

  {
    day: "saturday",
    start: "13:15",
    end: "14:45",
    classId: 8,
    level: "level-2",
    classRoom: "room-a",
  },

  {
    day: "saturday",
    start: "15:00",
    end: "16:30",
    classId: 7,
    level: "all-levels",
    classRoom: "room-a",
  },

  /* =======================================================
     ROOM B — MONDAY
  ======================================================= */

  {
    day: "monday",
    start: "15:40",
    end: "16:40",
    classId: 1,
    level: "level-1",
    classRoom: "room-b",
  },

  {
    day: "monday",
    start: "16:45",
    end: "17:45",
    classId: 3,
    level: "all-levels",
    classRoom: "room-b",
  },

  {
    day: "monday",
    start: "17:50",
    end: "18:50",
    classId: 1,
    level: "level-1",
    classRoom: "room-b",
  },

  {
    day: "monday",
    start: "19:00",
    end: "20:15",
    classId: 9,
    level: "all-levels",
    classRoom: "room-b",
  },

  {
    day: "monday",
    start: "20:20",
    end: "21:20",
    classId: 1,
    level: "level-2",
    classRoom: "room-b",
  },

  {
    day: "monday",
    start: "21:30",
    end: "22:30",
    classId: 1,
    level: "level-2-3",
    classRoom: "room-b",
  },

  /* =======================================================
     ROOM B — TUESDAY
  ======================================================= */

  {
    day: "tuesday",
    start: "16:45",
    end: "17:45",
    classId: 3,
    level: "all-levels",
    classRoom: "room-b",
  },

  {
    day: "tuesday",
    start: "17:50",
    end: "18:50",
    classId: 1,
    level: "level-1",
    classRoom: "room-b",
  },

  {
    day: "tuesday",
    start: "19:00",
    end: "20:15",
    classId: 9,
    level: "level-1-2",
    classRoom: "room-b",
  },

  {
    day: "tuesday",
    start: "20:20",
    end: "21:20",
    classId: 1,
    level: "level-2",
    classRoom: "room-b",
  },

  {
    day: "tuesday",
    start: "21:30",
    end: "22:30",
    classId: 1,
    level: "level-1",
    classRoom: "room-b",
  },

  /* =======================================================
     ROOM B — WEDNESDAY
  ======================================================= */

  {
    day: "wednesday",
    start: "16:45",
    end: "17:45",
    classId: 2,
    level: "all-levels",
    classRoom: "room-b",
  },

  {
    day: "wednesday",
    start: "17:50",
    end: "18:50",
    classId: 1,
    level: "level-2",
    classRoom: "room-b",
  },

  {
    day: "wednesday",
    start: "19:00",
    end: "20:00",
    classId: 1,
    level: "level-1",
    classRoom: "room-b",
  },

  {
    day: "wednesday",
    start: "20:20",
    end: "21:20",
    classId: 1,
    level: "level-2",
    classRoom: "room-b",
  },

  {
    day: "wednesday",
    start: "21:30",
    end: "22:30",
    classId: 1,
    level: "level-1",
    classRoom: "room-b",
  },

  /* =======================================================
     ROOM B — THURSDAY
  ======================================================= */

  {
    day: "thursday",
    start: "16:45",
    end: "17:45",
    classId: 3,
    level: "all-levels",
    classRoom: "room-b",
  },

  {
    day: "thursday",
    start: "17:50",
    end: "18:50",
    classId: 1,
    level: "level-1",
    classRoom: "room-b",
  },

  {
    day: "thursday",
    start: "19:00",
    end: "20:15",
    classId: 9,
    level: "level-1-2",
    classRoom: "room-b",
  },

  {
    day: "thursday",
    start: "20:20",
    end: "21:20",
    classId: 1,
    level: "level-1",
    classRoom: "room-b",
  },

  {
    day: "thursday",
    start: "21:30",
    end: "22:30",
    classId: 1,
    level: "level-2",
    classRoom: "room-b",
  },

  /* =======================================================
     ROOM B — FRIDAY
  ======================================================= */

  {
    day: "friday",
    start: "18:00",
    end: "19:15",
    classId: 9,
    level: "all-levels",
    classRoom: "room-b",
  },

  {
    day: "friday",
    start: "19:20",
    end: "20:20",
    classId: 1,
    level: "level-2",
    classRoom: "room-b",
  },

  {
    day: "friday",
    start: "20:30",
    end: "21:30",
    classId: 1,
    level: "level-1",
    classRoom: "room-b",
  },
];