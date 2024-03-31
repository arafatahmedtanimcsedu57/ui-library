import Nav from "../../Nav";
import Navbar from "../Navbar";
import Avatar from "../../Avatar";

import "../styles/index.less";
import "../../Avatar/styles/index.less";
import Logo from "../../../assets/bdris-logo.svg";

export default {
  title: "Navigation/Navbar",
  component: Navbar,
};

export const Default = () => {
  return (
    <Navbar style={{ borderBottom: "1px solid #EAECF0" }}>
      <Navbar.Brand role="button">
        <img src={Logo} alt="brand" />
      </Navbar.Brand>
      <Nav>
        <Nav.Item active eventKey="1">
          হোম
        </Nav.Item>
        <Nav.Menu eventKey="2" title="জন্মনিবন্ধন ">
          <Nav.Item>About company</Nav.Item>
          <Nav.Item>Contact us</Nav.Item>
        </Nav.Menu>
        <Nav.Menu eventKey="3" title="মৃত্যুনিবন্ধন">
          <Nav.Item>About company</Nav.Item>
          <Nav.Item>Contact us</Nav.Item>
        </Nav.Menu>
        <Nav.Item eventKey="4">
          ব্যবহারকারী সংযোজন (ও টি পি প্রাপ্তির পর)
        </Nav.Item>
      </Nav>

      <Nav pullRight>
        <Nav.Item eventKey="5">
          <Avatar
            src="https://avatars.githubusercontent.com/u/6412038"
            circle
          />
        </Nav.Item>
      </Nav>
    </Navbar>
  );
};

export const Inverse = () => {
  return (
    <Navbar appearance="inverse" style={{ borderBottom: "1px solid #EAECF0" }}>
      <Navbar.Brand role="button">
        <img src={Logo} alt="brand" />
      </Navbar.Brand>
      <Nav>
        <Nav.Item active eventKey="1">
          হোম
        </Nav.Item>
        <Nav.Menu eventKey="2" title="জন্মনিবন্ধন ">
          <Nav.Item>About company</Nav.Item>
          <Nav.Item>Contact us</Nav.Item>
        </Nav.Menu>
        <Nav.Menu eventKey="3" title="মৃত্যুনিবন্ধন">
          <Nav.Item>About company</Nav.Item>
          <Nav.Item>Contact us</Nav.Item>
        </Nav.Menu>
        <Nav.Item eventKey="4">
          ব্যবহারকারী সংযোজন (ও টি পি প্রাপ্তির পর)
        </Nav.Item>
      </Nav>

      <Nav pullRight>
        <Nav.Item eventKey="5">
          <Avatar
            src="https://avatars.githubusercontent.com/u/6412038"
            circle
          />
        </Nav.Item>
      </Nav>
    </Navbar>
  );
};

export const Subtle = () => {
  return (
    <Navbar appearance="subtle" style={{ borderBottom: "1px solid #EAECF0" }}>
      <Navbar.Brand role="button">
        <img src={Logo} alt="brand" />
      </Navbar.Brand>
      <Nav>
        <Nav.Item active eventKey="1">
          হোম
        </Nav.Item>
        <Nav.Menu eventKey="2" title="জন্মনিবন্ধন ">
          <Nav.Item>About company</Nav.Item>
          <Nav.Item>Contact us</Nav.Item>
        </Nav.Menu>
        <Nav.Menu eventKey="3" title="মৃত্যুনিবন্ধন">
          <Nav.Item>About company</Nav.Item>
          <Nav.Item>Contact us</Nav.Item>
        </Nav.Menu>
        <Nav.Item eventKey="4">
          ব্যবহারকারী সংযোজন (ও টি পি প্রাপ্তির পর)
        </Nav.Item>
      </Nav>

      <Nav pullRight>
        <Nav.Item eventKey="5">
          <Avatar
            src="https://avatars.githubusercontent.com/u/6412038"
            circle
          />
        </Nav.Item>
      </Nav>
    </Navbar>
  );
};
