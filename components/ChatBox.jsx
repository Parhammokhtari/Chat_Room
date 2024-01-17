import Link from "next/link";

const ChatBox = ({ chatRoomName, roomId, messages }) => {
  return (
    <div
      className={`bg-gray-800 shadow-md rounded-lg p-4 max-w-xl min-w-96 mx-4 my-2 transition-transform transform hover:scale-105`}
    >
      <Link href={`/chatRoom/${roomId}`} passHref>
        <div className="block w-full h-full">
          <div className="flex items-center mb-2">
            <h1 className=" font-bold text-xl  text-white">{chatRoomName}</h1>
          </div>
          <div className="bg-gray-500 rounded-tr-lg rounded-bl-lg p-3">
            <p className="text-white">go to see the chats content.</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ChatBox;
