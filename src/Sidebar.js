import React from "react";
import "./Sidebar.css";
import { Button } from "@material-ui/core";
import SidebarOption from "./SidebarOption";
// icon imports
import AddIcon from "@material-ui/icons/Add";
import InboxIcon from "@material-ui/icons/Inbox";
import StarIcon from "@material-ui/icons/Star";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import LabelImportantIcon from "@material-ui/icons/LabelImportant";
import NearMeIcon from "@material-ui/icons/NearMe";
import NoteIcon from "@material-ui/icons/Note";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Button
        className="sidebar__compose"
        startIcon={<AddIcon fontSize="large" />}
      >
        Compose
      </Button>

      <SidebarOption
        Icon={InboxIcon}
        title="Inbox"
        number={69}
        selected={true}
      />
      <SidebarOption Icon={StarIcon} title="Starred" number={69} />
      <SidebarOption Icon={AccessTimeIcon} title="Snoozed" number={69} />
      <SidebarOption Icon={LabelImportantIcon} title="Important" number={69} />
      <SidebarOption Icon={NearMeIcon} title="Sent" number={69} />
      <SidebarOption Icon={NoteIcon} title="Drafts" number={69} />
      <SidebarOption Icon={ExpandMoreIcon} title="More" number={69} />
    </div>
  );
};

export default Sidebar;
