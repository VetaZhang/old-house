import React, { useState } from 'react';
import TopBar from '@container/TopBar';

function Home() {
  return <div style={{ paddingTop: 80 }}>
    <TopBar />
    <form action="http://localhost:3333/file/upload" method="POST" encType="multipart/form-data">
        <input type="file" name="file" />
        <button type="submit">上传</button>
    </form>
  </div>;
}

export default Home;