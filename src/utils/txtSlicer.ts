/**
 * Slices a text string to a specified maximum length and adds ellipsis if necessary.
 *
 * This function takes a text string and a maximum length as parameters. If the length
 * of the text string exceeds the specified maximum length, it is sliced to that length,
 * and "..." is added to indicate truncation. If the text is within or equal to the
 * maximum length, it is returned unchanged.
 *
 * @param {string} txt - The input text string to be sliced.
 * @param {number} [maxLength=200] - The maximum length of the output text. Default is 200.
 * @returns {string} The sliced text, with ellipsis if truncated.
 *
 */

export function txtSlicer(txt: string, maxLenght :number=200){
   return txt.length >= maxLenght ? `${txt.slice(0, maxLenght)}...` : txt
}