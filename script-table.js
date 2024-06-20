function showForm() {
    document.getElementById('table-container').style.display = 'none';
    document.getElementById('patient-form').style.display = 'block';
}

function hideForm() {
    document.getElementById('patient-form').style.display = 'none';
    document.getElementById('table-container').style.display = 'block';
}

function addPatient() {
    const name = document.getElementById('patient-name').value;
    const complaint = document.getElementById('patient-complaint').value;
    const code = document.getElementById('patient-code').value;
    const diagnosis = document.getElementById('patient-diagnosis').value;

    const table = document.getElementById('patients-table').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();
    const rowCount = table.rows.length;

    const numCell = newRow.insertCell(0);
    const nameCell = newRow.insertCell(1);
    const complaintCell = newRow.insertCell(2);
    const codeCell = newRow.insertCell(3);
    const diagnosisCell = newRow.insertCell(4);

    numCell.innerHTML = rowCount;
    nameCell.innerHTML = name;
    complaintCell.innerHTML = complaint;
    codeCell.innerHTML = code;
    diagnosisCell.innerHTML = diagnosis;

    hideForm();

    document.getElementById('new-patient-form').reset();
}