"use client"

import { useState, useEffect, useRef } from "react"
import { addDoc, collection, query, orderBy, onSnapshot, getDocs } from "firebase/firestore"
import { db, auth } from "../firebase"
import axios from "axios"
import Swal from "sweetalert2"

function Chat() {
  const [message, setMessage] = useState("")
  const [messages, setMessages] = useState([])
  const [shouldScrollToBottom, setShouldScrollToBottom] = useState(true)
  const [userIp, setUserIp] = useState("")
  const [messageCount, setMessageCount] = useState(0)

  const chatsCollectionRef = collection(db, "chats")
  const messagesEndRef = useRef(null)

  const fetchBlockedIPs = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "blacklist_ips"))
      const blockedIPs = querySnapshot.docs.map((doc) => doc.data().ipAddress)
      return blockedIPs
    } catch (error) {
      console.error("Gagal mengambil daftar IP yang diblokir:", error)
      return []
    }
  }

  useEffect(() => {
    const queryChats = query(chatsCollectionRef, orderBy("timestamp"))
    const unsubscribe = onSnapshot(queryChats, (snapshot) => {
      const newMessages = snapshot.docs.map((doc) => {
        const data = doc.data()
        return {
          ...data,
          userIp: data.userIp,
        }
      })
      setMessages(newMessages)
      if (shouldScrollToBottom) {
        scrollToBottom()
      }
    })

    return () => {
      unsubscribe()
    }
  }, [shouldScrollToBottom])

  useEffect(() => {
    getUserIp()
    checkMessageCount()
    scrollToBottom()
  }, [])

  const scrollToBottom = () => {
    setTimeout(() => {
      messagesEndRef.current?.scrollIntoView({ behavior: "auto" })
    }, 100)
  }

  const getUserIp = async () => {
    try {
      const cachedIp = localStorage.getItem("userIp")
      if (cachedIp) {
        setUserIp(cachedIp)
        return
      }
      const response = await axios.get("https://ipapi.co/json")
      const newUserIp = response.data.network
      setUserIp(newUserIp)
      const expirationTime = new Date().getTime() + 60 * 60 * 1000
      localStorage.setItem("userIp", newUserIp)
      localStorage.setItem("ipExpiration", expirationTime.toString())
    } catch (error) {
      console.error("Gagal mendapatkan alamat IP:", error)
    }
  }

  const checkMessageCount = () => {
    const userIpAddress = userIp
    const currentDate = new Date()
    const currentDateString = currentDate.toDateString()
    const storedDateString = localStorage.getItem("messageCountDate")

    if (currentDateString === storedDateString) {
      const userSentMessageCount = Number.parseInt(localStorage.getItem(userIpAddress)) || 0
      if (userSentMessageCount >= 20) {
        Swal.fire({
          icon: "error",
          title: "Message limit exceeded",
          text: "You have reached your daily message limit.",
          customClass: {
            container: "sweet-alert-container",
          },
        })
      } else {
        setMessageCount(userSentMessageCount)
      }
    } else {
      localStorage.removeItem(userIpAddress)
      localStorage.setItem("messageCountDate", currentDateString)
    }
  }

  const isIpBlocked = async () => {
    const blockedIPs = await fetchBlockedIPs()
    return blockedIPs.includes(userIp)
  }

  const sendMessage = async () => {
    if (message.trim() !== "") {
      const isBlocked = await isIpBlocked()

      if (isBlocked) {
        Swal.fire({
          icon: "error",
          title: "Blocked",
          text: "You are blocked from sending messages.",
          customClass: {
            container: "sweet-alert-container",
          },
        })
        return
      }

      const senderImageURL = auth.currentUser?.photoURL || "/AnonimUser.png"
      const trimmedMessage = message.trim().substring(0, 60)
      const userIpAddress = userIp

      if (messageCount >= 20) {
        Swal.fire({
          icon: "error",
          title: "Message limit exceeded",
          text: "You have reached your daily message limit.",
          customClass: {
            container: "sweet-alert-container",
          },
        })
        return
      }

      const updatedSentMessageCount = messageCount + 1
      localStorage.setItem(userIpAddress, updatedSentMessageCount.toString())
      setMessageCount(updatedSentMessageCount)

      await addDoc(chatsCollectionRef, {
        message: trimmedMessage,
        sender: {
          image: senderImageURL,
        },
        timestamp: new Date(),
        userIp: userIp,
      })

      setMessage("")
      setTimeout(() => {
        setShouldScrollToBottom(true)
      }, 100)
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault()
      sendMessage()
    }
  }

  return (
    <div className="" id="ChatAnonim">
      <div className="text-center text-4xl font-semibold" id="Glow">
        Text Anonim
      </div>

      <div className="mt-5" id="KotakPesan" style={{ overflowY: "auto" }}>
        {messages.map((msg, index) => (
          <div key={index} className="flex items-start text-sm py-[1%]">
            <img src={msg.sender.image || "/placeholder.svg"} alt="User Profile" className="h-7 w-7 mr-2 " />
            <div className="relative top-[0.30rem]">{msg.message}</div>
          </div>
        ))}
        <div ref={messagesEndRef}></div>
      </div>
      <div id="InputChat" className="flex items-center mt-5">
        <input
          className="bg-transparent flex-grow pr-4 w-4 placeholder:text-white placeholder:opacity-60"
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Ketik pesan Anda..."
          maxLength={60}
        />
        <button onClick={sendMessage} className="ml-2">
          <img src="/paper-plane.png" alt="" className="h-4 w-4 lg:h-6 lg:w-6" />
        </button>
      </div>
    </div>
  )
}

export default Chat
