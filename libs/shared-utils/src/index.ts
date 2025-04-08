import { GlobalTypes } from './types/globalTypes';
import { utils } from './utils';

export const frankSharedUtils = {
    utils,
}

export type FrankSharedTypes = {
    GlobalTypes: GlobalTypes
}

// types
export * from './types/globalTypes';

// utils
export * from './utils/textUtils';
export * from './utils/imageUtils';
export * from './utils/eventUtils';
export * from './utils/dateUtils';
export * from './utils/colorUtils';
export * from './utils/chatUtils';
