#!/usr/bin/env python3
import re

# Read the document
with open('document_linked.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Function to convert reference numbers to links
def convert_reference_to_link(match):
    full_match = match.group(0)
    content_inside = match.group(1)

    # Skip if it starts with common non-reference patterns
    if re.match(r'^(p\s*\d|page|section|eg|e\.g\.|i\.e\.|see|cf|note|table|figure|\d{4})', content_inside, re.I):
        return full_match

    # Skip if it contains URLs or email patterns
    if re.search(r'https?://|www\.|@', content_inside):
        return full_match

    # Skip if it's a date pattern
    if re.match(r'^(january|february|march|april|may|june|july|august|september|october|november|december)\s+\d{4}$', content_inside, re.I):
        return full_match

    # Skip if it contains too many capital letters (likely chemical formula or abbreviation)
    if re.search(r'[A-Z]{2,}|µg|mg|ml|nm|\d+x\d+', content_inside):
        return full_match

    # Process if it looks like reference numbers (single, multiple, or ranges)
    if re.match(r'^\d+(?:\s*,\s*\d+)*(?:\s*-\s*\d+)?$', content_inside.strip()):
        # Split by comma to handle multiple references
        parts = re.split(r',', content_inside)
        linked_parts = []

        for part in parts:
            part = part.strip()
            # Check if it's a range
            if '-' in part:
                # Handle ranges like "19-21"
                range_parts = part.split('-')
                if len(range_parts) == 2:
                    start = range_parts[0].strip()
                    end = range_parts[1].strip()
                    if start.isdigit() and end.isdigit():
                        linked_parts.append(f'<a href="#ref-{start}" class="reference-link">{start}</a>-<a href="#ref-{end}" class="reference-link">{end}</a>')
                    else:
                        linked_parts.append(part)
                else:
                    linked_parts.append(part)
            elif part.isdigit():
                # Single reference
                linked_parts.append(f'<a href="#ref-{part}" class="reference-link">{part}</a>')
            else:
                linked_parts.append(part)

        return '(' + ', '.join(linked_parts) + ')'

    return full_match

# Process content - handle multiple reference sections
def process_content(content):
    # Instead of trying to find where references start,
    # let's exclude content that's clearly within reference entries

    # Split by HTML tags to avoid processing tag attributes
    parts = re.split(r'(<[^>]+>)', content)

    processed_parts = []
    refs_converted = 0
    in_reference_entry = False

    for i, part in enumerate(parts):
        # Check if we're entering a reference entry
        if '<span id="ref-' in part:
            in_reference_entry = True

        # Only process non-tag parts that are NOT in reference entries
        if not part.startswith('<') and not in_reference_entry:
            # Convert references in parentheses to links
            original = part
            part = re.sub(r'\(([^)]+)\)', convert_reference_to_link, part)
            if part != original:
                refs_converted += 1
                # Debug: show what we converted
                if refs_converted <= 5:  # Show first 5 conversions
                    print(f"Converted: {original[:50]}... -> {part[:50]}...")

        # Check if we're exiting a reference entry (look for closing of reference paragraph/div)
        # This is approximate - references usually end with some closing tag
        if in_reference_entry and ('</p>' in part or '</div>' in part or '</span>' in part):
            # Check if the next non-empty content looks like a new reference
            # If not, we might be out of the reference section
            # This is a heuristic approach
            if i + 2 < len(parts):
                next_content = parts[i + 1] if i + 1 < len(parts) else ''
                next_next = parts[i + 2] if i + 2 < len(parts) else ''
                if not re.search(r'id="ref-\d+"|^\s*\d+\.\s*$', next_content + next_next):
                    in_reference_entry = False

        processed_parts.append(part)

    print(f"Converted references in {refs_converted} text segments")

    # Recombine the parts
    return ''.join(processed_parts)

# Process the content
processed = process_content(content)

# Add CSS for reference links if not already present
if 'reference-link' not in content:
    # Find the </style> tag and insert our CSS before it
    style_end = processed.find('</style>')
    if style_end > 0:
        css = """
    .reference-link {
        color: #e74c3c;
        text-decoration: none;
        border-bottom: 1px dotted #e74c3c;
        font-weight: normal;
    }
    .reference-link:hover {
        color: #c0392b;
        border-bottom-style: solid;
    }
"""
        processed = processed[:style_end] + css + processed[style_end:]

# Write the updated content
with open('document_linked.html', 'w', encoding='utf-8') as f:
    f.write(processed)

print("Added reference links to document_linked.html")

# Report how many references were linked
linked_refs = re.findall(r'class="reference-link"', processed)
print(f"Created {len(linked_refs)} reference links")