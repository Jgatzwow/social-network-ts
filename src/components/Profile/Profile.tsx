import React from "react";
import {MyPosts} from "./MyPosts/MyPosts";


export const Profile = () => {
    return (
        <div>
            <div>
                <img
                    src="https://www.hollywoodreporter.com/wp-content/uploads/2019/03/avatar-publicity_still-h_2019.jpg?w=1024"
                    alt=""/>
            </div>
            <div>
                description
            </div>
           <MyPosts/>
        </div>
    )
}