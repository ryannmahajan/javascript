class MultiplicatorUnitFailure extends Error {}

function primitiveMultiply(a, b) {
    if (Math.random() < 0.2) {
        if (isNaN(a*b)) throw Error()
        return a * b;
    } else {
        throw new MultiplicatorUnitFailure("Klunk");
    }
}

function reliableMultiply(a, b) {
    console.log(`\na=${a}, b=${b}`)
    for(;;) {
        try {
            console.log(primitiveMultiply(a,b))
            break;
        } catch (e) {
            if (e instanceof MultiplicatorUnitFailure) {
                console.log("Got MultiplicatorUnitFailure")
            } else {
                console.log("Got other error")
                throw e;
            }
        }
    }
}

reliableMultiply(2, 3)
reliableMultiply("t", "b")

/*
Say you have a function primitiveMultiply that in 20 percent of cases multiplies two numbers and in the other 80 percent of cases raises an exception of type MultiplicatorUnitFailure. Write a function that wraps this clunky function and just keeps trying until a call succeeds, after which it returns the result.

Make sure you handle only the exceptions you are trying to handle.
*/