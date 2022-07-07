import {useDispatch, useSelector} from "react-redux";
import {getNextCat} from "../Util/api";
import {setCatPic} from "../Redux/reducer";

export const getNextPicture = (dispatch) => {
    getNextCat().then(res => {
        dispatch(setCatPic(res.data.file))
    }).catch(err => console.log(`error: ${err}`))
}

const FunctionalComponent = () => {
    const catPicture = useSelector(state => state.cat.picture);
    const dispatch = useDispatch();

    return (
        <>
            <img src={catPicture} alt={"kitty"}/>
            <button onClick={() => getNextPicture(dispatch)}>Next</button>
        </>
    );
}

export default FunctionalComponent;
