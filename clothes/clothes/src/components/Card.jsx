import React from 'react';
import { Card, CardHeader, CardBody, CardFooter, Typography, Button } from "@material-tailwind/react";
import { useNavigate } from 'react-router-dom';

function CardDefault(props) {
 const Navigate = useNavigate();

 const handleNavigate = () => {
  Navigate("/themeHome")
 }

  return (
    <div>
      <Card className="mt-6 w-96 hover:scale-105 transition-all">
        <CardHeader color="blue-gray" className="relative h-56">
          <img src={props.imgUrl} alt="card-image" />
        </CardHeader>
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            {props.title}
          </Typography>
          <Typography className="text-xs">
            {props.des}
          </Typography>
          <div className="flex justify-start gap-12 pt-4">
            <Typography className="text-xs font-bold tracking-wider text-gray-600">
              {`Start Date: ${props.startD}`}
            </Typography>
            <Typography className="text-xs font-bold tracking-wider text-gray-600">
              {`End Date: ${props.endD}`}
            </Typography>
          </div>
        </CardBody>
        <CardFooter className="pt-0">
          {props.UpcomingEvents && <Button
          onClick={handleNavigate}
          >Participate Now</Button>}
        </CardFooter>
      </Card>
    </div>
  );
}

export default CardDefault;
