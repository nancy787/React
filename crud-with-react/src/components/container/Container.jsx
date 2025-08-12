import React from "react";

export default function Container({children}) {
    return (
            <div className="container mx-auto px-4 bg-green-300 w-full
            min-h-screen">
                <h1 className="text-5xl underline-offset-4 text-red-400
                py-3 text-center">Crud with React</h1>
                <div className="bg-white mx-0.5 text-center">
                    {children}
                </div>
            </div>
    )
}