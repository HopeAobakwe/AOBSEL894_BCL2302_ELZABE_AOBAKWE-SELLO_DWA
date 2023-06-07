/**
 * Finds the form element with the specified data attribute.
 * @type {HTMLFormElement}
 */
const form = document.querySelector("[data-form]");

/**
 * Finds the result element with the specified data attribute.
 * @type {HTMLElement}
 */
const result = document.querySelector("[data-result]");

/**
 * Event listener for the form submission.
 * @param {Event} event - The submit event object.
 */
form.addEventListener("submit", (event) => {
  event.preventDefault();

  try {
    /** @type {FormData} */
    const entries = new FormData(event.target);
    const { dividend, divider } = Object.fromEntries(entries);

    if (dividend === "" || divider === "") {
      throw new Error("Division not performed. Both values are required in inputs. Try again");
    }

    if (!isNumeric(dividend) || !isNumeric(divider)) {
      throw new Error("Division not performed. Invalid number provided. Try again");
    }

    /** @type {number} */
    const quotient = dividend / divider;

    if (isWholeNumber(quotient)) {
      result.innerText = quotient;
    } else {
      result.innerText = Math.floor(quotient);
    }
  } catch (error) {
    console.error(error);
    console.trace();
    result.innerText = "Something critical went wrong. Please reload the page";
  }
});

/**
 * Checks if the value is numeric.
 * @param {string} value - The value to be checked.
 * @returns {boolean} - True if the value is numeric, false otherwise.
 */
function isNumeric(value) {
  return /^\d+$/.test(value);
}

/**
 * Checks if the value is a whole number.
 * @param {number} value - The value to be checked.
 * @returns {boolean} - True if the value is a whole number, false otherwise.
 */
function isWholeNumber(value) {
  return Number.isInteger(value);
}
