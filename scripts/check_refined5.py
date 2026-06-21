#!/usr/bin/env python3
import re

with open('app/data/tools.ts', 'r') as f:
    content = f.read()

# Find each tool by id and check isRefined status
for m in re.finditer(r'id:\s*"([^"]+)"', content):
    tool_id = m.group(1)
    start = m.end()
    search_area = content[start:start+5000]
    
    has_refined_flag = re.search(r'isRefined:\s*true', search_area)
    
    if has_refined_flag:
        print(f'REFINED_FLAG: {tool_id}')
    else:
        print(f'NO_FLAG:      {tool_id}')
