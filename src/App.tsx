import { useState } from "react";
import { Button } from "./components/ui/button.tsx";

const App = () => {
    const [ count, setCount ] = useState<number>(0);
    return (
        <div>
            <h1 className="text-3xl font-bold underline text-center text-red-500">
                Ram Ram
            </h1>
            <p className="mt-4 ms-[25%] text-green-800">
                Current Count: { count }
                <Button onClick={(): void => setCount(count + 1)} className="cursor-pointer ml-3">
                    Increment Count
                </Button>
            </p>
        </div>
    )
}
export default App;
