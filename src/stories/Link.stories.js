import Link from "../components/Link";
export default {
    title: "Navigation/Link",
    component: Link,
}
const Template = (args) => <Link {...args}/>;

export const LinkExample = Template.bind({});

LinkExample.args ={
    href: 'https://google.com',
    children: 'Hello',
    noUnderline: false,
}