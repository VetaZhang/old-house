import React from 'react';
import styles from './style.less';

class FileList extends React.Component {
  state = {};

  render() {
    const { fileList } = this.props;

    return <div>
      {
        fileList.map(file => {
          return <div
            key={file.name}
            className={styles.fileItem}
          >
            <div className={styles.name}>{file.name}:</div>
            <div className={styles.name}>{file.progress}</div>
          </div>;
        })
      }
    </div>;
  }
}

export default FileList;