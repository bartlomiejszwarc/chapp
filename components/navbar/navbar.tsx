'use client';
import React from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
} from '@nextui-org/react';
import {usePathname} from 'next/navigation';

interface MenuItem {
  name: string;
  icon?: any;
  link?: string;
}
export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const pathname = usePathname();
  const menuItems: MenuItem[] = [
    {name: 'Chats'},
    {name: 'People'},
    {name: 'Invitations'},
    {name: 'Settings'},
    {name: 'Logout'},
  ];

  if (pathname !== '/login' && pathname !== '/signup')
    return (
      <Navbar onMenuOpenChange={setIsMenuOpen} position='static'>
        <NavbarContent>
          <NavbarMenuToggle aria-label={isMenuOpen ? 'Close menu' : 'Open menu'} className='sm:hidden' />
          {/* <NavbarBrand></NavbarBrand> */}
        </NavbarContent>

        <NavbarContent className='hidden sm:flex gap-4' justify='center'>
          <NavbarItem isActive={pathname === '/'}>
            <Link color='foreground' href='/'>
              Chats
            </Link>
          </NavbarItem>
          <NavbarItem isActive={pathname === '/people'}>
            <Link color='foreground' href='/people'>
              People
            </Link>
          </NavbarItem>
          <NavbarItem isActive={pathname === '/invitations'}>
            <Link color='foreground' href='/invitations'>
              Invitations
            </Link>
          </NavbarItem>
          <NavbarItem isActive={pathname === '/settings'}>
            <Link color='foreground' href='/settings'>
              Settings
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify='end'></NavbarContent>
        <NavbarMenu>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={index === 2 ? 'primary' : index === menuItems.length - 1 ? 'danger' : 'foreground'}
                className='w-full'
                href='#'
                size='lg'>
                {item.name}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
    );
}
