import { Avatar, Button, Typography } from "antd";
import React, { useContext } from "react";
import styled from "styled-components";
import { AuthContext } from "../../Context/AuthProvider";
import { auth } from "../../firebase/config";

export default function UserInfo() {
  // useEffect(() => {
  //   db.collection("user").onSnapshot((snapshot) => {
  //     const data = snapshot.docs.map((doc) => ({
  //       ...doc.data(),
  //       id: doc.id,
  //     }));
  //     console.log(data);
  //   });
  // }, []);
  const {
    user: { displayName, photoURL },
  } = useContext(AuthContext);
  // console.log({ data });

  console.log("Userinfo1", { user: { displayName, photoURL } });
  return (
    <WrapperStyled>
      <div>
        <Avatar src={photoURL}>
          {photoURL ? "" : displayName?.charAt(0)?.toUpperCase()}
        </Avatar>
        <Typography.Text className="userName">{displayName}</Typography.Text>
      </div>
      <Button onClick={() => auth.signOut()} ghost>
        Đăng xuất
      </Button>
    </WrapperStyled>
  );
}
const WrapperStyled = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 16px;
  border-bottom: 1px solid rgba(82, 32, 83);

  .userName {
    color: white;
    margin-left: 5px;
  }
`;
