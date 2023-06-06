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
      path: "",
      url: "1",
      themeName:
        "ВВЕДЕНИЕ В УЧЕБНУЮ ДИСЦИПЛИНУ “ГОСУДАРСТВЕННЫЕ ФИНАНСЫ”. СУЩНОСТЬ И ЗНАЧЕНИЕ ГОСУДАРСТВЕННЫХ ФИНАНСОВ",
    },
    {
      id: 2,
      path: "",
      url: "2",
      themeName: "ТЕОРИИ ГОСУДАРСТВЕННЫХ ФИНАНСОВ",
    },
    {
      id: 3,
      path: "",
      url: "3",
      themeName: "СИСТЕМА ГОСУДАРСТВЕННЫХ ФИНАНСОВ",
    },
    {
      id: 4,
      path: "",
      url: "4",
      themeName: "ПРАВОВЫЕ ОСНОВЫ ФУНКЦИОНИРОВАНИЯ ГОСУДАРСТВЕННЫХ ФИНАНСОВ",
    },
    {
      id: 5,
      path: "",
      url: "5",
      themeName:
        "ФИНАНСОВАЯ ПОЛИТИКА ГОСУДАРСТВА И УПРАВЛЕНИЕ ГОСУДАРСТВЕННЫМИ ФИНАНСАМИ",
    },
    {
      id: 6,
      path: "",
      url: "6",
      themeName: "ГОСУДАРСТВЕННЫЙ БЮДЖЕТ",
    },
    {
      id: 7,
      path: "",
      url: "7",
      themeName: "ГОСУДАРСТВЕННЫЕ ЦЕЛЕВЫЕ ВНЕБЮДЖЕТНЫЕ ФОНДЫ",
    },
    {
      id: 8,
      path: "",
      url: "8",
      themeName: "ГОСУДАРСТВЕННЫЙ КРЕДИТ И УПРАВЛЕНИЕ ГОСУДАРСТВЕННЫМ ДОЛГОМ",
    },
    {
      id: 9,
      path: "",
      url: "9",
      themeName: "МЕСТНЫЕ ФИНАНСЫ И МЕСТНЫЕ БЮДЖЕТЫ",
    },
    {
      id: 10,
      path: "",
      url: "10",
      themeName: "ФИНАНСЫ ГОСУДАРСТВЕННЫХ ПРЕДПРИЯТИЙ",
    },
    {
      id: 11,
      path: "",
      url: "11",
      themeName:
        "РОЛЬ И ЗНАЧЕНИЕ ГОСУДАРСТВЕННЫХ ФИНАНСОВ В РАЗВИТИИ ЭКОНОМИКИ",
    },
    {
      id: 12,
      path: "",
      url: "12",
      themeName: "ВЛИЯНИЕ ГОСУДАРСТВЕННЫХ ФИНАНСОВ НА ИНВЕСТИЦИОННЫЙ ПРОЦЕСС",
    },
    {
      id: 13,
      path: "",
      url: "13",
      themeName:
        "РОЛЬ И ЗНАЧЕНИЕ ГОСУДАРСТВЕННЫХ ФИНАНСОВ В СОЦИАЛЬНОМ РАЗВИТИИ ОБЩЕСТВА",
    },
    {
      id: 14,
      path: "",
      url: "14",
      themeName:
        "СОЦИАЛЬНОЕ СТРАХОВАНИЕ И СОЦИАЛЬНОЕ ОБЕСПЕЧЕНИЕ В СИСТЕМЕ ГОСУДАРСТВЕННЫХ ФИНАНСОВ",
    },
    {
      id: 15,
      path: "",
      url: "15",
      themeName:
        "ОСНОВНЫЕ НАПРАВЛЕНИЯ РЕФОРМ СИСТЕМЫ ГОСУДАРСТВЕННЫХ ФИНАНСОВ В РЕСПУБЛИКЕ УЗБЕКИСТАН",
    },
  ];
  return (
    <Box sx={{ minWidth: 275 }}>
      {items.map((item) => (
        <Card
          sx={{
            margin: "10px 0px",
          }}
          key={item.id}
          className="my-4 roundedn-md"
        >
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              ГЛАВА-{item.id}
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
