import React from // , { useState }
"react";
import { uploadAvatar } from "../../actions";
import { connect } from "react-redux";

const ImageUpload = ({ id, uploadAvatar }) => {
  // const [image, setImage] = useState(null);

  const handleChange = e => {
    // if (e.target.files[0]) {
    //   setImage(e.target.files[0]);
    // }
  };

  const handleUpload = () => {
    uploadAvatar(
      "https://scontent.fsgn2-2.fna.fbcdn.net/v/t1.0-9/54799897_104992787344972_2706694677771321344_n.jpg?_nc_cat=107&_nc_eui2=AeG158rGtwrINiNi0SxOEWmO7Kyu5P5OjRpmjMAC3HijjtS1QUI8oeRxticPC4j59ltTe51KURC3yk9hUGc7Nmon4XAPIdhf-iia_jNNveEVRw&_nc_oc=AQn0UVSXkxxAXlruNjxgLAtiMpYTjd-Cx_WB308CXnC6wp6n3gJUwDRflA_h5R0Xr8c&_nc_ht=scontent.fsgn2-2.fna&oh=4dc058ae0cf40ba36028eb08147701b2&oe=5E19E9CC",
      id
    );
  };

  return (
    <div>
      <input type="file" onChange={handleChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default connect(
  null,
  { uploadAvatar }
)(ImageUpload);
