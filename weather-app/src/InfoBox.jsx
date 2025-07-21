import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";

export default function InfoBox({ city, temp, feelsLike, humidity, tempMin, tempMax, weather }) {
 // const IMG_URL = "https://images.unsplash.com/photo-1506744038136-46273834b3fb";

  const HOT_URL = "https://t4.ftcdn.net/jpg/05/18/43/73/360_F_518437397_j4c3cOSYK54AjCis5muIjPaHw2KBTCeH.jpg"
  const COLD_URL = "https://images.unsplash.com/photo-1514632595-4944383f2737?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D"
  const RAINY_URL = "https://images.unsplash.com/photo-1514632595-4944383f2737?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D"

  return (
    <div className="InfoBox">
      <div className='cardContainer'>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
           image={humidity > 80 ? RAINY_URL : temp > 15 ? HOT_URL : COLD_URL}

            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {city}
            </Typography>

            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Temperature = {temp}°C
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Feels Like = {feelsLike}°C
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Humidity = {humidity}%
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Min Temp = {tempMin}°C
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Max Temp = {tempMax}°C
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              The weather can be described as {weather} and feels like {feelsLike}°C
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
