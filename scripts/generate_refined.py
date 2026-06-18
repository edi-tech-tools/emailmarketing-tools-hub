import json, os, sys

with open('/home/edi/.hermes/api_keys.env') as f:
    for line in f:
        line = line.strip()
        if line.startswith('QWEN_API_KEY_1='):
            os.environ['QWEN_API_KEY_1'] = line.split('=', 1)[1]

import urllib.request

tool_name = sys.argv[1] if len(sys.argv) > 1 else "MoEngage"
tool_desc = sys.argv[2] if len(sys.argv) > 2 else "AI-powered customer engagement platform"

prompt = f'''Generate refined content for the email marketing tool "{tool_name}" in JSON format. Return ONLY valid JSON.

{tool_name}: {tool_desc}

Return this exact JSON structure:
{{
  "longDescription": "250-350 character description, no ${{}} in content, wrapped in backticks at the start and end in the final output",
  "pros": ["4-5 concise advantage items"],
  "cons": ["3-4 concise disadvantage items"],
  "keyFeatures": ["4-5 distinctive key features"],
  "useCase": "Two sentences describing best use case.",
  "scoreBreakdown": {{"features": number, "reviews": number, "momentum": number, "popularity": number}},
  "userQuotes": [{{"role": "Job Title", "company": "Company Name", "quote": "One realistic quote about the tool"}}]
}}

IMPORTANT: 
- longDescription must be wrapped in backticks (not regular quotes) in the JSON output
- Do NOT use ${{}} anywhere in the content
- Replace any smart quotes with straight ASCII quotes
- Keep longDescription between 250-350 characters
'''

data = json.dumps({
    'model': 'qwen-plus',
    'messages': [{'role': 'user', 'content': prompt}],
    'temperature': 0.7,
    'max_tokens': 2000
}).encode()

req = urllib.request.Request(
    'https://dashscope.aliyuncs.com/compatible-mode/v1/chat/completions',
    data=data,
    headers={
        'Authorization': f'Bearer {os.environ["QWEN_API_KEY_1"]}',
        'Content-Type': 'application/json'
    }
)

resp = urllib.request.urlopen(req)
result = json.loads(resp.read())
content = result['choices'][0]['message']['content']

# Clean up smart quotes
content = content.replace('\u2018', "'").replace('\u2019', "'")
content = content.replace('\u201c', '"').replace('\u201d', '"')

print(content.strip())
