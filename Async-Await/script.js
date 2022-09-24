/* const users = [
  {
    id: 01,
    name: 'Jamil Doe',
    username: 'jdoe',
    email: 'jdoe@example.com',
    phone: '+1 234 56 78',
  },
  {
    id: 02,
    name: 'Barry Mitchel',
    username: 'bmitchel',
    email: 'barry@example.com',
    phone: '+1 567 12 34',
  },
  {
    id: 03,
    name: 'Adam Smith',
    username: 'asmith',
    email: 'asmith@example.com',
    phone: '+1 987 65 43',
  },
]; */

/* fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>response.json())
.then((users)=>{
  const tableBody = document.querySelector('tbody')

  users.forEach((user) => {
    tableBody.innerHTML += `
      <tr>
        <td>${user.name}</td>
        <td>${user.username}</td>
        <td>${user.email}</td>
        <td>${user.phone}</td>
      </tr>
        `
  })
})
 */
// ORRRR

async function getUsers(){
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await response.json();
  const tableBody = document.querySelector('tbody')

  users.forEach((user) => {
    tableBody.innerHTML += `
      <tr>
        <td>${user.name}</td>
        <td>${user.username}</td>
        <td>${user.email}</td>
        <td>${user.phone}</td>
      </tr>
        `
  })
}

getUsers()