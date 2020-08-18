import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './style.css';

import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  Label,
  Form,
  FormGroup,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  Row,
} from 'reactstrap';
import { useInputs } from '../../../Input/Input';
import { useParams } from 'react-router-dom';
import { saveComments } from '../../../../redux/action';

const ModalComments = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [modal, setModal] = useState(false);

  const [postvalue, setPostValue] = useInputs({ post: '' });
  const [rating, setRating] = useInputs({ scenario: 0, actors: 0, general: 0 });

  const dispatch = useDispatch();
  const filmId = useParams().id;
  const user = useSelector((state) => state.user);
  console.log(rating);

  const dropDownGetRating = (e) => {
    const value = e.target.value;
    const fieldName = e.target.name;
    console.log(value, fieldName);
  };

  const toggleDropDown = (e) => setDropdownOpen((prevState) => !prevState);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Form inline onSubmit={(e) => e.preventDefault()}>
        <Button onClick={toggle}>Оставить отзыв</Button>
      </Form>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle} style={{ color: 'black' }}>
          Modal title
        </ModalHeader>
        <ModalBody>
          <Row onClick={(e) => e.target}>
            <Dropdown
              multiple="multiple"
              isOpen={dropdownOpen}
              toggle={toggleDropDown}
            >
              <DropdownToggle caret>Сценарий</DropdownToggle>
              <DropdownMenu
                name="scenario"
                onClick={(e) => console.log(e.target)}
              >
                <DropdownItem onClick={(e) => console.log(e.target)}>
                  5
                </DropdownItem>
                <DropdownItem onClick={(e) => dropDownGetRating(e)}>
                  4
                </DropdownItem>
                <DropdownItem>3</DropdownItem>
                <DropdownItem>2</DropdownItem>
                <DropdownItem>1</DropdownItem>
              </DropdownMenu>
            </Dropdown>
            <Dropdown isOpen={dropdownOpen} toggle={toggleDropDown}>
              <DropdownToggle caret>Актерская игра</DropdownToggle>
              <DropdownMenu name="actors" onClick={setRating}>
                <DropdownItem>5</DropdownItem>
                <DropdownItem>4</DropdownItem>
                <DropdownItem>3</DropdownItem>
                <DropdownItem>2</DropdownItem>
                <DropdownItem>1</DropdownItem>
              </DropdownMenu>
            </Dropdown>
            <Dropdown isOpen={dropdownOpen} toggle={toggleDropDown}>
              <DropdownToggle caret>Впечатление</DropdownToggle>
              <DropdownMenu name="general" onClick={setRating}>
                <DropdownItem>5</DropdownItem>
                <DropdownItem>4</DropdownItem>
                <DropdownItem>3</DropdownItem>
                <DropdownItem>2</DropdownItem>
                <DropdownItem>1</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </Row>
          <Input
            type="textarea"
            name="post"
            placeholder="Оставьте свой отзыв"
            rows={5}
            onChange={setPostValue}
          />
        </ModalBody>
        <ModalFooter>
          <Button
            color="primary"
            onClick={() => {
              toggle();
              dispatch(saveComments({ postvalue, filmId }));
            }}
          >
            Сохранить
          </Button>{' '}
          <Button color="secondary" onClick={toggle}>
            Отмена
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default ModalComments;
