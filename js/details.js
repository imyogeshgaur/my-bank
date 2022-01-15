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
    } else if (usersRef1.empty && usersRef2.empty) {
      alert("User Not Found !!!!");
    } else {
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

const checkUpdateUser = async () => {
  const detail = document.querySelector("#detail").value;
  const updates = document.querySelector(".updates");
  try {
    const db = firebase.firestore();
    const usersRef1 = await db.collection("users").where("userEmail", "==", detail).get();
    const usersRef2 = await db.collection("users").where("userPhone", "==", detail).get();
    if (!detail) {
      alert("Please Enter Some Value !!!")
    } else if (usersRef1.empty && usersRef2.empty) {
      alert("User Not Found !!!!");
    } else {
      updates.style.display = "block";
      usersRef1.forEach(doc1 => {
        document.querySelector('#updatedName').value = doc1.data().userName;
        document.querySelector('#updatedEmail').value = doc1.data().userEmail;
        document.querySelector('#updatedPhone').value = doc1.data().userPhone;
        document.querySelector('#updatedAge').value = doc1.data().userAge;
        document.querySelector('#updatedGender').value = doc1.data().userGender;
        document.querySelector('#updatedPOC').value = doc1.data().POC;
        document.querySelector('#updatedPOCC').value = doc1.data().POCC;
      });
      usersRef2.forEach(doc2 => {
        document.querySelector('#updatedName').value = doc2.data().userName;
        document.querySelector('#updatedEmail').value = doc2.data().userEmail;
        document.querySelector('#updatedPhone').value = doc2.data().userPhone;
        document.querySelector('#updatedAge').value = doc2.data().userAge;
        document.querySelector('#updatedGender').value = doc2.data().userGender;
        document.querySelector('#updatedPOC').value = doc2.data().POC;
        document.querySelector('#updatedPOCC').value = doc2.data().POCC;
      });
    }
  } catch (error) {
    alert("Internal Server Error !!!");
    console.log(error);
  }
};

const deleteData = async () => {
  const modalToDelete = document.getElementById('modalToDelete');
  const value = document.getElementById('emailPhoneDelete').value;
  try {
    const db = firebase.firestore();
    const userRef1 = await db.collection("users").where("userEmail", "==", value).get();
    const userRef2 = await db.collection("users").where("userPhone", "==", value).get();
    userRef1.forEach(doc => {
      doc.ref.delete();
    });
    userRef2.forEach(doc => {
      doc.ref.delete();
    });
    alert("User Deleted Sucessfully !!!");
    modalToDelete.style.display = "none";
    location.href = "index.html"
  } catch (error) {
    console.log(error);
  }
}

const updateData = async () => {
  const updatedName = document.querySelector('#updatedName').value;
  const updatedEmail = document.querySelector('#updatedEmail').value;
  const updatedPhone = document.querySelector('#updatedPhone').value;
  const updatedAge = document.querySelector('#updatedAge').value;
  const updatedGender = document.querySelector('#updatedGender').value;
  const updatedPOC = document.querySelector('#updatedPOC').value;
  const updatedPOCC = document.querySelector('#updatedPOCC').value;
  const modalToUpdate = document.getElementById("modalToUpdate");
  try {
    const db = firebase.firestore();
    const userRef = await db.collection("users").where("userEmail", "==", updatedEmail).get();
    userRef.forEach(doc => {
      db.collection("users").doc(doc.id).update({
        userName: updatedName,
        userEmail: updatedEmail,
        userPhone: updatedPhone,
        userAge: updatedAge,
        userGender: updatedGender,
        POC: updatedPOC,
        POCC: updatedPOCC
      });
    })
    alert("Details Updated Sucessfully !!!");
    location.href = "index.html"
    modalToUpdate.style.display = "none";
  } catch (error) {
    console.log(error);
  }
}

const deleteModal = () => {
  const modalToDelete = document.getElementById('modalToDelete');
  modalToDelete.style.display = "none";
  const modalToUpdate = document.getElementById('modalToUpdate');
  modalToUpdate.style.display = "none";
}

function Delete() {
  const modalToDelete = document.getElementById('modalToDelete');
  modalToDelete.style.display = "block"
}
function Update() {
  const modalToUpdae = document.getElementById('modalToUpdate');
  modalToUpdae.style.display = "block"
}