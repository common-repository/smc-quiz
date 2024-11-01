import "./style.css";

window.addEventListener("load", () => {

    const questions = document.querySelectorAll(".is-style-smc-quiz > div:not(.is-style-smc-post-quiz)");
    if(!questions.length){ return; }
    let post_quiz_area = document.querySelector(".is-style-smc-quiz .is-style-smc-post-quiz");
    if(!post_quiz_area){
        post_quiz_area = document.createElement("div");
        post_quiz_area.classList.add("is-style-smc-post-quiz");
        document.querySelector(".is-style-smc-quiz").appendChild(post_quiz_area);
    }
    post_quiz_area.setAttribute("name", "is-style-smc-post-quiz");
    let questions_answered = 0;
    let correct_answers = 0;

    questions.forEach((question, qi) => {

        if(qi === questions.length-1){
            question.classList.add("no-border");
        }

        question.querySelector("h2","h3","h4").insertAdjacentHTML("afterbegin", `<span class="number">${qi+1}. </span>`);

        let answer_area = question.querySelector(":scope > div, :scope > p");
        if(!answer_area){
            answer_area = document.createElement("p");
            question.appendChild(answer_area);
        }
        answer_area.classList.add("answer");
        let answer_index = null;

        const choices = question.querySelectorAll("li");
        choices.forEach((choice, ci) => {

            if (choice.classList.contains("is-style-smc-correct")){
                answer_index = ci;
                choice.removeAttribute("class");
            }

            const choice_text = choice.textContent;
            choice.textContent = "";

            const input = document.createElement("input");
            input.setAttribute("type", "radio");
            input.setAttribute("name", "q" + qi);
            input.setAttribute("value", ci);
            choice.appendChild(input);

            const label = document.createElement("label");
            label.textContent = choice_text;
            label.setAttribute("for", "c" + ci);
            choice.appendChild(label);

        });

        if(answer_index === null){
            alert("No answer selected for question " + (parseInt(qi) + 1));
        }

        const button = document.createElement("button");
        button.textContent = "Answer";
        button.addEventListener("click", function(){

            const guess_index = question.querySelector("input:checked") ? Number(question.querySelector("input:checked").value) : -1;

            if(guess_index === answer_index){
                // correct answer
                answer_area.classList.add("correct");
                correct_answers++;
            }
            else{
                // incorrect answer
                answer_area.classList.add("incorrect");
                let incorrect_html = 'The correct answer is "' + choices[answer_index].textContent + '."';
                if(answer_area.innerHTML){
                    incorrect_html += "<br/><br/>";
                }
                question.querySelector("p:first-of-type").insertAdjacentHTML("afterbegin", incorrect_html);
            }

            answer_area.classList.add("fadeIn");
            answer_area.style.display = "block";

            choices.forEach((c) => {
                c.querySelector("input").disabled = true;
            });

            button.style.display = "none";

            questions_answered++;
            if(questions_answered === questions.length){
                show_score();
            }

        });

        question.appendChild(button);

    });

    function get_score_exclamation(percent){
        if(percent > 94){
            return "Genius!";
        }
        if(percent > 89){
            return "Excellent!";
        }
        if(percent > 84){
            return "Very good!";
        }
        if(percent > 79){
            return "Good!";
        }
        if(percent > 69){
            return "You passed!";
        }
        if(percent > 59){
            return "Not too bad!";
        }
        if(percent > 49){
            return "That was a tough one!";
        }
        if(percent < 50){
            return "Better luck next time!";
        }
    }

    function show_score(){

        const percent = Math.round(correct_answers/questions.length * 100);
        const score = `<p class="score">You answered ${correct_answers} of ${questions.length} questions correctly for a score of ${percent}%.<span class="exclamation"> ${get_score_exclamation(percent)}</span></p>`;

        post_quiz_area.insertAdjacentHTML("afterbegin", score);

        post_quiz_area.classList.add("fadeIn");
        post_quiz_area.style.display = "block";

        smc_ga_event();

    }

    function smc_ga_event(){
        if (typeof gtag === 'function') {
            gtag('event', 'quiz', {
                'score': Math.round(correct_answers/questions.length * 100)
            });
        }
    }

});