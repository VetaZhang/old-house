import React, { useState } from 'react';
import DragUpload from '@container/DragUpload';
import FileList from '@component/FileList';
import styles from './style.less';

class Home extends React.Component {
  state = {
    fileList: []
  };

  handleUploadChange = (uploadingFileList) => {
    let { fileList } = this.state;

    uploadingFileList.forEach(file => {
      let hasFound = false;

      fileList = fileList.map(item => {
        if (item.name === file.name) {
          hasFound = true;
          return file;
        }
        return item;
      });

      if (!hasFound) {
        fileList.unshift(file);
      }
    });

    this.setState({ fileList });
  }

  render() {
    const { fileList } = this.state;

    return <div className={styles.container}>
      
      <DragUpload
        onChange={this.handleUploadChange}
      />
      <FileList fileList={fileList} />
    </div>;
  }
}

export default Home;