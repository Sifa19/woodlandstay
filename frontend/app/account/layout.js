import SideNavigation from "../_components/SideNavigation";

function layout({ children }) {
  return (
    <div className="grid grid-cols-[16rem_1fr] h-[75vh] gap-12">
      <SideNavigation />
      <div className="py-1 overflow-y-scroll scrollbar-webkit">{children}</div>
    </div>
  );
}

export default layout;
