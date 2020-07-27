import React from "react";
import { Menu, Container, Button } from "semantic-ui-react";

interface IProps {
  openCreateForm: () => void;
}
export const NavBar: React.FC<IProps> = ({
  openCreateForm
}) => {
  return (
    <Menu fixed="top" inverted>
      <Container>
        <Menu.Item>
            <img src='/assets/logo.png' alt='logo' style={{marginRight: '10px'}}></img>
            Reactivities
        </Menu.Item>
        <Menu.Item name="messages" />
        <Menu.Item>
            <Button onClick={openCreateForm} positive content='Create Activity'></Button>
        </Menu.Item>
      </Container>
    </Menu>
  );
};
