"use client";

import React from "react";
import { ResponsiveTimeRange } from '@nivo/calendar'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const MyResponsiveTimeRange = ({data}: {data: any}) => (
  <ResponsiveTimeRange
      data={data}
      from="2024-01-01"
      to="2024-06-31"
      emptyColor="#eeeeee"
      colors={[ '#61cdbb', '#97e3d5', '#e8c1a0', '#f47560' ]}
      margin={{ top: 5, right: 5, bottom: 5, left: 5 }}
      dayBorderWidth={2}
      dayBorderColor="#ffffff"
      legends={[
          {
              anchor: 'bottom-right',
              direction: 'row',
              justify: false,
              itemCount: 4,
              itemWidth: 32,
              itemHeight: 26,
              itemsSpacing: 14,
              itemDirection: 'right-to-left',
              translateX: -20,
              translateY: 0,
              symbolSize: 10
          }
      ]}
  />
)

const Calendar = () => {
  function generateRandomData(
    maxItems: number = 20
  ): { value: number; day: string }[] {
    // Ensure maxItems does not exceed 20
    const numItems = Math.min(maxItems, 20);

    // Define start and end dates for 2024
    const startDate = new Date("2024-01-01").getTime();
    const endDate = new Date("2024-06-31").getTime();

    const data = [];

    for (let i = 0; i < numItems; i++) {
      // Generate a random date in 2024
      const randomDate = new Date(
        startDate + Math.random() * (endDate - startDate)
      );
      const formattedDate = randomDate.toISOString().split("T")[0];

      // Generate a random value (between 1 and 500 for example)
      const randomValue = Math.floor(Math.random() * 500) + 1;

      // Create the record
      data.push({
        value: randomValue,
        day: formattedDate,
      });
    }

    return data;
  }

  const data = generateRandomData(10);
  return (
    <Card>
       <CardHeader>
        <CardTitle>Your Peformance</CardTitle>
        <CardDescription>A detailed day record</CardDescription>
      </CardHeader>
      <CardContent className="h-[160px] flex items-center justify-center w-full">
        <MyResponsiveTimeRange data={data} />
      </CardContent>
    </Card>
  );
};

export default Calendar;
