export default function Login(){
    return(<div style={{marginTop:"60px",background:"gainsboro",height:"100vh"}}>
     <div class="container">
    <div class="row">
      <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <div class="card border-0 shadow rounded-3 my-5">
          <div class="card-body p-4 p-sm-5">
            <h5 class="card-title text-center mb-5 fw-light fs-5">Sign In</h5>
            <form>
              <div class="form-floating mb-3">
                <input type="email" class="form-control" name="email" id="floatingInput" placeholder="name@example.com"/>
                <label for="floatingInput">Email address</label>
              </div>
              <div class="form-floating mb-3">
                <input type="password" class="form-control" id="floatingPassword" name="password" placeholder="Password"/>
                <label for="floatingPassword">Password</label>
              </div>

              <div class="form-check mb-3">
                <input class="form-check-input" type="checkbox" name="checkbox" value="" id="rememberPasswordCheck"/>
                <label class="form-check-label" name="checkbox"  for="rememberPasswordCheck">
                  Remember password
                </label>
              </div>
              <div class="d-grid">
                <button class="btn btn-primary btn-login text-uppercase fw-bold" type="submit">Sign
                  in</button>
              </div>
              <hr class="my-4"/>
             <h6>if you are new user <a href="/register">sign up </a></h6>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
    </div>)
}
