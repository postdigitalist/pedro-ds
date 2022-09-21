import Dropdown from "../components/Dropdown";

export default{
    title: 'Navigation/Dropdown',
    component: Dropdown,
}

export const DropdownExample = () =>   (<Dropdown
title={"My Options"}
options={[
  { title: "Home", url: "https://google.com" },
  { title: "Hello, good morning", url: "https://facebook.com" },
  { title: "Goodbye dude", url: "https://quora.com" },
]}
/>);