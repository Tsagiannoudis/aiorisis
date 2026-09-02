"use client";

import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";

import { Link } from "@/i18n/navigation";

import {
  schedule,
  getClassById,
  days,
  classRooms,
} from "@/data/ScheduleData";

import {
  createTranslator,
  type Locale,
} from "@/components/extraComponents/LocaleSwitchTranslate";

export default function ScheduleList() {
  const t = useTranslations("ScheduleList");

  const getLevelLabel = (level: string) => {
    const key = `levels.${level}`;

    if (t.has(key)) {
      return t(key);
    }

    return level;
  };

  const locale = useLocale() as Locale;
  const tData = createTranslator(locale);

  const [activeRoom, setActiveRoom] =
    useState<(typeof classRooms)[number]>(classRooms[0]);

  return (
    <div className="container mx-auto px-4 py-12 max-w-7xl">
      <div className="mb-12 mt-6">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 text-center tracking-tighter italic">
          {t("title")}
        </h2>
      </div>

      {/* Room Switcher Tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {classRooms.map((room) => (
          <button
            key={room}
            type="button"
            onClick={() => setActiveRoom(room)}
            className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 border ${activeRoom === room
              ? "bg-[#B9007C] text-white border-[#B9007C] shadow-md"
              : "bg-white text-gray-600 border-gray-200 hover:bg-gray-50"
              }`}
          >
            {t(`rooms.${room}`)}
          </button>
        ))}
      </div>

      <div
        key={activeRoom}
        className="animate-in fade-in duration-500"
      >
        {(() => {
          const roomEntries = schedule.filter(
            (entry) => entry.classRoom === activeRoom
          );

          if (roomEntries.length === 0) {
            return null;
          }

          return (
            <div className="space-y-10">
              {days.map((day) => {
                const dayRoomEntries = roomEntries.filter(
                  (entry) => entry.day === day
                );

                if (dayRoomEntries.length === 0) {
                  return null;
                }

                return (
                  <div key={day}>
                    <h3 className="text-xl md:text-2xl font-bold text-[#B9007C] mb-4 border-l-4 border-[#B9007C] pl-4">
                      {t(`days.${day}`)}
                    </h3>

                    <div className="overflow-x-auto rounded-xl border border-gray-200">
                      <table className="w-full text-left border-collapse">
                        <thead className="bg-gray-50 text-gray-600 text-xs md:text-sm uppercase font-semibold">
                          <tr>
                            <th className="px-4 py-3 md:px-6">
                              {t("hour")}
                            </th>

                            <th className="px-4 py-3 md:px-6">
                              {t("class")}
                            </th>

                            <th className="px-4 py-3 md:px-6">
                              {t("level")}
                            </th>
                          </tr>
                        </thead>

                        <tbody className="divide-y divide-gray-100">
                          {dayRoomEntries.map((entry) => {
                            const classData = getClassById(
                              entry.classId
                            );

                            if (!classData) {
                              return null;
                            }

                            const displayName = entry.displayName
                              ? tData(entry.displayName)
                              : tData(classData.className);

                            return (
                              <tr
                                key={`${entry.day}-${entry.start}-${entry.classId}`}
                                className="transition-colors hover:bg-black/5"
                                style={{
                                  backgroundColor: classData.color
                                    ? `${classData.color}20`
                                    : "transparent",
                                }}
                              >
                                {/* Time */}
                                <td className="px-4 py-4 md:px-6 font-bold text-gray-900 whitespace-nowrap">
                                  {entry.start} - {entry.end}
                                </td>

                                {/* Class */}
                                <td className="px-4 py-4 md:px-6">
                                  <Link
                                    href={`/classes/${classData.slug}`}
                                    className="font-semibold text-gray-900 hover:text-[#B9007C] transition-all duration-200 hover:underline underline-offset-4 decoration-[#B9007C]/30"
                                  >
                                    {displayName}
                                  </Link>
                                </td>

                                {/* Level */}
                                <td className="px-4 py-4 md:px-6 text-sm text-gray-600">
                                  {getLevelLabel(entry.level)}                                </td>
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