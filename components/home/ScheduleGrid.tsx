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
  const visibleDays = days.filter((day) => day !== 'Κυριακή');

  return (
    <section className="bg-gray-50 py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-6xl font-bold text-center text-gray-900 mb-16 tracking-tight">
          Ώρες Μαθημάτων
        </h2>

        {classRooms.map((room) => {
          const roomEntries = schedule.filter(
            (entry) => entry.classRoom === room
          );

          if (!roomEntries.length) return null;

          return (
            <div key={room} className="mb-24 last:mb-0">
              <h3 className="text-2xl font-black text-[#B9007C] mb-2  tracking-widest italic">
                {room}
              </h3>

              <div className="overflow-x-auto rounded-3xl border border-gray-200 bg-white shadow-xl p-4 md:p-8">
                <div
                  className="relative grid min-w-[1000px] bg-white"
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
                            key={`${room}-${entry.day}-${entry.start}-${entry.className}`}
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
            </div>
          );
        })}
      </div>
    </section>
  );
}