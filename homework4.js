let employees = ["Lara", "Evee", "Simi"];
let salary = [1000, 2000, 120.90];

if (employees.length !== salary.length) {
  console.log("Error: Number of employees does not match number of salaries");
} 
else {
  for (let i = 0; i < employees.length; i++) {
    console.log(employees[i] + " got salary: " + salary[i]);
  }
}
