import calApi from './analytics';

class Test {
  _msg: string;
  constructor(message: string) {
    this._msg = message;
  }
  init() {
    calApi(this._msg);
  }
}

const fn = (message: string) => {
  return new Test(message);
};

export default fn;
