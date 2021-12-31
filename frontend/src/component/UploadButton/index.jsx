import React from 'react';
import { upload } from '@api';

class GlobalUpload extends React.Component {
  state = {};

  handleSelect = (e) => {
    upload(e.target.files);
  }

  render() {
    return <div>
      <input type="file" multiple="multiple" onChange={this.handleSelect} />
    </div>;
  }
}

export default GlobalUpload;