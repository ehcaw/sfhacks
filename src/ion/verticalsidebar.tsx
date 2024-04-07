export const VerticalBar = () => {
  return (
    <div className="bg-neutral h-full w-56 h-screen rounded-box-left">
      <ul className="menu bg-neutral w-56 text-neutral-content ">
        <li>
          <a className=" btn-ghost font-bold text-xl">Polyglot</a>
        </li>
        <li>
          <button className="btn bg-neutral text-neutral-content">
            Prototype
          </button>
        </li>
        <li>
          <button className="btn bg-neutral text-neutral-content">
            Chatlog
          </button>
        </li>
        <li>
          <button className="btn bg-neutral text-neutral-content">
            Settings
          </button>
        </li>
      </ul>
    </div>
  );
};
