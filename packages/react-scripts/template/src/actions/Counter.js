/**
 * Add value to counter. Provide negative number to decrement counter.
 * @param value: number
 * @returns {{type: string, data: {value: number}}}
 */
export const changeCounter = (value: number) => ({
  type: 'counter/CHANGE_VALUE',
  data: {
    value,
  },
});

/**
 * Set counter to value.
 * @param value
 * @returns {{type: string, data: {value: number}}}
 */
export const setCounter = (value: number) => ({
  type: 'counter/SET_VALUE',
  data: {
    value,
  },
});
