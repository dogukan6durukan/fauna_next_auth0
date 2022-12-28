export const Message = (props) => {
  const MessageType = [
    {
      type: "warning",
      properties: {
        background: "bg-yellow-300",
        color: "text-black",
      },
    },

    {
      type: "danger",
      properties: {
        background: "bg-red-500",
        color: "text-white",
      },
    },

    {
      type: "inform",
      properties: {
        background: "bg-blue-500",
        color: "text-white",
      },
    },
  ];

  let result;



  MessageType.map((e) => {
    if (props.type === e.type) {
        result = 
        <div className={`${e.properties.background} ${e.properties.color} p-3 my-3 text-center md:w-3/5 md:m-auto md:rounded-md`}>
            {props.message}
        </div>
    } 
  
});

  return <>{result}</>;
};
