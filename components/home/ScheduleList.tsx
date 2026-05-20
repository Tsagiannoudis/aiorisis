import { schedule, getClassByName, days, classRooms } from '@/data/ScheduleData';

export default function Schedule() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-18 mt-18">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 text-center tracking-tighter italic">Ώρες Μαθημάτων</h2>
      </div>

      {classRooms.map((room) => {
        // Φιλτράρουμε τα μαθήματα που ανήκουν στη συγκεκριμένη αίθουσα
        const roomEntries = schedule.filter((entry) => entry.classRoom === room);

        if (roomEntries.length === 0) return null;

        return (
          <div key={room} className="mb-24 last:mb-0 p-4 md:p-8 bg-white/50 rounded-[2rem] md:rounded-[3rem] border border-gray-100 shadow-xl">
            <h3 className="text-1xl md:text-2xl font-black text-gray-700 mb-8 md:12 text-right  tracking-tighter italic">
              {room}
            </h3>
            
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
          </div>
        );
      })}
    </div>
  );
}