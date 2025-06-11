import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Hero = styled.section`
  /* background: linear-gradient(
    135deg,
    var(--primary-color) 0%,
    var(--secondary-color) 100%
  ); */
  background-color: white;
  color: white;
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><defs><pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse"><path d="M 50 0 L 0 0 0 50" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="1"/></pattern></defs><rect width="100%" height="100%" fill="url(%23grid)"/></svg>');
    opacity: 0.3;
  }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const HighlightSVG = styled.img`
  position: absolute;
  top: 0; /* Adjust as needed */
  right: 0; /* Adjust as needed */
  width: 65%; /* Adjust size to cover the title */
  max-width: 600px; /* Max width to match title line length */
  height: auto;
  z-index: -1;
  opacity: 0;
  animation: highlightDraw 2s ease-out forwards;

  @keyframes highlightDraw {
    0% {
      clip-path: inset(0 100% 0 0);
      opacity: 0;
    }
    10% {
      opacity: 1;
    }
    100% {
      clip-path: inset(0 0% 0 0);
      opacity: 1;
    }
  }

  @media (max-width: 900px) {
    display: none;
  }
`;

const Title = styled.h1`
  color: black;
  font-size: 4rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  line-height: 1.1;
`;

const Subtitle = styled.p`
  color: black;
  font-size: 1.25rem;
  font-weight: 400;
  margin-bottom: 3rem;
  opacity: 0.9;
  line-height: 1.6;
`;

const CTAButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: white;
  color: var(--primary-color);
  padding: 1rem 2rem;
  border-radius: 0.75rem;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  box-shadow: var(--shadow-lg);

  &:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-xl);
  }
`;

const ScrollButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: black;
  color: white;
  padding: 1rem 2rem;
  border-radius: 0.75rem;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  box-shadow: var(--shadow-lg);

  &:hover {
    background-color: rgba(0, 0, 0, 0.9);
    transform: translateY(-2px);
    box-shadow: var(--shadow-xl);
  }
`;

const ScrollIndicator = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  color: white;
  opacity: 0.7;
  animation: bounce 2s infinite;

  @keyframes bounce {
    0%,
    20%,
    50%,
    80%,
    100% {
      transform: translateX(-50%) translateY(0);
    }
    40% {
      transform: translateX(-50%) translateY(-10px);
    }
    60% {
      transform: translateX(-50%) translateY(-5px);
    }
  }
`;

