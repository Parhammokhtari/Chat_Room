import ChatBox from "../components/ChatBox";
export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center rounded-lg max-w-xl max-h-[800px] overflow-y-auto bg-gray-300 justify-center py-2">
        <ChatBox chatRoomName={"chatRoom1"} roomId={1} />
        <ChatBox chatRoomName={"chatRoom2"} roomId={2} />
        <ChatBox chatRoomName={"chatRoom3"} roomId={3} />
        <ChatBox chatRoomName={"chatRoom4"} roomId={4} />
        <ChatBox chatRoomName={"chatRoom5"} roomId={5} />
        <ChatBox chatRoomName={"chatRoom6"} roomId={6} />
      </div>
    </>
  );
}
