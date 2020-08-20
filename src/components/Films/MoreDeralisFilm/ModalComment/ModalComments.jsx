import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
  UncontrolledTooltip,
} from 'reactstrap';
import { useInputs } from '../../../Input/Input';
import { useParams } from 'react-router-dom';
import { saveComment, setComments } from '../../../../redux/action';
import actorIcon from '../../../../public/img/actor.png';
import writerIcon from '../../../../public/img/writer.png';
import popcornIcon from '../../../../public/img/popcorn.png';

const ModalComments = (props) => {
  const [dropdownOpen1, setDropdownOpen1] = useState(false);
  const [dropdownOpen2, setDropdownOpen2] = useState(false);
  const [dropdownOpen3, setDropdownOpen3] = useState(false);
  const [modal, setModal] = useState(false);
  const [postvalue, setPostValue] = useInputs({ post: '' });
  const [rating, setRating] = useInputs({
    scenario: '',
    actors: '',
    general: '',
  });

  const dispatch = useDispatch();
  const filmId = useParams().id;

  const toggleDropDown = (e) => setDropdownOpen1((prevState) => !prevState);
  const toggleDropDown2 = (e) => setDropdownOpen2((prevState) => !prevState);
  const toggleDropDown3 = (e) => setDropdownOpen3((prevState) => !prevState);

  const toggle = () => setModal(!modal);
  const user = useSelector((state) => state.user);

  const nameUser = user.displayName;
  return (
    <div>
      <Form inline onSubmit={(e) => e.preventDefault()}>
        <Button onClick={toggle}>Оставить отзыв</Button>
      </Form>
      <Modal
        isOpen={modal}
        toggle={toggle}
        className="modal-lg shadow-lg p-3 mb-5 bg-white rounded"
      >
        <ModalHeader toggle={toggle} style={{ color: 'black' }}>
          {nameUser}
          <div>
            <span>
              <img
                src={actorIcon}
                alt="actor-icon"
                style={{ width: '18%' }}
                id="Actor"
              />
              <UncontrolledTooltip placement="top" target="Actor">
                Актерская игра
              </UncontrolledTooltip>
              {rating.actors}
            </span>

            <span className="icons">
              <img
                src={writerIcon}
                alt="actor-icon"
                style={{ width: '18%' }}
                id="writerIcon"
              />
              <UncontrolledTooltip placement="top" target="writerIcon">
                Сценарий
              </UncontrolledTooltip>
              {rating.scenario}
            </span>
            <span>
              <img
                src={popcornIcon}
                alt="actor-icon"
                style={{ width: '18%' }}
                id="popcornIcon"
              />
              <UncontrolledTooltip placement="top" target="popcornIcon">
                Общее впечатление
              </UncontrolledTooltip>
              {rating.general}
            </span>
          </div>
        </ModalHeader>
        <ModalBody>
          <Row>
            <Dropdown
              isOpen={dropdownOpen1}
              toggle={toggleDropDown}
              name="scenario"
            >
              <Dropdown isOpen={dropdownOpen2} toggle={toggleDropDown2}>
                <DropdownToggle caret>Актерская игра</DropdownToggle>
                <DropdownMenu name="actors" onClick={setRating}>
                  <DropdownItem onClick={setRating} value="5" name="actors">
                    5
                  </DropdownItem>
                  <DropdownItem onClick={setRating} value="4" name="actors">
                    4
                  </DropdownItem>
                  <DropdownItem onClick={setRating} value="3" name="actors">
                    3
                  </DropdownItem>
                  <DropdownItem onClick={setRating} value="2" name="actors">
                    2
                  </DropdownItem>
                  <DropdownItem onClick={setRating} value="1" name="actors">
                    1
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>

              <DropdownToggle caret>Сценарий</DropdownToggle>
              <DropdownMenu name="scenario">
                <DropdownItem onClick={setRating} value="5" name="scenario">
                  5
                </DropdownItem>
                <DropdownItem onClick={setRating} value="4" name="scenario">
                  4
                </DropdownItem>
                <DropdownItem onClick={setRating} value="3" name="scenario">
                  3
                </DropdownItem>
                <DropdownItem onClick={setRating} value="2" name="scenario">
                  2
                </DropdownItem>
                <DropdownItem onClick={setRating} value="1" name="scenario">
                  1
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>

            <Dropdown isOpen={dropdownOpen3} toggle={toggleDropDown3}>
              <DropdownToggle caret>Общее Впечатление</DropdownToggle>
              <DropdownMenu name="general" onClick={setRating}>
                <DropdownItem onClick={setRating} value="5" name="general">
                  5
                </DropdownItem>
                <DropdownItem onClick={setRating} value="4" name="general">
                  4
                </DropdownItem>
                <DropdownItem onClick={setRating} value="3" name="general">
                  3
                </DropdownItem>
                <DropdownItem onClick={setRating} value="2" name="general">
                  2
                </DropdownItem>
                <DropdownItem onClick={setRating} value="1" name="general">
                  1
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </Row>
          <Input
            type="textarea"
            name="post"
            placeholder="Оставьте свой отзыв"
            rows={5}
            onChange={setPostValue}
            style={{ padding: '10px' }}
          />
        </ModalBody>
        <ModalFooter>
          <Button
            color="primary"
            onClick={() => {
              toggle();
              dispatch(saveComment({ rating, ...postvalue, filmId, nameUser }));
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
