import { StudioLayOut } from "@/components/StudioLayout";
import { LayoutGrid } from "@/components/ui/layout-grid";
import { cards } from "@/lib/consts";

const ourStudio = () => {
  return (
    <>
      <div className="py-32 h-[300vh]">
        <StudioLayOut cards={cards} />
      </div>
    </>
  );
};

export default ourStudio;
