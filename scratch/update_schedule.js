const fs = require('fs');

const filePath = 'i:\\techpro excersice\\aiorisis\\data\\ScheduleData.ts';
let content = fs.readFileSync(filePath, 'utf8');

// Add import if not exists
if (!content.includes('LocalizedText')) {
    content = `import { LocalizedText } from "@/components/extraComponents/HelperTranslate";\n` + content;
}

// Update interface ScheduleEntry
content = content.replace('className: string;', 'className: LocalizedText;');
content = content.replace('level: string;', 'level: LocalizedText;');
content = content.replace('classRoom: string;', 'classRoom: LocalizedText;');

// Update schedule elements
// className
content = content.replace(/className:\s*'([^']+)',/g, 'className: { el: "$1", en: "$1" },');

// level
content = content.replace(/level:\s*'([^']+)',/g, 'level: { el: "$1", en: "$1" },');

// classRoom (Αίθουσα Α / Αίθουσα Β)
content = content.replace(/classRoom:\s*'Αίθουσα Α',/g, 'classRoom: { el: "Αίθουσα Α", en: "Room A" },');
content = content.replace(/classRoom:\s*'Αίθουσα Β',/g, 'classRoom: { el: "Αίθουσα Β", en: "Room B" },');

fs.writeFileSync(filePath, content, 'utf8');
console.log('ScheduleData.ts updated');
