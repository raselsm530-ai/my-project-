import { db, storage } from "./firebase-config.js";
import { ref, push, set } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";
import { ref as sRef, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-storage.js";

let selectedAmount = 0;

window.selectAmount = (amt) => {
  selectedAmount = amt;
  document.getElementById("showAmount").innerText = amt;
};
function copyNumber() {
    const number = document.getElementById("fixedNumberText").innerText;

    navigator.clipboard.writeText(number).then(() => {
        alert("নাম্বার কপি হয়েছে ✅ এখন বিকাশ/নগদ অ্যাপে পেস্ট করুন");
    });
}
window.submitDeposit = async () => {

  const method = document.getElementById("method").value;
  const trxid = document.getElementById("trxid").value;
  const file = document.getElementById("screenshot").files[0];
  const phone = localStorage.getItem("user");

  if (!selectedAmount || !method || !trxid || !file) {
    alert("সব তথ্য দিন");
    return;
  }

  const imgRef = sRef(storage, "screenshots/" + Date.now());
  await uploadBytes(imgRef, file);
  const imgURL = await getDownloadURL(imgRef);

  const depRef = push(ref(db, "deposits"));
  await set(depRef, {
    phone,
    amount: selectedAmount,
    method,
    trxid,
    screenshot: imgURL,
    status: "pending",
    time: new Date().toLocaleString()
  });

  alert("ডিপোজিট পেন্ডিং করা হয়েছে");
  location.reload();
};
