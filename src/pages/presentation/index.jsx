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
      path: "https://t.me/atjmmmm/2",
      url: "1",
      themeName:
        "ФИНАНСОВЫЕ АСПЕКТЫ ОБОРАЧИВАЕМОСТИ ОСНОВНОГО И ОБОРОТНОГО КАПИТАЛА",
    },
    {
      id: 2,
      path: "https://t.me/atjmmmm/4",
      url: "2",
      themeName: "ФИНАНСОВЫЕ РЕСУРСЫ ХОЗЯЙСТВУЮЩИХ СУБЪЕКТОВ",
    },
    {
      id: 3,
      path: "https://t.me/atjmmmm/5",
      url: "3",
      themeName:
        "ФИНАНСОВЫЕ АСПЕКТЫ ОБОРАЧИВАЕМОСТИ ОСНОВНОГО И ОБОРОТНОГО КАПИТАЛА",
    },
    {
      id: 4,
      path: "https://t.me/atjmmmm/6",
      url: "4",
      themeName: "Производственные затраты и прибыль хозяйствующих субъектов",
    },
    {
      id: 5,
      path: "https://t.me/atjmmmm/7",
      url: "5",
      themeName:
        "Ценовая политика хозяйствующих субъектов и основы её формирования, финансовые аспекты маркетинговой стратегии",
    },
    {
      id: 6,
      path: "https://t.me/atjmmmm/8",
      url: "6",
      themeName: "ФИНАНСЫ МАЛОГО БИЗНЕСА",
    },
    {
      id: 7,
      path: "https://t.me/atjmmmm/9",
      url: "7",
      themeName: "Финансирование стартапов",
    },
    {
      id: 8,
      path: "https://t.me/atjmmmm/10",
      url: "8",
      themeName: "Финансовая отчётность: сущность, функции и виды",
    },
    {
      id: 9,
      path: "https://t.me/atjmmmm/11",
      url: "9",
      themeName: "Различия в финансовой отчётности",
    },
    {
      id: 10,
      path: "https://t.me/atjmmmm/12",
      url: "10",
      themeName:
        "Использование финансовых коэффициентов в финансовой отчётности",
    },
    {
      id: 11,
      path: "https://t.me/atjmmmm/12",
      url: "11",
      themeName:
        "ФИНАНСИРОВАНИЕ ИНВЕСТИЦИОННЫХ ПРОГРАММ ПО ДИВЕРСИФИКАЦИИ И МОДЕРНИЗАЦИИ ПРОИЗВОДСТВА",
    },
    {
      id: 12,
      path: "https://t.me/atjmmmm/12",
      url: "12",
      themeName:
        "ФИНАНСОВАЯ УСТОЙЧИВОСТЬ ХОЗЯЙСТВУЮЩИХ СУБЪЕКТОВ: ОЦЕНКА, ПОКАЗАТЕЛИ, ПУТИ ПОВЫШЕНИЯ",
    },
    {
      id: 13,
      path: "https://t.me/atjmmmm/12",
      url: "13",
      themeName: "Финансовая отчётность и финансовое планирование",
    },
    {
      id: 14,
      path: "https://t.me/atjmmmm/12",
      url: "14",
      themeName:
        "«СОЦИАЛЬНОЕ СТРАХОВАНИЕ И СОЦИАЛЬНОЕ ОБЕСПЕЧЕНИЕ В СИСТЕМЕ ГОСУДАРСТВЕННЫХ ФИНАНСОВ»",
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
          className="my-4 rounded-md shadow-inner"
        >
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              {item.id}-ma'ruza
            </Typography>
            <Typography variant="h5" component="div">
              {item.themeName}
            </Typography>
          </CardContent>
          <CardActions>
            <Button variant="outlined" size="small">
              <NavLink to={item.url} key={items.id}>
                ochish
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
