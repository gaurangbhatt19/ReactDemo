import "./styles.css";
import { useForm } from "react-hook-form";
export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          {...register("email", { required: true })}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          {...register("password", {
            required: "PASSWORD REQUIRED",
            minLength: { value: 8, message: "Min length 8 Characters" }
          })}
        />

        {errors.password && <p>{errors.password.message}</p>}
        <input type="submit" />
      </form>
    </div>
  );
}
