/**
 * Slices a given text to a specified maximum length and adds an ellipsis if necessary.
 * 
 * @param {string} txt - The text to be sliced.
 * @param {number} [max=50] - The maximum length of the sliced text. Defaults to 50 if not provided.
 * @returns {string} - The sliced text with an ellipsis if it exceeds the maximum length, or the original text if it doesn't.
 */

export function txtSlicer(txt: string, max = 50) {
    if (txt.length >= max) return `${txt.slice(0, max)} ...`
    return txt
}