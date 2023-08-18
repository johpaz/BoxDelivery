import { signIn } from 'next-auth/react';

const GoogleLoginButton = () => {
  const handleGoogleLogin = async () => {
    await signIn('google');
  };

  return (
    <button onClick={handleGoogleLogin}>Iniciar sesión con Google</button>
  );
};

export default GoogleLoginButton;
