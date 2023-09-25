/**
 * @param {string} text
 */
export function* typewrite(text) {
    let i = 0;
    while (true) {
        if (i < text.length) {
            yield text.slice(0, i + 1);
        } else {
            yield text + ".".repeat(i - text.length);
        }
        i++;
    }
}
