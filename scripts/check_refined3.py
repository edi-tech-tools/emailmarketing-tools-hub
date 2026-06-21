#!/usr/bin/env python3
import re

with open('app/data/tools.ts', 'r') as f:
    content = f.read()

# Find each tool by id
for m in re.finditer(r'id:\s*"([^"]+)"', content):
    tool_id = m.group(1)
    start = m.end()
    search_area = content[start:start+5000]
    
    # Find longDescription and check its length
    idx = search_area.find('longDescription:')
    if idx >= 0:
        desc_section = search_area[idx:]
        # Find the string value - could be backtick or double-quote
        val_start = desc_section.find(':') + 1
        val_start = val_start + len(desc_section[val_start:].lstrip())
        
        if desc_section[val_start:val_start+1] == '`':
            # backtick string
            end_idx = desc_section.find('`', val_start+1)
            length = end_idx - val_start - 1
        elif desc_section[val_start:val_start+1] == '"':
            # double-quote string
            end_idx = desc_section.find('"', val_start+1)
            length = end_idx - val_start - 1
        else:
            length = 0
        
        status = "REFINED" if length > 200 else "UNREFINED"
        print(f'{status}: {tool_id} (len={length})')
    else:
        print(f'ERROR: {tool_id} no longDescription')
