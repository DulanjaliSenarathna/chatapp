
import { ChatEngine} from 'react-chat-engine';
import './App.css';
import ChatFeed from './components/ChatFeed';

function App() {
  return (
    <div className="App">
      <ChatEngine
        height='100vh'
        projectID='98e29863-578e-4066-ae65-cf9742013c9c'
        userName='dulanjali'
        userSecret='123456789'
        renderChatFeed= {(chatAppProps) => <ChatFeed {...chatAppProps}/>}
        onNewMessage={()=> new Audio('https://chat-engine-assets.s3. amazonaws.com/click.mp3')} />
    </div>
  );
}

export default App;
