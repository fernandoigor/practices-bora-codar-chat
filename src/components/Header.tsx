export function Header() {
  return (
    <view className="flex flex-row w-full justify-start items-center gap-8">
      <img className="rounded-full w-12" src="./src/assets/avatar.jpeg" />
      <view>
        <h2 className="text-white">Nome da Pessoa</h2>
        <span className="text-green-500 text-xs">🟢 Online</span>
      </view>
      <a href="#" className="text-white ml-auto hover:text-[#633BBC]">
        X
      </a>
    </view>
  );
}
