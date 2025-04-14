import { Tab, Tabs } from '@heroui/react';
import { ReactNode } from 'react';
import { useControlledState } from '../useHooks/useControlledState';

export type TabsDataType = {
  key: string;
  title: ReactNode;
  content: ReactNode;
};

export type FrankTabsProps = {
  ariaLable: string;
  tabsData: TabsDataType[];
  radius?: 'sm' | 'md' | 'lg' | 'none' | 'full';
  color?:
    | 'primary'
    | 'default'
    | 'secondary'
    | 'success'
    | 'warning'
    | 'danger';
  isDisabled?: boolean;
  disabledKeys?: string[];
  size?: 'sm' | 'md' | 'lg';
  variant?: 'solid' | 'light' | 'underlined' | 'bordered';
  selected?: string | number;
  onSelectionChange?: (key: string | number) => void;
  placement?: 'top' | 'bottom' | 'start' | 'end';
};
export function FrankTabs({
  ariaLable,
  tabsData,
  radius,
  color,
  isDisabled,
  disabledKeys,
  size,
  variant,
  selected,
  onSelectionChange,
  placement,
}: FrankTabsProps) {
  const [selectedState, setSelectedState] = useControlledState(
    selected,
    tabsData[0].key
  );
  return (
    <div>
      <Tabs
        aria-label={ariaLable}
        classNames={{}}
        radius={radius}
        color={color}
        isDisabled={isDisabled}
        disabledKeys={disabledKeys}
        size={size}
        variant={variant}
        selectedKey={selectedState}
        onSelectionChange={(key) => {
          setSelectedState?.(key);
          onSelectionChange?.(key);
        }}
        placement={placement}
      >
        {tabsData &&
          tabsData.length > 0 &&
          tabsData.map((tab) => {
            return (
              <Tab key={tab.key} title={tab.title}>
                {tab.content}
              </Tab>
            );
          })}
      </Tabs>
    </div>
  );
}

export default FrankTabs;
