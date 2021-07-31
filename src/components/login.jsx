import styled from 'styled-components'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

const Block = styled.div`
  height: 500px;
  width: 400px;
  background: linear-gradient(#e66465, #9198e5);
`

const Circle = styled.div`
  height: 140px;
  width: 140px;
  border-radius: 50%;
  background: linear-gradient(45deg, #e66465 10%, #9198e5 100%);
`

const LoginBox = styled.div`
  display: flex;
  border-radius: 10px;
  background: whitesmoke;
  overflow: hidden;
  box-shadow: 5px 5px 20px 10px rgba(0, 0, 0, 0.3);
`

const initialState = {
  username: '',
  password: '',
}

const Box = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
`

const StyledForm = styled(Form)`
  width: 300px;
  height: 220px;
  margin-top: 40px;
  display: flex;

  fieldset {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: centers;
    border: 0;
    padding: 20px;
  }

  label {
    flex-direction: column;
    display: flex;
    margin-bottom: 14px;
    font-size: 0.825rem;
    color: #562f97;

    input {
      margin: 5px 0;
      padding: 10px 8px;

      border: 2px solid;
      border-image-slice: 1;
      border-width: 2px;

      font-size: 1rem;

      border-image-source: linear-gradient(-45deg, #e66465 0%, #6c7097 100%);
    }

    span {
      color: #ca2678;
    }
  }

  button {
    margin-top: 20px;
    background: #14b4c9;
    border: 0;
    border-radius: 24px;
    color: whitesmoke;
    font-size: 1.2rem;
    font-weight: 600;
    padding: 10px 8px;
    text-transform: uppercase;
  }
`

const LoginForm = () => {
  return (
    <Box>
      <Circle />
      <Formik
        initialValues={initialState}
        validationSchema={Yup.object({
          username: Yup.string().email().required('Email input is required'),
          password: Yup.string()
            .min(8, 'Password should be at least 8 characters long')
            .required('Password input is required'),
        })}
        onSubmit={(values) => console.log(values)}
      >
        <StyledForm>
          <fieldset>
            <label htmlFor="username">
              Username
              <Field name="username" type="email" />
              <ErrorMessage name="username" component="span" />
            </label>
            <label htmlFor="password">
              Password
              <Field name="password" type="password" />
              <ErrorMessage name="password" component="span" />
            </label>

            <button type="submit">sign in</button>
          </fieldset>
        </StyledForm>
      </Formik>
    </Box>
  )
}

const Login = () => {
  return (
    <LoginBox>
      <Block />
      <LoginForm />
    </LoginBox>
  )
}

export default Login
