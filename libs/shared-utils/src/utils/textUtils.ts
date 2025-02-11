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
export {
    truncateString
}