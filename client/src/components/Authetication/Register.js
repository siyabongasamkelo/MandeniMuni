import { Button } from "../common/Button.styled";
import { MediumText, SmallText } from "../common/Texts.styled";
import {
  FormContent,
  MandeniYethuInfoContent,
  RegisterContainer,
  RegisterCover,
} from "./Register.styled";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <RegisterContainer>
      <RegisterCover>
        <RegisterCover>
          <FormContent>
            <form className="cover">
              <MediumText>Create Account</MediumText>
              <SmallText>
                Already have an account ? <Link>log in </Link>
              </SmallText>
              <div className="form">
                <div className="name">
                  <div>
                    <input type="text" placeholder="First Name" name="name" />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Last Name"
                      name="lastname"
                    />
                  </div>
                </div>
                <div>
                  <input type="email" placeholder="Email" name="email" />
                </div>
                <div>
                  <input
                    type="password"
                    placeholder="Password"
                    name="password"
                  />
                </div>
                <div>
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    name="confirmpassword"
                  />
                </div>
                <div className="terms">
                  <div className="check">
                    <input type="checkbox" name="termsandconditions" />
                  </div>
                  <div className="text">
                    <SmallText>I Agree to terms and conditions</SmallText>
                  </div>
                </div>

                <Button>Sign Up</Button>
                <div class="divider">
                  <span>OR sign in with</span>
                </div>
              </div>
            </form>
          </FormContent>
          <MandeniYethuInfoContent></MandeniYethuInfoContent>
        </RegisterCover>
      </RegisterCover>
    </RegisterContainer>
  );
};

export default Register;
