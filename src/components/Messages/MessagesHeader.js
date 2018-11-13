import React from "react";
import { Header, Segment } from "semantic-ui-react";

class MessagesHeader extends React.Component {
  render() {
    const {
      channelName,
      numUniqueUsers,
      isPrivateChannel
    } = this.props;

    return (
      <Segment clearing>
        {/* Channel Title */}
        <Header fluid="true" as="h2" floated="left" style={{ marginBottom: 0 }}>
          <span>
            {channelName}
            {!isPrivateChannel}
          </span>
          <Header.Subheader>{numUniqueUsers}</Header.Subheader>
        </Header>
      </Segment>
    );
  }
}

export default MessagesHeader;
