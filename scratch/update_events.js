const fs = require('fs');

const filePath = 'i:\\techpro excersice\\aiorisis\\data\\EventData.ts';
let content = fs.readFileSync(filePath, 'utf8');

// Add import if not exists
if (!content.includes('LocalizedText')) {
    content = `import { LocalizedText } from "@/components/extraComponents/HelperTranslate";\n` + content;
}

// Update interface
content = content.replace('title: string;', 'title: LocalizedText;');
content = content.replace('date: string;', 'date: LocalizedText;');
content = content.replace('time: string;', 'time: LocalizedText;');
content = content.replace('description: string;', 'description: LocalizedText;');
content = content.replace('includes: string[];', 'includes: LocalizedText[];');
content = content.replace('instructors: string[];', 'instructors: LocalizedText[];');
content = content.replace('instructorDetails?: string;', 'instructorDetails?: LocalizedText;');
content = content.replace('location: string;', 'location: LocalizedText;');

// Helper to replace simple string fields
const replaceField = (field) => {
    const regex = new RegExp(`^(\\s*)${field}:\\s*(?:\`([\\s\\S]*?)\`|"([^"]*)"|'([^']*)'),`, 'gm');
    content = content.replace(regex, (match, indent, p1, p2, p3) => {
        const val = p1 || p2 || p3 || "";
        return `${indent}${field}: {\n${indent}  el: \`${val}\`,\n${indent}  en: \`${val}\`,\n${indent}},`;
    });
};

replaceField('title');
replaceField('date');
replaceField('time');
replaceField('description');
replaceField('instructorDetails');
replaceField('location');

// Replace includes array
content = content.replace(/^(\s*)includes:\s*\[([\s\S]*?)\],/gm, (match, indent, arrContent) => {
    // find all strings in the array
    const strings = [];
    const strRegex = /(?:\`([\s\S]*?)\`|"([^"]*)"|'([^']*)')/g;
    let smatch;
    while ((smatch = strRegex.exec(arrContent)) !== null) {
        strings.push(smatch[1] || smatch[2] || smatch[3]);
    }
    const newItems = strings.map(s => `{\n${indent}    el: \`${s}\`,\n${indent}    en: \`${s}\`\n${indent}  }`).join(',\n  ' + indent);
    return `${indent}includes: [\n  ${indent}${newItems}\n${indent}],`;
});

// Replace instructors array
content = content.replace(/^(\s*)instructors:\s*\[([\s\S]*?)\],/gm, (match, indent, arrContent) => {
    const strings = [];
    const strRegex = /(?:\`([\s\S]*?)\`|"([^"]*)"|'([^']*)')/g;
    let smatch;
    while ((smatch = strRegex.exec(arrContent)) !== null) {
        strings.push(smatch[1] || smatch[2] || smatch[3]);
    }
    const newItems = strings.map(s => `{\n${indent}    el: \`${s}\`,\n${indent}    en: \`${s}\`\n${indent}  }`).join(',\n  ' + indent);
    return `${indent}instructors: [\n  ${indent}${newItems}\n${indent}],`;
});

fs.writeFileSync(filePath, content, 'utf8');
console.log('EventData.ts updated');
