import DropDown from "../components/shared/DropDown";

export default function Header() {
  return (
    <section className=" border-primary border-t ">
      <div className="flex flex-row-reverse lg:flex-row py-4 px-8 items-center justify-center lg:justify-between">
        <span className="text-xl font-bold hidden lg:block">
          Welcome to my miniProjects menu!
        </span>
        <div>
          <DropDown />
        </div>
        <span className="text-lg hidden lg:block">erfan.jahandoost84@gmail.com</span>
      </div>
    </section>
  );
}
