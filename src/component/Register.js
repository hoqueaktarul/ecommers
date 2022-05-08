export default function Register(){
    return(<div style={{marginTop:"60px",background:"gainsboro",height:"100vh"}}>
        <div class="container">
    <div class="row">
        <div class="col-md-6 offset-md-3">
            <div class="signup-form">
                <form action="" class="mt-5 border p-4 bg-light shadow">
                    <h4 class="mb-5 text-secondary">Create Your Account</h4>
                    <div class="row">
                        <div class="mb-3 col-md-6">
                            <label>First Name<span class="text-danger">*</span></label>
                            <input required type="text" name="fname" class="form-control" placeholder="Enter First Name"/>
                        </div>

                        <div class="mb-3 col-md-6">
                            <label>Last Name<span class="text-danger">*</span></label>
                            <input required type="text" name="Lname" class="form-control" placeholder="Enter Last Name"/>
                        </div>

                        <div class="mb-3 col-md-12">
                            <label>Email<span class="text-danger">*</span></label>
                            <input required type="email" name="email" class="form-control" placeholder="Enter email address"/>
                        </div>
                        <div class="mb-3 col-md-12">
                            <label>Password<span class="text-danger">*</span></label>
                            <input required type="password" name="password" class="form-control" placeholder="Enter Password"/>
                        </div>
                        <div class="mb-3 col-md-12">
                            <label>Confirm Password<span class="text-danger">*</span></label>
                            <input required type="password" name="confirmpassword" class="form-control" placeholder="Confirm Password"/>
                        </div>
                        <div class="col-md-12">
                           <button class="btn btn-primary float-end">Signup Now</button>
                        </div>
                    </div>
                </form>
                <p class="text-center mt-3 text-secondary">If you have account, Please <a href="/login">Login Now</a></p>
            </div>
        </div>
    </div>
</div>
    </div>)
}
