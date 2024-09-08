import React, { useState, useEffect, ChangeEvent } from "react";
import { db, doc, getDoc, setDoc } from "../../../firebaseConfig";
import { useLanguage } from "../../../context/language-context";
import { FiEdit3, FiTrash } from "react-icons/fi";

type ChatbotMessage = {
  question: string;
  answer: string;
};

const defaultMessage: ChatbotMessage = {
  question: "",
  answer: "",
};

const ChatbotTab: React.FC = () => {
  const { language } = useLanguage();
  const [chatbotMessages, setChatbotMessages] = useState<ChatbotMessage[]>([]);
  const [newMessage, setNewMessage] = useState<ChatbotMessage>(defaultMessage);
  const [activeTab, setActiveTab] = useState<"view" | "add">("view");
  const [editMessage, setEditMessage] = useState<ChatbotMessage | null>(null);

  useEffect(() => {
    const fetchMessages = async () => {
      const docRef = doc(db, "chatbotMessages", language);
      const snapshot = await getDoc(docRef);
      if (snapshot.exists()) {
        const data = snapshot.data();
        setChatbotMessages(data.messages || []);
      } else {
        setChatbotMessages([]);
      }
    };

    fetchMessages();
  }, [language]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewMessage({ ...newMessage, [name]: value });
  };

  const handleSaveMessage = async () => {
    const updatedMessages = editMessage
      ? chatbotMessages.map((msg) => (msg.question === editMessage.question ? newMessage : msg))
      : [...chatbotMessages, newMessage];

    await setDoc(doc(db, "chatbotMessages", language), { messages: updatedMessages });
    setNewMessage(defaultMessage);
    setActiveTab("view");
  };

  const handleEditClick = (message: ChatbotMessage) => {
    setNewMessage(message);
    setEditMessage(message);
    setActiveTab("add");
  };

  const handleDeleteMessage = async (question: string) => {
    const updatedMessages = chatbotMessages.filter((msg) => msg.question !== question);
    await setDoc(doc(db, "chatbotMessages", language), { messages: updatedMessages });
  };

  return (
    <div>
      <h2 className="text-4xl font-semibold text-gray-800 dark:text-gray-200 mb-3">
        Chatbot Manager
      </h2>

      {/* Tabs Navigation */}
      <div className="flex border-b border-gray-300/20 mb-4">
        <button
          onClick={() => setActiveTab("view")}
          className={`${
            activeTab === "view" ? "border-b border-blue-500 text-blue-500" : "border-0"
          } p-4 font-semibold`}
        >
          View Messages
        </button>
        <button
          onClick={() => {
            setActiveTab("add");
            setNewMessage(defaultMessage);
            setEditMessage(null);
          }}
          className={`${
            activeTab === "add" ? "border-b border-blue-500 text-blue-500" : "border-0"
          } p-4 font-semibold`}
        >
          Add New Message
        </button>
      </div>

      {/* View Messages Tab */}
      {activeTab === "view" && (
        <div>
          <ul>
            {chatbotMessages.map((message, index) => (
              <li
                key={index}
                className="p-4 bg-gray-100 dark:bg-gray-700 rounded-md mb-2 flex justify-between items-center"
              >
                <div>
                  <strong>{message.question}</strong> - {message.answer}
                </div>
                <div>
                  <button
                    onClick={() => handleEditClick(message)}
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-600"
                  >
                    <FiEdit3 className="inline w-5 h-5" />
                  </button>
                  <button
                    onClick={() => handleDeleteMessage(message.question)}
                    className="ml-4 text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-600"
                  >
                    <FiTrash className="inline w-5 h-5" />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Add or Edit Messages Tab */}
      {activeTab === "add" && (
        <div className="mb-4">
          <label className="text-sm md:text-xl font-medium text-gray-700 dark:text-gray-300 mb-2">
            {editMessage ? "Edit Chatbot Message" : "Add New Chatbot Message"}
          </label>

          {/* Input fields for message */}
          <div className="grid grid-cols-1 gap-4">
            <textarea
              name="question"
              value={newMessage.question}
              onChange={handleInputChange}
              placeholder="Question"
              rows={3}
              className="p-3 border border-gray-300 dark:bg-gray-600 bg-gray-300 rounded-md shadow-sm"
            />
            <textarea
              name="answer"
              value={newMessage.answer}
              onChange={handleInputChange}
              placeholder="Answer"
              rows={3}
              className="p-3 border border-gray-300 dark:bg-gray-600 bg-gray-300 rounded-md shadow-sm"
            />

            <button
              onClick={handleSaveMessage}
              className="px-4 py-2 mt-4 bg-blue-600 text-white font-semibold rounded-md shadow-sm hover:bg-blue-700"
            >
              {editMessage ? "Update Message" : "Save Message"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatbotTab;
