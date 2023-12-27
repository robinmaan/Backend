// apiError.js

class APIError extends Error {
    constructor(statusCode, 
        message = 'Something went wrong',
        details = null,
        statck = "",
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
  
export {APIError}
  