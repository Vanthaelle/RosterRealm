const modal = document.getElementById('modal');
const addBtn = document.querySelector('.add-student');
const cancelBtn = document.querySelector('.cancel-btn');
const saveBtn = document.querySelector('.save-btn');
const tbody = document.querySelector('#studentTable tbody');

addBtn.addEventListener('click', () => modal.classList.add('active'));
cancelBtn.addEventListener('click', () => modal.classList.remove('active'));

saveBtn.addEventListener('click', () => {
  const name = document.getElementById('name').value.trim();
  const cls = document.getElementById('class').value.trim();
  const age = document.getElementById('age').value.trim();
  const notes = document.getElementById('notes').value.trim();
  if(name && cls && age) {
    const row = document.createElement('tr');
    row.innerHTML = `<td>${name}</td><td>${cls}</td><td>${age}</td><td>${notes}</td>`;
    tbody.appendChild(row);
    modal.classList.remove('active');
    document.getElementById('name').value='';
    document.getElementById('class').value='';
    document.getElementById('age').value='';
    document.getElementById('notes').value='';
  } else {
    alert('Please fill in Name, Class, and Age.');
  }
});