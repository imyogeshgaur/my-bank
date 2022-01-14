const handleSubmit = async () => {
  const userName = document.querySelector("#nameOfUser").value;
  const userEmail = document.querySelector("#userEmail").value;
  const userPhone = document.querySelector("#userPhone").value;
  const userAge = document.querySelector("#userAge").value;
  const userGender = document.querySelector("#userGender").value;
  const POC = document.querySelector("#POC").value;
  const POCC = document.querySelector("#POCC").value;


  if ((!userName, !userEmail, !userPhone, !userAge, !userGender, !POC,!POCC)) {
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
            document.querySelector("#nameOfUser").value = "";
            document.querySelector("#userEmail").value = "";
            document.querySelector("#userPhone").value = "";
            document.querySelector("#userAge").value = "";
            document.querySelector("#userGender").value = "";
            document.querySelector("#POC").value = "";
            document.querySelector("#POCC").value = "";
          }
        });
      }else{
        await db
        .collection("users")
        .add({ userName, userEmail, userPhone, userAge, userGender, POC });
        alert("Details Stored Sucessfully !!!!");
      }
    } catch (error) {
      alert("Internal Server Error !!!!");
      console.log(error);
    }
  }
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