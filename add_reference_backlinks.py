#!/usr/bin/env python3
import re

# Read the document
with open('document_linked.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Track which references we've found and where they first appear
first_citations = {}  # ref_number -> position in content
citation_count = {}   # ref_number -> count of citations

# First pass: Find all reference citations and mark their positions
def find_reference_citations(content):
    # Find all reference links we created earlier
    pattern = r'<a href="#ref-(\d+)" class="reference-link">(\d+)</a>'

    for match in re.finditer(pattern, content):
        ref_num = match.group(1)
        position = match.start()

        # Track the first occurrence of each reference
        if ref_num not in first_citations:
            first_citations[ref_num] = position
            citation_count[ref_num] = 1
        else:
            citation_count[ref_num] += 1

    print(f"Found {len(first_citations)} unique references cited in the text")
    print(f"Top 5 most cited: {sorted(citation_count.items(), key=lambda x: x[1], reverse=True)[:5]}")

# Second pass: Add IDs to the first citation of each reference
def add_citation_ids(content):
    # We need to add IDs to the first occurrence of each reference
    # Process in reverse order of position to maintain string positions
    positions_to_update = sorted(
        [(pos, ref_num) for ref_num, pos in first_citations.items()],
        reverse=True
    )

    for pos, ref_num in positions_to_update:
        # Find the exact match at this position
        pattern = f'<a href="#ref-{ref_num}" class="reference-link">{ref_num}</a>'

        # Add an ID to this first citation
        replacement = f'<a id="cite-{ref_num}" href="#ref-{ref_num}" class="reference-link">{ref_num}</a>'

        # Replace at the specific position
        before = content[:pos]
        after = content[pos:]

        if after.startswith(pattern):
            after = after.replace(pattern, replacement, 1)
            content = before + after

    return content

# Third pass: Make reference numbers in the reference list clickable back to citations
def add_reference_backlinks(content):
    # Pattern to find reference entries
    # Looking for patterns like: <span id="ref-19">19.</span> or similar

    updates_made = 0
    refs_already_linked = set()  # Track which reference numbers we've already made clickable

    # Split content to process each reference entry
    parts = content.split('<span id="ref-')

    processed_parts = [parts[0]]  # First part before any references

    for part in parts[1:]:
        # Each part starts with the reference number
        match = re.match(r'^(\d+)">', part)
        if match:
            ref_num = match.group(1)

            # Check if we have a citation for this reference AND haven't already linked it
            if ref_num in first_citations and ref_num not in refs_already_linked:
                # Find where the reference number appears after the span tag
                # Look for patterns like "19." or just "19"
                ref_pattern = f'{ref_num}\\.'

                # Replace the reference number with a link back to the citation
                replacement = f'<a href="#cite-{ref_num}" class="backref-link" title="Jump to citation">{ref_num}</a>.'

                # Only replace the first occurrence of the pattern
                part_updated = re.sub(
                    f'(>\\s*){ref_num}\\.',
                    f'\\1{replacement}',
                    part,
                    count=1
                )

                if part_updated != part:
                    updates_made += 1
                    refs_already_linked.add(ref_num)
                    part = part_updated

        processed_parts.append('<span id="ref-' + part)

    print(f"Added {updates_made} back-links from references to citations")

    return ''.join(processed_parts)

# Add CSS for back-reference links if not already present
def add_backlink_css(content):
    if 'backref-link' not in content:
        # Find the </style> tag and insert our CSS before it
        style_end = content.find('</style>')
        if style_end > 0:
            css = """
    .backref-link {
        color: #3498db;
        text-decoration: none;
        font-weight: bold;
    }
    .backref-link:hover {
        text-decoration: underline;
    }
    /* Highlight effect when jumping to a citation */
    .reference-link:target {
        background-color: #ffeb3b;
        padding: 2px 4px;
        border-radius: 3px;
        animation: highlight-fade 3s ease-out;
    }
    @keyframes highlight-fade {
        0% { background-color: #ffeb3b; }
        100% { background-color: transparent; }
    }
"""
            content = content[:style_end] + css + content[style_end:]

    return content

# Main processing
print("Step 1: Finding reference citations...")
find_reference_citations(content)

print("\nStep 2: Adding IDs to first citations...")
content = add_citation_ids(content)

print("\nStep 3: Adding back-links from references to citations...")
content = add_reference_backlinks(content)

print("\nStep 4: Adding CSS for back-links...")
content = add_backlink_css(content)

# Write the updated content
with open('document_linked.html', 'w', encoding='utf-8') as f:
    f.write(content)

print("\nCompleted! References now link back to their first citations.")

# Verify the changes
cite_ids = len(re.findall(r'id="cite-\d+"', content))
backref_links = len(re.findall(r'class="backref-link"', content))
print(f"\nVerification:")
print(f"  - Citation IDs added: {cite_ids}")
print(f"  - Back-reference links created: {backref_links}")