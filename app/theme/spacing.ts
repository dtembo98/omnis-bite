/**
 * NOTE TO DEVS:
 *
 * Spacing should be consistent and whitespace thought of as a first class technique up
 * there with color and typefaces.
 *
 * Which type of scale you use is based on the design.
 *
 * If you've got simpler app, you may only need 6 items.  Or maybe you want a spacing scale
 * to be named:
 *
 * export const spacing = {
 *   tiny: 4,
 *   small: 8,
 *   medium: 12,
 *   large: 24,
 *   huge: 64
 * }
 *
 * Whatever you choose, try to stick with these, and not freestyle it everywhere.
 *
 * Feel free to delete this block.
 */

/**
 * The available spacing.
 *
 * Here's the rough guideline.  Customize this for you usage.  It's ok to put exceptions
 * within the components themselves if they are truly exceptions.
 *
 * @param 0 = none -> 0
 * @param 1 = tiny -> 4
 * @param 2 = smaller -> 8
 * @param 3 = small   - 12
 * @param 4 = medium  - 16
 * @param 5 = medium+ - 24
 * @param 6 = large   - 32
 * @param 7 = huge    - 48
 * @param 8 = massive - 64
 */
export const spacing = [0, 4, 8, 12, 16, 24, 32, 48, 64]
