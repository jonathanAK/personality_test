import React from 'react';

interface IProps {
    name: string
    permalink: string
}


const QuizItem: React.FC<IProps> = (name,permalink) => {
    return (
        <div>
            <h4>{name}</h4>
        </div>
    )
};

export default QuizItem;
