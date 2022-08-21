import React from "react";
import styled from "styled-components";
import { Avatar, Button, Form, Input, Tooltip } from "antd";
import { UserDeleteOutlined } from "@ant-design/icons";
import Message from "./Message";
export default function ChatWindow() {
  return (
    <WrapperStyled>
      <HeaderStyled>
        <div className="header__info">
          <p className="header__title">Room 1</p>
          <span className="header__description">Day la room 1</span>
        </div>
        <ButtonGroupStyled>
          <Button icon={<UserDeleteOutlined></UserDeleteOutlined>} type="text">
            Mời
          </Button>
          <Avatar.Group size="small" maxCount={2}>
            <Tooltip title="A">
              <Avatar>A</Avatar>
            </Tooltip>
            <Tooltip title="A">
              <Avatar>B</Avatar>
            </Tooltip>
            <Tooltip title="A">
              <Avatar>C</Avatar>
            </Tooltip>
            <Tooltip title="A">
              <Avatar>D</Avatar>
            </Tooltip>
            <Tooltip title="A">
              <Avatar>E</Avatar>
            </Tooltip>
          </Avatar.Group>
        </ButtonGroupStyled>
      </HeaderStyled>
      <ContentStyled>
        <MessageListStyled>
          <Message
            text="TEST"
            photoURL={null}
            displayName="HIEU"
            createAt={123456789}
          />{" "}
          <Message
            text="TEST"
            photoURL={null}
            displayName="HIEU"
            createAt={123456789}
          />{" "}
          <Message
            text="TEST"
            photoURL={null}
            displayName="HIEU"
            createAt={123456789}
          />{" "}
          <Message
            text="TEST"
            photoURL={null}
            displayName="HIEU"
            createAt={123456789}
          />
        </MessageListStyled>
        <FromStyled>
          <Form.Item>
            <Input
              bordered={false}
              autoComplete="off"
              placeholder="Nhập tin nhắn..."
            />
          </Form.Item>
          <Button>Gửi</Button>
        </FromStyled>
      </ContentStyled>
    </WrapperStyled>
  );
}

const HeaderStyled = styled.div`
  display: flex;
  justify-content: space-between;
  height: 56px;
  padding: 0 16px;
  align-items: center;
  border-bottom: 1 px solid rgb(230, 230, 230);

  .header {
    &__info {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    &__title {
      margin: 0;
      font-weight: bold;
    }
    &__description {
      font-size: 12px;
    }
  }
`;
const WrapperStyled = styled.div`
  height: 100vh;
`;

const ButtonGroupStyled = styled.div`
  display: flex;
  align-items: center;
`;
const MessageListStyled = styled.div`
  max-height: 100%;

  overflow-y: auto;
`;
const ContentStyled = styled.div`
  height: calc(100% - 56px);
  display: flex;
  flex-direction: column;
  padding: 1px;
  justify-content: flex-end;
`;

const FromStyled = styled(Form)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2px 2px 2px 0;
  border: 1px solid rgb(230, 230, 230);
  border-radius: 2px;

  .ant-form-item {
    flex: 1;
    margin-bottom: 0;
  }
`;
