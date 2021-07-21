import React, { useState } from "react";
import { RootState } from '../store/store';
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../features/user/userSlice";


export interface IUser {
    name: string,
    age: number
}

export interface CountProps {
    num: number
}

export const CountHi = ({ num }: CountProps) => {
    var hifi: any = [];
    for (let i = 0; i < num; i++) {
        hifi.push('👋');
    }
    return <h1 className="text-5xl text-white">{hifi}</h1>
}

const App = () => {

    const count = useSelector((state: RootState) => state.user.value);
    const dispatch = useDispatch();
    const [user, setUser] = useState<IUser[]>([
        {
            name: "Rahul",
            age: 36
        },
        {
            name: "Sagar",
            age: 25
        }
    ]);

    const incrementByOne = () => {
        dispatch(increment());
    }

    return (
        <div className="bg-gray-900 p-20 h-screen flex justify-center items-start flex-col">
            <CountHi num={count} />
            <p className="text-gray-400 mt-5 text-lg">
                {count}
            </p>
            <button className="p-4 bg-green-600 rounded-lg font-bold text-white mt-5 hover:bg-gray-600" onClick={incrementByOne}>
                add 👋
            </button>
            <button className="p-4 bg-green-600 rounded-lg font-bold text-white mt-5 hover:bg-gray-600" onClick={()=>dispatch(decrement())}>
                minus 👋
            </button>
        </div>
    )

};

export default App;

