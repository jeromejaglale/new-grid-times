import React from 'react';
import styled from 'styled-components/macro';
import { Menu, Search, User } from 'react-feather';

import { QUERIES } from '../../constants';

import MaxWidthWrapper from '../MaxWidthWrapper';
import Logo from '../Logo';
import Button from '../Button';

const Header = () => {
  return (
    <header>
      <SuperHeader>
        <Row>
          <ActionGroup>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </ActionGroup>
          <ActionGroup>
            <button>
              <User size={24} />
            </button>
          </ActionGroup>
        </Row>
      </SuperHeader>
      <MainHeader>
        <Logo />
      </MainHeader>


      <HeaderDesktop>

        <HeaderNavLeft>
          <button>
            <Search size={24} />
          </button>
          <button>
            <Menu size={24} />
          </button>
        </HeaderNavLeft>

        <Logo />

        <ActionGroup2>
          <SubscribeButton>
            Subscribe
          </SubscribeButton>
          <SubscribeLink>
            Already a subscriber?
          </SubscribeLink>
        </ActionGroup2>

      </HeaderDesktop>
    </header>
  );
};

const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;

  @media ${QUERIES.desktopAndUp} {
    display: none;
  }

`;

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;


  @media ${QUERIES.desktopAndUp} {
    displayf: none;
  }

  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
  svg {
    display: block;
  }
`;

const ActionGroup2 = styled.div`
  display: revert;
  justify-self: right;
  @media ${QUERIES.desktopAndUp} {
    displayf: block;
  }

`;

const MainHeader = styled(MaxWidthWrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 48px;

  @media ${QUERIES.desktopAndUp} {
    display: none;
  }

`;

const HeaderDesktop = styled(MaxWidthWrapper)`
  display: none;

  margin-top: 32px;
  margin-bottom: 48px;

  display: none;

  @media ${QUERIES.desktopAndUp} {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const HeaderNavLeft = styled(ActionGroup)`
  justify-self: start;
`;

const SubscribeButton = styled(Button)`
  height: 3rem;
`

const SubscribeLink = styled.a`
  text-decoration: underline;
  font-style: italic;
  font-size: 0.875rem;
  display: block;
  text-align: center;
  margin-top: 5px;
`


export default Header;
