import Link from "next/link";

const ChatBox = ({ chatRoomName, roomId }) => {
  // Define an array of background colors
  const bgColors = [
    "bg-red-500",
    "bg-blue-500",
    "bg-green-500",
    "bg-yellow-500",
  ];

  // Calculate the index based on the length of the array
  const index = Math.floor(Math.random() * bgColors.length);

  // Get the background color dynamically
  const bgColor = bgColors[index];

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
            <p className="text-white">This is the message content.</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ChatBox;
