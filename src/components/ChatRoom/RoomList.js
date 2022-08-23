import { PlusSquareOutlined } from "@ant-design/icons";
import { Button, Collapse, Typography } from "antd";
import React, { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../../Context/AppProvider";
const { Panel } = Collapse;
export default function RoomList() {
  // const {
  //   user: { uid },
  // } = useContext(AuthContext);
  // console.log({ user: { uid } });
  // //su dung usememmo re reurn oejct
  // //chi tucj thi lai khi uid thay doi
  // // khi truyen xuong rooms duoi no ,thay vi ow tham sop thu 2 ta truyen oecjt thi ta chir truyen
  // //truyen vo 1 oject da dc memoruize
  // const roomsCondition = useMemo(() => {
  //   return {
  //     fieldName: "members",
  //     operator: "array-contains",
  //     compareValue: uid,
  //   };
  // }, [uid]);

  // console.log(roomsCondition);
  // const rooms = useFireStore("rooms", roomsCondition);
  // console.log(rooms);
  const { rooms, setIsAddRoomVisible, setSelectedRoomId } =
    useContext(AppContext);
  console.log({ rooms });
  const handleAddRoom = () => {
    setIsAddRoomVisible(true);
  };
  return (
    <Collapse ghost defaultActiveKey={["1"]}>
      <PanelStyled header="Danh sách các phòng" key="1">
        {rooms.map((room) => (
          <LinkStyled key={room.id} onClick={() => setSelectedRoomId(room.id)}>
            {room.name}
          </LinkStyled>
        ))}

        <Button
          type="text"
          icon={<PlusSquareOutlined></PlusSquareOutlined>}
          className="add-room"
          onClick={handleAddRoom}
        >
          {" "}
          Thêm Phòng
        </Button>
      </PanelStyled>
    </Collapse>
  );
}

const PanelStyled = styled(Panel)`
  &&& {
    .ant-collapse-header,
    p {
      color: white;
    }
    .ant-collapse-content-box {
      padding: 0 40px;
    }
    .add-room {
      color: white;
      padding: 0;
    }
  }
`;

const LinkStyled = styled(Typography.Link)`
  display: block;
  margin-bottom: 5px;
  color: white;
`;
