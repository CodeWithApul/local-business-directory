{
  /*
    <Container maxWidth="sm">
      <AuthForm />
    </Container>
    Components:
    AuthForm.tsx — email/password fields
    Optional: social login buttons */
}
import ShopAuthForm from "./forms/ShopAuthForm";
import UserAuthForm from "./forms/UserAuthForm";
import { LoginTypes } from "../types/LoginTypes";

function Login({ type }: { type: LoginTypes }) {
  return (
    <>
      {type === LoginTypes.SHOP_LOGIN && <ShopAuthForm />}
      {type === LoginTypes.USER_LOGIN && <UserAuthForm />}
    </>
  );
}

export default Login;
