import os
import re
import json

def validate_markdown_file(file_path):
    print(f"Checking {os.path.basename(file_path)}...")
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    errors = []
    
    # 1. Check if file has YAML frontmatter
    if content.startswith("---"):
        parts = content.split("---")
        if len(parts) >= 3:
            frontmatter = parts[1]
            # Verify YAML key-value format (simple regex check)
            for line in frontmatter.strip().split("\n"):
                if line.strip() and ":" not in line:
                    errors.append(f"Invalid YAML frontmatter line: '{line}'")
    
    # 2. Check for code blocks representing JSON or YAML schemas
    # Find block patterns: ```json ... ```
    json_blocks = re.findall(r'```json\s*\n(.*?)\n\s*```', content, re.DOTALL)
    for index, block in enumerate(json_blocks):
        # Strip out comments or placeholders if any, or attempt json loads
        cleaned_block = block.strip()
        # If block contains placeholders like "String" or "Integer" as values, replace them with temporary strings to validate syntax
        # e.g. "headline": "String" -> valid json
        # Let's perform standard replacements for mock schema validation
        cleaned_block = re.sub(r':\s*\"String\"', ': "MockString"', cleaned_block)
        cleaned_block = re.sub(r':\s*\"Integer\"', ': 123', cleaned_block)
        cleaned_block = re.sub(r':\s*\"Boolean\"', ': true', cleaned_block)
        cleaned_block = re.sub(r':\s*\"Object\"', ': {}', cleaned_block)
        cleaned_block = re.sub(r':\s*\"List\"', ': []', cleaned_block)
        
        # Skip if it is obviously an abstract schema description and not JSON
        if cleaned_block.startswith("{") or cleaned_block.startswith("["):
            try:
                json.loads(cleaned_block)
            except json.JSONDecodeError as e:
                # We only flag if it's supposed to be raw valid JSON (not mock placeholder descriptions)
                if "String" not in block and "Integer" not in block:
                    errors.append(f"JSON Code Block #{index+1} is syntactically invalid: {e.msg} on line {e.lineno}")
                    
    return errors

def main():
    workspace = "/Users/Shailesh/MYAIAGENTS/applied-ai-systems"
    directories_to_scan = [
        os.path.join(workspace, "templates"),
        os.path.join(workspace, "start-here"),
        os.path.join(workspace, "modules")
    ]
    
    total_checked = 0
    total_errors = 0
    
    for directory in directories_to_scan:
        if not os.path.exists(directory):
            continue
            
        for root, _, files in os.walk(directory):
            for file in files:
                if file.endswith(".md"):
                    file_path = os.path.join(root, file)
                    errors = validate_markdown_file(file_path)
                    total_checked += 1
                    if errors:
                        print(f"❌ Syntax issues found in {os.path.relpath(file_path, workspace)}:")
                        for err in errors:
                            print(f"   - {err}")
                        total_errors += len(errors)
                    else:
                        print(f"✓ Valid: {os.path.relpath(file_path, workspace)}")
                        
    print("-" * 50)
    print(f"Schema Validation Summary: Checked {total_checked} files.")
    if total_errors > 0:
        print(f"⚠️ Total syntax alerts: {total_errors}. Review issues noted above.")
    else:
        print("🎉 All scanned Markdown file syntax checks passed successfully!")

if __name__ == "__main__":
    main()
