import { Image } from "antd";
import { FC } from "react";

import play_icon from "@/assets/images/messageItem/play_video.png";
import emitter from "@/utils/events";
import { MessageType } from "@/utils/open-im-sdk-wasm/types/enum";

import { IMessageItemProps } from ".";

const MediaMessageRender: FC<IMessageItemProps> = ({ message }) => {
  const isVideoMessage = message.contentType === MessageType.VideoMessage;
  const sourceUrl = isVideoMessage
    ? message.videoElem.snapshotUrl
    : message.pictureElem.sourcePicture.url;

  const previewInAlbum = () => {
    if (isVideoMessage) {
      emitter.emit("OPEN_VIDEO_PLAYER", message.videoElem.videoUrl);
      return;
    }
  };

  return (
    <div className="relative">
      <Image
        rootClassName="message-image cursor-pointer"
        className="max-w-[200px] rounded-md"
        src={sourceUrl}
        preview={!isVideoMessage}
        onClick={previewInAlbum}
      />
      {isVideoMessage && (
        <img
          src={play_icon}
          width={40}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer"
          alt="play"
        />
      )}
    </div>
  );
};

export default MediaMessageRender;
