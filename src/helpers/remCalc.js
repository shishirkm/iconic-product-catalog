/**
 * Returns REM amount based on PX.
 */
const remCalc = (px, base = 16) => px / base + 'rem';
export default remCalc;