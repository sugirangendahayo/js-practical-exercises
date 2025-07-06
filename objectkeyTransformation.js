// Function: Transform object keys using a callback function
function transformKeys(obj, transformFn) {
  const result = {};

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const newKey = transformFn(key);
      result[newKey] = obj[key];
    }
  }

  return result;
}

// === Example 1: UPPERCASE keys ===
const inputObject1 = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
};

const toUpperCaseKey = (key) => key.toUpperCase();

const transformedObject1 = transformKeys(inputObject1, toUpperCaseKey);

console.log("Uppercase keys:", transformedObject1);
// Output: { FIRSTNAME: "John", LASTNAME: "Doe", AGE: 30 }

// === Example 2: Add prefix to keys ===
const inputObject2 = {
  name: "Alice",
  role: "admin",
};

const addPrefix = (key) => `user_${key}`;

const transformedObject2 = transformKeys(inputObject2, addPrefix);

console.log("Prefixed keys:", transformedObject2);
// Output: { user_name: "Alice", user_role: "admin" }

