const checkUser = async () => {
  const detail = document.querySelector("#detail").value;
  const container = document.querySelector(".container");
  const checkContainer = document.querySelector(".checkContainer");
  try {
    const db = firebase.firestore();
    const usersRef1 = await db.collection("users").where("userEmail", "==", detail).get();
    const usersRef2 = await db.collection("users").where("userPhone", "==", detail).get();
    if (!detail) {
      alert("Please Enter Some Value !!!")
    }else if (usersRef1.empty && usersRef2.empty) {
      alert("User Not Found !!!!");
      document.querySelector("#detail").value = " ";
      location.reload();
    }
    else {
      container.classList.add("show");
      container.classList.remove("hidden");
      checkContainer.classList.add("hidden");
      usersRef1.forEach(doc1 => {
        document.querySelector('#nameOfUser').value = doc1.data().userName;
        document.querySelector('#emailOfUser').value = doc1.data().userEmail;
        document.querySelector('#phoneOfUser').value = doc1.data().userPhone;
        document.querySelector('#ageOfUser').value = doc1.data().userAge;
        document.querySelector('#genderOfUser').value = doc1.data().userGender;
        document.querySelector('#pocOfUser').value = doc1.data().POC;
      });
      usersRef2.forEach(doc2 => {
        document.querySelector('#nameOfUser').value = doc2.data().userName;
        document.querySelector('#emailOfUser').value = doc2.data().userEmail;
        document.querySelector('#phoneOfUser').value = doc2.data().userPhone;
        document.querySelector('#ageOfUser').value = doc2.data().userAge;
        document.querySelector('#genderOfUser').value = doc2.data().userGender;
        document.querySelector('#pocOfUser').value = doc2.data().POC;
      });
    }
  } catch (error) {
    alert("Internal Server Error !!!");
    console.log(error);
  }
};

