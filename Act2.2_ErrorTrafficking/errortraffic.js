(() => {
    'use strict';

    const forms = document.querySelectorAll('.needs-validation');

    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (form.checkValidity()) {
                showmodal();
                console.log("valid");
                form.reset();
                form.classList.remove('was-validated');
            } else {
                event.preventDefault();
                event.stopPropagation();
                form.classList.add('was-validated');
            }

            event.preventDefault();
        }, false);
    });
})();

function showmodal() {
    const modal = new bootstrap.Modal(document.getElementById('Modal'));
    modal.show();

    // Get form data and update the table
    updateTable();
}

function updateTable() {
    const tableBody = document.getElementById('tableBody');
    const formData = {
        fullName: document.getElementById('name').value,
        email: document.getElementById('Email').value,
        giftPreferences: document.getElementById('Preferences').value,
        budgetRange: document.getElementById('Budget').value,
        preferredColor: document.getElementById('color').value,
        when: document.getElementById('datet').value,
        wrappingStyle: getSelectedWrappingStyle(),
        completeAddress: document.getElementById('Address').value,
        agreeTerms: document.getElementById('agreeTerms').checked ? 'Agreed' : 'Not Agreed',
    };

    const row = tableBody.insertRow();
    for (const key in formData) {
        const cell = row.insertCell();
        cell.textContent = formData[key];
    }
}

function getSelectedWrappingStyle() {
    const wrappingStyleRadios = document.querySelectorAll('input[name="radio-stacked2"]:checked');
    return wrappingStyleRadios.length > 0 ? wrappingStyleRadios[0].value : '';
}
