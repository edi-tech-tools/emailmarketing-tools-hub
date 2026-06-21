#!/usr/bin/env python3
import re

with open('app/data/tools.ts', 'r') as f:
    content = f.read()

# Find each tool by id
refined_count = 0
unrefined_count = 0
unrefined_ids = []

for m in re.finditer(r'id:\s*"([^"]+)"', content):
    tool_id = m.group(1)
    start = m.end()
    search_area = content[start:start+5000]
    
    ld_match = re.search(r'longDescription:\s*(`[^`]*`|"[^"]*")', search_area)
    if ld_match:
        desc = ld_match.group(1)
        if len(desc) < 100:
            unrefined_count += 1
            unrefined_ids.append(tool_id)
        else:
            refined_count += 1
    else:
        unrefined_count += 1
        unrefined_ids.append(tool_id)

print(f'Refined: {refined_count}')
print(f'Unrefined: {unrefined_count}')
print(f'Unrefined tools: {unrefined_ids}')
