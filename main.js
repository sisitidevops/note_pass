//Api para la conexion
const api = axios.create({
    baseURL: `sumoodle`,
    params: {
        'wstoken': ``,
        'wsfunction': `gradereport_user_get_grade_items`,
        'courseid': `142`,
        'moodlewsrestformat': `json`,
    }
});
const btnGetNotes = document.querySelector('#getNotes');
const getNamesCourse = async () => {
    const { data } = await api();
    const namesStudent = data.usergrades;
    console.log(data);
    const app = document.querySelector('#tbody');
    app.innerHTML = ''
    const student = [];
    namesStudent.map((item) => {
        const tr = document.createElement('tr');
        const td = document.createElement('td');
        td.append(document.createTextNode(item.userfullname))
        tr.append(td);
        const gradeUser = item.gradeitems.map(gr => {
            const viewGrades = () => {
                const td = document.createElement('td');
                td.append(document.createTextNode(gr.graderaw))
                console.log(gr.graderaw)
                tr.append(td);
            }
            let nameGrade = gr.itemname;
            // console.log(nameGrade)
            // console.log(nameGrade);
            switch (nameGrade) {
                case 'AP1_1':
                    viewGrades();
                    break;
                default:
                    break;
                case 'AP2_1':
                    viewGrades();
                    break;
                case 'AP3_2':
                    viewGrades();
                    break;
                case 'AP1_2':
                    viewGrades();
                    break;
                case 'AP2_2':
                    viewGrades();
                    break;
                case 'AP3_2':
                    viewGrades();
                    break;
                case 'EXAM_FIN':
                    viewGrades();
                    break;
                case 'SUP':
                    viewGrades();
                    break;
            }

        })

        // console.log(gradeUser);
        // td1.innerHTML = item.

        student.push(tr);
    });
    app.append(...student)

}

btnGetNotes.addEventListener('click', (e) => {

    const call = () => {
        getNamesCourse();
    }
    call();
});
