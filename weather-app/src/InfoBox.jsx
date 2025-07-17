import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";

export default function InfoBox({ city, temp, feelsLike, humidity, tempMin, tempMax, weather }) {
  const IMG_URL = "https://images.unsplash.com/photo-1506744038136-46273834b3fb";

  return (
    <div className="InfoBox">
      <div className='cardContainer'>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={IMG_URL}
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
