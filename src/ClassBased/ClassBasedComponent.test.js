import {mount} from "enzyme";
import axios from "axios";
import React from "react";
import ClassBasedComponent from "./ClassBasedComponent";

jest.mock("axios");

test('Test if image is rendered', async () => {
    //render the whole component
    const classBasedComponent = mount(<ClassBasedComponent/>);
    //Mock axios
    axios.get.mockResolvedValueOnce({data: {file: "https://hu.depositphotos.com/vector-images/panda.html"}});
    //Check before whether it's empty or not
    expect(classBasedComponent.find("img").prop("src")).toBe("");
    //Call the function
    await classBasedComponent.instance().getNextPicture();
    //After dispatch, update the component
    classBasedComponent.update();
    //Check whether it's changed
    expect(classBasedComponent.find("img").prop("src")).toContain("panda.html");
});
