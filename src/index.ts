/**
 * Provides a set of utility functions for interacting with the browser's session storage.
 */
export class Sessions {
    /**
     * Sets a key-value pair in the session storage.
     * @param key - The key to store the value under.
     * @param value - The value to store.
     * @returns `true` if the item was successfully set, `false` otherwise.
     */
    static setItem = (key: string, value: any): boolean => {
        try {
            sessionStorage.setItem(key, JSON.stringify(value));
            return true;
        } catch (error) {
            console.error('Error setting session item:', error);
            return false;
        }
    }

    /**
     * Retrieves the value stored in the session storage under the specified key.
     * @param key - The key to retrieve the value for.
     * @returns The value stored under the specified key, or `null` if the key does not exist or an error occurs.
     */
    static getItem = (key: string): any => {
        try {
            const item = sessionStorage.getItem(key);
            return item ? JSON.parse(item) : null;
        } catch (error) {
            console.error('Error getting session item:', error);
            return null;
        }
    }

    /**
     * Updates the value stored in the session storage under the specified key.
     * @param key - The key to update the value for.
     * @param value - The new value to store.
     * @returns `true` if the item was successfully updated, `false` otherwise.
     */
    static updateItem = (key: string, value: any): boolean => {
        return Sessions.setItem(key, value);
    }

    /**
     * Removes the item stored in the session storage under the specified key.
     * @param key - The key of the item to remove.
     * @returns `true` if the item was successfully removed, `false` otherwise.
     */
    static removeItem = (key: string): boolean => {
        try {
            sessionStorage.removeItem(key);
            return true;
        } catch (error) {
            console.error('Error removing session item:', error);
            return false;
        }
    }


    /**
     * Clears all items stored in the session storage.
     * @returns `true` if the session storage was successfully cleared, `false` otherwise.
     */
    static clear = (): boolean => {
        try {
            sessionStorage.clear();
            return true;
        } catch (error) {
            console.error('Error clearing session:', error);
            return false;
        }
    }


    /**
     * Gets an array of all the keys stored in the session storage.
     * @returns An array of all the keys stored in the session storage.
     */
    static getKeys = (): string[] => {
        return Object.keys(sessionStorage);
    }
}


declare global {
    interface Window {
        Sessions: typeof Sessions;
    }
}