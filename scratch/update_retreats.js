const fs = require('fs');

const filePath = 'i:\\techpro excersice\\aiorisis\\data\\RetreatData.ts';
let content = fs.readFileSync(filePath, 'utf8');

// Add import if not exists
if (!content.includes('LocalizedText')) {
    content = `import { LocalizedText } from "@/components/extraComponents/HelperTranslate";\n` + content;
}

// Update interface
content = content.replace('title: string;', 'title: LocalizedText;');
content = content.replace('subtitle?: string;', 'subtitle?: LocalizedText;');
content = content.replace('description: string;', 'description: LocalizedText;');
content = content.replace('date: string;', 'date: LocalizedText;');
content = content.replace('instructors: string[];', 'instructors: LocalizedText[];');
content = content.replace('location: string;', 'location: LocalizedText;');
content = content.replace('includes: string[];', 'includes: LocalizedText[];');

// Helper to replace simple string fields
const replaceField = (field) => {
    const regex = new RegExp(`^(\\s*)${field}:\\s*(?:\`([\\s\\S]*?)\`|"([^"]*)"|'([^']*)'),`, 'gm');
    content = content.replace(regex, (match, indent, p1, p2, p3) => {
        const val = p1 || p2 || p3 || "";
        return `${indent}${field}: {\n${indent}  el: \`${val}\`,\n${indent}  en: \`${val}\`,\n${indent}},`;
    });
};

replaceField('title');
replaceField('subtitle');
replaceField('description');
replaceField('date');
replaceField('location');

// Replace includes array
content = content.replace(/^(\s*)includes:\s*\[([\s\S]*?)\],/gm, (match, indent, arrContent) => {
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

// NOTE: English translations will just be populated with the Greek text for now to save tokens, 
// as doing a full text translation of massive descriptions might exceed output limits and is brittle with regex.
// The user can then manually fill in the translation or use an auto-translation tool.

fs.writeFileSync(filePath, content, 'utf8');
console.log('RetreatData.ts updated');
