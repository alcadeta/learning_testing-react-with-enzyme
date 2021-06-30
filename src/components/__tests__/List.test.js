import React from "react";
import { mount } from "../../enzyme";
import List from "../List";

describe("List tests", () => {
    it("renders list-items", () => {
        const items = ["one", "two", "three"];
        const wrapper = mount(<List items={items} />);

        console.log(wrapper.debug());

        // expect the wrapper object to be defined
        expect(wrapper.find(".list-items")).toBeDefined();
        expect(wrapper.find(".item")).toHaveLength(items.length);
    });

    it("renders a list item", () => {
        const items = ["foo", "bar"];
        const wrapper = mount(<List items={items} />);

        // expect an element to exist in the component
        expect(wrapper.contains(<li key="foo" className="item">foo</li>)).toBeTruthy();
    });

    it("renders correct text in item", () => {
        const items = ["John", "James", "Luke"];
        const wrapper = mount(<List items={items} />);

        // expect the child of the first item to be an array
        expect(wrapper.find(".item").get(0).props.children).toEqual("John");
    });
});
