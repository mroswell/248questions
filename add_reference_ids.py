#!/usr/bin/env python3
import re

# Read the document
with open('document_linked.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Find and replace reference patterns
# Pattern: <span>\n                    {number}.\n                    {reference text}
def add_ref_id(match):
    ref_num = match.group(1)
    return f'<span id="ref-{ref_num}">\n                    {ref_num}.'

# Replace reference patterns - looking for span tags with number patterns
pattern = r'<span>\n\s+(\d+)\.'
content = re.sub(pattern, add_ref_id, content)

# Write the updated content
with open('document_linked.html', 'w', encoding='utf-8') as f:
    f.write(content)

print("Added reference IDs to document_linked.html")