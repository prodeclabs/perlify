import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
  Tailwind,
} from "@react-email/components";
import * as React from "react";

interface WaitlistEmailProps {
  userEmail: string;
}

// const baseUrl = process.env.VERCEL_URL
//   ? `https://${process.env.VERCEL_URL}`
//   : "https://perlify.dev";

export const WaitlistEmail = ({
  userEmail,
}: WaitlistEmailProps) => {
  const previewText = `Welcome to Perlify Waitlist!`;

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body className="bg-transparent my-auto mx-auto font-sans px-2">
          <Container className="border border-[#30363d] rounded-xl my-[40px] mx-auto p-[20px] max-w-[465px] bg-[#161b22] relative overflow-hidden">
            {/* Logo Section */}
            {/* <Section className="mt-[32px] relative z-10">
              <div className="relative w-16 h-16 mx-auto bg-[#161b22]/80 rounded-xl border border-[#30363d] shadow-lg overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#238636]/20 via-transparent to-transparent"></div>
                <Img
                  src={`${baseUrl}/static/github-mark-white.png`}
                  width="40"
                  height="40"
                  alt="Perlify"
                  className="my-0 mx-auto mt-3"
                />
              </div>
            </Section> */}

            <Heading className="text-white text-[24px] font-bold text-center p-0 my-[30px] mx-0">
              Welcome to Perlify<span className="text-[#238636]">.</span>
            </Heading>

            <Text className="text-[#c9d1d9] text-[14px] leading-[24px]">
              Hello there,
            </Text>

            <Text className="text-[#8b949e] text-[14px] leading-[24px]">
              Thank you for joining our waitlist! We're thrilled to have you as one of our early supporters. You'll be among the first to know when we launch our platform.
            </Text>

            {/* Twitter CTA Button */}
            <Section className="text-center my-8 relative z-10">
              <Link
                href="https://x.com/perlifyapp"
                className="inline-block bg-[#238636] hover:bg-[#2ea043] transition-colors duration-200 rounded-lg px-6 py-3 text-white font-semibold text-[14px] no-underline"
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span>Follow us on Twitter</span>
                  {/* Using HTML entity for better email client support */}
                </div>
              </Link>
            </Section>

            <Section className="bg-[#0d1117] rounded-lg p-6 my-6 border border-[#30363d] relative z-10">
              <Text className="text-[#c9d1d9] text-[14px] leading-[24px] m-0">
                <strong>What's next?</strong>
              </Text>
              <Text className="text-[#8b949e] text-[14px] leading-[24px] mt-2 mb-0">
                • We'll keep you updated on our progress
                <br />
                • You'll get early access to our beta
                <br />
                • Special features for waitlist members
              </Text>
            </Section>

            <Text className="text-[#8b949e] text-[14px] leading-[24px] text-center relative z-10">
              Stay updated with our latest developments
            </Text>

            {/* Developers Section */}
            <Section className="text-center border-t border-[#30363d]/50 relative z-10">
              <Container className="py-0">
                <Text className="text-[#8b949e] text-[11px] leading-[18px] mb-2 uppercase tracking-wider">
                  Crafted by
                </Text>
                <Container className="text-center">
                  <Link 
                    href="https://x.com/shadevkumarr"
                    className="text-[11px] text-[#238636] hover:text-[#2ea043] transition-colors no-underline font-medium"
                  >
                    @shadevkumarr
                  </Link>
                  <Text className="text-[#30363d] text-xs mx-2 inline">·</Text>
                  <Link 
                    href="https://x.com/sourabhrathourr"
                    className="text-[11px] text-[#238636] hover:text-[#2ea043] transition-colors no-underline font-medium"
                  >
                    @sourabhrathourr
                  </Link>
                </Container>
              </Container>
            </Section>

            {/* <Text className="text-[#666666] text-[12px] leading-[24px] text-center mt-6 relative z-10">
              This email was sent to <span className="text-[#238636]">{userEmail}</span>. If you didn't sign up for Perlify, you can safely ignore this email.
            </Text> */}
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default WaitlistEmail;
