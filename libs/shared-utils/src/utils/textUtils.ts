/**
 * Truncates a given string to a specified length and appends '...' if necessary.
 * If `text` is null or undefined, returns `null`.
 */
const truncateString = (text?: string | null, num = 50): (string | null) => {
    if (typeof text === 'string') {
        if (text.length <= num) {
            return text;
        }
        return text.slice(0, num) + '...'
    }
    return null;
}

function debounce<T extends (...args: any[]) => void>(func: T, delay: number) {
    let timer: ReturnType<typeof setTimeout>;
    return (...args: Parameters<T>) => {
        clearTimeout(timer);
        timer = setTimeout(() => func(...args), delay);
    };
}

/**
 * hello => Hello;
 * WORLD => World
 */
function capitalize(word: string): string {
    if (!word) return "";
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

export {
    truncateString,
    debounce,
    capitalize
}