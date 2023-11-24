import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { TelegramIcon, TelegramShareButton } from "react-share";
import { Box } from "@mui/system";
import { NavLink } from "react-router-dom";

export default function BasicCard() {
  const items = [
    {
      id: 1,
      path: "https://t.me/tashkentInstituteOfFinance/16",
      url: "1",
      themeName: "Задание №1",
    },
    {
      id: 2,
      path: "https://t.me/tashkentInstituteOfFinance/17",
      url: "2",
      themeName: "Задание №2",
    },
    {
      id: 3,
      path: "https://t.me/tashkentInstituteOfFinance/18",
      url: "3",
      themeName: "Задание №3",
    },
    {
      id: 4,
      path: "https://t.me/tashkentInstituteOfFinance/19",
      url: "4",
      themeName: "Задание №4",
    },
    {
      id: 5,
      path: "https://t.me/tashkentInstituteOfFinance/20",
      url: "5",
      themeName: "Задание №5",
    },
    {
      id: 6,
      path: "https://t.me/tashkentInstituteOfFinance/21",
      url: "6",
      themeName: "Задание №6",
    },
    {
      id: 7,
      path: "https://t.me/tashkentInstituteOfFinance/22",
      url: "7",
      themeName: "Задание №7",
    },
    {
      id: 8,
      path: "https://t.me/tashkentInstituteOfFinance/23",
      url: "8",
      themeName: "Задание №8",
    },
    {
      id: 9,
      path: "https://t.me/tashkentInstituteOfFinance/24",
      url: "9",
      themeName: "Задание №9",
    },
    {
      id: 10,
      path: "https://t.me/tashkentInstituteOfFinance/25",
      url: "10",
      themeName: "Задание №10",
    },
    {
      id: 11,
      path: "https://t.me/tashkentInstituteOfFinance/26",
      url: "11",
      themeName: "Задание №11",
    },
    {
      id: 12,
      path: "https://t.me/tashkentInstituteOfFinance/26",
      url: "12",
      themeName: "Задание №12",
    },
    {
      id: 13,
      path: "https://t.me/tashkentInstituteOfFinance/28",
      url: "13",
      themeName: "Задание №13",
    },
    {
      id: 14,
      path: "https://t.me/tashkentInstituteOfFinance/28",
      url: "14",
      themeName: "Задание №14",
    },
  ];
  return (
    <Box sx={{ minWidth: 275 }}>
      {items.map((item) => (
        <Card
          sx={{
            margin: "10px 0px",
            background: "",
          }}
          key={item.id}
          className="my-4 rounded-md shadow-inner"
        >
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              {/* {item.id}- */}
              практические занятие
            </Typography>
            <Typography variant="h5" component="div">
              {item.themeName}
            </Typography>
          </CardContent>
          <CardActions>
            <Button variant="outlined" size="small">
              <NavLink to={item.url} key={items.id}>
                открыть
              </NavLink>
            </Button>

            <TelegramShareButton url={item.path}>
              <TelegramIcon className="rounded w-8"></TelegramIcon>
            </TelegramShareButton>
          </CardActions>
        </Card>
      ))}
    </Box>
  );
}
