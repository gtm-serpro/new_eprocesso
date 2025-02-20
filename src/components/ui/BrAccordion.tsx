// BrAccordion.tsx
import { useState, useImperativeHandle, forwardRef } from 'react';
import BrTag from '../BrTag';
import "@/styles/Accordion.css";
import ParsedContent from './ParsedContent';

export interface BrAccordionHandle {
    expandAll: () => void;
    collapseAll: () => void;
}

interface AccordionItem {
    id: string;
    title: string;
    content: string;
}

interface BrAccordionProps {
    data: AccordionItem[];
    single?: boolean;
}

const BrAccordion = forwardRef<BrAccordionHandle, BrAccordionProps>(
    ({ data, single = false }, ref) => {
        const [activeItems, setActiveItems] = useState<Set<string>>(new Set());

        const toggleItem = (itemId: string) => {
            setActiveItems(prev => {
                const newActiveItems = new Set(prev);
                if (single) {
                    newActiveItems.clear();
                    if (!prev.has(itemId)) {
                        newActiveItems.add(itemId);
                    }
                } else {
                    if (prev.has(itemId)) {
                        newActiveItems.delete(itemId);
                    } else {
                        newActiveItems.add(itemId);
                    }
                }
                return newActiveItems;
            });
        };

        const expandAll = () => {
            if (!single) {
                // Set activeItems to contain all item IDs
                setActiveItems(new Set(data.map(item => item.id)));
            } else {
                // For single mode, we can choose to expand only the first item
                setActiveItems(new Set([data[0]?.id]));
            }
        };

        const collapseAll = () => {
            setActiveItems(new Set());
        };

        useImperativeHandle(ref, () => ({
            expandAll,
            collapseAll
        }));

        return (
            <div className="br-accordion" id="accordion1">
                {data.map((item) => {
                    const isActive = activeItems.has(item.id);
                    const [prefix, ...titleParts] = item.title.split(" - ");
                    const remainingTitle = titleParts.join(" - ");

                    return (
                        <div key={item.id} className={`item ${isActive ? 'active' : ''}`}>
                            <button
                                className="header"
                                type="button"
                                aria-controls={item.id}
                                onClick={() => toggleItem(item.id)}
                            >
                                <span className="icon">
                                    <i
                                        className={`fas ${isActive ? 'fa-angle-up' : 'fa-angle-down'}`}
                                        aria-hidden="true"
                                    ></i>
                                </span>
                                <span className="d-flex flex-column flex-md-row title">
                                    <BrTag
                                        className="text-blue-vivid-50 text-bold mr-4 align-self-start"
                                        color="primary-pastel-02"
                                        value={prefix}
                                    />
                                    {remainingTitle}
                                </span>
                            </button>
                            <div className="content px-2 pt-0 pb-6" id={item.id}>
                                <ParsedContent content={item.content} />
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    }
);

export default BrAccordion;
