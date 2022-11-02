import React from 'react';
import styled from 'styled-components/macro';
import { QUERIES } from '../../constants';

const OpinionStory = ({ id, title, author, avatar }) => {
  return (
    <WrapperLink href={`/story/${id}`}>
      <Wrapper>
        <Avatar alt="" src={avatar} />
        <div>
          <AuthorName>{author}</AuthorName>
          <ArticleTitle>{title}</ArticleTitle>
        </div>
      </Wrapper>
    </WrapperLink>
  );
};

const Wrapper = styled.article`
  color: var(--color-gray-900);
  padding-right: 85px;

  @media ${QUERIES.tabletOnly} {
    padding-right: 0px;
  }

`;

const WrapperLink = styled.a`
  flex: 1;

  padding-bottom: 16px;
  padding-top: 16px;

  border-bottom: 1px solid var(--color-gray-300);

  &:first-child {
    padding-top: 0px;
  }

  &:last-child {
    border-bottom: none;
    padding-bottom: 0px;
  }

  @media ${QUERIES.tabletOnly} {
    border-bottom: none;
    padding-top: 0px;
  }

`;

const Avatar = styled.img`
  display: block;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
  position: absolute;
  right: 16px;


  @media ${QUERIES.tabletOnly} {
    position: revert;
    margin-bottom: 8px;
  }

`;

const AuthorName = styled.p`
  font-size: 1.125rem;
  font-weight: var(--font-weight-medium);
  color: var(--color-gray-700);
  margin-bottom: 0px;
`;

const ArticleTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: var(--font-weight-bold);
  line-height: 1.3;
`;

export default OpinionStory;
