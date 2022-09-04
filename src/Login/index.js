const Login = () => {
  return (
    <div className="w-100vw h-100vh row m-0">
      <div className="col-sm-12 col-md-6 mnh-50vh" id="loginLayout-img">
        add video
      </div>
      {/* form code is here */}
      <div className="col-sm-12 col-md-6 py-5">
        <div className="col-12  my-4 d-flex justify-content-center w-100">
          <div className="logo rounded-circle"></div>
        </div>
        <div className="col-12 fs-2">Thanks for choosing us</div>
        <div className="col-12 row m-0">
          <div class="mb-3 col-md-6 col-12">
            <label for="firstName" class="form-label">
              First Name*
            </label>
            <input
              placeholder="firstName"
              class="form-control"
              id="firstName"
              aria-describedby="emailHelp"
            />
          </div>
          <div class="mb-3 col-md-6 col-12">
            <label for="lastName" class="form-label">
              Last Name*
            </label>
            <input
              placeholder="lastName"
              class="form-control"
              id="lastName"
              aria-describedby="emailHelp"
            />
          </div>
          <div class="mb-3 col-md-6 col-12">
            <label for="compnay" class="form-label">
              Compnay Name*
            </label>
            <input
              placeholder="compnay"
              class="form-control"
              id="compnay"
              aria-describedby="emailHelp"
            />
          </div>
          <div class="mb-3 col-md-6 col-12">
            <label for="role" class="form-label">
              Role*
            </label>
            <input
              placeholder="role"
              class="form-control"
              id="role"
              aria-describedby="emailHelp"
            />
          </div>
          <div class="mb-3 col-md-6 col-12">
            <label for="phone" class="form-label">
              Phone Number*
            </label>
            <input
              class="form-control"
              id="phone"
              aria-describedby="emailHelp"
              type="number"
              placeholder="Phone Number"
            />
          </div>
          <div class="mb-3 col-md-6 col-12">
            <label for="email" class="form-label">
              Email address*
            </label>
            <input
              type="email"
              placeholder="email"
              class="form-control"
              id="email"
              aria-describedby="emailHelp"
            />
          </div>
          <div class="mb-3 col-md-6 col-12">
            <button
              type="submit"
              id="login-submit"
              className="text-light fw-bold btn btn-warning px-5 py-1"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
