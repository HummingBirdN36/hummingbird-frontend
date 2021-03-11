import React from 'react';
import styled from 'styled-components';
import { Section, Container } from '@components/global';

import FaqItem from '@common/FaqItem';
import ExternalLink from '@common/ExternalLink';

const LinkStyle = styled.a`
  color: #5762d5;
  text-decoration: none;
  transition: 0.5s;

  &:hover{
    text-decoration:underline;
  }
`;

const FAQS = [
  {
    title: 'What is Homeboard?',
    content: () => (
      <>
        Homeboard is a new way to discover and buy home decor products through intuitive easy  to create moodboards. Imagine Pinterest and Tinder had a baby.
        <br/> <br/>
        We're not live yet, but we will be soon! If the idea of a free moodboard sounds good to you,<LinkStyle href="https://tolu6.typeform.com/to/CAZzBm" target="_blank"> <b>join the waitlist!</b> </LinkStyle> 
      </>
    ),
  },
  {
    title: 'How does it work?',
    content: () => (
      <>
      Its crazy simple! First you <LinkStyle href="https://tolu6.typeform.com/to/CAZzBm" target="_blank"> <b>join the waitlist!</b> </LinkStyle> Then when we're live you can create beautiful moodbaords, swipe on real products from real retailers and see all the best reviews. That's it.

      </>
    ),
  },
  {
    title: 'Why is it better?',
    content: () => (
      <>
       The Homeboard experience is not just curated, it’s truly personalized to your taste, budget and lifestyle. 
      <br/>
      <br/>
      We offer products from retailers all across the internet for any part of your home.
      <br/>
      <br/>
      Homeboard makes shopping for your home not just convenient, but effortless. We save you the headache of opening multiple tabs to price compare, multiple trips to the store or the lingering feeling that you are missing something better. 
      <br/>
      <br/>
      We reduce the complex decision of choosing what goes in your home to just a few great selections, all while saving you the time and money. 
      <br/>
      </>
    ),
  },
  {
    title: 'How much does it cost?',
    content: () => (
      <>
        Its a free app duh!
      </>
    ),
  },
  {
    title:'I have questions about Homeboard,who can I contact?',
    content: () => (
      <>
      If you've got questions feel free to direct them to tolu@homeboard.com      </>
    ),
  }
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
