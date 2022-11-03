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
    
   
    const filterByDate = () => 
    {
        const dataInput=document.getElementById("submission_date_input").value;
        document.getElementById("filter_by_data").innerHTML = "";
        let newArray = [];
        for (const thisTestData of testData) 
        {
            if (dataInput == thisTestData.submissionDate) 
            {
               newArray.push(thisTestData);
               document.getElementById("filter_by_data").innerHTML+= 
              `Quiz name is: ${thisTestData.quizName}.<br>
               Quiz module is: ${thisTestData.quizModule}.<br>
               Quiz score is: ${thisTestData.quizScore}.<br>
               Quiz student ID is: ${thisTestData.studentId}.<br>
               Quiz student name is: ${thisTestData.studentName}.<br>
               Submission date is: ${thisTestData.submissionDate}.<hr>`  
            } 
        }
        if (newArray.length === 0) 
        {
            document.getElementById("filter_by_data").innerHTML = 'Sorrry, doesn\'t find any result.';
        }
    }
    document.querySelector('button').addEventListener('click',filterByDate);





   // filterByStudentId()
   // findUnsubmitted()
   // getAverageQuizScore()
