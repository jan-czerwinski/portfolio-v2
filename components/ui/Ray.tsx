import clsx from "clsx";

type RayProps = { animationIdx: number; className: string; name: string };
export const Ray = ({ animationIdx, className, name }: RayProps) => {
  return (
    <div
      id="rays"
      className={clsx(
        " col-start-1 row-start-1 w-2  border-white transform  transition-all duration-1000 border-b h-0 fixed top-20 left-20 origin-left ",
        animationIdx === 1 ? "w-[150vmax]" : "invisible",
        className
      )}
    >
      <div className=" ml-[30%]  pl-10 transform  transition-all  duration-800   -translate-y-8 text-white text-3xl ">
        {name}
      </div>
    </div>
  );
};
