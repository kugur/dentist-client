import styled from "styled-components";

const SignWrapper = styled.div`
  background: ${props => props.theme.colors.buttonColor};
  color: ${props => props.theme.colors.white};
  width: 140px;
  height: 50px;
  border-radius: 5px;
  border: thin solid #888;
  white-space: nowrap;
  display: inline-block;
  padding-inline: 1rem;
`;

const SignIcon = styled.span`
  padding: 12px 5px 0px 0px;
  display: inline-block;
`;

const SignText = styled.span`
    
  font-size: 20px;
  font-weight: bold;
  vertical-align: top;
  padding-top: 10px;
  display: inline-block;
`;

const GoogleSignButton = () => {
  return (
    <a data-testid="googleSignInButton" href="http://localhost:8181/oauth2/authorization/google">
      <SignWrapper>
        <SignIcon>
          <svg width="24" height="25" viewBox="0 0 24 25">
            <g fill="none">
              <path
                fill="#4285F4"
                d="M23.989 12.511c0-1.006-.082-1.74-.259-2.502H12.24v4.542h6.744c-.136 1.129-.87 2.828-2.502 3.97l-.023.153 3.633 2.814.252.026c2.312-2.136 3.645-5.277 3.645-9.003"
              ></path>
              <path
                fill="#34A853"
                d="M12.24 24.478c3.304 0 6.078-1.088 8.104-2.964l-3.862-2.992c-1.034.72-2.42 1.224-4.243 1.224-3.236 0-5.983-2.135-6.963-5.086l-.143.012-3.778 2.924-.05.137c2.013 3.998 6.147 6.745 10.934 6.745"
              ></path>
              <path
                fill="#FBBC05"
                d="M5.276 14.66c-.258-.762-.408-1.578-.408-2.42 0-.844.15-1.66.395-2.422l-.007-.162-3.825-2.97-.126.059C.476 8.405 0 10.267 0 12.239s.476 3.835 1.305 5.494l3.971-3.073"
              ></path>
              <path
                fill="#EB4335"
                d="M12.24 4.732c2.297 0 3.847.993 4.731 1.823l3.455-3.373C18.304 1.21 15.544 0 12.239 0 7.452 0 3.32 2.747 1.305 6.745l3.958 3.073c.993-2.95 3.74-5.086 6.976-5.086"
              ></path>
            </g>
          </svg>
        </SignIcon>
        <SignText>Google</SignText>
      </SignWrapper>
    </a>
  );
};

export default GoogleSignButton;
