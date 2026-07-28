async function checkResult() {

    // Get Student ID
    const studentId = document.getElementById("studentId").value.trim().toUpperCase();

    if (studentId === "") {
        alert("Please enter your Student ID.");
        return;
    }

    try {

        // Load students data
        const response = await fetch("students.json");

        if (!response.ok) {
            throw new Error("Unable to load students.json");
        }

        const students = await response.json();

        // Find the student
        const student = students.find(s => s.studentId === studentId);

        if (!student) {
            alert("Student not found.");
            return;
        }

        // Display student details
        document.getElementById("studentName").textContent = student.name;
        document.getElementById("studentIDDisplay").textContent = student.studentId;
        document.getElementById("studentClass").textContent = student.class;
        document.getElementById("studentSession").textContent = student.session;
        document.getElementById("studentTerm").textContent = student.term;

        // Display student's passport
        document.getElementById("studentPassport").src = `assets/images/${student.studentId}.jpg`;

        // Display subjects
        const tbody = document.getElementById("subjectTable");
        tbody.innerHTML = "";

        let total = 0;

        Object.entries(student.subjects).forEach(([subject, score]) => {

            total += score;

            tbody.innerHTML += `
                <tr>
                    <td>${subject}</td>
                    <td>${score}</td>
                </tr>
            `;
        });

        // Calculate average
        const average = (total / Object.keys(student.subjects).length).toFixed(1);

        let grade = "";
        let remark = "";

        if (average >= 70) {
            grade = "A";
            remark = "Excellent";
        } else if (average >= 60) {
            grade = "B";
            remark = "Very Good";
        } else if (average >= 50) {
            grade = "C";
            remark = "Good";
        } else if (average >= 45) {
            grade = "D";
            remark = "Fair";
        } else {
            grade = "F";
            remark = "Needs Improvement";
        }

        // Display summary
        document.getElementById("total").textContent = total;
        document.getElementById("average").textContent = average;
        document.getElementById("grade").textContent = grade;
        document.getElementById("remark").textContent = remark;

        // Show result section
        document.getElementById("resultSection").style.display = "block";

    } catch (error) {
        console.error(error);
        alert("An error occurred while loading the result.");
    }
}