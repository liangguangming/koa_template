import ERROR_CODE from './errorCode';
import BaseError from '../../../global/errors/BaseError';

class UserCreateError extends BaseError {
  constructor(message) {
    super();
    this.message = message;
    this.name = 'USER_CREATE_ERROR';
    this.code = ERROR_CODE.USER_CREATE_ERROR;
  }
}

export default UserCreateError;
