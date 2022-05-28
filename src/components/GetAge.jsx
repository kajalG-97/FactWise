handleChange_age = (event) => {
    console.log("DOB:", event.target.value);

    this.setState({ dob1: event.target.value }, () => {
    
      console.log(this.state.dob1);
    })

    var age_latest = {age_latest: this.calculate_age(event.target.value)}
    console.log(age_latest);

    this.setState({ age1: age_latest }, () => {

      console.log("Age:", this.state.age1);
    })
  }

  
calculate_age = (dob1) => {
    var today = new Date();
    var birthDate = new Date(dob1);  // create a date object directly from `dob1` argument
    var age_now = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) 
    {
        age_now--;
    }
    console.log(age_now);
    return age_now;
  }