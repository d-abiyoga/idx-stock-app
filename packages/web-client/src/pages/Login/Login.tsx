import { StyledButton } from '../../components/atoms/Button/Button.styled';
export const Login = () => {
  return (
    <main>
      <h1>Login Page</h1>
      <StyledButton
        as="a"
        href="http://localhost:3001/auth/google"
        style={{ width: 'fit-content', background: 'red' }}
      >
        Sign in with Google
      </StyledButton>
    </main>
  );
};
