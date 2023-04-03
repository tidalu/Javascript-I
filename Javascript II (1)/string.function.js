import subtract from ".";

const capitalizeString = str => {
    return str.toUpperCase(0).toUpperCase() + str.slice(1);
}

export {capitalizeString} ;
export const foo = 'bar';
export const bar = 'foo';

// import a default export
import subtract from "index.js";
subtract(1, 2);