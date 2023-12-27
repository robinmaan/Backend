class APiSuccess extends Error {
    constructor(statusCode, 
        message = 'Successfully created',
        details = null,
        statck = "",
        ) {
      super(message);
      this.name = 'APIError';
      this.statusCode = statusCode;
      this.data = null;
     
      this.success = statusCode < 400;
      this.details = details;
    }
  }
  
export {APiSuccess}