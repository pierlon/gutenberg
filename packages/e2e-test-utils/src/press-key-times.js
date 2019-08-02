/**
 * Presses the given keyboard key a number of times in sequence.
 *
 * @param {string} key   Key to press.
 * @param {number} count Number of times to press.
 */
export async function pressKeyTimes( key, count ) {
	for ( let i = 0; i < count; i++ ) {
		await page.keyboard.press( key );
	}
}
