import React from "react";
import styled from "styled-components";

const PageHeader = styled.div`
  background: linear-gradient(
    135deg,
    var(--primary-color) 0%,
    var(--secondary-color) 100%
  );
  color: white;
  padding: 8rem 0 4rem;
  text-align: center;
`;

const PageTitle = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;
`;

const PageSubtitle = styled.p`
  font-size: 1.25rem;
  opacity: 0.9;
  max-width: 600px;
  margin: 0 auto;
`;

const Section = styled.section`
  padding: 6rem 0;
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 1rem;
  text-align: center;
`;

const SectionSubtitle = styled.p`
  font-size: 1.125rem;
  color: var(--text-secondary);
  max-width: 600px;
  margin: 0 auto 4rem;
  text-align: center;
`;

const BackgroundSection = styled(Section)`
  background: var(--bg-secondary);
`;

const BackgroundContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const BackgroundText = styled.div`
  h3 {
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: 1.5rem;
  }

  p {
    color: var(--text-secondary);
    line-height: 1.8;
    margin-bottom: 1.5rem;
  }
`;

const BackgroundImage = styled.div`
  background: linear-gradient(
    135deg,
    var(--accent-color) 0%,
    var(--primary-color) 100%
  );
  border-radius: 1rem;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 4rem;
`;

const MissionVision = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  margin-top: 4rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const MissionCard = styled.div`
  background: var(--bg-primary);
  border: 1px solid var(--border-color);
  border-radius: 1rem;
  padding: 3rem;
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-lg);
  }

  h3 {
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: 1.5rem;
  }

  p {
    color: var(--text-secondary);
    line-height: 1.7;
  }
`;

const CardIcon = styled.div`
  width: 4rem;
  height: 4rem;
  background: var(--accent-color);
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 2rem;
  color: white;
  font-size: 2rem;
`;

const PhilosophyGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const PhilosophyCard = styled.div`
  background: var(--bg-primary);
  border: 1px solid var(--border-color);
  border-radius: 1rem;
  padding: 2.5rem;
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-lg);
  }

  h3 {
    font-size: 1.25rem;
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: 1rem;
  }

  p {
    color: var(--text-secondary);
    line-height: 1.6;
  }
`;

const PhilosophyIcon = styled.div`
  width: 3.5rem;
  height: 3.5rem;
  background: var(--accent-color);
  border-radius: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  color: white;
  font-size: 1.75rem;
`;

const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ValueItem = styled.div`
  text-align: center;
  padding: 1.5rem;
`;

const ValueNumber = styled.div`
  width: 3rem;
  height: 3rem;
  background: var(--primary-color);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  font-weight: 600;
  font-size: 1.125rem;
`;

const TeamSection = styled(Section)`
  background: var(--bg-secondary);
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const TeamCard = styled.div`
  background: var(--bg-primary);
  border: 1px solid var(--border-color);
  border-radius: 1rem;
  padding: 2rem;
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-lg);
  }

  h3 {
    font-size: 1.25rem;
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: 0.5rem;
  }

  p {
    color: var(--text-secondary);
    line-height: 1.6;
    font-size: 0.95rem;
  }
`;

const TeamAvatar = styled.div`
  width: 5rem;
  height: 5rem;
  background: linear-gradient(
    135deg,
    var(--accent-color) 0%,
    var(--primary-color) 100%
  );
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  color: white;
  font-size: 2rem;
  font-weight: 600;
`;

const TeamRole = styled.div`
  color: var(--primary-color);
  font-weight: 500;
  margin-bottom: 1rem;
`;

