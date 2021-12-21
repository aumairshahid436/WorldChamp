import { FallbackProps } from "react-error-boundary";
import { Messages } from "utils";

function ErrorFallBack({ error }: FallbackProps | any) {
  if (process.env.NODE_ENV === "development") console.log(error);
  return (
    <div className="alert alert-danger" role="alert" data-testid="fallback-cmp">
      {Messages.UnableToRenderComponent}
    </div>
  );
}

export default ErrorFallBack;
