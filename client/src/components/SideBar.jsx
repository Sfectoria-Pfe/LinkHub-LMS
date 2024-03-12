import React from "react";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { Avatar, styled, useTheme, Typography, Tooltip } from "@mui/material";
import MuiDrawer from "@mui/material/Drawer";
import { HomeOutlined } from "@mui/icons-material";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import { useLocation, useNavigate } from "react-router-dom";
import { grey } from "@mui/material/colors";

const drawerWidth = 240;
const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
  // @ts-ignore
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Array1 = [
  { text: "Dashboard", icon: <HomeOutlinedIcon />, path: "/" },

 

];

const Array2 = [
  { text: "Profile Form", icon: <PersonOutlinedIcon />, path: "/form" },
  {
    text: "FAQ Page",
    icon: <HelpOutlineOutlinedIcon />,
    path: "/faq",
  },
];



const SideBar = ({ open, handleDrawerClose }) => {
  let location = useLocation();
  const navigate = useNavigate();
  const theme = useTheme();
  return (
    <Drawer variant="permanent" open={open}>
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === "rtl" ? (
            <ChevronRightIcon />
          ) : (
            <ChevronLeftIcon />
          )}
        </IconButton>
      </DrawerHeader>
      <Divider />
      <Avatar
        sx={{
          mx: "auto",
          width: open ? 88 : 44,
          height: open ? 88 : 44,
          my: 1,
          border: "2px solid grey",
          transition: "0.25s",
        }}
        alt="Remy Sharp"
        src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAQEBAQEBAVEBAVDRINEBUWDRsQEA4SIB0iIiAdHx8kKDQgJCYxIBkfITMtMSsuMC8wIyszOD8uNzQuOiwBCgoKDQ0NFQ0NFS0ZFRkrKy0rKzcvLS03NzM3NzcrLS0tKys3Ky0rLSstLSsrKysrKystKysrKystKysrLSsrK//AABEIAMgAyAMBIgACEQEDEQH/xAAcAAABBAMBAAAAAAAAAAAAAAAABAUGBwIDCAH/xABDEAABAwIDBAUHCQcEAwAAAAABAAIDBBEFITEGEkFRBxNhcYEUIjJCkbHBCCVSYnKhoqPRIyRkZXTh8HOCsrMWQ5L/xAAYAQEBAQEBAAAAAAAAAAAAAAAAAQIDBP/EACMRAQEAAgICAQQDAAAAAAAAAAABAhESIQMxIhNBUWEjMnH/2gAMAwEAAhEDEQA/ALd2XN6GiPOipz+AJzTRse6+HUB54fTH8tqd1FCEIQCEIQCELRW1LIY3yyHdYxhe48gEGyaVrGlznBrQLkk2AUKx7pJpYLthvO/n6MY8dSoHttt5JVF0cR3IdB9IqCOqyTdF0mePbYV1WSDKY2EWLWEsb3dvimOjs0B2rmv3sxdvZ35+5M5rnZm/b4rOkxGz23zaC1oHYL3QK5y7eJJJuczzzKkOzmOupAS15FrPABsbcUwGtaY3E6h7bfZP+FN1TUne7Qd09qiugtm9uqWp3WPkayQ5C53Lnkb6H7vcpaxwIuDdclsqSDqpFgW1tVSEOglLRe7mE70bv9uiJp0ohRLYbbaLEWlhAjqWi7mXuHj6Tf04KWqoEIQgEIQgEIQgEIQgZNhzfDMOP8upf+tqe0wbAG+FYaf5dTf8An9AIQhAIQhAKrumfaEsbHRRusXjrps892/mj2gnwCtFc59JVSZcUrDf0ZBEOwNAHwQRWV5skzn+5K3Mvl2JLJHnkrCsHSLFjlsbCV75OeR9iDwSG1uZusS662x0jjw+5LI8FkIBGY49im5F1TaXLdDJayWS4VINWn2JM+lc3IhNypqw77LYo+mqoJmmxbK0nPUXzHsXUQK5Jg9Id4XTux9eKihppL3PVBjvtNyPuQPKEIQCEIQCEIQCEIQRzo5N8Iw3+ggH4QpGox0ZG+D4d/RxhSdAIQhAIQhALmjaq/ltUXamqlJ/+iugdqMTFNSTSlwaRGdy5td3C3G65xqXOkcXuObnlzu8lCEscbnnIZnJP2F7PB7buBJ48k64Lgzd0Ofqc7KQMYGiwyC8/k8v2j04eL70y0+AQt1YD4LecEhPq5e5OoYsgFw55fl244w1Q4TGwEBt763CUMpmjINA8EsIWtxUtq6hPLEDwHsTfVYTG/1bG1rhO91rcxXHKxMsZUIxLC9x5DR9a9lMOj3bTyUNppReIyXv6zL8uCwqYd4EW4KF1UDmPPevX489vJ5MNOnWuuLjMahZKIdGGJunoWte4ufG8xknXd1H6eCl66OYQhCAQhCAQhCCKdFZvg2H/wBKB95UrUR6JDfBcP8A9Bw/G5S5AIQhAIQhBWvTJUebSxg8ZJCOB0AVb4fRh72t7blTzphJM9O3h1Jd+L+yjGD05D28tSpl/VrD2kETLAALcAhoWQI5rxWbezfQ3V6GFeNrIgbGRoPLeCXxtac7346qzC05wh6srF8RTmYAvJ9xguSAON0+nU5w19T2LBzUy4ztfGxxZE3fI1PqhMT9q6knNrQPctzwVi+aJi8KO4rTXe7mvcI2mbIdyazCfRdw7inqrpQ4XHL2reGNwvbGeUynSS9Dzh1NS3iJGXHLIqw1W3RZ5k9SznCx/sNvirJXdwCEIQCEIQCEIQQ3odN8EoP9OQfmOUyUJ6FjfAqDunH5z1NkAhCEAhCEFUdKGdfGOApW5f7nJFh1MBY9lk79ItORWskOhgZbwJukdJm24WM/Tp452Q47iQp47gXefRHxKh25WzkuG+SdToPBS40BlqHPfm1vmtFslrrMX3H9VAzfkzFhqLfDtWceupG8pvu1EnYPO0bxieHaX1unzAKepjtdxDfonOy0QbWzvIZui7n7gG8LjwspCPKGXErRccuI5jmrncpPSYY479nqGc2F8034q/fBaTrl4LOjJcDyBSHEt4Ot9XLvXn5V24wyuwCAuLnSBgvc5peMNw6MWJDnDndKXYXG9sjXOLT1Za29xvPtkSeV1E8OwSU1DBMwtjB89xJs8XPH7sl3x3Z3XLKSXqHqswGGSzogAOxOeEhwjDH5lvmX5jgm/D6YxzkNc50Pq34fqpC1uSm+9Fx12cujln71ORoIA09+8FYirnYauigkqzI/d9Cwtm7XQaqe0VayZu9GbgGx5grrLHGy+ylCEKoEIQgEIQggnQgfmKj7HVA/Oep2oB0Fn5kpuyWcfmOU/QCEIQCEIQQ/pHot6GOYaxv3T9l39wFE8Jd5mf0rJyx0O8pmZJn55c039JhzCSU8QbcDnvLlllvp3xw12UOZrbimqDCurkdK0kPdkTqnlq2MYFydIjLMDjY8yiP9rv77TwCXkuzJzccrkk2Tx1QSarA4JcqskaaCOzbLRikXFLKU68ljXNuFlojhaXNAOY0B4hKmUDTYnPlmtGGyZkFO7W8lqXaUi8mDdAsHCyVyApLIUjGRI2zXEgecVN9hod2F51Jkue+yhVNHvSHkBbxVgbJxhtOPtuv3rpjPmxnf49HpCELs4BCEIBCEIK86Bj8yw9k84/EVYarjoCPzMzsqpx94VjoBCEIBCEIIjtlRDfjl5gsKiu8WuAdYXvbwKsLaaIOgJ+i9r/h8VXeI31OW6/LtC45T5O+F3h/hwYUoY1IKeW9ktZIs2abxrc4ZJBUN3jYd5W6WrGgTbiA3mk7+7zzss2y3TpIc6YAWCyrywDI5KI0NaGOIY7vG+Sx3aL6FY4xipNg47reI3s3/ANlvj052w7wzx7w3XAm9iAU+RHJRPDXRX3i9u9qGgboandleG+sPaseq37hylKbZH5lbG1YcDZIKqoABJKs7rGXUKMOlIe4gF15PZYBWHsy68AP13KvcDYXsu25c59rDVWXhFJ1MLGcQLnvK6YT5bcs78ZC1CELq5BCEIBCEIK0+T6fmfurZh9zVZarH5PJ+aH9lfKPwsVnIBCEIBCEIE+IU/WxPZexc0gHkVXGI0rgHtdffGVrZ3VnrWYm33i0X52zWcsdtYZ8VMCr6ogk+bexThJXtEZfcWAvdNe20JhmmaBYiVxGWjTn7io0KxzqaVg1BBHcs5Ybbxz031u1TySIxYc+JSKTFppRZziQe1J8NwjrTnJbzd6wH3KQU1FGzzTAS4c8we5Pjj1IuMzy72jTHvvcG2dr6JVXskduXN7x72Y4gaKUxhoNzTg53zjBbfmt09Q8gBsFh2R/qrz/TX0L+UCYX3FichYLOaulaQS4jhrqpVM6QCwjA5aJHV4SHMLn2Lt0k2yDVOc33EvisnVbNlsYc9zo3G43d7uXmIVxfI5oyAKQYEBE2WQGzgyzb8klZUXkJ5uutTGcrXPLK8ZF79HLR5DG62e+/O2ZzUpTHsTB1eH0rSLHqt8+Jv8U+LTmEIQihCEIBCEIKt+TqfmqbsxGX/hGrSVU/JxPzZUDliL/+uNWsgEIQgEIQgEIQgqzpdpAySOa3mysMTj9Yf29yq1s+7c2vfJX50k4WKjD5uDox17D2jh7LrniV5sWnI3vpmro2kex1jI4a5WCkVdUsiPn+1QTB64xOBGgOalWNt6+NhYbu48rLlnjvLbv48tTplJtZGz0W371om2xJGTQAow6ieSXHMDkdVtfQndB0IJb9o5/otzCM3zZnqDGHTSBobqeCeKktbGeA3TdMmzTY4yZJD9Vixx3Ew4kMdlo4LHCb6X6l49mEzuBLL3GYThsphT6yrigYL3eC8j1Y+JTI5xvnrdWL0Z1goTJUyRue1zN2TdF3xx6lwHHtXb04e13wxBjWsaLNa0NA5ALNaaOqjmjZLE4Pjc0Oa4G4cFuWVCEIQAQhCAQhCCpfk3u+bqofzAn8titpVD8m537jWD+NB/AFbyIEIQihCEIBa5pWsa5ziGta0ucSbBoHFY1VSyJjpJHhjGjec5xs1oVFdKHSWKxpo6IkU97SyeiZ+wfV96DzbDbWTF62GipiW0flLGC2RqDf0j2cgvNvdnix7nMbm052HpN4FMXRVEDilNfgJHDv3Srr2ow0SR9YBdzRZw5tTLc7jWNm9VzzE/cOntTgcScW7m98FIsb2dD7uYLG17c1D6mjezIghWWZJcbicvLhuAD/AD/M1hNX8WnPfJHMZWTQHO0XhJ0WtM7pymrPNA4gAapHJKTmsGQOPBONBhTnmxy706h3WOF4a6VwPC+ZVt7C4cHukaR5ggcx2XPL9VGcGws3bHG25cbAdqtzBsLbSwiMekRvPP0nLnjblk3lJjj+1O7ObWSYHWzUcxMlGJiCNXRfWb+ivHD66KojZNC8SRvaHNc03BC5z6VWfOdRbmw/hCSbD7cVOFyeaesp3OvLETke1vIreU0xLt1ChNOzu0NNXxNmp5A8EZtv58Z5EcE7LKhCEIBCEIKd+TY790rh/FMP4VcSpn5Nbv3evH8REfwlXMiBCjG0m3uH0NxLOHyj/wBcfnv8eA8VVW0vS/WT3ZSNFLHpvenMfHQK6F2YtjdNSN36idkI+s+xPcNSq22j6a4I7sooTO7g9/mR+zU/cqWrqySZxklkdI85lznFzj4lJBmipHtNtnXYjYVM37O9xGwbkQ8OPio+AvbLJoQSHYWr6mvpZOUzWnuOXxXTELQdcxoVylQSFkjHDVrw4eBXVeFyiSKOQZh8bXjxC0zUQ2kwMxOMkYJiJvkPQPLuURxDD2PzIFx2K6LcDoontFszrLAO1zB7x+i45Ya7jth5N9ZKtkwFjrkNzusf/HI8vNKkTsjpovXSi11nddeMMYwtrdBbwSiCnAIsBdKXklTHZDZgktnmFm+kxp1d2lXus3WPZy2PwEQsE0g/aubkPoN/VSGQLctbl2xmnlyytu65z6U33xKo7Cxv4QoUWqU9IFSJMQq3A5de5o8MlGrLVWemdHXTQPD4ZHRPGjmOLT9ysLZ3pirYLNqmNqo9L+hMPEZHxCrmyxbyU0rpTZ/pMwyss3ruokPqS+Zn2H0T7VMWPBAIIIOYINwVx0QnrAdra6hI8nqHNaDcxuO/E7wKnEdWoVZbJdL1NUbsda3yWU5b97wOPvHihTQrjol25gwqnrRJG6WSSSIxtbkDYOvc8NQsNpukvEa27es8nhOXVxHduO12pUBw71vBLg1XQACeOqyXqxIVRrIvmvWC69kyREorKyyCLL0KozZqui+irFBUYdECbuiJgd3DT7lzmPvVk9DeNiCqMD3WZM3dFzl1g0VSr0QCvViVAyY9s3HUXeyzJefqv7/1UBqcNka8sLHBwNiLKfbV7SxUEYc83kfcRtAuT2nsUUo+kOCx6xkjicyQBr2cli+Pfbpj5ddU/bN7KsjAlnbvP1a31Wd/MqV2VcYX0hRRvLZBKYi7IuaLxjwOisOnqGyNa9jg5jhvNIORCsx0zlltmU17QV4pqaec+pE5477ZJycVWvTXi/V0sdM02dK/ed9gf3W4wpKrmL3Oc70i4uPeVoCzkWsKtPbLWdVsWqTgiNpCxLVkF4VFYFqFkV6hs34Z63h8UvCEKQFl6AhCqNMxWyNCFn7qyKAhCqNjEro53RvZI02c1we09oK9QqOntnMTbVUsM49eMF3Y7il7ihCIoHbvG3VFfKST1bf2UI4bg4+JTfTEIQoWFE7wApx0UbTXkdQvORaZYLnS2rfihC1Ux9rOKoLphxHrcRcwG7Yo2xDv1PvQhRfugblrshCqvStEjrmyEIN7dELxCgChCEH/2Q=="
      />
      <Typography
        align="center"
        sx={{ fontSize: open ? 17 : 0, transition: "0.25s" }}
      >
      
        Yassine Rezgui 

      </Typography>
      <Typography
        align="center"
        sx={{
          fontSize: open ? 15 : 0,
          transition: "0.25s",
          color: theme.palette.info.main,
        }}
      >
Etudiant      </Typography>

      <Divider />

      <List>
        {Array1.map((item) => (
          <ListItem key={item.path} disablePadding sx={{ display: "block" }}>
            <Tooltip title={open ? null : item.text} placement="left">
              <ListItemButton
                onClick={() => {
                  navigate(item.path);
                }}  // hethy style ta3 iconn 
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                  bgcolor:
                    location.pathname === item.path
                      ? theme.palette.mode === "dark"
                        ? grey[800]
                        : grey[300]
                      : null,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </Tooltip>
          </ListItem>
        ))}
      </List>

      <Divider />

      <List>
        {Array2.map((item) => (
          <ListItem key={item.path} disablePadding sx={{ display: "block" }}>
            <Tooltip title={open ? null : item.text} placement="left">
              <ListItemButton
                onClick={() => {
                  navigate(item.path);
                }}
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                  bgcolor:
                    location.pathname === item.path
                      ? theme.palette.mode === "dark"
                        ? grey[800]
                        : grey[300]
                      : null,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </Tooltip>
          </ListItem>
        ))}
      </List>

      <Divider />

     
    </Drawer>
  );
};

export default SideBar;
