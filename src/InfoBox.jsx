import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import SunnyIcon from "@mui/icons-material/Sunny";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";

export default function InfoBox({ info }) {
  let HOT_URL =
    "https://scopeblog.stanford.edu/wp-content/uploads/2022/07/AdobeStock_268489083-scaled.jpeg";
  let COLD_URL =
    "https://th.bing.com/th/id/OIP.PpwB3CxHCqvhWWivgFSMbwHaEK?w=322&h=181&c=7&r=0&o=5&dpr=1.3&pid=1.7";
  let CLEAR_URL =
    "https://th.bing.com/th/id/OIP.BkCkbet2P_4lqs0Z2KvblQHaEV?w=316&h=185&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3";
  let RAIN_URL =
    "https://th.bing.com/th/id/OIP.NEMfMNpQX-5QaCKWN-RpkwHaE8?w=247&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3";
  return (
    <Card sx={{ maxWidth: 345, textAlign: "left" }}>
      <CardMedia
        sx={{ height: 140 }}
        image={
          info.humidity > 80
            ? RAIN_URL
            : info.temp < 18
            ? COLD_URL
            : info.temp > 25
            ? HOT_URL
            : CLEAR_URL
        }
        title="Weather"
      />
      <CardContent style={{ backgroundColor: "rgb(215, 226, 248)" }}>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ textTransform: "uppercase" }}
        >
          {info.city} &nbsp;
          {info.humidity > 80 ? (
            <AcUnitIcon />
          ) : info.temp < 18 ? (
            <ThunderstormIcon />
          ) : (
            <SunnyIcon />
          )}
        </Typography>
        <Typography variant="body2" sx={{ color: "black" }}>
          <p>Temperature : {info.temp}&deg;C </p>
          <p>Minimum Temperature : {info.tempMin}&deg;C </p>
          <p>Maximum Temperature : {info.tempMax}&deg;C </p>
          <p>Humidity : {info.humidity}% </p>
          <p>
            The weather can be described as {info.weather} and it feels like{" "}
            {info.feelsLike}&deg;C.
          </p>
        </Typography>
      </CardContent>
    </Card>
  );
}
