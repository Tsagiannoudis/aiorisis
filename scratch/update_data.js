const fs = require('fs');

const filePath = 'i:\\techpro excersice\\aiorisis\\data\\ClassOfStudioData.tsx';
let content = fs.readFileSync(filePath, 'utf8');

content = content.replace(/className:\s*"([^"]+)",/g, 'className: {\n      el: "$1",\n      en: "$1",\n    },');
content = content.replace(/shortDescription:\s*"([^"]+)",/g, 'shortDescription: {\n      el: "$1",\n      en: "$1",\n    },');
content = content.replace(/timeOfClass:\s*"([^"]+)",/g, 'timeOfClass: {\n      el: "$1",\n      en: "$1",\n    },');

content = content.replace(/description:\s*`([\s\S]*?)`,/g, (match, p1) => {
    return `description: {\n      el: \`${p1}\`,\n      en: \`${p1}\`,\n    },`;
});

fs.writeFileSync(filePath, content, 'utf8');
console.log('Done');
