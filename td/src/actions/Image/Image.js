import Apis from "../../apis/apis";

export const uploadAvatar = id => async dispatch => {
  const responseUser = await Apis.patch(`/Users/${id}`, {
    avatar:
      "https://scontent.fhan5-5.fna.fbcdn.net/v/t1.0-9/54799897_104992787344972_2706694677771321344_n.jpg?_nc_cat=107&_nc_eui2=AeG158rGtwrINiNi0SxOEWmO7Kyu5P5OjRpmjMAC3HijjtS1QUI8oeRxticPC4j59ltTe51KURC3yk9hUGc7Nmon4XAPIdhf-iia_jNNveEVRw&_nc_oc=AQlaDFK7On4NFFdyQMaXzosgcFpjGEU5SZHm0o9zIgzWv-AerA5h0MjQBQ-SxTn6M48&_nc_ht=scontent.fhan5-5.fna&oh=8f188dd84847a7e8767631766bea686e&oe=5E19E9CC"
  });
  const responseImage = await Apis.post("/Images", {
    url:
      "https://scontent.fhan5-5.fna.fbcdn.net/v/t1.0-9/54799897_104992787344972_2706694677771321344_n.jpg?_nc_cat=107&_nc_eui2=AeG158rGtwrINiNi0SxOEWmO7Kyu5P5OjRpmjMAC3HijjtS1QUI8oeRxticPC4j59ltTe51KURC3yk9hUGc7Nmon4XAPIdhf-iia_jNNveEVRw&_nc_oc=AQlaDFK7On4NFFdyQMaXzosgcFpjGEU5SZHm0o9zIgzWv-AerA5h0MjQBQ-SxTn6M48&_nc_ht=scontent.fhan5-5.fna&oh=8f188dd84847a7e8767631766bea686e&oe=5E19E9CC",
    userId: id
  });
  dispatch({ type: "UPLOAD_AVATAR_USER", payload: responseUser.data });
  dispatch({ type: "UPLOAD_IMAGE", payload: responseImage.data });
};

export const uploadImage = (url, id) => async dispatch => {
  const response = await Apis.post("/Images", {
    url,
    userId: id
  });
  dispatch({ type: "UPLOAD_IMAGE", payload: response.data });
};

export const getImageByUserId = userId => async dispatch => {
  const response = await Apis.get(`/Images?userId=${userId}`);
  dispatch({ type: "GET_IMAGE_BY_USER_ID", payload: response.data });
};

export const eraseImage = () => {
  return { type: "ERASE_GET_IMAGE" };
};
