import { useState } from "react";
import { Button, Input, Link } from "@nextui-org/react";

interface SignUpProps {
  setSelected: React.Dispatch<React.SetStateAction<string | number>>;
}

const SignUp: React.FC<SignUpProps> = ({ setSelected }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    studentId: "",
    password: "",
    confirmPassword: ""
  });
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    studentId: "",
    password: {
      required: "",
      length: "",
      uppercase: "",
      lowercase: "",
      number: ""
    },
    confirmPassword: ""
  });

  const validatePassword = (password: string) => {
    const newErrors = {
      required: "",
      length: "",
      uppercase: "",
      lowercase: "",
      number: ""
    };
    if (!password.trim()) {
      newErrors.required = "Password is required";
    } else {
      if (password.length < 8) {
        newErrors.length = "Password must be at least 8 characters long";
      }
      if (!/[A-Z]/.test(password)) {
        newErrors.uppercase = "Password must contain at least one uppercase letter";
      }
      if (!/[a-z]/.test(password)) {
        newErrors.lowercase = "Password must contain at least one lowercase letter";
      }
      if (!/\d/.test(password)) {
        newErrors.number = "Password must contain at least one number";
      }
    }
    setErrors((prevErrors) => ({
      ...prevErrors,
      password: newErrors
    }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    if (name === "password") {
      validatePassword(value);
    }

    // Validate confirm password
    if (name === "confirmPassword") {
      if (formData.password !== value) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          confirmPassword: "Passwords do not match"
        }));
      } else {
        setErrors((prevErrors) => ({
          ...prevErrors,
          confirmPassword: ""
        }));
      }
    }

    // Validate email
    if (name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          email: "Invalid email format"
        }));
      } else {
        setErrors((prevErrors) => ({
          ...prevErrors,
          email: ""
        }));
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);

    // Additional form validation can be performed here

    try {
      // Perform form submission
    } catch (error) {
      // Handle form submission error
    }
  };

  return (
    <form className="flex flex-col gap-4 h-[300px]" onSubmit={handleSubmit}>
      <Input
        isRequired
        label="First Name"
        placeholder="Enter your firstName"
        type="text"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
      />
      <Input
        isRequired
        label="Last Name"
        placeholder="Enter your lastname"
        type="text"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
      />
      <Input
        isRequired
        label="Email"
        placeholder="Enter your email"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
      {errors.email && <p className="text-red-500">{errors.email}</p>}
      <Input
        isRequired
        label="Student ID"
        placeholder="Enter your student ID"
        type="text"
        name="studentId"
        value={formData.studentId}
        onChange={handleChange}
      />
      <Input
        isRequired
        label="Password"
        placeholder="Enter your password"
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
      />
      {Object.values(errors.password).map((error, index) => (
        error && <p key={index} className="text-red-500">{error}</p>
      ))}
      <Input
        isRequired
        label="Confirm Password"
        placeholder="Confirm your password"
        type="password"
        name="confirmPassword"
        value={formData.confirmPassword}
        onChange={handleChange}
      />
      {errors.confirmPassword && <p className="text-red-500">{errors.confirmPassword}</p>}
      <p className="text-center text-small">
        Already have an account?{" "}
        <Link size="sm" onPress={() => setSelected("login")}>
          Login
        </Link>
      </p>
      <div className="flex gap-2 justify-end">
        <Button fullWidth color="primary" type="submit">
          Sign up
        </Button>
      </div>
    </form>
  );
};

export default SignUp;
