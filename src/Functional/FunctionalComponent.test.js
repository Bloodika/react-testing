import FunctionalComponent, {getNextPicture} from './FunctionalComponent';
import React from "react";
import axios from "axios";
import {Provider} from "react-redux";
import store from "../Redux/store";
import {mount} from "enzyme";

jest.mock("axios");

test('Test if image is rendered', async () => {
    //render the whole component
    const functionalComponent = mount(<Provider store={store}><FunctionalComponent/></Provider>);
    //Mock axios
    axios.get.mockResolvedValueOnce({data: {file: "https://hu.depositphotos.com/vector-images/panda.html"}});
    //Check before whether it's empty or not
    expect(functionalComponent.find("img").prop("src")).toBe("");
    //Call the function
    await getNextPicture(store.dispatch);
    //After dispatch, update the component
    functionalComponent.update();
    //Check whether it's changed
    expect(functionalComponent.find("img").prop("src")).toContain("panda.html");
});
