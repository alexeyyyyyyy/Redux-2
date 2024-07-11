export const CHANGE_NAME = "CHANGE_NAME";
export const CHANGE_IMAGE = "CHANGE_IMAGE";

export const changeName = (name) => {
    return{
    type: CHANGE_NAME,
    payload: name
}
}

export const changeImage = (image) => ({
    type: CHANGE_IMAGE,
    payload: image
})