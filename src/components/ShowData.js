import React from 'react';

class ShowData extends React.Component {
  render() {
    const temp = this.props.para;
    return (
      <div>
        <div
          className="p-2 mb-2"
          style={{ backgroundColor: '#ecf3f4' }}
        >
          <p>
            <b>Title:</b> {temp.title}
          </p>
          <p>
            <b>Body:</b> {temp.body}
          </p>
        </div>
      </div>
    );
  }
}
/*
// FOR Function Component
function ShowData({ para }) {
  //console.log(para);
  return (
    <div>
      <div
        className="p-2 mb-2"
        style={{ backgroundColor: '#ecf3f4' }}
      >
        <p>
          <b>Title:</b> {para.title}
        </p>
        <p>
          <b>Body:</b> {para.body}
        </p>
      </div>
    </div>
  );
}
*/
export default ShowData;
