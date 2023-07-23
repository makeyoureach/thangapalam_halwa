import "./login.css";
import { useFormik } from "formik";
import * as Yup from "yup";
const Login = () => {

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema:Yup.object().shape({
        
        email: Yup.string()
          .required("Email is a required field")
          .email("Invalid email format"),
        password: Yup.string()
          .required("Password is a required field")
          .min(8, "Password must be at least 8 characters"),
      }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));

    },
  });
  return (
    <>
      <form className="form_container" onSubmit={formik.handleSubmit}>
       
        <div className="form_child">
          <label>email:</label>
          <input
            name="email"
            type="email"
            placeholder="enter your email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
           {formik.touched.email && formik.errors.email ? (
        <div>{formik.errors.email}</div>
      ) : null}
        </div>

        <div className="form_child">
          <label>password:</label>
          <input
            name="password"
            placeholder="enter your password"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
            {formik.touched.password && formik.errors.password ? (
        <div>{formik.errors.password}</div>
      ) : null}
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};
export default Login;