const FloatingImage = styled.img`
  position: absolute;
  width: 180px;
  height: auto;
  border-radius: 0.5rem;
  box-shadow: var(--shadow-lg);
  opacity: 0.95;
  transition: transform 0.5s ease-out;
  z-index: 1;

  /* &:hover {
    transform: scale(1.1) !important;
    opacity: 1;
    z-index: 10;
    animation-play-state: paused;
  } */

  &:nth-child(1) {
    top: 10%;
    left: 8%;
    width: 180px;
    animation: float1 10s infinite ease-in-out;
  }
  &:nth-child(2) {
    top: 5%;
    right: 12%;
    width: 220px;
    animation: float2 12s infinite ease-in-out;
  }
  &:nth-child(3) {
    bottom: 25%;
    left: 15%;
    width: 190px;
    animation: float3 11s infinite ease-in-out;
  }
  &:nth-child(4) {
    bottom: 15%;
    right: 8%;
    width: 200px;
    animation: float4 9s infinite ease-in-out;
  }
  &:nth-child(5) {
    top: 30%;
    left: 28%;
    width: 160px;
    animation: float5 13s infinite ease-in-out;
  }
  &:nth-child(6) {
    top: 20%;
    right: 25%;
    width: 170px;
    animation: float6 10.5s infinite ease-in-out;
  }
  &:nth-child(7) {
    bottom: 5%;
    left: 35%;
    width: 210px;
    animation: float7 11.5s infinite ease-in-out;
  }
  &:nth-child(8) {
    top: 55%;
    right: 30%;
    width: 150px;
    animation: float8 9.5s infinite ease-in-out;
  }

  @keyframes float1 {
    0% {
      transform: translate(0, 0) rotate(0deg);
    }
    33% {
      transform: translate(20px, 10px) rotate(5deg);
    }
    66% {
      transform: translate(-10px, 20px) rotate(-3deg);
    }
    100% {
      transform: translate(0, 0) rotate(0deg);
    }
  }
  @keyframes float2 {
    0% {
      transform: translate(0, 0) rotate(0deg);
    }
    33% {
      transform: translate(-15px, 25px) rotate(-7deg);
    }
    66% {
      transform: translate(10px, -15px) rotate(4deg);
    }
    100% {
      transform: translate(0, 0) rotate(0deg);
    }
  }
  @keyframes float3 {
    0% {
      transform: translate(0, 0) rotate(0deg);
    }
    33% {
      transform: translate(10px, -10px) rotate(3deg);
    }
    66% {
      transform: translate(-20px, -5px) rotate(-5deg);
    }
    100% {
      transform: translate(0, 0) rotate(0deg);
    }
  }
  @keyframes float4 {
    0% {
      transform: translate(0, 0) rotate(0deg);
    }
    33% {
      transform: translate(-5px, 15px) rotate(2deg);
    }
    66% {
      transform: translate(15px, -10px) rotate(-4deg);
    }
    100% {
      transform: translate(0, 0) rotate(0deg);
    }
  }
  @keyframes float5 {
    0% {
      transform: translate(0, 0) rotate(0deg);
    }
    33% {
      transform: translate(25px, -5px) rotate(6deg);
    }
    66% {
      transform: translate(-10px, 15px) rotate(-2deg);
    }
    100% {
      transform: translate(0, 0) rotate(0deg);
    }
  }
  @keyframes float6 {
    0% {
      transform: translate(0, 0) rotate(0deg);
    }
    33% {
      transform: translate(10px, 20px) rotate(-3deg);
    }
    66% {
      transform: translate(-5px, -10px) rotate(5deg);
    }
    100% {
      transform: translate(0, 0) rotate(0deg);
    }
  }
  @keyframes float7 {
    0% {
      transform: translate(0, 0) rotate(0deg);
    }
    33% {
      transform: translate(-20px, 10px) rotate(4deg);
    }
    66% {
      transform: translate(10px, -20px) rotate(-6deg);
    }
    100% {
      transform: translate(0, 0) rotate(0deg);
    }
  }
  @keyframes float8 {
    0% {
      transform: translate(0, 0) rotate(0deg);
    }
    33% {
      transform: translate(15px, -15px) rotate(-2deg);
    }
    66% {
      transform: translate(-5px, 5px) rotate(3deg);
    }
    100% {
      transform: translate(0, 0) rotate(0deg);
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

interface SectionProps {
  $bgColor?: string;
}

const Section = styled.section<SectionProps>`
  padding: 6rem 0;
  background-color: ${(props) => props.$bgColor || "transparent"};
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 1rem;
`;

const SectionSubtitle = styled.p`
  font-size: 1.125rem;
  color: var(--text-secondary);
  max-width: 600px;
  margin: 0 auto;
`;

const TwoColumn = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  margin-top: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const ContentBlock = styled.div`
  h3 {
    font-size: 1.875rem;
    font-weight: 600;
    margin-bottom: 1.5rem;
    color: var(--text-primary);
  }

  p {
    font-size: 1.125rem;
    color: var(--text-secondary);
    line-height: 1.7;
    margin-bottom: 1.5rem;
  }
`;

const FeatureList = styled.ul`
  list-style: none;
  margin-top: 1.5rem;

  li {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-bottom: 0.75rem;
    color: var(--text-secondary);

    &::before {
      content: "✓";
      background: var(--accent-color);
      color: white;
      width: 1.25rem;
      height: 1.25rem;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.75rem;
      font-weight: bold;
    }
  }
`;

const ImagePlaceholder = styled.div`
  background: var(--bg-accent);
  border: 2px dashed var(--border-color);
  border-radius: 1rem;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-light);
  font-size: 1.125rem;
  font-weight: 500;
`;

const ImagePlaceholderLarge = styled.div`
  background: var(--bg-accent);
  border: 2px dashed var(--border-color);
  border-radius: 1rem;
  height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-light);
  font-size: 1.125rem;
  font-weight: 500;
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  background: var(--bg-primary);
  border: 1px solid var(--border-color);
  border-radius: 1rem;
  padding: 2rem;
  transition: all 0.3s ease;
  box-shadow: var(--shadow-sm);

  &:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-lg);
    border-color: var(--accent-color);
  }
