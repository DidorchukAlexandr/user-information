import React from "react";
import { MainConteiner } from "./Container.styled";

type ContainerProps = {
    children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
    return (
        <MainConteiner>{children}</MainConteiner>
    )
};
export default Container;