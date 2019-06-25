import { API } from "./API";

class ChatAPI extends API {
    // This will set your user with an ONLINE status
    setCurrentUserOnline = () => {
        return this.makeRequest("chats/connect", "GET");
    };

    // Returns a list of connected users
    getOnlineUsers = () => {
        return this.makeRequest("chats/connected", "GET");
    };

    // Returns a list of users and their status
    getUsers = () => {
        return this.makeRequest("chats/users", "GET");
    };
    
    // Returns a list messages between the authenticated user and another user.
    getConversation = ({ userId }) => {
        return this.makeRequest(`chats/conversation/:${userId}`, "GET");
    };

    // Creates a new message
    sendMessage = ({ userId, message }) => {
        return this.makeRequest("chats/message", "POST", {
            to: userId,
            data: message
        });
    };
}

export default new ChatAPI();
