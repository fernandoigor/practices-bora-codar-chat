interface IMessage {
  name: string;
  time: string;
  message: string;
  isMe?: boolean;
}

export function Message({ name, time, message, isMe = false }: IMessage) {
  return (
    <view
      className={`my-1 mr-4 flex flex-col w-2/5 ${
        isMe ? "self-end" : "self-start"
      }`}
    >
      {name !== "" && (
        <span
          className={`text-[#E1E1E6] text-xs font-light my-2 ${
            isMe ? "self-end" : "self-start"
          }`}
        >
          {name} - {time}
        </span>
      )}
      <view
        className={`${
          isMe
            ? "bg-[#07847E] rounded-tl-xl rounded-br-xl rounded-bl-xl self-end"
            : "bg-[#633BBC] rounded-tr-xl rounded-br-xl rounded-bl-xl"
        } text-[#E1E1E6] w-fit p-4  text-xs font-light`}
      >
        {message}
      </view>
    </view>
  );
}
