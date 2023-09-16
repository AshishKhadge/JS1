
  const data = [
    { name: "john", age: 24, profession: "developer" },
    { name: "jane", age: 27, profession: "admin" },
  ];
  
  // 1. Print Developers
  function printDeveloper() {
    const newData = data.filter((item) => item.profession === "developer");
    console.log("Updated array" , newData);
  }
  
  // 2. Add Data
  function addData() {
    const Nname = prompt("Enter your name");
    const Nage = prompt("Enter your age");
    const Nprofession = prompt("Enter your profession");

    const NewData = {
        name: Nname,
        age: Nage,
        profession: Nprofession
    }
    console.log("New Entry : ", NewData);

  }
  
  // 3. Remove Admins
  function removeAdmin() {
    const newData = data.filter((item) => item.profession !== "admin");
    console.log("Admin Removed" , newData);
  }
  
  // 4. Concatenate Array
  function concatenateArray() {
    const a = [{name : "Ashish", age : 21 ,profession : "developer"}];
    const newArray = [...data, ...a];
    console.log(newArray);
  }
  
  // 5. Average Age
  function averageAge() {
    let sum = 0;
    data.forEach((item) =>{
    sum = sum+item.age
  });
  let avg = sum/data.length;
  console.log("Average age : ", avg);
  }
  
  // 6. Age Check
  function checkAgeAbove25() {
    const above25 = data.every((person) => person.age > 25)
    console.log("Above age : ", above25)
  }
  
  // 7. Unique Professions
  function uniqueProfessions() {
    const professions = [...new Set(data.map((item) => item.profession))];
    console.log("Unique Professions:", professions);
  }
  
  // 8. Sort by Age
  function sortByAge() {
    const sortAge = data.sort((a,b) => a.age-b.age)
    console.log("Sorted Data : ", sortAge)
  }
  
  // 9. Update Profession
  function updateJohnsProfession() {
    data.forEach((item) => item.name=="john"?item.profession="coder":null)
    console.log("Updated Profession : ", data);
  }
  
  // 10. Profession Count
  function getTotalProfessions() {
    const professionCount = {};
    data.forEach((person) =>{
        const profession = person.profession;
        professionCount[profession]=(professionCount[profession] || 0) +1;
    });
    console.log("Profession Counts : ", professionCount);
}