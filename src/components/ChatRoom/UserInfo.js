import { Avatar, Button, Typography } from "antd";
import React, { useEffect } from "react";
import styled from "styled-components";
import { auth, db } from "../../firebase/config";

export default function UserInfo() {
  useEffect(() => {
    db.collection("user").onSnapshot((snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
    });
  }, []);
  return (
    <WrapperStyled>
      <div>
        <Avatar>A</Avatar>
        <Typography.Text className="userName">ABC</Typography.Text>
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
