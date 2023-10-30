import ArraySchema from './ArraySchema.js';
import StringSchema from './StringSchema.js';

export default class Validator {
  string() {
    const validator = (value) => typeof value === 'string';
    return new StringSchema([validator]);
  }

  array() {
    const validator = (value) => Array.isArray(value);
    return new ArraySchema([validator]);
  }
}

const validator = new Validator();
const schema1 = validator.array().maxDepth(30);
const schema2 = validator.array().maxDepth(8);
const schema3 = validator.array().maxDepth(3);
