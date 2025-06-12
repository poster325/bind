import React from "react";
import styled from "styled-components";
import { BodyText, CaptionText, SubtitleText, TitleText } from ".";

interface PageInfoProps {
  title: string;
  subtitle: string;
  bannerImage?: string;
}

const PageHeader = styled.div<{ $bannerImage?: string }>`
  ${(props) => props.$bannerImage 
    ? `
      background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${props.$bannerImage});
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
    `
    : `
      background: linear-gradient(
        135deg,
        var(--primary-color) 0%,
        var(--secondary-color) 100%
      );
    `
  }
  color: white;
  box-sizing: border-box;
  padding: 4rem;
  padding-top: calc(4rem + 100px);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 11px;
  text-align: center;
`;

const PageInfo: React.FC<PageInfoProps> = ({ title, subtitle, bannerImage }) => {
  return (
    <PageHeader $bannerImage={bannerImage}>
      <TitleText className="ginto" style={{ color: "white" }}>
        {title}
      </TitleText>
      <CaptionText style={{ color: "white", whiteSpace: "pre-wrap" }}>
        {subtitle}
      </CaptionText>
    </PageHeader>
  );
};

export default PageInfo;
