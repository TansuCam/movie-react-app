/**
 * Handles the keydown event for an input field to restrict non-numeric inputs.
 * Allows Backspace, Delete, and numeric keys (0-9) to pass through.
 * Prevents any other key from being entered.
 *
 * @param {React.KeyboardEvent<HTMLInputElement>} e - The keyboard event triggered by the user.
 * @returns {void} - Does not return anything. Prevents default behavior for non-numeric keys.
 */
export const handleKeyDownForNumbers = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    // Allow Backspace, Delete, and numeric keys (0-9)
    if (["Backspace", "Delete"].includes(e.key) || (e.key >= "0" && e.key <= "9")) {
        return;
    }
    // Prevent any other keys from being typed
    e.preventDefault();
};
