//@flow
"use strict";

import {test} from "tape";
import {customError} from "../src/error";

test("Custom error classes", function(t) {

  t.ok(typeof customError === "function",
      "Function customError is imported.");

  let MyError = customError("MyError", "An error!");
  let myError = new MyError();

  t.equal(myError.name, "MyError", "myError.name === 'myError'");
  t.equal(myError.message, "An error!","myError.message === 'An Error!'");

  t.true(myError instanceof MyError, "myError is instance of MyError");

  let DefaultError = customError();
  let defaultError = new DefaultError();

  t.equal(defaultError.name, "CustomError", "defaultError.name === 'myError'");
  t.equal(defaultError.message, "Custom error.",
    "defaultError.message === 'Custom errorr.'");

  t.true(defaultError instanceof DefaultError,
    "myError is instance of MyError");

  let defaultError2 = new DefaultError("Default error.");

  t.equal(defaultError2.name, "CustomError", "defaultError.name === 'myError'");
  t.equal(defaultError2.message, "Default error.",
    "defaultError.message === 'Custom errorr.'");

  t.true(defaultError2 instanceof DefaultError,
    "myError is instance of MyError");

  // --------------------------------------------------------------------------
  t.end();

});
