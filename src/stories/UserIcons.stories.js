import { RoundedIcon, SquareIcon } from "../components/UserIcons"
export default {
    title: "UserIcons",
    component: {RoundedIcon, SquareIcon},
}

export const RoundedIconExample = (args) => <RoundedIcon {...args}/>;

RoundedIconExample.args ={
    imageUrl: "https://picsum.photos/seed/picsum/200/200",
    size: 3,
};

export const SquareIconExample = (args) => <SquareIcon {...args}/>;

SquareIconExample.args ={
    imageUrl: "https://picsum.photos/seed/picsum/200/200",
    size: 3,
};