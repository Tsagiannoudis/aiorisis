'use client';

import { useState } from 'react';
import {
  schedule,
  getClassByName,
  days,
  classRooms,
  scheduleStartHour,
  scheduleEndHour,
  getGridRowStart,
  getGridRowSpan,
  totalRows,
} from '@/data/ScheduleData';

export default function ScheduleGrid() {
  const [activeRoom, setActiveRoom] = useState<typeof classRooms[number]>(classRooms[0]);
  const visibleDays = days.filter((day) => day !== 'Κυριακή');

  return (
    <section className="bg-[#F6F1EB] py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-6xl font-bold text-center text-gray-900 mb-16 tracking-tight">
          Ώρες Μαθημάτων
        </h2>

        {/* Room Switcher Tabs */}
        <div className="flex justify-center gap-4 mb-12">
          {classRooms.map((room) => (
            <button
              key={room}
              onClick={() => setActiveRoom(room)}
              className={`px-8 py-3 rounded-full text-lg font-bold transition-all duration-300 border ${
                activeRoom === room
                  ? 'bg-[#B9007C] text-white border-[#B9007C] scale-105 shadow-lg shadow-[#B9007C]/20'
                  : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50'
              }`}
            >
              {room}
            </button>
          ))}
        </div>

        {/* Active Grid Content */}
        <div key={activeRoom} className="animate-in fade-in duration-500">
          {(() => {
            const roomEntries = schedule.filter((entry) => entry.classRoom === activeRoom);
            if (!roomEntries.length) return null;

            return (
              <div className="overflow-x-auto rounded-3xl border border-gray-200 bg-white shadow-xl p-4 md:p-8">
                <div
                  className="relative grid min-w-[800px] bg-white"
                  style={{
                    gridTemplateColumns: `70px repeat(${visibleDays.length}, minmax(120px, 1fr))`,
                    gridTemplateRows: `42px repeat(${totalRows}, 18px)`,
                  }}
                >
                  <div className="bg-gray-50/50 border-b border-r border-gray-100" />

                  {visibleDays.map((day, index) => (
                    <div
                      key={day}
                      className="bg-gray-50/50 text-center text-xs font-bold uppercase tracking-wider text-gray-500 py-3 border-b border-r border-gray-100 last:border-r-0"
                      style={{
                        gridColumn: index + 2,
                        gridRow: 1,
                      }}
                    >
                      {day}
                    </div>
                  ))}

                  {Array.from({
                    length: scheduleEndHour - scheduleStartHour + 1,
                  }).map((_, index) => {
                    const hour = scheduleStartHour + index;

                    return (
                      <div
                        key={hour}
                        className="text-[10px] font-medium text-gray-400 pr-3 text-right flex items-start justify-end pt-1"
                        style={{
                          gridColumn: 1,
                          gridRow: index * 4 + 2,
                        }}
                      >
                        {String(hour).padStart(2, '0')}:00
                      </div>
                    );
                  })}

                  {Array.from({ length: totalRows }).map((_, rowIndex) => (
                    <div
                      key={`line-${rowIndex}`}
                      className={`border-b  border-gray-50`}
                      style={{
                        gridColumn: `2 / -1`,
                        gridRow: rowIndex + 2,
                      }}
                    />
                  ))}

                  {visibleDays.map((day, dayIndex) =>
                    roomEntries
                      .filter((entry) => entry.day === day)
                      .map((entry) => {
                        const classData = getClassByName(entry.className);

                        return (
                          <div
                            key={`${activeRoom}-${entry.day}-${entry.start}-${entry.className}`}
                            className="z-10 m-[2px] p-2 text-center flex flex-col items-center justify-center overflow-hidden rounded-lg shadow-sm transition-all duration-300 hover:scale-[1.02] hover:z-20 hover:shadow-md border border-white/20"
                            style={{
                              gridColumn: dayIndex + 2,
                              gridRowStart: getGridRowStart(entry.start),
                              gridRowEnd: `span ${getGridRowSpan(
                                entry.start,
                                entry.end
                              )}`,
                              backgroundColor: classData?.color ? `${classData.color}dd` : '#e5e7eb',
                            }}
                          >
                            <h4 className="text-[11px] md:text-[13px] font-bold text-gray-900 leading-tight">
                              {classData?.className || entry.className}
                            </h4>

                            <p className="text-[9px] md:text-[10px] font-medium text-gray-800/70 leading-tight mt-0.5">
                              {entry.level}
                            </p>
                            <p className="text-[9px] md:text-[10px] font-bold text-gray-900 mt-1 opacity-60">
                              {entry.start} - {entry.end}
                            </p>
                          </div>
                        );
                      })
                  )}
                </div>
              </div>
            );
          })()}
        </div>
      </div>
    </section>
  );
}