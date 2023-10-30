import _ from 'lodash';

export default class ArraySchema {
  constructor(validators) {
    this.validators = [...validators];
  }

  isValid(value) {
    return this.validators.every((validator) => validator(value) === true);
  }

  maxDepth(max) {
    const validator = (values) => {
      const iter = (element, depth = -1) => {
        if (!Array.isArray(element)) {
          return depth;
        }
        const result = element.map((value) => iter(value, depth + 1));
        console.log(depth);
        return _.flattenDeep(result);
      };
      return iter(values).every((val) => val <= max);
    };

    return new ArraySchema([...this.validators, validator]);
  }
}
