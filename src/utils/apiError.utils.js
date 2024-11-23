class ApiError extends Error {
    constructor(
        statusCode,
        message = "Something went Wrong",
        errors = [],
        stack =""
    ) {
        super(message),
            this.message = message,
            this.statusCode = statusCode,
            this.data = null,
            this.errors = errors,
            this.success = success
    }
}

export{ApiError}