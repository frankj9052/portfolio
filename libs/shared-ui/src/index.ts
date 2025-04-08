import { accordion } from './lib/Accordion';
import { animations } from './lib/Animations';
import { autoComplete } from './lib/AutoComplete';
import { avatar } from './lib/Avatar';
import { background } from './lib/Background';
import { button } from './lib/Button';
import { calendar } from './lib/Calendar';
import { carousel } from './lib/Carousel';
import { Checkbox } from './lib/Checkbox';
import { checkboxGroup } from './lib/Checkbox-Group';
import { datePicker } from './lib/DatePicker';
import { input } from './lib/Input';
import { link } from './lib/Link';
import { loading } from './lib/Loading';
import { modal } from './lib/Modal';
import { navbar } from './lib/Navbar';
import { popover } from './lib/Popover';
import { radioGroup } from './lib/Radio-Group';
import { spinner } from './lib/Spinner';
import { staticEffects } from './lib/StaticEffects';
import { svgIcon } from './lib/SVGIcon';
import { tabs } from './lib/Tabs';
import { timeInput } from './lib/Time-Input';
import { usehooks } from './lib/useHooks';

// Accordion
export * from './lib/Accordion/FrankAccordion';

// Animations
export * from './lib/Animations/BreathingGlow';
export * from './lib/Animations/CardParallax';
export * from './lib/Animations/NumberRiser';
// Assets

// AutoComplete
export * from './lib/AutoComplete/FrankAutocomplete';
export * from './lib/AutoComplete/NoqPublicSearchBar';

// Avatar
export * from './lib/Avatar/FrankAvatar';
export * from './lib/Avatar/UserListItem';

// Background
export * from './lib/Background/FrankTiledBackground';

// Button
export * from './lib/Button/FrankButtonBase';
export * from './lib/Button/FrankToggleButton';
export * from './lib/Button/NoqButton';

// Calendar
export * from './lib/Calendar/FrankCalendar';
export * from './lib/Calendar/FrankFullCalendar';
export * from './lib/Calendar/FrankBigCalendar';
export * from './lib/Calendar/FrankBigCalendarParts/CalendarShiftComponent';
export * from './lib/Calendar/FrankBigCalendarParts/CalendarGrid';
export * from './lib/Calendar/FrankBigCalendarParts/DraggableShift';
export * from './lib/Calendar/FrankBigCalendarParts/DropContainer';
export * from './lib/Calendar/FrankBigCalendarParts/ResizableShift';
export * from './lib/Calendar/FrankBigCalendarParts/TimeGridDay';
export * from './lib/Calendar/FrankBigCalendarParts/TimeGridWeek';
export * from './lib/Calendar/FrankBigCalendarParts/TimeScale';

// Carousel
export * from './lib/Carousel/FrankCarousel';

// Checkbox
export * from './lib/Checkbox/FrankCheckbox';

// Checkbox Group
export * from './lib/Checkbox-Group/FrankCheckboxGroup';

// Date Picker
export * from './lib/DatePicker/FrankDatePicker';
export * from './lib/DatePicker/NoqDatePicker';

// Input
export * from './lib/Input/FrankInputBase';

// Link
export * from './lib/Link/SocialMediaLinks';

// Loading
export * from './lib/Loading/FrankLoadingSignature';

// Modal
export * from './lib/Modal/FrankModal';

// Navbar
export * from './lib/Navbar/FrankTopNav';

// Popover
export * from './lib/Popover/FrankPopover';

// Ratio Group
export * from './lib/Radio-Group/FrankRadioGroupBasic';

// Spinner
export * from './lib/Spinner/FrankSpinner';

// StaticEffects
export * from './lib/StaticEffects/HeroTitle';
export * from './lib/StaticEffects/LinearGradientTextColor';

// SVG Icon
export * from './lib/SVGIcon/FrankSVGIcon';

// Tabs
export * from './lib/Tabs/CalendarViewSwitcher';
export * from './lib/Tabs/FrankTabs';
export * from './lib/Tabs/FrankArrowSwitcher';

//  Time Input
export * from './lib/Time-Input/FrankTimeInput';

// useHooks
export * from './lib/useHooks/useClickOutside';
export * from './lib/useHooks/useControlledState';
export * from './lib/useHooks/useDebouncedCallback';
export * from './lib/useHooks/usePagination';
export * from './lib/useHooks/useTimer';
export * from './lib/useHooks/useWindowSize';

// export project-tree
export const frankSharedUI = {
    components: {
        accordion,
        autoComplete,
        avatar,
        background,
        button,
        calendar,
        carousel,
        Checkbox,
        checkboxGroup,
        datePicker,
        input,
        link,
        loading,
        modal,
        navbar,
        popover,
        radioGroup,
        spinner,
        svgIcon,
        tabs,
        timeInput,        
    },
    animations,
    staticEffects,
    usehooks
}