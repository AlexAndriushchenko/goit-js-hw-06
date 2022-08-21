const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  //   const formData = new FormData(event.currentTarget);
  //   formData.forEach((value, name) => {
  //     if (value === "") {
  //       window.alert(`not filled + ${name}`);
  //     }
  //   });

  const formElements = event.currentTarget.elements;
  const mail = formElements.email.value;
  const password = formElements.password.value;

  if (mail === "") {
    window.alert("not filled mail");
  } else if (password === "") {
    window.alert("not filled password");
  } else {
    const formData = { mail, password };
    console.log(formData);
    form.reset();
  }
}
