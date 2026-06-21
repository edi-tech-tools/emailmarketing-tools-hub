#!/usr/bin/env python3
import re

with open('app/data/tools.ts', 'r') as f:
    content = f.read()

# Find each tool by id
for m in re.finditer(r'id:\s*"([^"]+)"', content):
    tool_id = m.group(1)
    start = m.end()
    # search for longDescription in the following text (up to 5000 chars)
    search_area = content[start:start+5000]
    
    # Find longDescription field
    ld_match = re.search(r'longDescription:\s*(`[^`]*`)', search_area)
    if ld_match:
        desc = ld_match.group(1)
        if len(desc) < 100:
            print(f'UNREFINED: {tool_id} (len={len(desc)})')
        else:
            print(f'refined:   {tool_id} (len={len(desc)})')
    else:
        # Try multiline
        ld_match2 = re.search(r'longDescription:\s*`((?:[^`]|\n)*)`', search_area)
        if ld_match2:
            desc = ld_match2.group(1)
            if len(desc) < 100:
                print(f'UNREFINED: {tool_id} (len={len(desc)})')
            else:
                print(f'refined:   {tool_id} (len={len(desc)})')
        else:
            print(f'UNKNOWN:   {tool_id}')
