import { useEffect } from 'react';
import { useState } from 'react';

const UseEffectTest = () => {
    const [toggleOne, setToggleOne] = useState(false);
    const [toggleTwo, setToggleTwo] = useState(false);
    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log('UseEffect1 Ran');
    }, []);
    useEffect(() => {
        console.log('UseEffect2 Ran');
        if (toggleTwo)
            console.log('toggleTwo slice of state is true so this code runs');
    }, [toggleTwo]);
    useEffect(() => {
        const myInterval = setInterval(() => {
            setCount((prevCount) => prevCount + 1);
        }, 1000);

        return () => {
            console.log(
                `UseEffect3 with interval number ${count} is cleaning up`
            );
            clearInterval(myInterval);
        };
    }, []);


    return (
        <div>
            {console.log('rendered or re-rendered')}
            <h1>UseEffectTest Component</h1>
            <button onClick={() => setToggleOne(!toggleOne)}>Toggle One</button>
            <button onClick={() => setToggleTwo(!toggleTwo)}>Toggle Two</button>
        </div>
    );
};

export default UseEffectTest;