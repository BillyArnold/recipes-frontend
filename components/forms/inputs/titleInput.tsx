'use client';

import { useEffect, useState } from "react";

interface TitleInputProps {
    title?: string
}
export default function TitleInput({ title }: TitleInputProps) {
    const [inputValue, setInputValue] = useState(title);
    const [debouncedValue, setDebouncedValue] = useState(title);

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedValue(inputValue);
        }, 500);
        return () => clearTimeout(timer);
    }, [inputValue]);

    useEffect(() => {
        if (debouncedValue) {
            //update title
           console.log("debouncedValue", debouncedValue); 
        }
    }, [debouncedValue]);
    return (
        <input
            className="text-5xl text-white bg-transparent font-bold border-0"
            placeholder="Recipe Name"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
        />
    );
}