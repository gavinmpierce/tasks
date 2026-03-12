import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): React.JSX.Element {
    const [question, setQuestion] = useState<QuestionType>(
        "short_answer_question",
    );

    function flipType() {
        if (question == "multiple_choice_question") {
            setQuestion("short_answer_question");
        } else {
            setQuestion("multiple_choice_question");
        }
    }

    return (
        <div>
            <Button onClick={flipType}>Change Type</Button>
            <div>{question}</div>
        </div>
    );
}