const About = () => {
  return (
    <>
      <PageHeader>
        <PageTitle>About Bind</PageTitle>
        <PageSubtitle>
          Bind reimagines book publishing as a living process of collaborative memory. We believe paper books are not just to be written, but to be lived and remembered together.
        </PageSubtitle>
      </PageHeader>

      <BackgroundSection>
        <Container>
          <SectionTitle>Our Background</SectionTitle>
          <SectionSubtitle>
            The story behind Bind and our mission to transform publishing
          </SectionSubtitle>

          <BackgroundContent>
            <BackgroundText>
              <h3>Our Inspiration</h3>
              <p>
                We began with a question: How will the paper book publishing system change in an age of AI? As AI accelerates the speed of content creation, the act of making a book is no longer a technical challenge, but it’s a curatorial one.
              </p>
              <p>
                In this new landscape, we believe the physical book must evolve. Not as mass-produced media, but as a meaningful, enduring object, something collective, intentional, and premium. A book that holds emotional weight. A book that feels like it should be kept.
              </p>
              <p>
                To find the most natural context for this kind of future book, we turned to yearbooks, which is already a ritual of collective memory. From there, Bind emerged: a system for turning shared experiences into beautifully crafted books, made from many voices, and held with care.
              </p>
            </BackgroundText>
            <BackgroundImage>📚</BackgroundImage>
          </BackgroundContent>

          <MissionVision>
            <MissionCard>
              <CardIcon>🎯</CardIcon>
              <h3>Our Mission</h3>
              <p>
                We transform memory-keeping from individual recollection to collaborative storytelling.
                Through guided conversations, Bind captures not just events, but shared emotions and perspectives.
                Memories are interpreted, not just recorded: turning feelings into tangible, lasting parts of the story.

              </p>
            </MissionCard>
            <MissionCard>
              <CardIcon>🔮</CardIcon>
              <h3>Our Vision</h3>
              <p>
                We envision a future where writing is not solitary, but directed, with Binders curating emotion, tone, and story.
                Books become emotional collectibles, departing from information containers.
                AI supports large-scale generation, while humans focus on authenticity, feeling, and meaning.
              </p>
            </MissionCard>
          </MissionVision>
        </Container>
      </BackgroundSection>

      <Section>
        <Container>
          <SectionTitle>Design Philosophy</SectionTitle>
          <SectionSubtitle>
            Our philosophy centers around clarity, emotional resonance, and timeless aesthetics:
          </SectionSubtitle>

          <PhilosophyGrid>
            <PhilosophyCard>
              <PhilosophyIcon>🤝</PhilosophyIcon>
              <h3>Conversation-first Design</h3>
              <p>
                We prioritize natural conversation and intuitive reflection over formal writing, so everyone feels included in authorship.
              </p>
            </PhilosophyCard>

            <PhilosophyCard>
              <PhilosophyIcon>⚡</PhilosophyIcon>
              <h3>Emotional Accuracy</h3>
              <p>
                Our AI is not designed to mimic people or exaggerate them, but to organize and respect their stories with nuance.
              </p>
            </PhilosophyCard>

            <PhilosophyCard>
              <PhilosophyIcon>🎨</PhilosophyIcon>
              <h3>Tailored Aesthetics</h3>
              <p>
                Each book is visually and tonally customized, ensuring that every memory feels unique yet premium.
              </p>
            </PhilosophyCard>

            <PhilosophyCard>
              <PhilosophyIcon>🌍</PhilosophyIcon>
              <h3>Context Adaptability</h3>
              <p>
                Our system respects and responds to different cultural rituals, values, and communication styles through variety of Binders.
              </p>
            </PhilosophyCard>
          </PhilosophyGrid>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionTitle>Our Core Values</SectionTitle>
          <SectionSubtitle>
            The principles that drive everything we do
          </SectionSubtitle>

          <ValuesGrid>
            <ValueItem>
              <ValueNumber>1</ValueNumber>
              <h3>Shared Authorship</h3>
              <p>
                Bind's uniqueness comes from gathering multiple perspectives.. Our tools empower groups to tell their truth in one collective voice.
              </p>
            </ValueItem>

            <ValueItem>
              <ValueNumber>2</ValueNumber>
              <h3>Honest Memory</h3>
              <p>
                Bind values authenticity over perfection. Our books do not idealize, but they reflect; with all the complexity that real life brings.
              </p>
            </ValueItem>

            <ValueItem>
              <ValueNumber>3</ValueNumber>
              <h3>Emotional Presence</h3>
              <p>
                Every book is designed to carry emotion over information. We aim to make memory tangible, immersive, and lasting.
              </p>
            </ValueItem>

            <ValueItem>
              <ValueNumber>4</ValueNumber>
              <h3>Physical Permanence</h3>
              <p>
                Bind creates objects meant to last, physically and emotionally. The printed book becomes a future-proof vessel of shared remembrance.
              </p>
            </ValueItem>
          </ValuesGrid>
        </Container>
      </Section>

      <TeamSection>
        <Container>
          <SectionTitle>Meet Our Team</SectionTitle>
          <SectionSubtitle>
            The passionate individuals behind Bind's innovation
          </SectionSubtitle>

          <TeamGrid>
            <TeamCard>
              <TeamAvatar>HL</TeamAvatar>
              <h3>Hyewon Lee</h3>
              <TeamRole>Role</TeamRole>
              <p>
                explaination explaination explaination explaination explaination
                explaination explaination explaination explaination explaination
              </p>
            </TeamCard>

            <TeamCard>
              <TeamAvatar>JL</TeamAvatar>
              <h3>JeongHeon Lee</h3>
              <TeamRole>Role</TeamRole>
              <p>
                explaination explaination explaination explaination explaination
                explaination explaination explaination explaination explaination
              </p>
            </TeamCard>

            <TeamCard>
              <TeamAvatar>SJ</TeamAvatar>
              <h3>Sunwoo Jeong</h3>
              <TeamRole>Role</TeamRole>
              <p>
                explaination explaination explaination explaination explaination
                explaination explaination explaination explaination explaination
              </p>
            </TeamCard>

            <TeamCard>
              <TeamAvatar>YH</TeamAvatar>
              <h3>Yushan Huang</h3>
              <TeamRole>Role</TeamRole>
              <p>
                explaination explaination explaination explaination explaination
                explaination explaination explaination explaination explaination
              </p>
            </TeamCard>
          </TeamGrid>
        </Container>
      </TeamSection>
    </>
  );
};

export default About;
