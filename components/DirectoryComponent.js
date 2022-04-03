import React from "react";
import { ListItem } from "react-native-elements";
import { FlatList } from "react-native";

function Directory(props) {
  const renderDirectoryItem = ({ item }) => {
    return (
      <ListItem
        title={item.name}
        subtitle={item.description}
        leftAvatar={{ source: require("./images/react-lake.jpg") }}
      />
    );
  };

  return (
    <FlatList
      data={props.campsites}
      renderItem={renderDirectoryItem}
      keyExtractor={(item) => item.id.toString()}
    />
  );
}

export default Directory;
