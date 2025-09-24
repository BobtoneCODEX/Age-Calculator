 let userInput = document.getElementById("date");
       userInput.max = new Date().toISOString().split("T")[0];
       let result = document.getElementById("result");

       function calculateAge(){
            let birthDate = new Date(userInput.value);

            let d1 = birthDate.getDate();
            let m1 = birthDate.getMonth() + 1;
            let y1 = birthDate.getFullYear();

            let today = new Date();

            let d2 = today.getDate();    // FIXED (today, not birthDate)
            let m2 = today.getMonth() + 1; // FIXED
            let y2 = today.getFullYear(); // FIXED

            let d3, m3, y3;

            y3 = y2 - y1;
            m3 = m2 - m1;
            d3 = d2 - d1;

            if (d3 < 0) {
                m3--;
                d3 += getDaysInMonth(y2, m2 - 1);
            }

            if (m3 < 0) {
                m3 += 12;
                y3--;
            }

            result.innerHTML = `You are ${y3} years, ${m3} months, and ${d3} days old.`;
       }

       function getDaysInMonth(year, month){
            return new Date(year, month, 0).getDate();
       }




































































































































































// <!-- let salary = 1000; 

// if (salary === 1000) {
//   console.log("Yhoo boy happy 🎉");
// } else if (salary === 20) {
//   console.log("yhoo boy sad 😢");
// } else {
//   console.log("Salary not checked");
// } -->

