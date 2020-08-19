import { useState } from 'react';

export const useInputs = (values) => {
  const [state, setState] = useState(values);
  const setInput = (e) => {
    const fieldName = e.target.name;
    const value = e.target.value;
    setState((state) => ({
      ...state,
      [fieldName]: value,
    }));
  };
  return [state, setInput];
};

export const submit = async (obj, method) => {
  const _API_KEY = 'AIzaSyATSj6YwarLnzR7NFPKLyRV_WfE_kkGDWM';
  const responce = await fetch(
    `https://identitytoolkit.googleapis.com/v1/accounts:${method}?key=${_API_KEY}`,
    {
      method: 'POST',
      body: JSON.stringify({ ...obj, returnSecureToken: true }),
      header: {
        'Content-Type': 'application/json',
      },
    }
  );
  const result = await responce.json();


  document.cookie = `user_idToken=${result.idToken}; max-age=${result.expiresIn}`;
  return result;
};
