export function validateEmail(email) {
  return /\S+@\S+\.\S+/.test(email);
}
export function validateGPA(gpa) {
  const num = parseFloat(gpa);
  return !isNaN(num) && num >= 0 && num <= 4;
}