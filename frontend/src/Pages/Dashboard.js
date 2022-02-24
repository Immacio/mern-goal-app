import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import GoalForm from "../components/GoalForm";
import Spinner from "../components/Spinner";
import { getGoals, reset } from "../features/goals/goalSlice";
import GoalItem from "../components/GoalItem";

function Dashboard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { goals, isLoading, isError, message } = useSelector(
    (state) => state.goal
  );

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    if (!user) {
      navigate("/login");
    }

    dispatch(getGoals());

    return () => {
      dispatch(reset());
    };
  }, [user, navigate, isError, message, dispatch]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <section className="max-w-4xl m-auto mb-10 px-3">
        <div className="max-w-md m-auto flex flex-col items-center space-y-5 justify-center text-center">
          <h1 className="text-5xl font-bold">Welcome {user && user.name}</h1>
          <p className="text-2xl font-semibold">Your Goals Dashboard</p>
        </div>
      </section>
      <GoalForm />

      <section className="max-w-4xl m-auto my-10 justify-center items-center">
        {goals.length > 0 ? (
          <div className="flex justify-between flex-wrap m-auto">
            {goals.map((goal) => (
              <GoalItem key={goal._id} goal={goal} />
            ))}
          </div>
        ) : (
          <h3 className="text-center">You have not set any goals</h3>
        )}
      </section>
    </>
  );
}

export default Dashboard;
