import React  from 'react';
import { Button } from "./button";

export const Hello = () => {
    return <h3>Hello World!</h3>;
};

export const SuperHello = () => {
    return <Button isTeller={true} text={'Click me!'} />
};

export const Welcome = ({ children }) => {
    return (
        <div className="Hello-world">
            {children}
        </div>
    )
};
