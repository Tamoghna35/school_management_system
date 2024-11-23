class ApiResponse {
  constructor(data, stastusCode, message = "Success") {
    super(message);
    (this.data = data),
      (this.stastusCode = stastusCode),
      (this.message = message);
    this.success = stastusCode < 400;
  }
}
