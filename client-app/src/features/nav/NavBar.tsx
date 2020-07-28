import React, { useContext } from "react";
import { Menu, Container, Button } from "semantic-ui-react";
import ActivityStore from '../../app/stores/activityStore';
import { observer } from "mobx-react-lite";
export const NavBar: React.FC = () => {
  const activityStore = useContext(ActivityStore);
  const {openCreateForm} = activityStore;
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

export default observer(NavBar);
