import ArraySchema from './ArraySchema.js';
import StringSchema from './StringSchema.js';

export default class Validator {
  // eslint-disable-next-line class-methods-use-this
  string() {
    const validator = (value) => typeof value === 'string';
    return new StringSchema([validator]);
  }

  // eslint-disable-next-line class-methods-use-this
  array() {
    const validator = (value) => Array.isArray(value);
    return new ArraySchema([validator]);
  }
}
