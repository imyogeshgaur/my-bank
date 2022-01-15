const handleSubmit = async () => {
  let userName = document.querySelector("#nameOfUser").value;
  let userEmail = document.querySelector("#userEmail").value;
  let userPhone = document.querySelector("#userPhone").value;
  let userAge = document.querySelector("#userAge").value;
  let userGender = document.querySelector("#userGender").value;
  let POC = document.querySelector("#POC").value;
  let POCC = document.querySelector("#POCC").value;

  if ((!userName && !userEmail && !userPhone && !userAge && !userGender && !POC && !POCC)) {
    alert("Please Fill All Info !!!");
  } else if (userPhone < 10) {
    alert("Invalid Data !!!");
  }
   else {
    try {
      var db = firebase.firestore();
      const usersRef = await db.collection("users").where("userEmail", "==", userEmail).get();
      if(usersRef){
        usersRef.forEach(doc => {
          const Email = doc.data().userEmail;
          const Phone = doc.data().userPhone;
          if(userEmail===Email || userPhone===Phone){
            alert("User Already Exist !!!");
            userName = undefined;
            userEmail= undefined;
            userPhone= undefined;
            userAge = undefined;
            userGender = undefined;
            POC = undefined;
            POCC = undefined;
            document.querySelector("#nameOfUser").value = "";
            document.querySelector("#userEmail").value = "";
            document.querySelector("#userPhone").value = "";
            document.querySelector("#userAge").value = "";
            document.querySelector("#userGender").value = "";
            document.querySelector("#POC").value = "";
            document.querySelector("#POCC").value = "";
          }
        });
      }
    } catch (error) {
      alert("Internal Server Error !!!!");
      console.log(error);
    }
  }
  await db.collection("users").add({ userName, userEmail, userPhone, userAge, userGender, POC,POCC});
  alert("Details Stored Sucessfully !!!!");
  document.querySelector("#nameOfUser").value = "";
  document.querySelector("#userEmail").value = "";
  document.querySelector("#userPhone").value = "";
  document.querySelector("#userAge").value = "";
  document.querySelector("#userGender").value = "";
  document.querySelector("#POC").value = "";
  document.querySelector("#POCC").value = "";
};

document.getElementById('submit2').addEventListener("click",()=>{
    location.href = "details.html"
});