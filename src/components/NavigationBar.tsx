import { Container, Menu, Icon, Image } from "semantic-ui-react";
import { NavLink, useLocation } from "react-router-dom";
import MySkyButton from "./MySkyButton";
import MessageDisplay from "./MessageDisplay";

type NavMenuItemType = {
  title: string;
  route: string;
  currentRoute: string;
};

const NavMenuItem = ({ title, route, currentRoute }: NavMenuItemType) => {
  const active = currentRoute === `/${route}`;
  return (
    <Menu.Item as={active ? null : NavLink} to={route} active={active}>
      {title}
    </Menu.Item>
  );
};

const NavigationBar = () => {
  const location = useLocation();

  return (
    <Container>
      <Menu fixed="top" inverted>
        <Container>
          <Menu.Item header>
            <Icon circular inverted color="teal" name="gem" />
            Very Cool Skapp
          </Menu.Item>
          <NavMenuItem
            title="Home"
            route="home"
            currentRoute={location.pathname}
          />
          <NavMenuItem
            title="Todo"
            route="todo"
            currentRoute={location.pathname}
          />
          <NavMenuItem
            title="Upload"
            route="upload"
            currentRoute={location.pathname}
          />
          <NavMenuItem
            title="Deploy"
            route="deploy"
            currentRoute={location.pathname}
          />
          <NavMenuItem
            title="Profile"
            route="profile"
            currentRoute={location.pathname}
          />
          <Menu.Menu position="right">
            <Menu.Item>
              <MySkyButton />
            </Menu.Item>
          </Menu.Menu>
          <Menu.Item>
            <Image
              as="a"
              src="https://img.shields.io/badge/Skynet-Add%20To%20Homescreen-00c65e?logo=skynet&labelColor=0d0d0d"
              href="https://homescreen.hns.siasky.net/#/skylink/AQBGXteYgqc--AOyYTwxIjcXNizbefrm2F7VEuzvQlvZIg"
            />
          </Menu.Item>
        </Container>
        <MessageDisplay />
      </Menu>
    </Container>
  );
};

export default NavigationBar;
