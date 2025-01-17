import OIMAvatar from "@/components/OIMAvatar";
import { GroupItem } from "@/utils/open-im-sdk-wasm/types/entity";

const GroupListItem = ({
  source,
  showGroupCard,
}: {
  source: GroupItem;
  showGroupCard: (group: GroupItem) => void;
}) => {
  return (
    <div
      className="flex flex-row rounded-md px-3.5 py-3 transition-colors hover:bg-[#f3f9ff]"
      onClick={() => showGroupCard(source)}
    >
      <OIMAvatar src={source?.faceURL} isgroup />
      <div className="ml-3">
        <p className="text-base">{source.groupName}</p>
        <p className="text-xs text-[#8E9AB0FF]">{source.memberCount}人</p>
      </div>
    </div>
  );
};

export default GroupListItem;
