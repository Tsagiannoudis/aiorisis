import re
import sys

def main():
    file_path = r"i:\techpro excersice\aiorisis\data\ClassOfStudioData.tsx"
    with open(file_path, "r", encoding="utf-8") as f:
        content = f.read()

    # className
    content = re.sub(r'className:\s*"([^"]+)",', r'className: {\n      el: "\1",\n      en: "\1",\n    },', content)

    # shortDescription
    content = re.sub(r'shortDescription:\s*"([^"]+)",', r'shortDescription: {\n      el: "\1",\n      en: "\1",\n    },', content)

    # timeOfClass
    content = re.sub(r'timeOfClass:\s*"([^"]+)",', r'timeOfClass: {\n      el: "\1",\n      en: "\1",\n    },', content)

    # description
    def desc_replacer(match):
        val = match.group(1)
        return f'description: {{\n      el: `{val}`,\n      en: `{val}`,\n    }},'

    content = re.sub(r'description:\s*`([^`]+)`,', desc_replacer, content)

    with open(file_path, "w", encoding="utf-8") as f:
        f.write(content)
    
    print("Done")

if __name__ == "__main__":
    main()
