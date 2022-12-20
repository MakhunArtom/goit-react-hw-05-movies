import { Header, Nav, NavLinks } from './AppBar.styled';

const navItems = [
  { href: '/', text: 'Home' },
  { href: 'movies', text: 'Movies'},
];

export const AppBar = () => {
  return (
    <Header>
      <Nav>
        {navItems.map(({ href, text }) => (
          <NavLinks to={href} key={href}>
            
            {text}
          </NavLinks>
        ))}
      </Nav>
    </Header>
  );
};
