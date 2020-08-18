import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

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
} from 'reactstrap';
import { useInputs } from '../../../Input/Input';
import { useParams } from 'react-router-dom';

const ModalComments = (props) => {
  const [postvalue, setPostValue] = useInputs({ post: '' });
  const [modal, setModal] = useState(false);
  const [unmountOnClose, setUnmountOnClose] = useState(true);
  const dispatch = useDispatch();
  const filmId = useParams().id;




  const toggle = () => setModal(!modal);
 

  return (
    <div>
      <Form inline onSubmit={(e) => e.preventDefault()}>
        <Button onClick={toggle}>Оставить отзыв</Button>
      </Form>
      <Modal isOpen={modal} toggle={toggle} unmountOnClose={unmountOnClose}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
          <Input
            type="textarea"
            name="post"
            placeholder="Оставьте свой отзыв"
            rows={5}
            onChange={setPostValue}
          />
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Do Something
          </Button>{' '}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default ModalComments;
