import { Accordion, AccordionItem } from "@heroui/react";
import { ReactNode } from "react";
import { useControlledState } from "../useHooks/useControlledState";

export type AccordionItemType = {
    ariaLabel: string,
    title: ReactNode,
    content: ReactNode,
    subtitle?: string,
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
