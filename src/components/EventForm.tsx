import React, { FC, useState } from "react";
import { DatePicker, Form, Input, Button, Row, Select } from "antd";
import { Moment } from "moment";
import { rules } from "../utils/rules";
import { formatDate } from "../utils/date";
import { IUser } from "../models/IUser";
import { IEvent } from "../models/IEvent";
import { useTypedSelector } from "../hooks/useTypedSelector";

const { Option } = Select;

interface EventFormProps {
  guests: IUser[];
  submit: (event: IEvent) => void;
}

export const EventForm: FC<EventFormProps> = ({ guests, submit }) => {
  const { user } = useTypedSelector((state) => state.auth);

  const [event, setEvent] = useState<IEvent>({
    author: "",
    date: "",
    description: "",
    guest: "",
  } as IEvent);

  const selectDate = (date: Moment | null) => {
    if (date) {
      setEvent({ ...event, date: formatDate(date.toDate()) });
    }
  };

  const submitForm = () => {
    submit({ ...event, author: user.username });
    console.log({ ...event, author: user.username });
  };

  return (
    <Form onFinish={submitForm}>
      <Form.Item label="Описание события" name="description" rules={[rules.required()]}>
        <Input
          value={event.description}
          onChange={(e) => setEvent({ ...event, description: e.target.value })}
        />
      </Form.Item>
      <Form.Item
        label="Дата события"
        name="date"
        rules={[rules.required(), rules.isDateAfter("Нельзя создать событие в прошлом")]}
      >
        <DatePicker onChange={(date) => selectDate(date)} />
      </Form.Item>
      <Form.Item label="Выберите гостя" name="guest" rules={[rules.required()]}>
        <Select onChange={(guest: string) => setEvent({ ...event, guest })}>
          {guests.map((guest) => (
            <Option key={guest.username} value={guest.username}>
              {guest.username}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <Row justify="end">
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Создать
          </Button>
        </Form.Item>
      </Row>
    </Form>
  );
};
