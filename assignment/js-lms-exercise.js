const testData = [
    {
        quizName: "History 1",
        quizModule: "History",
        quizScore: 70,
        studentId: 1,
        studentName: "Bob Ross",
        submissionDate: "12/20/2020"
    },
    {
        quizName: "History 1",
        quizModule: "History",
        quizScore: 77,
        studentId: 16,
        studentName: "Diana Ross",
        submissionDate: "12/20/2020"
    },
    {
        quizName: "History 1",
        quizModule: "History",
        quizScore: 82,
        studentId: 15,
        studentName: "Steve Smith",
        submissionDate: "12/20/2020"
    },
    {
        quizName: "History 1",
        quizModule: "History",
        quizScore: 88,
        studentId: 14,
        studentName: "Dylan Roberts",
        submissionDate: "12/20/2020"
    },
    {
        quizName: "History 2",
        quizModule: "History",
        quizScore: 82,
        studentId: 1,
        studentName: "Bob Ross",
        submissionDate: "1/20/2021"
    },
    {
        quizName: "History 2",
        quizModule: "History",
        quizScore: 89,
        studentId: 16,
        studentName: "Diana Ross",
        submissionDate: "1/20/2021"
    },

    {
        quizName: "History 2",
        quizModule: "History",
        quizScore: 73,
        studentId: 15,
        studentName: "Steve Smith",
        submissionDate: "1/20/2021"
    },

    {
        quizName: "History 2",
        quizModule: "History",
        quizScore: 85,
        studentId: 15,
        studentName: "Steve Smith",
        submissionDate: "1/20/2021"
    },
    {
        quizName: "Reading Comprehension",
        quizModule: "English",
        quizScore: 60,
        studentId: 15,
        studentName: "Steve Smith",
        submissionDate: "2/20/2020"
    },
    {
        quizName: "Reading Comprehension",
        quizModule: "English",
        quizScore: 83,
        studentId: 16,
        studentName: "Diana Ross",
        submissionDate: "2/20/2020"
    },
    {
        quizName: "Reading Comprehension",
        quizModule: "English",
        quizScore: 70,
        studentId: 14,
        studentName: "Dylan Roberts",
        submissionDate: "2/20/2020"
    }
    ];
    

 //  Filter By Date
const filterByDate = () => 
{
    const dataInput = document.getElementById("submission_date_input").value;
    document.getElementById("filter_by_data").innerHTML = "";
    let newArray = [];
    for (const thisTestData of testData) 
    {
        if (dataInput == thisTestData.submissionDate) 
        {
            newArray.push(thisTestData);
            document.getElementById("filter_by_data").innerHTML += 
            `Quiz name: ${thisTestData.quizName}.<br>
            Quiz module: ${thisTestData.quizModule}.<br>
            Quiz score: ${thisTestData.quizScore}.<br>
            Quiz student ID: ${thisTestData.studentId}.<br>
            Quiz student name: ${thisTestData.studentName}.<br>
            Submission date: ${thisTestData.submissionDate}.<hr>`  
        } 
    }
    if (newArray.length === 0) 
    {
        document.getElementById("filter_by_data").innerHTML = 'Sorrry, doesn\'t find any result.';
    }
}
document.querySelector('.date_button').addEventListener('click',filterByDate);


//Filter By Student Id
const filterByStudentId = () => 
{
    const dataInput = document.getElementById("studentId_input").value;
    document.getElementById("filter_by_student_id").innerHTML = "";
    let newArray = [];
    for (const thisTestData of testData)
    {
        if (dataInput == thisTestData.studentId)
        {
            newArray.push(thisTestData);
            document.getElementById("filter_by_student_id").innerHTML +=
            `Quiz name: ${thisTestData.quizName}.<br>
            Quiz module: ${thisTestData.quizModule}.<br>
            Quiz score: ${thisTestData.quizScore}.<br>
            Quiz student ID: ${thisTestData.studentId}.<br>
            Quiz student name: ${thisTestData.studentName}.<br>
            Submission date: ${thisTestData.submissionDate}.<hr>`  
        }
    }
    if (newArray.length === 0)
    {
        document.getElementById("filter_by_student_id").innerHTML = 'ID not found.';
    }
}
document.querySelector('.id_button').addEventListener('click',filterByStudentId);


//Find unsubmitted students
findUnsubmitted()





   // getAverageQuizScore()
