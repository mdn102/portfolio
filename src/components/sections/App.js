import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from '../pages/sections/home'
import Profile from '../pages/sections/profile'
import Skill from '../pages/sections/skill'
import Projects from '../pages/sections/projects'
import Blog from '../pages/sections/blog'
import Contact from '../pages/sections/contact'
import Footer from '../pages/sections/footer'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

const links = [
  { href: '/', text: 'Home' },
  { href: 'profile', text: 'Profile' },
  { href: 'skill', text: 'Skill' },
  { href: 'project', text: 'Project' },
  { href: 'blog', text: 'Blog' },
  { href: 'contact', text: 'Contact' },
];

const createNavItem = ({ href, text }) => (
  <NavItem key={text}>
    <NavLink href={href} style={{ fontSize: 20, color: 'auto', textAlign: 'center', padding: 20 }}>{text}</NavLink>
  </NavItem>
);



class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {


    return (
      <div>
        <Navbar className="text-info" color="auto" style={{ backgroundColor: 'black', padding: '10px' }} expand="lg">
          <NavbarBrand href="/"><img className='logo' style={{ width: 70, height: 70 }} alt='' src='https://res.cloudinary.com/djhte2ard/image/upload/c_thumb,w_200,g_face/v1603238705/logo_tfsahk.png'></img></NavbarBrand>
          <NavbarToggler className='navbar-dark' onClick={this.toggle} style={{ backgroundColor: 'black', outlineStyle: 'none', border: 'white .5px solid' }} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav style={{ backgroundColor: 'black' }}
              className="ml-auto" navbar>
              {links.map(createNavItem)}
            </Nav>
          </Collapse>
        </Navbar>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
            <Route path="/skill">
              <Skill />
            </Route>
            <Route path="/projects">
              <Projects />
            </Route>
            <Route path="/blog">
              <Blog />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
          </Switch>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App


