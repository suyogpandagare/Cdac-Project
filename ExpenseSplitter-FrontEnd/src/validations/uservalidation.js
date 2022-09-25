const uservalidation=(values)=>{
    let errors={}
    if(!values?.fname){
        errors.fname="First Name is required"
    }
    if(!values?.lname){
        errors.lname="Last Name is required"
    }
    if(!values?.address){
        errors.address="Address is required"
    }
    if(!values?.email){
        errors.email="Email Id is required"
    }
    if(!values?.userid){
        errors.userid="User Id is required"
    }
    if(!values?.upiId){
        errors.upiId="UPI Id is required"
    }
    // if(!values?.gender){
    //     errors.gender="Gender is required"
    // }

    if(!values?.profilepic){
        errors.profilepic="Profile Photo is required"
    }

    if(!values?.phone){
        errors.phone="Phone no is required"
    }
    if(!values?.pwd){
        errors.pwd="Password is required"
    }

    return errors;
}

export default uservalidation;