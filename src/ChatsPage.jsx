import { PrettyChatWindow } from "react-chat-engine-pretty";

const ChatsPage = (props) => {
  return (
    <div style={{height: '100vh'}}>
      <PrettyChatWindow
        projectId='2653a98e-0e7c-474b-aaf8-5a071d1272bb'
        username={props.user.username}
        secret={props.user.secret}
        style={{height: '100%'}}
      />
    </div>
  );
};

export default ChatsPage;