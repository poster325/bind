import styled from "styled-components";

export const TitleText = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--text-primary);
`;

export const SubtitleText = styled.div`
  font-size: 25px;
  font-weight: 600;
  color: var(--text-primary);
`;

export const BodyText = styled.div<{ bold?: boolean }>`
  font-size: 18px;
  color: var(--text-secondary);
  ${({ bold }) =>
    bold === true && `font-weight: 600; color: var(--text-primary);`}
  line-height: 1.5;
`;

export const CaptionText = styled.div<{ underline?: boolean }>`
  color: var(--text-secondary);
  line-height: 1.6;
`;

export const FlexBox = styled.div<{ gap: number }>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: ${({ gap }) => `${gap}px`};
`;
