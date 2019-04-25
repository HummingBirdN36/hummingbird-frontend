import React from 'react';

import { Section, Container } from '@components/global';

import FaqItem from '@common/FaqItem';
import ExternalLink from '@common/ExternalLink';

const FAQS = [
  {
    title: 'What is Hummingbird?',
    content: () => (
      <>
        Hummingbird is an online interior decor service that delivers a fast and personalized shopping experience, for your personal space.
        Right now, Hummingbird works by filling out a Decor Profile and a Decorator will handpick pieces to fit your tastes, needs and budget. They will send
        an itemized list with links to purchase right to you.
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
        First, you’ll need to complete a <a href="https://illustrations.design/?ref=producthunt" target="_blank">Decor Profile</a>. This information will help your Decorator understand the items, configurations and styles you’re looking for, as well as your ideal price range. Completing a profile takes about 5-10 minutes. 
        <br/>
       <br/>
        2. Review the items you're sent
       <br/>
       <br/>
        You'll get a time estimate 
        <br/>
        <br/>
        3. Buy what you like
       <br/>
       <br/>
        First, you’ll need to complete a <a href="https://illustrations.design/?ref=producthunt" target="_blank">Decor Profile</a>. This information will help your Decorator understand the items, configurations and styles you’re looking for, as well as your ideal price range. Completing a profile takes about 5-10 minutes. 
        <br/>
        <br/>
        4. Tell us what you think!
       <br/>
       <br/>
        Remember to give us feedback on the items you received. Telling us what you liked, didn’t like and why helps your Decorator know what to send in the future.

      </>
    ),
  },
  {
    title: 'Why is it better?',
    content: () => (
      <>
       The Hummingbird experience is not just curated, it’s truly personalized to your taste, budget and lifestyle. Our Decorators handpick items just for you. 
      <br/>
      <br/>
      We offer decorating for any part of your home.
      <br/>
      <br/>
      Hummingbird makes shopping for your home not just convenient, but effortless. We save you the headache of opening multiple tabs to price compare, multiple trips to the store or the lingering feeling that you are missing something better. Your Decorator will reduce the complex decision of choosing what goes in your home to just a few great selections, all while saving you the time and money. 
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
        Its only 10 bucks!
      </>
    ),
  },
  {
    title: 'What homes can you style?',
    content: () => (
      <>
        We can help style most suburban homes and with a bit more time even your special home can find the perfect pieces for it.
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
