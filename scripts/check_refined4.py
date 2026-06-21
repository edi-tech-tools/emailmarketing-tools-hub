#!/usr/bin/env python3
import re

with open('app/data/tools.ts', 'r') as f:
    content = f.read()

# Find each tool by id
for m in re.finditer(r'id:\s*"([^"]+)"', content):
    tool_id = m.group(1)
    start = m.end()
    search_area = content[start:start+5000]
    
    # Find longDescription
    idx = search_area.find('longDescription:')
    if idx >= 0:
        desc_section = search_area[idx:]
        val_start = desc_section.find(':') + 1
        # skip whitespace
        while val_start < len(desc_section) and desc_section[val_start] in ' \t\n\r':
            val_start += 1
        
        if val_start < len(desc_section) and desc_section[val_start] == '`':
            # backtick string - find closing backtick
            end_idx = desc_section.find('`', val_start + 1)
            if end_idx >= 0:
                length = end_idx - val_start - 1
            else:
                length = -1
        elif val_start < len(desc_section) and desc_section[val_start] == '"':
            # double-quote string - find closing quote
            end_idx = desc_section.find('"', val_start + 1)
            if end_idx >= 0:
                length = end_idx - val_start - 1
            else:
                length = -1
        else:
            length = -2
        
        if length <= 200:
            print(f'UNREFINED: {tool_id} (len={length})')
        else:
            print(f'REFINED:   {tool_id} (len={length})')
    else:
        print(f'ERROR: {tool_id} no longDescription')
