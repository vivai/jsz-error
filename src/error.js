//@flow

/**
 * @module jsz-error
 * This module ontains some utilities for the error handling.
 */

/**
 * This function generates a custom error class.
 * @param name - The class name of the error.
 * @param defaultMessage - The default message for the custom error class.
 * @return {Error}
 */
function customError(
  name:string = "CustomError", defaultMessage:string = "Custom error."):any {

  // Creating a sub class in ES5 manner. The extension of built-in classes is
  // not supported. It is not possible todo somthing like this:
  // Example:
  // class MyError extends Error {} // that will work
  // myError = new MyError();
  // myError instaceof Myerror; // returns false
  // The sam example with cuctomError.
  // Example:
  // let MyError = customError();
  // myError = new MyError();
  // myError instanceof MyError; // returns true
  let customError = function(message = defaultMessage) {
    this.name = name;
    this.message = message;
    this.stack = (new Error()).stack;
  }

  customError.prototype = Object.create(Error.prototype);
  customError.prototype.constructor = customError;

  return customError;
}

export {customError}
