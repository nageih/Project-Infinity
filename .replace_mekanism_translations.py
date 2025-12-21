import json
from pathlib import Path

snbt_path = Path(r"c:\Users\PC\curseforge\minecraft\Instances\Project Infinity\config\ftbquests\quests\chapters\mekanism.snbt")
en_us_path = Path(r"c:\Users\PC\curseforge\minecraft\Instances\Project Infinity\kubejs\assets\kubejs\lang\en_us.json")

with en_us_path.open('r', encoding='utf-8') as f:
    en = json.load(f)

# Build mapping from full key name (without braces) to text
mapping = {}
for k, v in en.items():
    mapping[k] = v

text = snbt_path.read_text(encoding='utf-8')

# Replace occurrences like "{atm9.quest.mekanism.foo}"
for key, val in mapping.items():
    placeholder = '{' + key + '}'
    # ensure replacement is the raw string value inside quotes
    text = text.replace(placeholder, val)

# Write back
snbt_path.write_text(text, encoding='utf-8')

# Report leftover placeholders
leftover = []
for line in text.splitlines():
    if '{atm9.quest.mekanism.' in line:
        leftover.append(line)

print('Replacements done. Leftover placeholders:', len(leftover))
if leftover:
    for l in leftover[:50]:
        print(l)
