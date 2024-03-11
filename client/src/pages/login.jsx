import { Card, Form, Row, Col, Container, Button } from "react-bootstrap";
import Swal from "sweetalert2";
import axios from "axios";
import { useForm } from "react-hook-form";

function Login() {
  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onTouched",
  });

  const { register, handleSubmit, formState } = form;
  const { errors } = formState;

  const onSubmit = (data) => {
    axios
      .post("http://localhost:3000/api/auth/login", data, {
        withCredentials: true,
      })
      .then((response) => {
        // Display success message with SweetAlert2
        Swal.fire({
          icon: "success",
          title: "Login Successful!",
          text: "Redirecting to your dashboard...",
          timer: 1000, // Set the timer to 1 second
          showConfirmButton: false,
        });

        console.log(response);
      })
      .catch((error) => {
        // Display error message with SweetAlert2
        Swal.fire({
          icon: "error",
          title: "Login Failed",
          text: "Incorrect email or password. Please try again.",
          timer: 2000, // Set the timer to 1 second
          showConfirmButton: false,
        });

        console.log(error);
      });
  };

  return (
    <div>
      <Container>
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={8} lg={6} xs={12}>
            <div className="border border-3 border-primary"></div>
            <Card className="shadow">
              <Card.Body>
                <div className="mb-3 mt-md-4">
                  <h2 className="fw-bold mb-2 text-uppercase ">LinkHub</h2>
                  <p className=" mb-5">Please enter your login and password!</p>
                  <div className="mb-3">
                    <Form onSubmit={handleSubmit(onSubmit)}>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="text-center">
                          Email address
                        </Form.Label>
                        <Form.Control
                          type="text"
                          {...register("email", {
                            required: {
                              value: true,
                              message: "Email is required",
                            },
                            pattern: {
                              value:
                                /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                              message: "Invalid email address",
                            },
                          })}
                          style={{
                            borderColor: errors.email ? "red" : "", // Set border color to red if there's an error
                          }}
                        />
                        {errors?.email && (
                          <span style={{ color: "red" }}>
                            {errors.email?.message}
                          </span>
                        )}
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                          type="text"
                          {...register("password", {
                            required: {
                              value: true,
                              message: "password is required",
                            },

                            minLength: {
                              value: 6,
                              message: "password must be at least 8 characters",
                            },
                            maxLength: {
                              value: 15,
                              message: "password must be at most 15 characters",
                            },
                          })}
                          style={{
                            borderColor: errors.password ? "red" : "", // Set border color to red if there's an error
                          }}
                        />
                        {errors?.password && (
                          <span style={{ color: "red" }}>
                            {errors.password?.message}
                          </span>
                        )}
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicCheckbox"
                      >
                        <p className="small">
                          <a className="text-primary" href="#!">
                            Forgot password?
                          </a>
                        </p>
                      </Form.Group>
                      <div className="d-grid">
                        <Button variant="primary" type="submit">
                          Login
                        </Button>
                      </div>
                    </Form>
                    <div className="mt-3">
                      <p className="mb-0  text-center">
                        Don't have an account?{" "}
                        <a href="/register" className="text-primary fw-bold">
                          Sign Up
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Login;
