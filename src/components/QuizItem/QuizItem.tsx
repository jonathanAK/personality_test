import React from 'react';
import {Link} from "react-router-dom";
import {Paper} from "@material-ui/core";

interface IProps {
    name: string
    permalink: string
    img:string
}


const QuizItem: React.FC<IProps> = (props) => {
    return (
            <Link to={`/quiz/${props.permalink}`}>
                <div>
                    <Paper>

                        <h3>{props.name}</h3>
                        {
                            props.img&&
                            <img className={"Question-img"} src={`${process.env.PUBLIC_URL}/img/${props.img}`} alt={'Quiz'}/>
                        }

                    </Paper>
                </div>
            </Link>
    )
};

export default QuizItem;
