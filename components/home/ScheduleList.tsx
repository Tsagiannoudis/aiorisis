'use client';

import { useState } from 'react';
import { schedule, getClassByName, days, classRooms } from '@/data/ScheduleData';

export default function Schedule() {
  const [activeRoom, setActiveRoom] = useState<typeof classRooms[number]>(classRooms[0]);

  return (
    <div className="container mx-auto px-4 py-12 max-w-7xl">
      <div className="mb-12 mt-6">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 text-center tracking-tighter italic">Ώρες Μαθημάτων</h2>
      </div>

      {/* Room Switcher Tabs */}
      <div className="flex justify-center gap-3 mb-12">
        {classRooms.map((room) => (
          <button
            key={room}
            onClick={() => setActiveRoom(room)}
            className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 border ${
              activeRoom === room
                ? 'bg-[#B9007C] text-white border-[#B9007C] shadow-md'
                : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50'
            }`}
          >
            {room}
          </button>
        ))}
      </div>

      <div key={activeRoom} className="animate-in fade-in duration-500">
        {(() => {
          const roomEntries = schedule.filter((entry) => entry.classRoom === activeRoom);
          if (roomEntries.length === 0) return null;

          return (
            <div className="space-y-10">
              {days.map((day) => {
                const dayRoomEntries = roomEntries.filter((entry) => entry.day === day);
                if (dayRoomEntries.length === 0) return null;

                return (
                  <div key={day}>
                    <h3 className="text-xl md:text-2xl font-bold text-[#B9007C] mb-4 border-l-4 border-[#B9007C] pl-4">
                      {day}
                    </h3>
                    <div className="overflow-x-auto rounded-xl border border-gray-200">
                      <table className="w-full text-left border-collapse">
                        <thead className="bg-gray-50 text-gray-600 text-xs md:text-sm uppercase font-semibold">
                          <tr>
                            <th className="px-4 py-3 md:px-6">Ώρα</th>
                            <th className="px-4 py-3 md:px-6">Μάθημα</th>
                            <th className="px-4 py-3 md:px-6">Επίπεδο</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                          {dayRoomEntries.map((entry) => {
                            const classData = getClassByName(entry.className);
                            return (
                              <tr 
                                key={`${entry.day}-${entry.start}-${entry.className}`}
                                className="transition-colors hover:bg-black/5"
                                style={{ backgroundColor: classData?.color ? `${classData.color}20` : 'transparent' }} // 20 για transparency στο hex
                              >
                                <td className="px-4 py-4 md:px-6 font-bold text-gray-900 whitespace-nowrap">{entry.start} - {entry.end}</td>
                                <td className="px-4 py-4 md:px-6">
                                  <span className="font-semibold text-gray-900">{classData?.className || entry.className}</span>
                                </td>
                                <td className="px-4 py-4 md:px-6 text-sm text-gray-600">{entry.level}</td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })()}
      </div>
    </div>
  );
}