import { Accordion, AccordionItem } from "@heroui/react";
import { ReactNode } from "react";
import { useControlledState } from "../useHooks/useControlledState";

export type AccordionItemType = {
    ariaLabel: string,
    title: ReactNode,
    content: ReactNode,
    subtitle?: string,
    indicator?: {
        isOpen: ReactNode,
        isClosed: ReactNode,
    }
}

export type FrankAccordionProps = {
    items: AccordionItemType[],
    selectionMode?: 'multiple' | 'single' | 'none',
    isCompact?: boolean,
    variant?: "splitted" | "light" | "shadow" | "bordered",
    defaultExpandedKeys?: Iterable<string | number>
    disabledKeys?: Iterable<string | number>,
    selectedKeys?: Iterable<string | number>,
    setSelectedKeys?: (keys: Iterable<string | number>) => void,
    hideShadow?: boolean,
}

/**
 * FrankAccordion Component
 * 
 * This component renders an accordion UI element using the `@heroui/react` library, allowing for customizable
 * display and interaction. It supports multiple selection modes, compact design, and various visual variants.
 * 
 * Props:
 * - items: An array of accordion items, each defined by a title, content, optional subtitle, and ARIA label.
 * - selectionMode?: Defines how items can be selected: 'multiple' allows multiple items, 'single' for one, 'none' for no selection.
 * - isCompact?: Enables a compact mode with reduced padding and spacing.
 * - variant?: Specifies the accordion's visual style, with options like "splitted", "light", "shadow", and "bordered".
 * - defaultExpandedKeys?: Identifies the keys of items that should be expanded by default.
 * - disabledKeys?: Keys of items that should be disabled.
 * - selectedKeys?: Controlled prop for specifying selected items.
 * - setSelectedKeys?: Callback function to update selected keys.
 * - hideShadow?: If true, removes shadows from accordion items.
 */

export function FrankAccordion({
    items,
    selectionMode,
    isCompact,
    variant,
    defaultExpandedKeys,
    disabledKeys,
    selectedKeys,
    setSelectedKeys,
    hideShadow
}: FrankAccordionProps) {
    const [selectedKeysState, setSelectedKeysState] = useControlledState(
        selectedKeys,
        new Set(defaultExpandedKeys ?? [])
    )
    return (
        <Accordion
            selectionMode={selectionMode}
            isCompact={isCompact}
            variant={variant}
            defaultExpandedKeys={defaultExpandedKeys}
            disabledKeys={disabledKeys}
            selectedKeys={selectedKeysState}
            onSelectionChange={(keys: Iterable<string | number>) => {
                setSelectedKeysState?.(keys);
                setSelectedKeys?.(keys);
            }}
            className={`${hideShadow && "shadow-none"}`}
        >
            {
                items && items.map((item, index) => {
                    return (
                        <AccordionItem
                            key={`accordion-${index}`}
                            aria-label={item.ariaLabel}
                            title={item.title}
                            subtitle={item.subtitle}
                            indicator={(isOpen) => {
                                if (item.indicator && item.indicator.isOpen && item.indicator.isClosed) {
                                    return isOpen ? item.indicator.isOpen : item.indicator.isClosed
                                }
                            }}
                            classNames={{
                                base: `${hideShadow && "shadow-none"}`
                            }}
                        >
                            {item.content}
                        </AccordionItem>
                    )
                })
            }
        </Accordion>
    )
}

export default FrankAccordion;
