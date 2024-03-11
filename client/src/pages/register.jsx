import { Card, Form, Row, Col, Container, Button } from "react-bootstrap";
import { FaFacebook, FaTwitter, FaGoogle, FaGithub } from "react-icons/fa";
import Swal from "sweetalert2";

import { useForm } from "react-hook-form";
import axios from "axios";
//import backImg from "../components/Assets/imgs/img.png";
import "./Register.css"; // Import the CSS file for styling

function Register() {
  const form = useForm({
    defaultValues: {
      fname: "",
      lname: "",
      email: "",
      password: "",
    },
    mode: "onTouched",
  });

  const { register, handleSubmit, formState, reset } = form;
  const { errors } = formState;

  const onSubmit = (data) => {
    axios
      .post("http://localhost:3000/api/auth/signup", data)
      .then((response) => {
        console.log(response);
        Swal.fire({
          icon: "success",
          title: "Registered with Success",
          text: "You have successfully registered!",
          timer: 1000, // Set the timer to 1000 milliseconds (1 second)
          showConfirmButton: false, // Hide the "OK" button
        });
      })
      .catch((error) => {
        console.log(error);
        // Display error message
        Swal.fire({
          icon: "error",
          title: "Error in Registration",
          text: "An error occurred during registration. Please try again.",
          timer: 1000, // Set the timer to 1000 milliseconds (1 second)
          showConfirmButton: false, // Hide the "OK" button
        });
      });
  };

  return (
    <Container
      fluid
      // style={{
      //   backgroundImage: url(${backImg}),
      //   backgroundSize: "cover",
      //   backgroundPosition: "center",
      // }}
    >
      <Row
        className="justify-content-center align-items-center"
        style={{ minHeight: "90vh" }}
      >
        {/* Left Column for Form */}
        <Col
          md={8}
          lg={6}
          sm={12}
          style={{
            marginTop: "20px",
            marginBottom: "20px",
            maxWidth: "600px",
            margin: "0 auto",
          }}
        >
          <Card
            style={{
              boxShadow: "50px 26px 22px -1px rgba(0,0,0,0.61)",
              marginTop: "60px",
            }}
          >
            <Form className="m-3 py-2 px-3" onSubmit={handleSubmit(onSubmit)}>
              <Form.Group as={Row}>
                <Form.Label>FirstName</Form.Label>
                <Form.Control
                  type="text"
                  {...register("fname", {
                    required: {
                      value: true,
                      message: "FirstName is required",
                    },

                    minLength: {
                      value: 3,
                      message: "FirstName must be at least 6 characters",
                    },
                    maxLength: {
                      value: 15,
                      message: "FirstName must be at most 15 characters",
                    },
                  })}
                  style={{
                    borderColor: errors.fname ? "red" : "", // Set border color to red if there's an error
                  }}
                />
                {errors?.fname && (
                  <span style={{ color: "red" }}>{errors.fname?.message}</span>
                )}
              </Form.Group>
              <Form.Group as={Row}>
                <Form.Label>LastName</Form.Label>
                <Form.Control
                  type="text"
                  {...register("lname", {
                    required: {
                      value: true,
                      message: "LastName is required",
                    },

                    minLength: {
                      value: 3,
                      message: "LastName must be at least 6 characters",
                    },
                    maxLength: {
                      value: 15,
                      message: "LastName must be at most 15 characters",
                    },
                  })}
                  style={{
                    borderColor: errors.lname ? "red" : "", // Set border color to red if there's an error
                  }}
                />
                {errors?.lname && (
                  <span style={{ color: "red" }}>{errors.lname?.message}</span>
                )}
              </Form.Group>

              <Form.Group as={Row}>
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="text"
                  {...register("email", {
                    required: {
                      value: true,
                      message: "Email is required",
                    },
                    pattern: {
                      value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                      message: "Invalid email address",
                    },
                  })}
                  style={{
                    borderColor: errors.email ? "red" : "", // Set border color to red if there's an error
                  }}
                />
                {errors?.email && (
                  <span style={{ color: "red" }}>{errors.email?.message}</span>
                )}
              </Form.Group>

              <Form.Group as={Row}>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
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

              <Button
                variant="primary"
                type="submit"
                style={{ marginTop: "10px" }}
              >
                Register
              </Button>
              <Button
                variant="secondary"
                type="reset"
                onClick={() => reset()}
                style={{ marginTop: "10px", marginLeft: "10px" }}
              >
                Reset
              </Button>
              <div
                className="d-flex justify-content-between mx-auto"
                style={{ width: "40%", marginTop: "20px" }}
              >
                <Button
                  tag="a"
                  href="#!"
                  variant="light"
                  className="m-1 icon-button"
                >
                  <FaFacebook size="2em" />
                </Button>

                <Button
                  tag="a"
                  href="#!"
                  variant="light"
                  className="m-1 icon-button"
                >
                  <FaTwitter size="2em" />
                </Button>

                <Button
                  tag="a"
                  href="#!"
                  variant="light"
                  className="m-1 icon-button"
                >
                  <FaGoogle size="2em" />
                </Button>

                <Button
                  tag="a"
                  href="#!"
                  variant="light"
                  className="m-1 icon-button"
                >
                  <FaGithub size="2em" />
                </Button>
              </div>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Register;
