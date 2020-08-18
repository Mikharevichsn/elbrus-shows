import React, { useState } from 'react';

export default function UserInfo() {
  const [userInfo] = useState(JSON.stringify(document.cookie, null, 2));
  return <pre>{userInfo}</pre>;
}
