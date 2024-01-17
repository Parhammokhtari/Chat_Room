const MessageLog = ({ message, userId }) => {
  // Get the background color dynamically

  return (
    <li
      key={message?.id}
      className={` ${
        message.uid === userId
          ? "text-start  self-start"
          : "  text-end self-end"
      } mt-2 bg-gray-100 flex flex-col p-2 max-w-2xl min-w-56 rounded-2xl`}
    >
      <section>
        {message.displayName ? (
          <span className="font-bold text-blue-600 text-lg ">
            {message.displayName}
          </span>
        ) : null}
        <br />
        <p className="ml-2 text-lg break-words overflow-hidden">
          {message.text}
        </p>

        {message?.createdAt ? (
          <span className="ml-3 opacity-70 text-sm ">
            {new Date(message.createdAt).toLocaleString()}
          </span>
        ) : null}
      </section>
    </li>
  );
};

export default MessageLog;
