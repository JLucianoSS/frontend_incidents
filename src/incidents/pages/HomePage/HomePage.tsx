
import { useBearStore } from "../../../store";
// import { Modal } from "../../../ui/components";

export const HomePage = () => {


  const blackBears = useBearStore((state) => state.blackBears);
  const increaseBlackBears = useBearStore((state) => state.increaseBlackBears);

  return (
    
    <>
      <div>contador: {blackBears}</div>

      <button onClick={() => increaseBlackBears(3)} className="btn btn-success">
        Incrementar osos
      </button>

     


 
    </>
  );
};
