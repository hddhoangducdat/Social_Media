import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
// import tileData from "./tileData";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper
  },
  gridList: {
    width: 500,
    height: 450
  }
}));

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *     cols: 2,
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */
export default function ImageGridList({ imageList }) {
  const classes = useStyles();
  // console.log(imageList);

  // const [random, setRandom] = React.useState(1);

  // const Random = () => {
  //   const min = 1;
  //   const max = 3;
  //   const rand = min + Math.random() * (max - min);
  //   return rand;
  // };

  return (
    <div className={classes.root}>
      <GridList cellHeight={160} className={classes.gridList} cols={3}>
        {imageList.map(tile => (
          <GridListTile key={tile.id} cols={1}>
            <img src={tile.url} alt="" />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}
