/**
 *
 * @param value
 */
export function exportJS(value: object) {
  return `export default ${JSON.stringify(value)}`;
}
