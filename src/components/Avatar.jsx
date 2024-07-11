import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {changeImage, changeName} from "../actions/userAction.js";

const Avatar = ({size}) => {
    const user = useSelector(store => store.user);
    const dispatch = useDispatch();

    const handleClickName = (e) => {
        e.preventDefault();
        const newName = prompt("Enter new name");
        dispatch(changeName(newName));
    }
    const handleClickImage = () => {
        const newUrl = prompt("Enter new url");
       dispatch(changeImage(newUrl));
    }
    return (
        <img onContextMenu={handleClickName}
             onClick={handleClickImage}
             className={`user-avatar ${size ?? ""}`}
             src={user.image} alt={'avatar'}/>
    );
};

export default Avatar;