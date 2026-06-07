#!/usr/bin/env python3
import json, urllib.request, urllib.error, sys, time

key = open('/tmp/api_key.txt').read().strip()
QWEN_ENDPOINT = "https://dashscope.aliyuncs.com/compatible-mode/v1"
QWEN_MODEL = "qwen-plus"

with open('/tmp/new_posts_first_batch.json') as f:
    NEW_POSTS = json.load(f)

def call_qwen(prompt, temperature=0.7, max_tokens=4096):
    url = QWEN_ENDPOINT + "/chat/completions"
    headers = {"Authorization": "Bearer " + key, "Content-Type": "application/json"}
    data = {"model": QWEN_MODEL,
        "messages": [
            {"role": "system", "content": "You are an expert email marketing strategist. Write detailed, actionable blog content with examples and statistics. Format with Markdown."},
            {"role": "user", "content": prompt}
        ],
        "temperature": temperature,
        "max_tokens": max_tokens}
    req = urllib.request.Request(url, data=json.dumps(data).encode("utf-8"), headers=headers, method="POST")
    try:
        with urllib.request.urlopen(req, timeout=60) as resp:
            result = json.loads(resp.read().decode("utf-8"))
            return result["choices"][0]["message"]["content"]
    except Exception as e:
        print("  Error:", e, flush=True)
        return None

def generate_content(post):
    prompt = "Write a detailed blog post. TITLE: " + post["title"] + ". EXCERPT: " + post["excerpt"] + ". Write at least 600 words. Use Markdown. Include specific data and actionable advice."
    result = call_qwen(prompt)
    if result:
        return result
    print("  Retrying...", flush=True)
    time.sleep(2)
    result = call_qwen(prompt)
    return result or ""

def format_post(post, content):
    tags_str = ", ".join('"' + t + '"' for t in post["tags"])
    safe = content.replace("\\", "\\\\")
    # Escape backticks inside the content
    safe = safe.replace(chr(96), "\\" + chr(96))
    parts = []
    parts.append("{")
    parts.append('    slug: "' + post["slug"] + '",')
    parts.append('    title: "' + post["title"] + '",')
    parts.append('    excerpt: "' + post["excerpt"] + '",')
    parts.append('    content: `' + safe + '`,')
    parts.append('    author: "' + post["author"] + '",')
    parts.append('    authorRole: "' + post["authorRole"] + '",')
    parts.append('    date: "' + post["date"] + '",')
    parts.append('    category: "' + post["category"] + '",')
    parts.append('    readTime: ' + str(post["readTime"]) + ',')
    parts.append('    tags: [' + tags_str + '],')
    parts.append('  }')
    return chr(10).join(parts)

def main():
    print("=" * 60, flush=True)
    print("REGENERATING FIRST 15 POSTS", flush=True)
    print("=" * 60, flush=True)
    generated = []
    for i, post in enumerate(NEW_POSTS):
        print("[" + str(i+1) + "/15] " + post["title"], flush=True)
        content = generate_content(post)
        if content:
            print("  OK - " + str(len(content.split())) + " words", flush=True)
        else:
            print("  FAILED - using placeholder", flush=True)
            content = "# " + post["title"] + chr(10) + chr(10) + "Detailed guide about " + post["title"] + ". This covers key concepts, strategies, and best practices for email marketers."
        formatted = format_post(post, content)
        generated.append(formatted)
        time.sleep(1)
    
    combined = chr(10) + chr(10) + chr(10).join(generated)
    with open("/tmp/first_batch_real.txt", "w") as f:
        f.write(combined)
    print("Done! Saved posts", flush=True)

if __name__ == "__main__":
    main()
