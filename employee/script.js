document.addEventListener("DOMContentLoaded", function() {
    loadEmployees();
});

function loadEmployees() {
    fetch('get_employees.php')
        .then(response => response.json())
        .then(data => {
            const tbody = document.querySelector("#employeeTable tbody");
            tbody.innerHTML = "";
            data.forEach(employee => {
                const tr = document.createElement("tr");
                tr.innerHTML = `
                    <td>${employee.name}</td>
                    <td>${employee.position}</td>
                    <td>${employee.email}</td>
                    <td>${employee.phone}</td>
                    <td>
                        <button onclick="editEmployee(${employee.id})">Edit</button>
                        <button onclick="deleteEmployee(${employee.id})">Delete</button>
                    </td>
                `;
                tbody.appendChild(tr);
            });
        });
}

function addEmployee() {
    const name = document.getElementById("name").value;
    const position = document.getElementById("position").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;

    const formData = new FormData();
    formData.append('name', name);
    formData.append('position', position);
    formData.append('email', email);
    formData.append('phone', phone);

    fetch('add_employee.php', {
        method: 'POST',
        body: formData
    })
    .then(() => {
        alert("Employee added successfully");
        window.location.href = 'dashboard.html';
    });
}

function editEmployee(id) {
    window.location.href = `update_employee.html?id=${id}`;
}

function updateEmployee() {
    const id = document.getElementById("employeeId").value;
    const name = document.getElementById("name").value;
    const position = document.getElementById("position").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;

    const formData = new FormData();
    formData.append('id', id);
    formData.append('name', name);
    formData.append('position', position);
    formData.append('email', email);
    formData.append('phone', phone);

    fetch('update_employee.php', {
        method: 'POST',
        body: formData
    })
    .then(() => {
        alert("Employee updated successfully");
        window.location.href = 'dashboard.html';
    });
}

function deleteEmployee(id) {
    if (confirm("Are you sure you want to delete this employee?")) {
        const formData = new FormData();
        formData.append('id', id);

        fetch('delete_employee.php', {
            method: 'POST',
            body: formData
        })
        .then(() => {
            alert("Employee deleted successfully");
            loadEmployees();
        });
    }
}
