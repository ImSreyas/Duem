const validate = (setError, setShake, form) => {
  let flag = true;
  // name
  if (form.name == "") {
    setError((prev) => ({ ...prev, name: "name cannot be empty." }));
    setShake((prev) => ({ ...prev, name: true }));
    setTimeout(() => {
      setShake((prev) => ({ ...prev, name: false }));
    }, 300);
    flag = false;
  } else {
    setError((prev) => ({ ...prev, name: "" }));
  }
  // address
  if (form.address == "") {
    setError((prev) => ({ ...prev, address: "address cannot be empty." }));
    setShake((prev) => ({ ...prev, address: true }));
    setTimeout(() => {
      setShake((prev) => ({ ...prev, address: false }));
    }, 300);
    flag = false;
  } else {
    setError((prev) => ({ ...prev, address: "" }));
  }
  // phone
  const phoneRegex = /^(?:\+?\d{1,3})?\d{10}$/;
  if (!phoneRegex.test(form.phone)) {
    setError((prev) => ({ ...prev, phone: "invalid phone number." }));
    setShake((prev) => ({ ...prev, phone: true }));
    setTimeout(() => {
      setShake((prev) => ({ ...prev, phone: false }));
    }, 300);
    flag = false;
  } else {
    setError((prev) => ({ ...prev, phone: "" }));
  }
  if (form.phone == "") {
    setError((prev) => ({ ...prev, phone: "phone cannot be empty." }));
    setShake((prev) => ({ ...prev, phone: true }));
    setTimeout(() => {
      setShake((prev) => ({ ...prev, phone: false }));
    }, 300);
    flag = false;
  }

  // email
  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  if (!emailRegex.test(form.email)) {
    setError((prev) => ({ ...prev, email: "invalid email." }));
    setShake((prev) => ({ ...prev, email: true }));
    setTimeout(() => {
      setShake((prev) => ({ ...prev, email: false }));
    }, 300);
    flag = false;
  } else {
    setError((prev) => ({ ...prev, email: "" }));
  }
  if (form.email == "") {
    setError((prev) => ({ ...prev, email: "email cannot be empty." }));
    setShake((prev) => ({ ...prev, email: true }));
    setTimeout(() => {
      setShake((prev) => ({ ...prev, email: false }));
    }, 300);
    flag = false;
  }
  // collection
  if (form.collection == "") {
    setError((prev) => ({
      ...prev,
      collection: "collection cannot be empty.",
    }));
    setShake((prev) => ({ ...prev, collection: true }));
    setTimeout(() => {
      setShake((prev) => ({ ...prev, collection: false }));
    }, 300);
    flag = false;
  } else {
    setError((prev) => ({
      ...prev,
      collection: "",
    }));
  }
  return flag;
};
export default validate;
