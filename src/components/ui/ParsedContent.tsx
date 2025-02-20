import React from "react";

interface ParsedContentProps {
    content: string;
}

const ParsedContent: React.FC<ParsedContentProps> = ({ content }) => {
    // Split the content by newline and filter out any empty lines
    const lines = content.split("\n").map(line => line.trim()).filter(Boolean);

    // We'll accumulate sections as objects with a heading and its associated list items
    type Section = { heading: string; items: string[] };
    const sections: Section[] = [];
    let currentSection: Section | null = null;

    lines.forEach((line) => {
        // If the line starts with "CODAC", treat it as a heading
        if (line.startsWith("CODAC")) {
            // Push the previous section if it exists
            if (currentSection) {
                sections.push(currentSection);
            }
            // Start a new section with the current line as the heading
            currentSection = { heading: line, items: [] };
        } else {
            // For non-heading lines, add them as items under the current section.
            // If there's no current section, create one with an empty heading.
            if (!currentSection) {
                currentSection = { heading: "", items: [line] };
            } else {
                currentSection.items.push(line);
            }
        }
    });

    // Push the last section if it exists
    if (currentSection) {
        sections.push(currentSection);
    }

    return (
        <>
            {sections.map((section, index) => (
                <div key={index} className="mt-4">
                    {section.heading && <p><strong>{section.heading}</strong></p>}
                    {section.items.length > 0 && (
                        <ul>
                            {section.items.map((item, idx) => (
                                <li key={idx}>{item}</li>
                            ))}
                        </ul>
                    )}
                </div>
            ))}
        </>
    );
};

export default ParsedContent;
