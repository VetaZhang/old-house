import React from 'react';

import { uploadMulti } from '@api';
import styles from './style.less';

class DragUpload extends React.Component {
  state = {};

  handleDragEnter = (e) => {
    e.preventDefault();
  }

  handleDragOver = (e) => {
    e.preventDefault();
  }

  handleDrop = (e) => {
    e.preventDefault();
    const { onChange } = this.props;
    const fileList = e.dataTransfer.files;
    if (fileList.length == 0) {
      return;
    }
    // fileList = Array.prototype.slice.call(fileList);
    // fileList.forEach(file => {})
    // onChange && onChange(fileList);
    uploadMulti({ fileList, onProgress(fileList) { onChange(fileList) } });
  }

  render() {
    return <div>
      <div
        className={styles.container}
        onDragEnter={this.handleDragEnter}
        onDragOver={this.handleDragOver}
        onDrop={this.handleDrop}
      >
        拖拽文件上传
      </div>
    </div>;
  }
}

export default DragUpload;