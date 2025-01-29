// Arrow function to store the value from input field in sessionStorage
const storeValue = () => {
  const inputValue = document.getElementById("name").value;
  sessionStorage.setItem("storedValue", inputValue);
  window.open("Home.html"); // Redirect to the second page
};

// Arrow function to get the stored value from sessionStorage and display it on the second page
window.onload = () => {
  if (window.location.pathname.includes("Home.html")) {
    const storedValue = sessionStorage.getItem("storedValue");
    if (storedValue === "") {
      window.close("Home.html");
      alert("!! Enter Your User Name To Continue !!");
    } else {
      document.getElementById("profile").textContent =
        profile.textContent + "_" + storedValue;
    }
  }
};
