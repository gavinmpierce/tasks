import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): React.JSX.Element {
    const [number, setNumber] = useState<number>(3);
    const [number2, setNumber2] = useState<number>(2);
    const [win, setWin] = useState<boolean>(false);

    function flipWin() {
        setWin(!win);
    }

    function rollDiceLeft() {
        const newNumber = d6();
        setNumber(newNumber);

        if (newNumber === 1 && number2 === 1) {
            flipWin();
        }
    }

    function rollDiceRight() {
        const newNumber2 = d6();
        setNumber2(newNumber2);

        if (number === 1 && newNumber2 === 1) {
            flipWin();
        }
    }

    return (
        <div>
            <div>{win && <div>You Win</div>}</div>
            <Button onClick={rollDiceLeft}>Roll Left</Button>
            <div>
                {number} {number2}
            </div>
            <Button onClick={rollDiceRight}>Roll Right</Button>
        </div>
    );
}
