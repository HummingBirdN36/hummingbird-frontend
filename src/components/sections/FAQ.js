import React from 'react';
import styled from 'styled-components';
import { Section, Container } from '@components/global';

import FaqItem from '@common/FaqItem';
import ExternalLink from '@common/ExternalLink';

const LinkStyle = styled.a`
  color: #0c0a3e;
  text-decoration: none;
  transition: 0.5s;

  &:hover{
    text-decoration:underline;
  }
`;

const FAQS = [
  {
    title: 'What is Hummingbird?',
    content: () => (
      <>
        Hummingbird is an online interior decor service that delivers a fast and personalized shopping experience for your home.
        <br/> <br/>
        To use Hummingbird, fill out a <LinkStyle href="https://tolu6.typeform.com/to/CAZzBm" target="_blank"> Decor Profile </LinkStyle> and we will handpick pieces to fit your tastes, needs and budget. Then we send
        an itemized list, summary and links to purchase the items right to you.
      </>
    ),
  },
  {
    title: 'How does it work?',
    content: () => (
      <>
       1. Fill out a Decor Profile
       <br/>
       <br/>
        First, you’ll need to complete a <LinkStyle href="https://tolu6.typeform.com/to/CAZzBm" target="_blank">Decor Profile </LinkStyle>. This information will help us understand the items, configurations and styles you’re looking for, as well as your ideal price range. Completing a profile takes about 5-10 minutes. 
        <br/>
       <br/>
        2. Review the items you're sent
       <br/>
       <br/>
        We'll send over an itemized list (with links where to buy them) of 3-5 items in each category you've selected. We'll revise the list up to 2 times at no extra cost to you.
        <br/>
        <br/>
        3. Buy what you like
       <br/>
       <br/>
        From the list, buy and ship the items you want to your home. 
        <br/>
        <br/>
        4. Tell us what you think!
       <br/>
       <br/>
        Remember to give us feedback on the items you bought. Telling us what you liked, didn’t like and why helps us know how best to serve you in the future.

      </>
    ),
  },
  {
    title: 'Why is it better?',
    content: () => (
      <>
       The Hummingbird experience is not just curated, it’s truly personalized to your taste, budget and lifestyle. 
      <br/>
      <br/>
      We offer decorating for any part of your home and handpick items just for you.
      <br/>
      <br/>
      Hummingbird makes shopping for your home not just convenient, but effortless. We save you the headache of opening multiple tabs to price compare, multiple trips to the store or the lingering feeling that you are missing something better. 
      
      <br/>
      <br/>
      We reduce the complex decision of choosing what goes in your home to just a few great selections, all while saving you the time and money. 
      <br/>
      <br/>
      We don't ship items for you just yet, but you bet we're working on it!
      </>
    ),
  },
  {
    title: 'How much does it cost?',
    content: () => (
      <>
        Its only $19.99!
      </>
    ),
  },
  {
    title: 'What homes can you style?',
    content: () => (
      <>
        We can style most suburban homes and the spaces within them. But with a bit more time we can find the perfect pieces for your special home.
      </>
    ),
  },
];

const Faq = () => (
  <Section id="faq">
    <Container>
      <h1 style={{ marginBottom: 40 }}>Frequently Asked Questions</h1>
      <div>
        {FAQS.map(({ title, content }) => (
          <FaqItem title={title} key={title}>
            {content()}
          </FaqItem>
        ))}
      </div>
    </Container>
  </Section>
);

export default Faq;
