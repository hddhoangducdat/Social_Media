import React, { Component } from "react";
import { DropzoneDialog } from "material-ui-dropzone";
import Button from "@material-ui/core/Button";

const DropzoneDialogExample = ({ input, setUrl }) => {
  const [open, setOpen] = React.useState(false);
  const [files, setFiles] = React.useState([]);

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = files => {
    //Saving files to state for further use and closing Modal.
    setOpen(false);
    setFiles(files);
    setUrl(
      "https://scontent.fhan5-5.fna.fbcdn.net/v/t1.0-9/54799897_104992787344972_2706694677771321344_n.jpg?_nc_cat=107&_nc_eui2=AeG158rGtwrINiNi0SxOEWmO7Kyu5P5OjRpmjMAC3HijjtS1QUI8oeRxticPC4j59ltTe51KURC3yk9hUGc7Nmon4XAPIdhf-iia_jNNveEVRw&_nc_oc=AQlaDFK7On4NFFdyQMaXzosgcFpjGEU5SZHm0o9zIgzWv-AerA5h0MjQBQ-SxTn6M48&_nc_ht=scontent.fhan5-5.fna&oh=8f188dd84847a7e8767631766bea686e&oe=5E19E9CC"
    );
    // console.log(files);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <div onClick={handleOpen}>{input}</div>
      <DropzoneDialog
        open={open}
        onSave={handleSave}
        acceptedFiles={["image/jpeg", "image/png"]}
        showPreviews={true}
        maxFileSize={5000000}
        onClose={handleClose}
      />
    </div>
  );
};

export default DropzoneDialogExample;
