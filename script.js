function calculateGrade() {
    // Деректерді алу
    const name = document.getElementById('studentName').value;
    const sor1 = parseFloat(document.getElementById('sor1').value) || 0;
    const sor2 = parseFloat(document.getElementById('sor2').value) || 0;
    const soch = parseFloat(document.getElementById('soch').value) || 0;
    const fb = parseFloat(document.getElementById('fb').value) || 0;

    // Валидация
    if (!name) {
        alert("Оқушының атын жазыңыз!");
        return;
    }

    if (sor1 > 20 || sor2 > 20 || soch > 50 || fb > 10) {
        alert("Қате! Енгізілген балл максималды мәннен асып кетті.");
        return;
    }

    // Есептеу
    const bjbTotal = sor1 + sor2;
    const finalScore = bjbTotal + soch + fb;

    // Бағалау категориясы
    let grade, color;
    if (finalScore >= 85) { grade = '5'; color = '#2ecc71'; }
    else if (finalScore >= 65) { grade = '4'; color = '#f1c40f'; }
    else if (finalScore >= 40) { grade = '3'; color = '#e67e22'; }
    else { grade = '2'; color = '#e74c3c'; }

    // Кестеге қосу
    const tableBody = document.getElementById('resultBody');
    const newRow = document.createElement('tr');
    
    newRow.innerHTML = `
        <td><strong>${name}</strong></td>
        <td>${bjbTotal} <small>/40</small></td>
        <td>${soch} <small>/50</small></td>
        <td>${fb} <small>/10</small></td>
        <td><b style="font-size: 1.1rem">${finalScore}</b></td>
        <td><span class="badge" style="background: ${color}">Баға: ${grade}</span></td>
    `;

    tableBody.prepend(newRow); // Жаңа оқушыны ең үстіне қосу

    // Форманы тазарту
    document.getElementById('studentName').value = '';
    document.querySelectorAll('input[type="number"]').forEach(input => input.value = 0);
}
