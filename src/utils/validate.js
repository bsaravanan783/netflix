export const checkValidData = (email, password) => {
//   if (name) {
//     const isName = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name);
//     console.log(isName);
//     if (!isName) return "Invalid name";
//   }
  const isEmail = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );
  const isPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(
    password
  );

  if (!isEmail) return "Invalid email";
  if (!isPassword) return "Invalid Password";

  return null;
};
