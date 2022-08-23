import React, { createContext, useContext, useMemo, useState } from "react";
import useFireStore from "../hooks/useFireStore";
import { AuthContext } from "./AuthProvider";

export const AppContext = createContext();

export default function AppProvider({ children }) {
  const [isAddRoomVisible, setIsAddRoomVisible] = useState(false);
  const [selectedRoomId, setSelectedRoomId] = useState("");
  const [isInviteMemberVisible, setIsInviteMemberVisible] = useState(false);
  const {
    user: { uid },
  } = useContext(AuthContext);
  console.log({ user: { uid } });
  //su dung usememmo re reurn oejct
  //chi tucj thi lai khi uid thay doi
  // khi truyen xuong rooms duoi no ,thay vi ow tham sop thu 2 ta truyen oecjt thi ta chir truyen
  //truyen vo 1 oject da dc memoruize
  const roomsCondition = useMemo(() => {
    return {
      fieldName: "members",
      operator: "array-contains",
      compareValue: uid,
    };
  }, [uid]);

  // console.log(roomsCondition);
  const rooms = useFireStore("rooms", roomsCondition);
  const selectedRoom = useMemo(
    () => rooms.find((room) => room.id === selectedRoomId) || {},
    [rooms, selectedRoomId]
  );
  const userCondition = useMemo(() => {
    return {
      fieldName: "uid",
      operator: "in",
      compareValue: selectedRoom.members,
    };
  }, [selectedRoom.members]);
  const members = useFireStore("users", userCondition);
  console.log("day la member tron apporivu", members);
  return (
    <div>
      {/* truyen du lieu user */}
      <AppContext.Provider
        value={{
          rooms,
          selectedRoom,
          members,
          isAddRoomVisible,
          setIsAddRoomVisible,
          selectedRoomId,
          setSelectedRoomId,
          isInviteMemberVisible,
          setIsInviteMemberVisible,
        }}
      >
        {children}
      </AppContext.Provider>
    </div>
  );
}
