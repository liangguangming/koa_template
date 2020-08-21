import ERROR_CODE from './errorCode';
import BaseError from './BaseError';

class DataValidateError extends BaseError {
  constructor(message, errorDetail) {
    super(message);
    this.message = `数据校验错误, ${message}`;
    this.name = 'DATA_VALIDATE_ERROR';
    this.code = ERROR_CODE.SERVER_ERROR;
    this.errorDetail = errorDetail;
  }
}

export default DataValidateError;