`;

const CardIcon = styled.div`
  width: 3rem;
  height: 3rem;
  background: var(--accent-color);
  border-radius: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  color: white;
  font-size: 1.5rem;
`;

const CardTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: var(--text-primary);
`;

const CardText = styled.p`
  color: var(--text-secondary);
  line-height: 1.6;
`;

const StepsContainer = styled.div`
  position: relative;
  margin-top: 3rem;
`;

const StepItem = styled.div`
  display: flex;
  gap: 2rem;
  margin-bottom: 3rem;
  align-items: flex-start;
`;

const StepNumber = styled.div`
  background: var(--primary-color);
  color: white;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1.125rem;
  flex-shrink: 0;
`;

const StepContent = styled.div`
  h4 {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
    color: var(--text-primary);
  }

  p {
    color: var(--text-secondary);
    line-height: 1.6;
  }
`;

const Home: React.FC = () => {
  return (
    <>
      <Hero>
        <Container>
          <HeroContent>
            <HighlightSVG src="/imgs/highlight.svg" alt="Highlight" />
            <Title className="ginto">
              Where Stories Bind
              <br />
              and Memories Live.
            </Title>
            <Subtitle>
              Bind transforms the traditional publishing process <br />
              by shifting focus from single-author narratives to shared memory
              storytelling.
            </Subtitle>
            <ScrollButton href="#intro">
              Discover How It Works
              <span>→</span>
            </ScrollButton>
          </HeroContent>
        </Container>
        <FloatingImage src="/imgs/home1.jpg" alt="Floating Image 1" />
        <FloatingImage src="/imgs/home2.jpg" alt="Floating Image 2" />
        <FloatingImage src="/imgs/home3.jpg" alt="Floating Image 3" />
        <FloatingImage src="/imgs/home4.jpg" alt="Floating Image 4" />
        <FloatingImage src="/imgs/home1.jpg" alt="Floating Image 5" />
        <FloatingImage src="/imgs/home3.jpg" alt="Floating Image 6" />
        <FloatingImage src="/imgs/home4.jpg" alt="Floating Image 7" />
        <FloatingImage src="/imgs/home1.jpg" alt="Floating Image 8" />
        <ScrollIndicator>
          <span>↓</span>
        </ScrollIndicator>
      </Hero>

      <Section id="intro">
        <Container>
          <SectionHeader>
            <SectionTitle>What is Bind?</SectionTitle>
            <SectionSubtitle>
              Bind transforms the traditional publishing process by shifting
              focus from single-author narratives to shared memory storytelling.
            </SectionSubtitle>
          </SectionHeader>

          <TwoColumn>
            <ContentBlock>
              <h3>Remembering Together</h3>
              <p>
                Through conversational data, photos, and emotional fragments,
                Bind helps groups reflect on a year of their collaborative
                memories.
              </p>
              <FeatureList>
                <li>
                  Shared memories become the foundation, not a single author's
                  voice
                </li>
                <li>
                  Each book is a one-year time capsule, co-written by those who
                  lived through it
                </li>
                <li>
                  AI helps structure stories, but the tone stays deeply personal
                </li>
                <li>
                  Participants receive a beautifully made, emotionally rich book
                  that feels truly theirs
                </li>
              </FeatureList>
            </ContentBlock>
            <ImagePlaceholder>Platform Interface Preview</ImagePlaceholder>
          </TwoColumn>

          <CardGrid>
            <Card>
              <CardIcon>📚</CardIcon>
              <CardTitle>Multi-perspective Collection</CardTitle>
              <CardText>
                Bind supports guided memory collection from multiple
                participants through structured interviews designed by the
                binder.
              </CardText>
            </Card>
            <Card>
              <CardIcon>🤖</CardIcon>
              <CardTitle>Organizing Narrative with AI</CardTitle>
              <CardText>
                An AI system helps organize, group, and structure raw memory
                fragments with a consistent tone.
              </CardText>
            </Card>
            <Card>
              <CardIcon>🎯</CardIcon>
              <CardTitle>Design Tailored for Memory</CardTitle>
              <CardText>
                Through design choices in tone and visuals, each book is
                tailored to the emotional truth of its contributors.
              </CardText>
            </Card>
          </CardGrid>
        </Container>
      </Section>

      <Section $bgColor="var(--bg-secondary)">
        <Container>
          <SectionHeader>
            <SectionTitle>Who Can Use Bind?</SectionTitle>
            <SectionSubtitle>
              Bind is for those who want to reflect, remember, and reimagine
              their experiences together.
            </SectionSubtitle>
          </SectionHeader>

          <CardGrid>
            <Card>
              <CardIcon>👨‍👩‍👧‍👦</CardIcon>
              <CardTitle>Families</CardTitle>
              <CardText>
                Parents, siblings, and children recalling a year of everyday
                life
              </CardText>
            </Card>
            <Card>
              <CardIcon>🎉</CardIcon>
              <CardTitle>Friend Groups</CardTitle>
              <CardText>
                Turning everyday photos and jokes into a meaningful record
              </CardText>
            </Card>
            <Card>
              <CardIcon>🎓</CardIcon>
              <CardTitle>School Colleagues</CardTitle>
              <CardText>
                Commemorating a shared journey of school life or graduation
              </CardText>
            </Card>
            <Card>
              <CardIcon>🎸</CardIcon>
              <CardTitle>Student Clubs</CardTitle>
              <CardText>
                Bandmates or project teams preserving behind-the-scenes emotions
              </CardText>
            </Card>
          </CardGrid>

          <TwoColumn style={{ marginTop: "4rem" }}>
            <ImagePlaceholder>Diagram</ImagePlaceholder>
            <ContentBlock>
              <h3>What is a Binder?</h3>
              <p>
                A Binder is the creative lead of a Bind book project, shaping
                how a book of shared memories takes form.
              </p>
              <FeatureList>
                <li>Composes the overall narrative flow</li>
                <li>Designs the user interview structure</li>
                <li>Directs AI in real time based on input</li>
                <li>Curates the content & Shapes final tone</li>
              </FeatureList>
            </ContentBlock>
          </TwoColumn>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeader>
            <SectionTitle>How Bind Works</SectionTitle>
            <SectionSubtitle>
              Bind turns memory into a collaborative book through structured
              dialogue, AI-assisted writing, and personalized curation.
            </SectionSubtitle>
          </SectionHeader>

          <StepsContainer>
            <StepItem>
              <StepNumber>1</StepNumber>
              <StepContent>
                <h4>Choose Your Binder</h4>
                <p>
                  Pick a Binder who fits your group's vibe, based on the
                  portfolio & autobiography. They will shape the structure,
                  tone, and the visual design of the book.
                </p>
              </StepContent>
            </StepItem>

            <StepItem>
              <StepNumber>2</StepNumber>
              <StepContent>
                <h4>1st Interaction</h4>
                <p>
                  The main customer works as an initiator, and goes through a
                  simple conversation with the Binder. Overall needs and
                  intentions are shared for the Binder to design structures of
                  next steps
                </p>
              </StepContent>
            </StepItem>

            <StepItem>
              <StepNumber>3</StepNumber>
              <StepContent>
                <h4>2nd Interaction</h4>
                <p>
                  Each participant answers guided questions through a chat.
                  Stories, emotional fragments and photos are collected, helping
                  AI and the Binder understand your shared year.
                </p>
              </StepContent>
            </StepItem>

            <StepItem>
              <StepNumber>4</StepNumber>
              <StepContent>
                <h4>3rd Interaction</h4>
                <p>
                  Binder and AI collaborate to turn memories into complete
                  chapters. Binders monitor the entire process, directing the
                  tone, structure, and content.
                </p>
              </StepContent>
            </StepItem>

            <StepItem>
              <StepNumber>5</StepNumber>
              <StepContent>
                <h4>Receive Your Book</h4>
                <p>
                  After correction, layout formatting, and book design,
                  participants receive a beautifully printed, memory-rich book
                  truly of their own.
                </p>
              </StepContent>
            </StepItem>
          </StepsContainer>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeader>
            <SectionTitle>System Workflow</SectionTitle>
            <SectionSubtitle>
              From Shared Voices to a Singular Book
            </SectionSubtitle>
          </SectionHeader>
          <p>
            <ImagePlaceholderLarge>System Flow Diagram I</ImagePlaceholderLarge>
          </p>
          <p>
            <ImagePlaceholderLarge>
              System Flow Diagram II
            </ImagePlaceholderLarge>
          </p>
          <p>
            <ImagePlaceholderLarge>
              System Flow Diagram III
            </ImagePlaceholderLarge>
          </p>
        </Container>
      </Section>
    </>
  );
};

export default Home;
