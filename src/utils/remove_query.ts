/**
 *
 * @param id
 */
export function removeQuery(id) {
  return id.replace(/\?.*$/, '');
}
