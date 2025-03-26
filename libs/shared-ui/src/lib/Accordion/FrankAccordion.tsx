import { Accordion, AccordionItem } from "@heroui/react";
import { ReactNode } from "react";
import { useControlledState } from "../useHooks/useControlledState";

export type AccordionItemType = {
    key?: string | number,
    ariaLabel: string,
    title: ReactNode,
    content: ReactNode,
    subtitle?: string,
    indicator?: {
        isOpen: ReactNode,
        isClose: ReactNode,
    }
}

export type FrankAccordionProps = {
    items: AccordionItemType[],
    selectionMode?: 'multiple' | 'single' | 'none',
    variant?: "splitted" | "light" | "shadow" | "bordered",
    defaultExpandedKeys?: Iterable<string | number>
    disabledKeys?: Iterable<string | number>,
    selectedKeys?: Iterable<string | number>,
    setSelectedKeys?: (keys: Iterable<string | number>) => void,
    hideShadow?: boolean,
    width?: number,
    disableIndicatorAnimation?: boolean,
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
 * - variant?: Specifies the accordion's visual style, with options like "splitted", "light", "shadow", and "bordered".
 * - defaultExpandedKeys?: Identifies the keys of items that should be expanded by default.
 * - disabledKeys?: Keys of items that should be disabled.
 * - selectedKeys?: Controlled prop for specifying selected items.
 * - setSelectedKeys?: Callback function to update selected keys.
 * - hideShadow?: If true, removes shadows from accordion items.
 * - width?: Width of the accordion container.
 * - disableIndicatorAnimation?: If true, disables the indicator animation.
 */

export function FrankAccordion({
    items,
    selectionMode,
    variant,
    defaultExpandedKeys,
    disabledKeys,
    selectedKeys,
    setSelectedKeys,
    hideShadow,
    width,
    disableIndicatorAnimation,
}: FrankAccordionProps) {
    const [selectedKeysState, setSelectedKeysState] = useControlledState(
        selectedKeys,
        new Set(defaultExpandedKeys ?? [])
    )
    return (
        <div
            style={{
                width: width ? `${width}px` : '100%'
            }}
        >
            <Accordion
                selectionMode={selectionMode}
                variant={variant}
                defaultExpandedKeys={defaultExpandedKeys}
                disabledKeys={disabledKeys}
                selectedKeys={selectedKeysState}
                onSelectionChange={(keys: Iterable<string | number>) => {
                    setSelectedKeysState?.(keys);
                    setSelectedKeys?.(keys);
                }}
                className={`${hideShadow && "shadow-none"} px-0`}
                fullWidth
                disableIndicatorAnimation={disableIndicatorAnimation}
            >
                {
                    items && items.map((item, index) => {
                        return (
                            <AccordionItem
                                key={item.key}
                                aria-label={item.ariaLabel}
                                title={item.title}
                                subtitle={item.subtitle}
                                indicator={(isOpen) => {
                                    if (item.indicator && item.indicator.isOpen && item.indicator.isClose) {
                                        return isOpen.isOpen ? item.indicator.isOpen : item.indicator.isClose;
                                    }
                                }}
                                classNames={{
                                    base: `${hideShadow && "shadow-none"} px-0 bg-transparent`,
                                    trigger: 'py-0',
                                    content: 'py-0'
                                }}
                            >
                                {item.content}
                            </AccordionItem>
                        )
                    })
                }
            </Accordion>
        </div>
    )
}

export default FrankAccordion;
