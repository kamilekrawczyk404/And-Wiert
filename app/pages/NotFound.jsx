export const NotFound = ({ status = "" }) => {
  return (
    <div
      className={
        "xl:h-screen min-h-fit flex items-center justify-center flex-col"
      }
    >
      <div
        className={
          "border-2 border-dark-orange p-8 text-dark-orange flex flex-col gap-2"
        }
      >
        <span className={"text-6xl"}>404</span>
        <h1 className={"text-3xl rounded-sm"}>Page Not Found</h1>
      </div>
    </div>
  );
};
