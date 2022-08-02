import Spinner from "./Spinner";
import Loadbar from "./Loadbar";

function BscpeLoader() {
  return (
    <div className="grid w-full min-h-[calc(100vh-3em)] place-content-center">
      <p className="mb-4 font-light text-center text-neutral-600">
        BSCPE STORE
      </p>
      <Loadbar className="mx-auto" />
    </div>
  );
}

export default BscpeLoader;
