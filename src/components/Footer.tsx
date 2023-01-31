export function Footer() {
  return (
    <view className="flex flex-row w-full">
      <input
        type="text"
        className="w-full bg-[#282843] rounded-l-full rounded-r-full h-12 px-6 text-gray-300 text-xs"
        value="Digite sua mensagem"
      />
      <button className="relative -left-12 text-3xl text-white hover:text-[#633BBC]">
        ▶️
      </button>
    </view>
  );
}
