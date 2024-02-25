import { Card, Form, Row, Col, Container, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import axios from "axios";
import regestImg from "../components/Assets/img.png";
import "./Register.css"; // Import the CSS file for styling

function Register() {
  const form = useForm({
    defaultValues: {
      fname: "",
      lname: "",
      email: "",
      password: "",

      gender: "",

      address: "",
      telephone: "",
      dateOfBirth: "",
      role: {
        admin: false,
        student: false,
        formateur: false,
      },
    },
    mode: "onTouched",
  });

  const { register, handleSubmit, formState, reset } = form;
  const { errors } = formState;

  const onSubmit = (data) => {
    console.log(data);
    axios
      .post("http://localhost:3000/api/users/register", data)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Container>
      <Row
        style={{
          boxShadow: "0 4px 8px rgba(0,0,0,0.1)", // Add box shadow here
          background: "linear-gradient(to right, #2980b9, #6dd5fa, #ffffff)",
          minHeight: "100vh",
          display: "flex",
          marginTop: "20px",
          alignItems: "center",
          borderRadius: "30px",
          justifyContent: "center",
        }}
      >
        {/* Left Column for Form */}
        <Col md={8} lg={6} sm={12} style={{ marginTop: "20px" }}>
          <Card>
            <Form className="m-3 py-3 px-4" onSubmit={handleSubmit(onSubmit)}>
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
                      value: 6,
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
                      value: 6,
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
                  type="text"
                  {...register("password", {
                    required: {
                      value: true,
                      message: "password is required",
                    },

                    minLength: {
                      value: 8,
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

              <Form.Group as={Row} controlId="formGender">
                <Form.Label>Gender</Form.Label>

                <Form.Control
                  as="select"
                  {...register("gender", {
                    required: "Please select a gender",
                  })}
                  style={{
                    borderColor: errors.gender ? "red" : "", // Set border color to red if there's an error
                  }}
                >
                  <option value="" disabled>
                    Select Gender
                  </option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </Form.Control>
                {errors.gender && (
                  <span style={{ color: "red" }}>{errors.gender.message}</span>
                )}
              </Form.Group>

              <Form.Group as={Row}>
                <Form.Label>Address</Form.Label>
                <Form.Control
                  type="text"
                  {...register("address", {
                    required: {
                      value: true,
                      message: "Address is required",
                    },
                    minLength: {
                      value: 6,
                      message: "Address must be at least 6 characters",
                    },
                  })}
                  style={{
                    borderColor: errors.address ? "red" : "", // Set border color to red if there's an error
                  }}
                />
              </Form.Group>
              <Form.Group as={Row}>
                <Form.Label>Telephone</Form.Label>
                <Form.Control
                  type="text"
                  {...register("telephone", {
                    required: {
                      value: true,
                      message: "Telephone is required",
                    },
                    pattern: {
                      value: /^[0-9]{8}$/,
                      message: "Invalid Telephone number",
                    },
                  })}
                  style={{
                    borderColor: errors.telephone ? "red" : "", // Set border color to red if there's an error
                  }}
                />
              </Form.Group>

              <Form.Group as={Row}>
                <Form.Label>Date of Birth</Form.Label>
                <Form.Control
                  type="date"
                  {...register("dateOfBirth", {
                    required: {
                      value: true,
                      message: "Date of Birth is required",
                    },
                  })}
                  style={{
                    borderColor: errors.dateOfBirth ? "red" : "", // Set border color to red if there's an error
                  }}
                />
              </Form.Group>
              <Form.Group as={Row} controlId="formGender">
                <Form.Label>Role</Form.Label>

                <Form.Control
                  as="select"
                  {...register("role", {
                    required: "Please select  role",
                  })}
                  style={{
                    borderColor: errors.role ? "red" : "", // Set border color to red if there's an error
                  }}
                >
                  <option value="" disabled>
                    Select Role
                  </option>
                  <option value="formatteur">Formateur</option>
                  <option value="student">Student</option>
                </Form.Control>
                {errors?.role && (
                  <span style={{ color: "red" }}>{errors.role?.message}</span>
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
            </Form>
          </Card>
        </Col>

        {/* Right Column for Image */}
        <Col
          className="d-none d-lg-block
"
          md={4}
          lg={6}
          sm={0}
          style={{ marginTop: "20px" }}
        >
          {/* Replace the placeholder image path with your actual image path */}
          <img
            src={regestImg}
            alt="E-Learning"
            style={{ width: "100%", height: "auto" }}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Register;
