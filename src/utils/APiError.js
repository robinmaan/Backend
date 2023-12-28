// apiError.js

class APIError extends Error {
    constructor(statusCode, 
        message = 'Something went wrong',
        details = null,
        error = [],
        stack = "",
        ) {
      super(message);
      this.name = 'APIError';
      this.statusCode = statusCode;
      this.data = null;
      this.error = error;
      this.success = false;
      this.details = details;
    }
  }
  if(stack){
    this.stack = stack
  }else{
    Error.captureStackTrace(this,this.constructor)
  }
  
export {APIError}
  